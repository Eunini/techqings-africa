"use server";

import { z } from 'zod';
import { appendToSheet } from '@/lib/google-sheets';
import { sendConfirmationEmail, sendAdminNotification } from '@/lib/emails';

const applicationSchema = z.object({
    firstName: z.string().min(2, "First name is too short"),
    lastName: z.string().min(2, "Last name is too short"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(5, "Invalid phone number"),
    track: z.string(),
    motivation: z.string().optional(),
    linkedin: z.string().url().optional(),
    type: z.enum(['learner', 'mentor']),
    _honey: z.string().max(0, "Spam detected"), // Honeypot field
});

export async function submitApplication(formData: FormData) {
    const rawData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        track: formData.get('track'),
        motivation: formData.get('motivation'),
        linkedin: formData.get('linkedin'),
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
            validatedData.phone,
            validatedData.track,
            validatedData.motivation || validatedData.linkedin || 'N/A'
        ];

        // 1. Save to Google Sheets
        await appendToSheet(row);

        // 2. Send Confirmation Email
        await sendConfirmationEmail(validatedData.email, validatedData.firstName, validatedData.type);

        // 3. Notify Admin
        await sendAdminNotification(validatedData);

        return { success: true };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { success: false, error: error.errors[0].message };
        }
        console.error('Submission error:', error);
        return { success: false, error: "Failed to process application. Please try again." };
    }
}
