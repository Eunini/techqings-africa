/* eslint-disable @typescript-eslint/no-explicit-any */
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '../.env.local') });

import { getAllApplications } from '../src/lib/google-sheets';
import { sendBulkUpdateEmail } from '../src/lib/emails';

async function sendBulkEmails() {
    try {
        console.log('Fetching all applications...\n');
        const applications: any[] = await getAllApplications();
        
        if (applications.length === 0) {
            console.log('No applications found');
            return;
        }

        // Extract unique email and first name combinations
        const emailMap = new Map<string, string>();
        applications.forEach((app: any) => {
            const email = app['Email'];
            const firstName = app['First Name'];
            if (email && email !== 'N/A' && !emailMap.has(email)) {
                emailMap.set(email, firstName || 'there');
            }
        });

        const uniqueEmails = Array.from(emailMap.entries());
        console.log(`Total applications: ${applications.length}`);
        console.log(`Unique emails to send to: ${uniqueEmails.length}\n`);

        let successCount = 0;
        let failedCount = 0;
        const failedEmails: Array<{ email: string; error: string }> = [];

        console.log('========== SENDING EMAILS ==========\n');

        for (const [email, firstName] of uniqueEmails) {
            try {
                console.log(`Sending to: ${email} (${firstName})`);
                await sendBulkUpdateEmail(email, firstName);
                successCount++;
                console.log(`✓ Sent successfully\n`);
                
                // Small delay to avoid rate limiting
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (error) {
                failedCount++;
                const errorMsg = error instanceof Error ? error.message : 'Unknown error';
                failedEmails.push({ email, error: errorMsg });
                console.log(`✗ Failed: ${errorMsg}\n`);
            }
        }

        console.log('\n========== SUMMARY ==========\n');
        console.log(`Total emails sent: ${successCount}`);
        console.log(`Failed: ${failedCount}`);
        
        if (failedEmails.length > 0) {
            console.log('\nFailed emails:');
            failedEmails.forEach(({ email, error }) => {
                console.log(`  - ${email}: ${error}`);
            });
        }

        console.log('\n✓ Bulk email campaign completed!');
        process.exit(failedCount > 0 ? 1 : 0);

    } catch (error) {
        console.error('Error sending bulk emails:', error);
        process.exit(1);
    }
}

sendBulkEmails();
