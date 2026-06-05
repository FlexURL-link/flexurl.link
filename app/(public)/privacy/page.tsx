import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Privacy Policy · FlexURL',
  description: 'How FlexURL collects, uses and protects your personal data.',
};

const sections = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'data-collected', label: '2. Data we collect' },
  { id: 'usage', label: '3. How we use data' },
  { id: 'cookies', label: '4. Cookies' },
  { id: 'sharing', label: '5. Data sharing' },
  { id: 'retention', label: '6. Data retention' },
  { id: 'security', label: '7. Security' },
  { id: 'your-rights', label: '8. Your rights (GDPR)' },
  { id: 'minors', label: '9. Minors' },
  { id: 'changes', label: '10. Policy changes' },
  { id: 'contact', label: '11. Contact' },
];

export default function PrivacyPage() {
  return (
    <article className="legal-page">
      <div className="container">
        <header className="legal-hero">
          <span className="eyebrow"><span className="eyebrow-dot" />Legal</span>
          <h1 className="animate-in">Privacy <span className="gradient-text">Policy</span></h1>
          <p className="animate-in delay-1">
            We take the protection of your data very seriously. This page details the information
            we collect, how we use it and what rights you have over your data.
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
            <h2 id="introduction">1. Introduction</h2>
            <p>
              FlexURL (hereafter "we", "our", "the Service") is operated with respect for
              its users' privacy and in compliance with the General Data Protection Regulation (GDPR)
              and applicable data protection laws.
            </p>
            <p>
              This privacy policy describes the personal data we collect, how we use, share and
              protect it, and the rights you have over your data.
            </p>

            <div className="legal-callout">
              <span className="legal-callout-icon">💡</span>
              <div>
                <strong>In short:</strong> we only collect the data strictly necessary to operate
                the URL redirection service and to provide anonymized traffic analytics.
              </div>
            </div>

            <h2 id="data-collected">2. Data we collect</h2>
            <p>Depending on how you use the Service, we may collect the following categories of data:</p>

            <h3>2.1. Account data</h3>
            <p>
              When you create a user account (via Clerk), we collect: your email address, your display
              name, your profile picture (if provided) and your unique user identifier. We do not store
              your password: it is securely managed by our authentication provider.
            </p>

            <h3>2.2. Link data</h3>
            <p>
              When you create a shortened link, we store: the chosen custom slug, the full destination
              URL, the creation date and the associated click counter.
            </p>

            <h3>2.3. Browsing data (analytics)</h3>
            <p>On each visit to a shortened link, we automatically collect:</p>
            <ul>
              <li>IP address (used for approximate geolocation, not stored in full)</li>
              <li>Country of origin (inferred from geolocation headers, e.g. Vercel/Cloudflare)</li>
              <li>User-Agent (parsed to identify the browser, OS and device type)</li>
              <li>Browser language</li>
              <li>Referrer URL — the site from which the user clicked</li>
              <li>Source type (search, social, direct, external referrer, internal)</li>
              <li>Redirect event token (used to measure wait/abandonment rate)</li>
            </ul>

            <h3>2.4. Technical data</h3>
            <p>
              For security and operational reasons, we also collect technical logs (IP address, HTTP
              method, request path, response code, timestamp) kept for a maximum of 30 days.
            </p>

            <h2 id="usage">3. How we use data</h2>
            <p>Your data is used exclusively to:</p>
            <ul>
              <li>Provide and operate the URL redirection service;</li>
              <li>Authenticate users and secure access to their dashboard;</li>
              <li>Generate aggregated and anonymized statistics on link usage;</li>
              <li>Detect abuse, spam and malicious activity;</li>
              <li>Improve the quality, performance and security of the Service;</li>
              <li>Comply with our legal obligations (e.g. judicial requisitions).</li>
            </ul>
            <p>
              We do <strong>not resell</strong> your personal data, and we never use your data for
              targeted advertising.
            </p>

            <h2 id="cookies">4. Cookies</h2>
            <p>
              FlexURL uses a minimal number of cookies and trackers, only for strictly
              necessary purposes:
            </p>
            <ul>
              <li>
                <strong>Authentication cookies</strong> — used by Clerk to keep your session active.
                These cookies are essential for the dashboard to work.
              </li>
              <li>
                <strong>Functional cookies</strong> — remembering display preferences (e.g. the last
                active dashboard view).
              </li>
            </ul>
            <p>
              We use <strong>no advertising or third-party tracking cookies</strong> (such as Google
              Analytics or Facebook Pixel) on the Service. No browsing data is shared with ad networks.
            </p>

            <h2 id="sharing">5. Data sharing</h2>
            <p>Your data may be shared with the following third parties, strictly as needed:</p>
            <ul>
              <li>
                <strong>Clerk</strong> — authentication provider, based in the United States, GDPR
                compliant (Standard Contractual Clauses).
              </li>
              <li>
                <strong>Vercel</strong> — application host and PostgreSQL databases. Data location:
                Frankfurt (EU).
              </li>
              <li>
                <strong>Authorities</strong> — when legally required, upon request from a competent
                judicial or administrative authority.
              </li>
            </ul>
            <p>
              None of these third parties is allowed to use your data for any purpose other than
              providing the service for which we employ them.
            </p>

            <h2 id="retention">6. Data retention</h2>
            <ul>
              <li>Account data is kept as long as your account is active.</li>
              <li>Created links are kept until you delete them.</li>
              <li>Click events are kept for a maximum of 12 months.</li>
              <li>Technical logs are kept for 30 days.</li>
            </ul>
            <p>
              When a link or account is deleted, the associated data is erased from our active
              databases within 7 days, then permanently deleted from our backups within 90 days.
            </p>

            <h2 id="security">7. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data
              against unauthorized access, loss, alteration or disclosure:
            </p>
            <ul>
              <li>HTTPS/TLS encryption for all communications;</li>
              <li>Password storage using a robust hashing algorithm (bcrypt) managed by Clerk;</li>
              <li>Parameterized SQL queries to prevent injection;</li>
              <li>HTTP security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy);</li>
              <li>Database access strictly limited to authorized personnel;</li>
              <li>Encrypted automated backups.</li>
            </ul>

            <h2 id="your-rights">8. Your rights (GDPR)</h2>
            <p>Under the General Data Protection Regulation, you have the following rights at any time:</p>
            <ul>
              <li><strong>Right of access</strong> — obtain a copy of your personal data;</li>
              <li><strong>Right of rectification</strong> — correct inaccurate or incomplete data;</li>
              <li><strong>Right to erasure</strong> — request the deletion of your data;</li>
              <li><strong>Right to restriction</strong> — temporarily restrict processing;</li>
              <li><strong>Right to portability</strong> — receive your data in a structured format;</li>
              <li><strong>Right to object</strong> — object to processing for legitimate reasons;</li>
              <li><strong>Right to withdraw consent</strong> — when processing is based on your consent;</li>
              <li><strong>Right to lodge a complaint</strong> with your local data protection authority.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at <a href="mailto:privacy@flexurl.link">privacy@flexurl.link</a>.
              We will respond within a maximum of one month.
            </p>

            <h2 id="minors">9. Minors</h2>
            <p>
              The Service is not intended for people under 16. We do not knowingly collect personal
              data from minors. If you believe a minor has provided us with data, please contact us
              so we can delete it.
            </p>

            <h2 id="changes">10. Policy changes</h2>
            <p>
              We reserve the right to modify this privacy policy at any time. Any modification will
              be published on this page with an updated "last updated" date. In case of major changes,
              we will notify you by email or via a visible message in your dashboard.
            </p>

            <h2 id="contact">11. Contact</h2>
            <p>
              For any question regarding this privacy policy or your personal data, you can contact
              us at:
            </p>
            <ul>
              <li>📧 <a href="mailto:privacy@flexurl.link">privacy@flexurl.link</a></li>
              <li>📬 FlexURL — Privacy Team</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
