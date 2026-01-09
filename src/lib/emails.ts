import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email: string, firstName: string, type: 'learner' | 'mentor') {
    const subject = type === 'learner'
        ? "Welcome to TechQings Africa - FutureTech Cohort 1"
        : "Mentor Application Received - TechQings Africa";

    const content = type === 'learner'
        ? `<h1>Hello ${firstName}!</h1><p>We've received your enrollment for the FutureTech Program. Our team will review your application and get back to you shortly.</p>`
        : `<h1>Hello ${firstName}!</h1><p>Thank you for applying to the TechQings Africa Mentor Network. Your expertise will make a huge difference.</p>`;

    try {
        await resend.emails.send({
            from: 'TechQings Africa <hello@techqings.africa>',
            to: email,
            subject,
            html: content,
        });
    } catch (error) {
        console.error('Error sending confirmation email:', error);
    }
}

export async function sendAdminNotification(data: any) {
    try {
        await resend.emails.send({
            from: 'TechQings Systems <system@techqings.africa>',
            to: 'techqings@gmail.com',
            subject: `New ${data.type} Application: ${data.firstName} ${data.lastName}`,
            html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
        });
    } catch (error) {
        console.error('Error sending admin notification:', error);
    }
}
