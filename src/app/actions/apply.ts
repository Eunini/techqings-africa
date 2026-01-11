"use server";

import { z } from 'zod';
import { appendToSheet } from '@/lib/google-sheets';
import { sendConfirmationEmail, sendAdminNotification } from '@/lib/emails';

const applicationSchema = z.object({
    firstName: z.string().min(2, "First name is too short"),
    lastName: z.string().min(2, "Last name is too short"),
    email: z.string().email("Invalid email address"),
    country: z.string().min(1, "Please select a country"),
    phone: z.string().min(5, "Invalid phone number"),
    track: z.string().min(1, "Please select a track"),
    motivation: z.string().optional().nullable(),
    linkedin: z.string().url().optional().nullable(),
    type: z.enum(['learner', 'mentor']),
    sessionPreference: z.enum(['Tuesday & Thursday', 'Weekends (Sat-Sun)', 'Either']).optional().nullable(),
    hasPC: z.enum(['Yes', 'No']).optional().nullable(),
    hasInternet: z.enum(['Yes', 'No']).optional().nullable(),
    occupation: z.enum(['Student', 'Working / Employed', 'Self-employed', 'Other']).optional().nullable(),
    yearsExperience: z.preprocess((val) => {
        if (val === null || val === undefined || val === '') return undefined;
        const n = Number(val);
        return Number.isNaN(n) ? undefined : n;
    }, z.number().nonnegative().optional()),
    preferredTime: z.string().optional().nullable(),
    mentorBio: z.string().optional().nullable(),
    expertise: z.string().optional().nullable(),
    menteeCapacity: z.enum(['1', '2-3', '4-5', '6+']).optional().nullable(),
    yearsInTech: z.preprocess((val) => {
        if (val === null || val === undefined || val === '') return undefined;
        const n = Number(val);
        return Number.isNaN(n) ? undefined : n;
    }, z.number().nonnegative().optional()),
    yearsMentoring: z.preprocess((val) => {
        if (val === null || val === undefined || val === '') return undefined;
        const n = Number(val);
        return Number.isNaN(n) ? undefined : n;
    }, z.number().nonnegative().optional()),
    _honey: z.string().max(1, "Spam detected").optional(), // Honeypot field
});

export async function submitApplication(formData: FormData) {
    const rawData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        country: formData.get('country'),
        phone: formData.get('phone'),
        track: formData.get('track'),
        motivation: formData.get('motivation'),
        linkedin: formData.get('linkedin'),
        sessionPreference: formData.get('sessionPreference'),
        hasPC: formData.get('hasPC'),
        hasInternet: formData.get('hasInternet'),
        occupation: formData.get('occupation'),
        yearsExperience: formData.get('yearsExperience'),
        preferredTime: formData.get('preferredTime'),
        mentorBio: formData.get('mentorBio'),
        expertise: formData.get('expertise'),
        menteeCapacity: formData.get('menteeCapacity'),
        yearsInTech: formData.get('yearsInTech'),
        yearsMentoring: formData.get('yearsMentoring'),
        type: formData.get('type'),
        _honey: formData.get('_honey'),
    };

    try {
        const validatedData = applicationSchema.parse(rawData);

        // Prepare row for Google Sheets
        const row = [
            new Date().toISOString(),
            validatedData.type,
            validatedData.firstName,
            validatedData.lastName,
            validatedData.email,
            validatedData.country,
            validatedData.phone,
            validatedData.track,
            validatedData.sessionPreference || 'N/A',
            validatedData.hasPC || 'N/A',
            validatedData.hasInternet || 'N/A',
            validatedData.occupation || 'N/A',
            validatedData.yearsExperience !== undefined ? String(validatedData.yearsExperience) : 'N/A',
            validatedData.preferredTime || 'N/A',
            validatedData.mentorBio || 'N/A',
            validatedData.expertise || 'N/A',
            validatedData.menteeCapacity || 'N/A',
            validatedData.yearsInTech !== undefined ? String(validatedData.yearsInTech) : 'N/A',
            validatedData.yearsMentoring !== undefined ? String(validatedData.yearsMentoring) : 'N/A',
            validatedData.motivation || validatedData.linkedin || 'N/A'
        ];

        // 1. Save to Google Sheets
        console.log('Attempting to save to Google Sheets...');
        try {
            await appendToSheet([row]);
            console.log('Successfully saved to Google Sheets');
        } catch (sheetError) {
            console.error('Google Sheets error:', sheetError);
            throw new Error(`Google Sheets: ${sheetError instanceof Error ? sheetError.message : 'Unknown error'}`);
        }

        // 2. Send Confirmation Email
        console.log('Attempting to send confirmation email...');
        try {
            await sendConfirmationEmail(validatedData.email, validatedData.firstName, validatedData.type);
            console.log('Successfully sent confirmation email');
        } catch (emailError) {
            console.error('Email error:', emailError);
            throw new Error(`Email: ${emailError instanceof Error ? emailError.message : 'Unknown error'}`);
        }

        // 3. Notify Admin
        console.log('Attempting to send admin notification...');
        try {
            await sendAdminNotification(validatedData);
            console.log('Successfully sent admin notification');
        } catch (adminError) {
            console.error('Admin notification error:', adminError);
            // Don't throw here - admin email is non-critical
        }

        return { success: true };
    } catch (error) {
        if (error instanceof z.ZodError) {
            const firstError = error.issues?.[0];
            const errorMsg = firstError?.message || 'Validation error';
            console.error('Validation error:', errorMsg, firstError);
            return { success: false, error: errorMsg };
        }
        
        console.error('Submission error:', error);
        
        if (error instanceof Error) {
            console.error('Error details:', error.message);
            return { success: false, error: error.message };
        }
        
        return { success: false, error: "Failed to process application. Please try again." };
    }
}
