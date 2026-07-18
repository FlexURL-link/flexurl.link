import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Terms of Service · FlexURL',
  description: 'Terms of use of the FlexURL service: rules, responsibilities, intellectual property and applicable law.',
};

const sections = [
  { id: 'acceptance', label: '1. Acceptance' },
  { id: 'definitions', label: '2. Definitions' },
  { id: 'service', label: '3. Service description' },
  { id: 'registration', label: '4. Registration & account' },
  { id: 'acceptable-use', label: '5. Acceptable use' },
  { id: 'prohibited', label: '6. Prohibited uses' },
  { id: 'ip', label: '7. Intellectual property' },
  { id: 'user-content', label: '8. User content' },
  { id: 'availability', label: '9. Availability' },
  { id: 'liability', label: '10. Limitation of liability' },
  { id: 'termination', label: '11. Suspension & termination' },
  { id: 'changes', label: '12. Changes' },
  { id: 'governing-law', label: '13. Governing law' },
  { id: 'contact', label: '14. Contact' },
];

export default function TermsPage() {
  return (
    <article className="legal-page">
      <div className="container">
        <header className="legal-hero">
          <span className="eyebrow"><span className="eyebrow-dot" />Legal</span>
          <h1 className="animate-in">Terms of <span className="gradient-text">Service</span></h1>
          <p className="animate-in delay-1">
            These Terms of Service govern the use of FlexURL. By creating an account or
            using the Service, you agree to the conditions described below.
          </p>
          <div className="legal-meta">
            <span>📅</span>
            Last updated: June 1, 2026
          </div>
        </header>

        <div className="legal-content">
          <aside className="legal-toc">
            <div className="legal-toc-title">Table of contents</div>
            <nav>
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`}>{s.label}</a>
              ))}
            </nav>
          </aside>

          <div className="legal-body">
            <h2 id="acceptance">1. Acceptance of the Terms</h2>
            <p>
              These Terms of Service (hereafter "Terms") govern the use of the FlexURL service
              (hereafter "the Service"). By accessing the Service, creating an account, or using any
              of its features, you acknowledge that you have read, understood and unconditionally
              accepted these Terms.
            </p>
            <p>
              If you do not accept all or part of these Terms, you must stop using the Service and
              delete your account.
            </p>

            <h2 id="definitions">2. Definitions</h2>
            <ul>
              <li><strong>"Service"</strong>: the FlexURL platform and all of its URL shortening, management and analytics features.</li>
              <li><strong>"User"</strong>: any individual or legal entity that has created an account on the Service.</li>
              <li><strong>"Link"</strong>: any shortened URL generated through the Service, associated with a destination URL.</li>
              <li><strong>"User Content"</strong>: any item (URL, slug, metadata) submitted by the User in the course of using the Service.</li>
              <li><strong>"Account"</strong>: the personal space of a User, accessible after authentication.</li>
            </ul>

            <h2 id="service">3. Service description</h2>
            <p>FlexURL is a URL shortening and management service. It allows in particular:</p>
            <ul>
              <li>Creation of personalized short links from long URLs;</li>
              <li>Centralized management of links and slugs;</li>
              <li>Anonymized traffic analytics (clicks, geography, devices, sources);</li>
              <li>Generation of QR codes associated with created links;</li>
              <li>Access to performance statistics.</li>
            </ul>
            <p>
              The Service is provided "as is", without warranty of any kind as to its fitness for a
              particular purpose. We reserve the right to add, modify or remove features at any time.
            </p>

            <h2 id="registration">4. Registration and user account</h2>
            <p>
              Access to certain features (link creation, personalized statistics) requires creating
              an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current and complete information upon registration;</li>
              <li>Maintain the security of your account and credentials;</li>
              <li>Notify us promptly of any unauthorized use of your account;</li>
              <li>Not create multiple accounts under your own name, nor impersonate a third party.</li>
            </ul>
            <p>
              You are responsible for any activity performed from your account, unless evidence of
              fraudulent use not attributable to you is provided.
            </p>

            <div className="legal-callout">
              <span className="legal-callout-icon">⚠️</span>
              <div>
                <strong>Important:</strong> failure to comply with these commitments may result in
                immediate suspension of your account, without notice or compensation.
              </div>
            </div>

            <h2 id="acceptable-use">5. Acceptable use</h2>
            <p>
              You agree to use the Service fairly, reasonably and in compliance with applicable laws
              and regulations. You are solely responsible for the destination URLs you choose to
              shorten, as well as the content accessible through those links.
            </p>

            <h2 id="prohibited">6. Prohibited uses</h2>
            <p>It is strictly prohibited to use the Service to:</p>
            <ul>
              <li>Shorten URLs pointing to illegal content (child pornography, terrorism, copyrighted material without rights, etc.);</li>
              <li>Conduct phishing or any attempt at identity theft;</li>
              <li>Distribute malware, viruses, ransomware or any harmful code;</li>
              <li>Send spam, mass unsolicited messages, or promote scams;</li>
              <li>Infringe the intellectual property rights, trademarks or patents of third parties;</li>
              <li>Distribute violent, hateful, discriminatory, racist content or content that attacks human dignity;</li>
              <li>Attempt to bypass the Service's technical limits or access unauthorized data;</li>
              <li>Conduct any activity that would harm the image, reputation or security of the Service or its users.</li>
            </ul>
            <p>
              Any breach of these prohibitions may result in immediate suspension of your account
              and, where appropriate, the transmission of relevant information to the competent
              authorities.
            </p>

            <h2 id="ip">7. Intellectual property</h2>
            <p>
              All elements of the Service (texts, graphics, logo, source code, interface, database,
              trademark "FlexURL") are protected by applicable intellectual property laws and
              remain the exclusive property of FlexURL or its licensors.
            </p>
            <p>
              Any unauthorized reproduction, representation, modification or exploitation of all or
              part of the Service, without prior written consent, is strictly prohibited and would
              constitute an infringement sanctioned by applicable intellectual property law.
            </p>

            <h2 id="user-content">8. User content</h2>
            <p>
              You retain full ownership of the User Content you submit via the Service. However, you
              grant us a non-exclusive, royalty-free, worldwide license, limited to the duration of
              use of the Service, for the purpose of hosting, displaying and technically processing
              that content exclusively within the operation of the Service.
            </p>
            <p>
              You warrant that you hold all necessary rights over that content and that it does not
              violate any third-party rights or any applicable law.
            </p>

            <h2 id="availability">9. Availability of the service</h2>
            <p>
              We strive to ensure maximum availability of the Service. However, the Service is
              provided on a best-effort basis: temporary interruptions may occur for maintenance,
              updates, technical failures or force majeure.
            </p>
            <p>
              Whenever possible, we will inform you in advance of planned interruptions. No
              compensation may be claimed in case of interruption, even prolonged.
            </p>

            <h2 id="liability">10. Limitation of liability</h2>
            <p>To the extent permitted by applicable law, FlexURL shall not be liable for:</p>
            <ul>
              <li>Indirect, consequential, special or punitive damages;</li>
              <li>Loss of profits, revenue, data, business opportunities or goodwill;</li>
              <li>The content of third-party sites accessible via shortened links;</li>
              <li>Any non-compliant or abusive use of the Service by a User;</li>
              <li>Temporary unavailability of the Service or any performance failure.</li>
            </ul>
            <p>
              In any event, our total cumulative liability shall not exceed the total amount actually
              paid by the User over the past twelve (12) months.
            </p>

            <h2 id="termination">11. Suspension and termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service, without notice
              or compensation, in case of:
            </p>
            <ul>
              <li>Violation of these Terms;</li>
              <li>Fraudulent, abusive or illegal activity;</li>
              <li>Prolonged inactivity of the account;</li>
              <li>Request from a judicial or administrative authority.</li>
            </ul>
            <p>
              You may delete your account at any time from your dashboard or by contacting us at
              <a href="mailto:ddrayko@tutamail.com">ddrayko@tutamail.com</a>. Deletion entails the erasure
              of your data in accordance with our privacy policy.
            </p>

            <h2 id="changes">12. Changes to the Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Any modification will be
              published on this page with an updated "last updated" date. In case of substantial
              modification, we will notify you by email or via a visible message in your dashboard.
            </p>
            <p>
              Continued use of the Service after the changes take effect constitutes acceptance of
              those changes.
            </p>

            <h2 id="governing-law">13. Governing law and jurisdiction</h2>
            <p>
              These Terms are governed by the laws of France. Any dispute relating to their
              interpretation or enforcement shall be subject to the exclusive jurisdiction of the
              French courts, unless any mandatory rule to the contrary applies to consumers.
            </p>
            <p>
              In the event of a dispute with a consumer, the latter may also have recourse to a
              consumer mediator free of charge in accordance with applicable consumer law.
            </p>

            <h2 id="contact">14. Contact</h2>
            <p>For any question regarding these Terms, you can contact us:</p>
            <ul>
              <li>📧 <a href="mailto:ddrayko@tutamail.com">ddrayko@tutamail.com</a></li>
              <li>📧 General support: <a href="mailto:ddrayko@tutamail.com">ddrayko@tutamail.com</a></li>
              <li>🌐 Website: <a href="https://flexurl.link" target="_blank" rel="noreferrer">flexurl.link</a></li>
            </ul>
            <p>
              We will respond within a reasonable timeframe and, in all cases, within a maximum of
              one month from receipt of your request.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
