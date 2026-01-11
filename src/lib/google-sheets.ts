import { google } from 'googleapis';

export async function appendToSheet(data: (string | number)[][]) {
    // Validate environment variables
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
        throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_EMAIL environment variable');
    }
    if (!process.env.GOOGLE_PRIVATE_KEY) {
        throw new Error('Missing GOOGLE_PRIVATE_KEY environment variable');
    }
    if (!process.env.GOOGLE_SHEET_ID) {
        throw new Error('Missing GOOGLE_SHEET_ID environment variable');
    }

    // Handle private key formatting - support both escaped and unescaped newlines
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    // Replace escaped newlines with actual newlines
    privateKey = privateKey.replace(/\\n/g, '\n');
    // Also handle the case where it might already have newlines
    if (!privateKey.includes('\n')) {
        privateKey = privateKey;
    }

    const auth = new google.auth.GoogleAuth({
        credentials: {
            type: 'service_account',
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    try {
        // Check if sheet is empty to add headers
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!A1:1',
        });

        if (!response.data.values || response.data.values.length === 0) {
            const headers = ['Timestamp', 'Type', 'First Name', 'Last Name', 'Email', 'Country', 'Phone', 'Track', 'Session Preference', 'Has PC', 'Has Internet', 'Occupation', 'Years Experience', 'Preferred Time', 'Mentor Bio', 'Expertise', 'Mentee Capacity', 'Years In Tech', 'Years Mentoring', 'Motivation/LinkedIn'];
            await sheets.spreadsheets.values.update({
                spreadsheetId,
                range: 'Sheet1!A1',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [headers],
                },
            });
        }

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: data,
            },
        });
    } catch (error) {
        console.error('Error appending to Google Sheet:', error);
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Failed to save application data: ${errorMsg}`);
    }
}

export async function getAllApplications() {
    // Validate environment variables
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
        throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_EMAIL environment variable');
    }
    if (!process.env.GOOGLE_PRIVATE_KEY) {
        throw new Error('Missing GOOGLE_PRIVATE_KEY environment variable');
    }
    if (!process.env.GOOGLE_SHEET_ID) {
        throw new Error('Missing GOOGLE_SHEET_ID environment variable');
    }

    // Handle private key formatting - support both escaped and unescaped newlines
    let privateKey = process.env.GOOGLE_PRIVATE_KEY;
    // Replace escaped newlines with actual newlines
    privateKey = privateKey.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
        credentials: {
            type: 'service_account',
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!A:Z',
        });

        const rows = response.data.values || [];
        if (rows.length <= 1) {
            return [];
        }

        const headers = rows[0];
        const applications = rows.slice(1).map((row) => {
            const app: Record<string, string> = {};
            headers.forEach((header: string, index: number) => {
                app[header] = row[index] || 'N/A';
            });
            return app;
        });

        return applications;
    } catch (error) {
        console.error('Error reading from Google Sheet:', error);
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        throw new Error(`Failed to fetch applications: ${errorMsg}`);
    }
}

