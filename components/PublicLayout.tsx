import Link from 'next/link';

export function PublicNav() {
  return (
    <nav className="landing-nav">
      <div className="container landing-nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">D</span>
          <span>DraykoRedirect</span>
        </Link>
        <div className="nav-links">
          <Link href="/#features" className="nav-link">Features</Link>
          <Link href="/#stats" className="nav-link">Impact</Link>
          <Link href="/#how" className="nav-link">How it works</Link>
          <Link href="/terms" className="nav-link">Terms</Link>
          <Link href="/privacy" className="nav-link">Privacy</Link>
          <Link href="/dashboard" className="btn btn-primary btn-sm">
            Dashboard
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function PublicFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand" style={{ marginBottom: '1rem' }}>
              <span className="brand-mark">D</span>
              <span>DraykoRedirect</span>
            </Link>
            <p style={{ fontSize: '0.92rem', maxWidth: 320, marginTop: '0.85rem' }}>
              The modern platform to shorten, manage and analyze your links in real time.
            </p>
            <div className="footer-tag" style={{ marginTop: '1.25rem' }}>
              <span className="status-dot" />
              All systems operational
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Product</h4>
            <Link href="/#features" className="footer-link">Features</Link>
            <Link href="/#stats" className="footer-link">Performance</Link>
            <Link href="/dashboard" className="footer-link">Dashboard</Link>
            <Link href="/#how" className="footer-link">How it works</Link>
          </div>

          <div>
            <h4 className="footer-col-title">Legal</h4>
            <Link href="/privacy" className="footer-link">Privacy policy</Link>
            <Link href="/terms" className="footer-link">Terms of service</Link>
            <Link href="/privacy#cookies" className="footer-link">Cookies</Link>
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <a href="mailto:contact@drayko.xyz" className="footer-link">contact@drayko.xyz</a>
            <a href="https://github.com/drayko" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 DraykoRedirect. Built for performance.</span>
          <span className="footer-tag">
            <span className="status-dot" />
            Service online · 99.9% uptime
          </span>
        </div>
      </div>
    </footer>
  );
}
