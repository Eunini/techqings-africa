/* eslint-disable @typescript-eslint/no-explicit-any */
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '../.env.local') });

import { getAllApplications } from '../src/lib/google-sheets';

async function extractEmails() {
    try {
        const applications: any[] = await getAllApplications();
        
        if (applications.length === 0) {
            console.log('No applications found');
            return;
        }

        // Extract unique emails
        const emails = applications
            .map(app => app['Email'])
            .filter(email => email && email !== 'N/A');

        const uniqueEmails = Array.from(new Set(emails));

        console.log('\n========== APPLICANT EMAILS ==========\n');
        console.log(`Total Applicants: ${applications.length}`);
        console.log(`Unique Emails: ${uniqueEmails.length}\n`);
        
        uniqueEmails.forEach((email, index) => {
            console.log(`${index + 1}. ${email}`);
        });

        // Also show by type
        const learnerEmails = applications
            .filter(app => app['Type'] === 'learner')
            .map(app => app['Email'])
            .filter(email => email && email !== 'N/A');

        const mentorEmails = applications
            .filter(app => app['Type'] === 'mentor')
            .map(app => app['Email'])
            .filter(email => email && email !== 'N/A');

        console.log(`\n\nBreakdown by Type:`);
        console.log(`Learners: ${new Set(learnerEmails).size}`);
        console.log(`Mentors: ${new Set(mentorEmails).size}`);

        // Option to export as CSV
        console.log(`\n\n========== CSV FORMAT ==========\n`);
        console.log('Email,Type,First Name,Last Name');
        applications.forEach((app: any) => {
            const email = app['Email'] || '';
            const type = app['Type'] || '';
            const firstName = app['First Name'] || '';
            const lastName = app['Last Name'] || '';
            if (email && email !== 'N/A') {
                console.log(`${email},${type},${firstName},${lastName}`);
            }
        });

    } catch (error) {
        console.error('Error extracting emails:', error);
        process.exit(1);
    }
}

extractEmails();
