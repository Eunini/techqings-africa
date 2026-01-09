"use server";

import { google } from 'googleapis';

export interface Applicant {
    timestamp: string;
    type: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    track: string;
    sessionPreference: string;
    hasPC: string;
    hasInternet: string;
    occupation: string;
    yearsExperience: string;
    mentorBio: string;
    expertise: string;
    menteeCapacity: string;
    yearsInTech: string;
    yearsMentoring: string;
    motivation: string;
}

export async function getApplicants(): Promise<Applicant[]> {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1',
        });

        const rows = response.data.values || [];
        
        // Skip header row and map data
        const applicants: Applicant[] = rows.slice(1).map((row) => ({
            timestamp: row[0] || '',
            type: row[1] || '',
            firstName: row[2] || '',
            lastName: row[3] || '',
            email: row[4] || '',
            phone: row[5] || '',
            track: row[6] || '',
            sessionPreference: row[7] || '',
            hasPC: row[8] || '',
            hasInternet: row[9] || '',
            occupation: row[10] || '',
            yearsExperience: row[11] || '',
            mentorBio: row[12] || '',
            expertise: row[13] || '',
            menteeCapacity: row[14] || '',
            yearsInTech: row[15] || '',
            yearsMentoring: row[16] || '',
            motivation: row[17] || '',
        }));

        return applicants;
    } catch (error) {
        console.error('Error fetching applicants:', error);
        throw new Error('Failed to fetch applicants');
    }
}
