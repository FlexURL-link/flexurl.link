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
  { id: 'sharing', label: '4. Data sharing' },
  { id: 'retention', label: '5. Data retention' },
  { id: 'security', label: '6. Security' },
  { id: 'changes', label: '7. Policy changes' },
  { id: 'contact', label: '8. Contact' },
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
            Last updated: July 14, 2026
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
              protect it.
            </p>

            <div className="legal-callout">
              <span className="legal-callout-icon">💡</span>
              <div>
                 <strong>In short:</strong> we only collect the data strictly necessary to operate
                 the URL redirection service.
              </div>
            </div>

            <h2 id="data-collected">2. Data we collect</h2>
            <p>Depending on how you use the Service, we may collect the following categories of data:</p>

            <h3>2.1. Link data</h3>
            <p>
              When you create a shortened link (via our dedicated <code>/api/create</code> service),
              we store:
            </p>
            <ul>
              <li>The custom slug you choose, or a randomly generated 6-character identifier if you don't provide one;</li>
              <li>
                The full destination URL, <strong>encrypted at rest using AES-256-GCM</strong>.
                We never store the destination URL in plaintext — it is encrypted before being written
                to the database and only decrypted when a visitor is redirected.
              </li>
              <li>The creation date;</li>
              <li>An optional expiration date, if you set one (the link then stops working after that date).</li>
            </ul>
            <p>
              No IP address, browser fingerprint or account information is collected at the moment a
              link is created. FlexURL has no user accounts and does not build any browsing profile.
            </p>

            <h2 id="usage">3. How we use data</h2>
            <p>Your data is used exclusively to:</p>
            <ul>
              <li>Provide and operate the URL redirection service;</li>
              <li>Detect abuse, spam and malicious activity;</li>
              <li>Improve the quality, performance and security of the Service;</li>
              <li>Comply with our legal obligations (e.g. judicial requisitions).</li>
            </ul>
            <p>
              We do <strong>not resell</strong> your personal data, and we never use your data for
              targeted advertising.
            </p>

            <h2 id="sharing">4. Data sharing</h2>
            <p>Your data may be shared with the following third parties, strictly as needed:</p>
            <ul>
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

            <h2 id="retention">5. Data retention</h2>
            <ul>
              <li>Created links are kept until you delete them or, if an expiration date was set, until that date is reached.</li>
            </ul>
            <p>
              When a link is deleted, the associated data is erased from our active
              databases within 7 days, then permanently deleted from our backups within 90 days.
            </p>

            <h2 id="security">6. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data
              against unauthorized access, loss, alteration or disclosure:
            </p>
            <ul>
              <li>HTTPS/TLS encryption for all communications;</li>
              <li>Parameterized SQL queries to prevent injection;</li>
              <li>Destination URLs encrypted at rest using AES-256-GCM (never stored in plaintext);</li>
              <li>HTTP security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy);</li>
              <li>Database access strictly limited to authorized personnel;</li>
              <li>Encrypted automated backups.</li>
            </ul>

            <h2 id="changes">7. Policy changes</h2>
            <p>
              We reserve the right to modify this privacy policy at any time. Any modification will
              be published on this page with an updated "last updated" date. In case of major changes,
              we will notify you by email.
            </p>

            <h2 id="contact">8. Contact</h2>
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
