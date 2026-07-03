'use client';

export default function RedirectPageClient({ url }: { url: string; eventToken: string; instant?: boolean }) {
  return (
    <div className="announcement-page">
      <div className="announcement-container">
        <div className="announcement-card">
          <div className="announcement-header">
            <span className="announcement-badge">SHUTTING DOWN</span>
            <div className="announcement-brand">
              <span className="brand-mark">D</span>
              <span>FlexURL</span>
            </div>
          </div>

          <h1 className="announcement-title">
            FlexURL is shutting down<br />
            <span className="gradient">but coming back stronger.</span>
          </h1>

          <div className="announcement-body">
            <p>
              The current version of FlexURL — with accounts, dashboards, detailed analytics,
              visitor tracking, QR codes, and all the complexity — is <strong>officially finished</strong>.
            </p>

            <p>
              It was overengineered. You needed to create an account, sign in, manage links,
              check statistics, and deal with a system that did way too much. That&apos;s not
              what FlexURL should be.
            </p>

            <div className="divider" />

            <h2>What&apos;s coming next</h2>

            <p>
              <strong className="highlight">FlexURL is being rebuilt from scratch.</strong> The new version will be
              <strong> Privacy First</strong> — no accounts, no login, no tracking, no statistics.
              Nothing.
            </p>

            <div className="features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Just a page, a link, and an expiration.</strong>
                  <p>You open the page, paste your URL, set how long it should live, and you&apos;re done.</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>No account required.</strong>
                  <p>No sign-up, no login, no password reset emails, no &ldquo;forgot your password?&rdquo; — none of that.</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>No stats, no tracking.</strong>
                  <p>No click counters, no visitor geography, no device info, no referrer tracking. The link works or it doesn&apos;t. That&apos;s all.</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">✓</span>
                <div>
                  <strong>Privacy by design.</strong>
                  <p>No data collected, no cookies, no analytics scripts. The link expires and that&apos;s the end of it.</p>
                </div>
              </div>
            </div>

            <div className="divider" />

            <div className="warning">
              <span className="warning-icon">⚠️</span>
              <div>
                <strong>Important: the entire existing database will be deleted.</strong>
                <p>
                  All links, accounts, analytics data, QR codes, click events, and user information
                  currently stored will be <strong>permanently erased</strong> when the new version launches.
                  There will be no migration. This is a complete reset.
                </p>
              </div>
            </div>

            <div className="divider" />

            <p className="closing">
              Thank you to everyone who used the dashboard and gave feedback. The next version
              will be simpler, faster, and truly private.
            </p>

            <p className="closing-cta">
              Stay tuned. <span className="gradient">FlexURL is coming back.</span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .announcement-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0a0a1a 0%, #0d1117 50%, #0a0a1a 100%);
          padding: 1.5rem;
          font-family: 'Plus Jakarta Sans', 'Manrope', sans-serif;
        }
        .announcement-container {
          width: 100%;
          max-width: 680px;
          margin: 0 auto;
        }
        .announcement-card {
          background: linear-gradient(135deg, #111827 0%, #1a1a2e 100%);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 24px;
          padding: 2.5rem 2.5rem 3rem;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
        }
        .announcement-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .announcement-badge {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          color: #fff;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.7rem;
          border-radius: 8px;
          text-transform: uppercase;
        }
        .announcement-brand {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-weight: 800;
          font-size: 1rem;
          color: #fff;
        }
        .brand-mark {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
        }
        .announcement-title {
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.3;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: #fff;
        }
        .gradient {
          background: linear-gradient(135deg, #6366f1, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .announcement-body p {
          color: #9ca3af;
          font-size: 0.92rem;
          line-height: 1.7;
          margin: 0 0 0.85rem;
        }
        .announcement-body strong {
          color: #e5e7eb;
        }
        .highlight {
          color: #a78bfa !important;
        }
        .announcement-body h2 {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0 0 0.75rem;
        }
        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
          margin: 1.5rem 0;
        }
        .features {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          margin: 1.25rem 0;
        }
        .feature {
          display: flex;
          gap: 0.85rem;
          align-items: flex-start;
        }
        .feature-icon {
          width: 24px;
          height: 24px;
          min-width: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          color: #a78bfa;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .feature strong {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 0.15rem;
        }
        .feature p {
          margin: 0 !important;
          font-size: 0.83rem !important;
        }
        .warning {
          display: flex;
          gap: 0.85rem;
          align-items: flex-start;
          background: rgba(251, 191, 36, 0.08);
          border: 1px solid rgba(251, 191, 36, 0.2);
          border-radius: 16px;
          padding: 1.25rem;
        }
        .warning-icon {
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        .warning strong {
          color: #fbbf24 !important;
          font-size: 0.9rem;
        }
        .warning p {
          color: #d4a853 !important;
          margin: 0.3rem 0 0 !important;
          font-size: 0.83rem !important;
        }
        .closing {
          color: #6b7280 !important;
          font-style: italic;
        }
        .closing-cta {
          font-size: 1.1rem !important;
          font-weight: 800 !important;
          text-align: center;
          margin-top: 1rem !important;
          color: #e5e7eb !important;
        }
      `}</style>
    </div>
  );
}
