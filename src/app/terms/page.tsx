import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Terms of Service | TechQings Africa',
  description: 'Terms of Service for TechQings Africa community and programs.',
};

export default function TermsPage() {
  return (
    <main>
      <Section className="bg-white py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-600 mb-12">TechQings Africa | Last updated: January 2026</p>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to TechQings Africa. By accessing or using our website, programs, or services, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our website or services.
              </p>
              <p>
                TechQings Africa is a community-based initiative focused on empowering young African women through future-focused technology education, mentorship, and training.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Eligibility</h2>
              <p>Our programs and services are intended for individuals who:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Are interested in technology education and mentorship</li>
                <li>Meet the eligibility requirements stated for specific programs or cohorts</li>
              </ul>
              <p>Participation in any program is subject to review and acceptance by TechQings Africa.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use of the Website</h2>
              <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Infringe on the rights of others</li>
                <li>Disrupt or damage the website</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Applications and Participation</h2>
              <p>Submitting an application through our website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Does not guarantee acceptance into any program</li>
                <li>Requires that all information provided is accurate and truthful</li>
                <li>May be reviewed, accepted, or declined at our discretion</li>
              </ul>
              <p className="mt-4">TechQings Africa reserves the right to modify, suspend, or discontinue any program at any time.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and program materials, is the property of TechQings Africa unless otherwise stated.
              </p>
              <p>You may not reproduce, distribute, or use our content without prior written permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Community Conduct</h2>
              <p>Participants, mentors, and contributors are expected to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Act respectfully and professionally</li>
                <li>Avoid harassment, discrimination, or abusive behavior</li>
                <li>Follow any additional program-specific rules</li>
              </ul>
              <p className="mt-4">Violation of these standards may result in removal from the program or community.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Disclaimer</h2>
              <p>
                TechQings Africa provides educational and mentorship services only. We do not guarantee employment, income, or specific outcomes as a result of participation in our programs.
              </p>
              <p>All services are provided &apos;as is&apos; without warranties of any kind.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, TechQings Africa shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or participation in our programs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Continued use of the website after changes means you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Contact</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
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
