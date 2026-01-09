import { google } from 'googleapis';

export async function appendToSheet(data: Record<string, unknown>[]) {
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
        // Check if sheet is empty to add headers
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: 'Sheet1!A1:1',
        });

        if (!response.data.values || response.data.values.length === 0) {
            const headers = ['Timestamp', 'Application Type', 'First Name', 'Last Name', 'Email', 'Phone', 'Track', 'Motivation/LinkedIn'];
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
                values: [data],
            },
        });
    } catch (error) {
        console.error('Error appending to Google Sheet:', error);
        throw new Error('Failed to save application data');
    }
}

export async function getAllApplications() {
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
        throw new Error('Failed to fetch applications');
    }
}

