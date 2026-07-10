import Link from 'next/link';

export function PublicNav() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 'var(--nav-height)',
        background: 'transparent',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--line)',
        }}
        aria-hidden="true"
      />
      <div className="container landing-nav-inner" style={{ position: 'relative', zIndex: 1 }}>
        <Link href="/" className="brand">
          <span className="brand-mark">D</span>
          <span>FlexURL</span>
        </Link>
        <div className="nav-links">
          <Link href="/#features" className="nav-link">Features</Link>
          <Link href="/#how" className="nav-link">How it works</Link>
          <a href="https://create.flexurl.link" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            Create a link
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </header>
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
              <span>FlexURL</span>
            </Link>
            <p style={{ fontSize: '0.92rem', maxWidth: 320, marginTop: '0.85rem' }}>
              Privacy-first link shortener. No accounts, no tracking, no data collected.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Product</h4>
            <a href="https://create.flexurl.link" className="footer-link">Create a link</a>
            <Link href="/#features" className="footer-link">Features</Link>
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
            <a href="mailto:hello@flexurl.link" className="footer-link">hello@flexurl.link</a>
            <a href="https://github.com/FlexURL-link" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 FlexURL. Privacy first.</span>
          <a href="https://status.flexurl.link" target="_blank" rel="noreferrer" className="footer-tag" style={{ textDecoration: 'none' }}>
            <span className="status-dot" />
            Service online · 99.9% uptime
          </a>
        </div>
      </div>
    </footer>
  );
}
