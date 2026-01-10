import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Privacy Policy | TechQings Africa',
  description: 'Privacy Policy for TechQings Africa. Learn how we protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main>
      <Section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-600 mb-12">TechQings Africa | Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                TechQings Africa respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p>We may collect the following information when you use our website or apply to our programs:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Location (country)</li>
                <li>Educational or professional background</li>
                <li>Program preferences</li>
                <li>Any other information you voluntarily provide through forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process applications and program participation</li>
                <li>Communicate program updates and decisions</li>
                <li>Improve our programs and website</li>
                <li>Send relevant announcements or confirmations</li>
              </ul>
              <p className="mt-4">
                <strong>We do not sell or rent your personal data to third parties.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Storage</h2>
              <p>Application data may be stored securely using:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Sheets</li>
                <li>Airtable</li>
                <li>Or other secure data storage tools used by TechQings Africa</li>
              </ul>
              <p className="mt-4">Access to this data is limited to authorized administrators only.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cookies & Analytics</h2>
              <p>Our website may use cookies or analytics tools to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Understand website usage</li>
                <li>Improve user experience</li>
              </ul>
              <p className="mt-4">These tools do not collect sensitive personal information.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Protection</h2>
              <p>
                We take reasonable steps to protect your personal data from unauthorized access, loss, or misuse. However, no online system is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Withdraw consent to data processing</li>
              </ul>
              <p className="mt-4">Requests can be made by contacting us via email.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact Us</h2>
              <p>If you have questions or concerns about this Privacy Policy, contact us at:</p>
              <ul className="list-none pl-0 space-y-2">
                <li>📧 <strong>Email:</strong> techqings@gmail.com</li>
                <li>🌍 <strong>Website:</strong> https://techqings-africa.vercel.app</li>
              </ul>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
