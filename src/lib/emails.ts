import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConfirmationEmail(email: string, firstName: string, type: 'learner' | 'mentor') {
    const subject = type === 'learner'
        ? "Welcome to TechQings Africa - FutureTech Cohort 1"
        : "Mentor Application Received - TechQings Africa";

    const learnerContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: linear-gradient(135deg, #8B2CF5 0%, #7A25D9 100%); padding: 40px 20px; text-align: center; }
        .logo { width: 60px; height: 60px; margin: 0 auto 20px; }
        .header h1 { color: white; margin: 0; font-size: 28px; }
        .content { padding: 40px 30px; }
        .content h2 { color: #8B2CF5; font-size: 20px; margin-top: 0; }
        .content p { color: #555; line-height: 1.8; margin: 15px 0; }
        .highlight { background: #f5f0ff; padding: 20px; border-left: 4px solid #8B2CF5; border-radius: 4px; margin: 20px 0; }
        .highlight p { margin: 10px 0; color: #333; }
        .cta-button { display: inline-block; background: #8B2CF5; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: 600; }
        .footer { background: #f9f9f9; padding: 30px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; }
        .footer a { color: #8B2CF5; text-decoration: none; }
        .divider { height: 1px; background: #eee; margin: 30px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://techqings.africa/logo.png" alt="TechQings Africa" class="logo">
            <h1>Welcome to TechQings Africa</h1>
        </div>
        
        <div class="content">
            <h2>Hello ${firstName}! 👋</h2>
            <p>We're thrilled to receive your enrollment for the <strong>FutureTech Program - Cohort 1</strong>.</p>
            
            <div class="highlight">
                <p><strong>What's Next?</strong></p>
                <p>Our team will carefully review your application and get back to you within 5-7 business days with admission status and next steps.</p>
            </div>
            
            <p>In the meantime:</p>
            <ul>
                <li>Check out our <a href="https://techqings.africa/programs">program details</a></li>
                <li>Connect with our community on <a href="https://chat.whatsapp.com/KFsq7gGFXDi832ip8Oj3jo">WhatsApp</a></li>
                <li>Join our <a href="https://join.slack.com/t/techqings/shared_invite/zt-3n01v27pj-8q7Eup2AhgM39T0wmdpKug">Slack community</a> for real-time discussions</li>
                <li><strong>Follow us on social media</strong> - this is a criteria for selection!</li>
            </ul>
            
            <p>Questions? Reach out to us at <a href="mailto:techqings@gmail.com">techqings@gmail.com</a></p>
            
            <p><strong>Welcome to the movement! 🚀</strong></p>
            <p>The TechQings Africa Team</p>
        </div>
        
        <div class="divider"></div>
        
        <div class="footer">
            <p><strong>TechQings Africa</strong> | Empowering African Women for Future Tech</p>
            <p><a href="https://techqings.africa">Visit Website</a> | <a href="https://techqings.africa/privacy">Privacy Policy</a> | <a href="https://techqings.africa/terms">Terms of Service</a></p>
            <p>
                Follow us on social media:
                <a href="https://www.instagram.com/techqings_" style="margin: 0 8px; color: #8B2CF5; text-decoration: none;">Instagram</a> •
                <a href="https://facebook.com/share/1GYgdo8MbD/?mibextid=wwXIfr" style="margin: 0 8px; color: #8B2CF5; text-decoration: none;">Facebook</a> •
                <a href="https://chat.whatsapp.com/KFsq7gGFXDi832ip8Oj3jo" style="margin: 0 8px; color: #8B2CF5; text-decoration: none;">WhatsApp Community</a>
            </p>
            <p>&copy; 2026 TechQings Africa. All rights reserved.</p>
        </div>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: linear-gradient(135deg, #8B2CF5 0%, #7A25D9 100%); padding: 40px 20px; text-align: center; }
        .logo { width: 60px; height: 60px; margin: 0 auto 20px; }
        .header h1 { color: white; margin: 0; font-size: 28px; }
        .content { padding: 40px 30px; }
        .content h2 { color: #8B2CF5; font-size: 20px; margin-top: 0; }
        .content p { color: #555; line-height: 1.8; margin: 15px 0; }
        .highlight { background: #f5f0ff; padding: 20px; border-left: 4px solid #8B2CF5; border-radius: 4px; margin: 20px 0; }
        .highlight p { margin: 10px 0; color: #333; }
        .cta-button { display: inline-block; background: #8B2CF5; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: 600; }
        .footer { background: #f9f9f9; padding: 30px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee; }
        .footer a { color: #8B2CF5; text-decoration: none; }
        .divider { height: 1px; background: #eee; margin: 30px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://techqings.africa/logo.png" alt="TechQings Africa" class="logo">
            <h1>Mentor Application Received</h1>
        </div>
        
        <div class="content">
            <h2>Hello ${firstName}! 🌟</h2>
            <p>Thank you for applying to the <strong>TechQings Africa Mentor Network</strong>. Your decision to give back will make an immense impact on the next generation of African tech leaders.</p>
            
            <div class="highlight">
                <p><strong>We're Reviewing Your Application</strong></p>
                <p>Our team is carefully evaluating your profile. We'll reach out within 5-7 business days to confirm your participation and discuss mentorship opportunities.</p>
            </div>
            
            <p>As a TechQings mentor, you'll:</p>
            <ul>
                <li>Guide talented African women through specialized tech tracks</li>
                <li>Share your expertise and real-world experience</li>
                <li>Be part of a global community of tech leaders</li>
                <li>Make lasting impact in tech diversity</li>
            </ul>
            
            <p>To stay connected with the TechQings team and community, please:</p>
            <ul>
                <li>Join our <a href="https://join.slack.com/t/techqings/shared_invite/zt-3n01v27pj-8q7Eup2AhgM39T0wmdpKug">Slack community</a> for real-time discussions</li>
                <li><strong>Follow us on social media</strong> - this helps us reach more African women in tech</li>
            </ul>
            
            <p>Questions? Reach out to us at <a href="mailto:techqings@gmail.com">techqings@gmail.com</a></p>
            
            <p><strong>Thank you for believing in the mission! 💜</strong></p>
            <p>The TechQings Africa Team</p>
        </div>
        
        <div class="divider"></div>
        
        <div class="footer">
            <p><strong>TechQings Africa</strong> | Empowering African Women for Future Tech</p>
            <p><a href="https://techqings.africa">Visit Website</a> | <a href="https://techqings.africa/privacy">Privacy Policy</a> | <a href="https://techqings.africa/terms">Terms of Service</a></p>
            <p>
                Follow us on social media:
                <a href="https://www.instagram.com/techqings_" style="margin: 0 8px; color: #8B2CF5; text-decoration: none;">Instagram</a> •
                <a href="https://facebook.com/share/1GYgdo8MbD/?mibextid=wwXIfr" style="margin: 0 8px; color: #8B2CF5; text-decoration: none;">Facebook</a> •
                <a href="https://chat.whatsapp.com/KFsq7gGFXDi832ip8Oj3jo" style="margin: 0 8px; color: #8B2CF5; text-decoration: none;">WhatsApp Community</a>
            </p>
            <p>&copy; 2026 TechQings Africa. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`;

    const content = type === 'learner' ? learnerContent : mentorContent;

    try {
        await resend.emails.send({
            from: 'TechQings Africa <onboarding@resend.dev>',
            to: email,
            subject,
            html: content,
        });
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        throw new Error('Failed to send confirmation email');
    }
}

export async function sendAdminNotification(data: Record<string, unknown>) {
    try {
        await resend.emails.send({
            from: 'TechQings Systems <onboarding@resend.dev>',
            to: 'techqings@gmail.com',
            subject: `New ${(data.type as string)} Application: ${(data.firstName as string)} ${(data.lastName as string)}`,
            html: `<pre>${JSON.stringify(data, null, 2)}</pre>`,
        });
    } catch (error) {
        console.error('Error sending admin notification:', error);
        throw new Error('Failed to send admin notification');
    }
}
