'use client';

import Link from 'next/link';

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

const IconChart = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
);

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
);

const IconZap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);

const IconLink = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);

const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" /></svg>
);

const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);

const IconQR = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 14h3v3h-3z" /><path d="M19 14h2v2h-2z" /><path d="M14 19h2v2h-2z" /><path d="M19 19h2v2h-2z" /></svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const stats = [
  { label: 'Links generated', value: '1.2M+' },
  { label: 'Uptime guarantee', value: '99.9%' },
  { label: 'Active users', value: '45k+' },
  { label: 'Average latency', value: '< 50ms' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="grid-overlay" />
        </div>

        <div className="container hero-inner">
          <div className="hero-content animate-in">
            <span className="eyebrow animate-in delay-1">
              <span className="eyebrow-dot" />
              The next-generation redirection tool
            </span>

            <h1 className="text-balance animate-in delay-2">
              Short links that <br />
              deliver <span className="gradient-text">spectacular results.</span>
            </h1>

            <p className="text-balance animate-in delay-3">
              DraykoRedirect shortens, secures and analyzes your URLs in real time.
              A modern infrastructure built for creators, marketers and developers.
            </p>

            <div className="hero-actions animate-in delay-4">
              <Link href="/dashboard" className="btn btn-gradient">
                Start for free
                <IconArrow />
              </Link>
              <Link href="#features" className="btn btn-soft">
                Discover the tools
              </Link>
            </div>

            <div className="hero-trust animate-in delay-5">
              <div className="trust-item">
                <IconCheck /> No credit card required
              </div>
              <div className="trust-item">
                <IconCheck /> Unlimited links
              </div>
              <div className="trust-item">
                <IconCheck /> Secure HTTPS
              </div>
            </div>
          </div>

          {/* Hero preview */}
          <div className="hero-visual animate-scale delay-3">
            <div className="browser-mockup">
              <div className="browser-bar">
                <div className="browser-dots">
                  <span /> <span /> <span />
                </div>
                <div className="browser-url">
                  <span className="lock">🔒</span> redirect.drayko.xyz/dashboard
                </div>
              </div>

              <div className="browser-body">
                <div className="mock-row">
                  <div className="mock-label">Source URL</div>
                  <div className="mock-field long">
                    <span className="mock-value-mono muted">https://github.com/drayko/awesome-project-2026-very-long-url</span>
                  </div>
                </div>

                <div className="mock-arrow">
                  <div className="mock-arrow-line" />
                  <div className="mock-arrow-icon">
                    <IconZap />
                  </div>
                  <div className="mock-arrow-line" />
                </div>

                <div className="mock-row highlight">
                  <div className="mock-label primary">Short link generated</div>
                  <div className="mock-field">
                    <span className="mock-value-mono primary">redirect.drayko.xyz/</span>
                    <span className="mock-value-mono brand">awesome-git</span>
                    <span className="mock-copy">Copy</span>
                  </div>
                </div>

                <div className="mock-stats">
                  <div className="mock-stat">
                    <div className="mock-stat-value">2,847</div>
                    <div className="mock-stat-label">Total clicks</div>
                  </div>
                  <div className="mock-stat">
                    <div className="mock-stat-value gradient-text">+24%</div>
                    <div className="mock-stat-label">This month</div>
                  </div>
                  <div className="mock-stat">
                    <div className="mock-stat-value">12</div>
                    <div className="mock-stat-label">Countries</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-card floating-1">
              <div className="floating-icon cyan">
                <IconGlobe />
              </div>
              <div>
                <div className="floating-title">Paris, FR</div>
                <div className="floating-sub">+18 clicks today</div>
              </div>
            </div>

            <div className="floating-card floating-2">
              <div className="floating-icon emerald">
                <IconCheck />
              </div>
              <div>
                <div className="floating-title">Link online</div>
                <div className="floating-sub">Redirection active</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section id="stats" className="container stats-section">
        <div className="stats-bar">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`stats-item animate-in delay-${i + 1}`}>
              <div className="stats-value">{stat.value}</div>
              <div className="stats-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-darker">
        {/* FEATURES BENTO */}
        <section id="features" className="container section-space">
        <div className="section-head">
          <span className="eyebrow"><span className="eyebrow-dot" />Features</span>
          <h2>A <span className="gradient-text">complete and modern</span> toolkit</h2>
          <p>Everything you need to turn every link into a growth lever.</p>
        </div>

        <div className="bento">
          <article className="bento-card bento-large animate-in">
            <div className="bento-head">
              <div className="bento-icon indigo"><IconChart /></div>
              <h3>Detailed analytics</h3>
              <p>Track every click with surgical precision: origin, devices, browsers, sources and trends.</p>
            </div>
            <div className="bento-visual">
              <div className="mini-chart">
                <div className="mini-bar" style={{ height: '40%' }} />
                <div className="mini-bar" style={{ height: '70%' }} />
                <div className="mini-bar" style={{ height: '55%' }} />
                <div className="mini-bar highlight" style={{ height: '92%' }} />
                <div className="mini-bar" style={{ height: '65%' }} />
                <div className="mini-bar" style={{ height: '80%' }} />
                <div className="mini-bar" style={{ height: '50%' }} />
              </div>
            </div>
          </article>

          <article className="bento-card animate-in delay-1">
            <div className="bento-icon amber"><IconZap /></div>
            <h3>Lightning fast</h3>
            <p>Instant redirects powered by our edge infrastructure.</p>
            <div className="bento-metric">
              <span className="metric-value">38ms</span>
              <span className="metric-label">Average latency</span>
            </div>
          </article>

          <article className="bento-card animate-in delay-2">
            <div className="bento-icon emerald"><IconShield /></div>
            <h3>SSL security</h3>
            <p>Automatic HTTPS encryption for all your links.</p>
            <div className="bento-metric">
              <span className="metric-value">100%</span>
              <span className="metric-label">Encrypted links</span>
            </div>
          </article>

          <article className="bento-card bento-wide animate-in delay-1">
            <div className="bento-head">
              <div className="bento-icon violet"><IconLink /></div>
              <h3>Custom slugs</h3>
              <p>Create on-brand links that are easy to remember and share.</p>
            </div>
            <div className="bento-slug-demo">
              <div className="slug-mock">
                <span className="slug-host">redirect.drayko.xyz/</span>
                <span className="slug-custom">launch-day</span>
              </div>
              <div className="slug-mock alt">
                <span className="slug-host">redirect.drayko.xyz/</span>
                <span className="slug-custom">summer-sale</span>
              </div>
            </div>
          </article>

          <article className="bento-card animate-in delay-2">
            <div className="bento-icon cyan"><IconQR /></div>
            <h3>QR Codes</h3>
            <p>Auto-generated QR codes for every link you create.</p>
          </article>

          <article className="bento-card animate-in delay-3">
            <div className="bento-icon rose"><IconCode /></div>
            <h3>REST API</h3>
            <p>Plug DraykoRedirect into your tools and workflows.</p>
          </article>
        </div>
      </section>
      </div>

      <div className="section-default">
      {/* HOW IT WORKS */}
      <section id="how" className="container section-space">
        <div className="section-head">
          <span className="eyebrow"><span className="eyebrow-dot" />How it works</span>
          <h2>Three steps. <span className="gradient-text">Zero friction.</span></h2>
          <p>From a raw URL to a polished link in less than 10 seconds.</p>
        </div>

        <div className="steps">
          <div className="step animate-in">
            <div className="step-num">1</div>
            <h3>Paste your URL</h3>
            <p>Enter the destination address, no matter how long or complex it is.</p>
            <div className="step-visual">
              <div className="code-line"><span className="dot-r" /><span className="dot-y" /><span className="dot-g" /></div>
              <div className="code-line">
                <span className="code-mono muted">https://example.com/very-long...</span>
              </div>
            </div>
          </div>

          <div className="step-arrow">
            <IconArrow />
          </div>

          <div className="step animate-in delay-1">
            <div className="step-num">2</div>
            <h3>Customize</h3>
            <p>Pick a short, memorable slug that matches your brand.</p>
            <div className="step-visual">
              <div className="code-line">
                <span className="code-mono muted">drayko.xyz/</span>
                <span className="code-mono brand">my-link</span>
                <span className="cursor-blink" />
              </div>
            </div>
          </div>

          <div className="step-arrow">
            <IconArrow />
          </div>

          <div className="step animate-in delay-2">
            <div className="step-num">3</div>
            <h3>Share & analyze</h3>
            <p>Share your link anywhere and watch its performance in real time.</p>
            <div className="step-visual">
              <div className="code-line">
                <span className="tag tag-emerald">● Online</span>
                <span className="code-mono muted">2 847 clicks</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <div className="section-darker">
      {/* CTA */}
      <section className="container section-space">
        <div className="cta animate-in">
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-content">
            <span className="eyebrow eyebrow-on-dark"><span className="eyebrow-dot" />Ready to start?</span>
            <h2>Take your links to the next level.</h2>
            <p>Join thousands of users who trust DraykoRedirect to power their traffic.</p>
            <div className="cta-actions">
              <Link href="/dashboard" className="btn btn-gradient">
                Create my first link
                <IconArrow />
              </Link>
              <Link href="/#features" className="btn btn-ghost-on-dark">
                Learn more
              </Link>
            </div>
          </div>

          <div className="cta-decoration" aria-hidden="true">
            <div className="dec-link">drayko.xyz/<span>launch</span></div>
            <div className="dec-link">drayko.xyz/<span>summer</span></div>
            <div className="dec-link">drayko.xyz/<span>deal-2026</span></div>
          </div>
        </div>
      </section>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          padding-top: calc(var(--nav-height) + 4.5rem);
          padding-bottom: 5rem;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.5;
          animation: blob 18s ease-in-out infinite;
        }

        .blob-1 {
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, transparent 70%);
          top: -120px;
          left: -120px;
        }

        .blob-2 {
          width: 520px;
          height: 520px;
          background: radial-gradient(circle, rgba(236, 72, 153, 0.32) 0%, transparent 70%);
          top: 30%;
          right: -160px;
          animation-delay: -6s;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(10, 10, 10, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10, 10, 10, 0.04) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%);
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 4rem;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .hero-content { max-width: 620px; }

        .hero-content h1 { margin: 1.25rem 0 1.25rem; }

        .hero-content p {
          font-size: 1.08rem;
          line-height: 1.65;
          max-width: 540px;
        }

        .hero-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .hero-trust {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.75rem;
          flex-wrap: wrap;
        }

        .trust-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-secondary);
          font-size: 0.88rem;
          font-weight: 500;
        }

        .trust-item :global(svg) {
          color: var(--success);
        }

        /* === Hero visual === */
        .hero-visual {
          position: relative;
          perspective: 2000px;
        }

        .browser-mockup {
          background: var(--bg-surface);
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          overflow: hidden;
          transform: rotateY(-3deg) rotateX(2deg);
          transition: transform 0.4s ease;
        }

        .hero-visual:hover .browser-mockup {
          transform: rotateY(0deg) rotateX(0deg);
        }

        .browser-bar {
          background: var(--bg-soft);
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-bottom: 1px solid var(--line);
        }

        .browser-dots {
          display: flex;
          gap: 0.4rem;
        }

        .browser-dots span {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: var(--bg-muted);
        }

        .browser-dots span:nth-child(1) { background: #fb7185; }
        .browser-dots span:nth-child(2) { background: #fbbf24; }
        .browser-dots span:nth-child(3) { background: #4ade80; }

        .browser-url {
          flex: 1;
          background: var(--bg-surface);
          border: 1px solid var(--line);
          border-radius: var(--radius-sm);
          padding: 0.42rem 0.85rem;
          font-size: 0.82rem;
          color: var(--text-muted);
          font-family: 'JetBrains Mono', monospace;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .lock { font-size: 0.8rem; }

        .browser-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mock-row {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .mock-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }

        .mock-label.primary { color: var(--brand); }

        .mock-field {
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .mock-row.highlight .mock-field {
          background: var(--bg-surface);
          border-color: var(--brand-light);
          box-shadow: 0 0 0 3px var(--brand-soft);
        }

        .mock-value-mono {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.86rem;
        }

        .mock-value-mono.muted { color: var(--text-muted); }
        .mock-value-mono.primary { color: var(--text-main); font-weight: 600; }
        .mock-value-mono.brand { color: var(--brand); font-weight: 700; }

        .mock-copy {
          margin-left: auto;
          font-size: 0.74rem;
          font-weight: 700;
          padding: 0.28rem 0.7rem;
          background: var(--text-main);
          color: var(--text-inverse);
          border-radius: 999px;
        }

        .mock-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          color: var(--text-faint);
          padding: 0.25rem 0;
        }

        .mock-arrow-line {
          flex: 1;
          height: 1px;
          background: var(--line);
          border-top: 1px dashed var(--line-strong);
        }

        .mock-arrow-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--brand-soft);
          color: var(--brand);
          display: grid;
          place-items: center;
        }

        .mock-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
          padding-top: 0.5rem;
        }

        .mock-stat {
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 0.75rem;
          text-align: center;
        }

        .mock-stat-value {
          font-family: 'Manrope', sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        .mock-stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 0.18rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        /* Floating cards */
        .floating-card {
          position: absolute;
          background: var(--bg-surface);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.7rem;
          box-shadow: var(--shadow-lg);
          animation: float 6s ease-in-out infinite;
          z-index: 2;
        }

        .floating-1 {
          top: 8%;
          left: -40px;
          animation-delay: -2s;
        }

        .floating-2 {
          bottom: 8%;
          right: -30px;
          animation-delay: -4s;
        }

        @media (max-width: 1024px) {
          .floating-1 { left: 10px; }
          .floating-2 { right: 10px; }
        }

        @media (max-width: 640px) {
          .floating-card { display: none; }
        }

        .floating-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .floating-icon.cyan { background: #ecfeff; color: #0891b2; }
        .floating-icon.emerald { background: var(--success-soft); color: #047857; }

        .floating-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .floating-sub {
          font-size: 0.74rem;
          color: var(--text-muted);
        }

        /* === Stats bar === */
        .stats-section {
          position: relative;
          z-index: 1;
          margin-top: -2rem;
        }

        .stats-bar {
          background: var(--bg-surface);
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          padding: 1.5rem 2rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 720px) {
          .stats-bar { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        }

        .stats-item { text-align: center; }

        .stats-item + .stats-item {
          border-left: 1px solid var(--line);
        }

        @media (max-width: 720px) {
          .stats-item + .stats-item { border-left: 0; }
        }

        .stats-value {
          font-family: 'Manrope', sans-serif;
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--text-main);
        }

        .stats-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
          margin-top: 0.25rem;
        }

        /* === Section head === */
        .section-head {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .section-head .eyebrow { margin-bottom: 1.25rem; }
        .section-head h2 { margin-bottom: 0.85rem; }
        .section-head p { font-size: 1.05rem; }

        /* === Bento grid === */
        .bento {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: minmax(220px, auto);
          gap: 1.25rem;
        }

        .bento-card {
          background: var(--bg-surface);
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .bento-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--brand-light), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .bento-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--line-strong);
        }

        .bento-card:hover::after { opacity: 1; }

        .bento-large { grid-column: span 2; grid-row: span 2; }
        .bento-wide { grid-column: span 2; }

        @media (max-width: 900px) {
          .bento { grid-template-columns: repeat(2, 1fr); }
          .bento-large { grid-column: span 2; grid-row: auto; }
          .bento-wide { grid-column: span 2; }
        }

        @media (max-width: 540px) {
          .bento { grid-template-columns: 1fr; }
          .bento-large, .bento-wide { grid-column: span 1; }
        }

        .bento-head {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .bento-head p { font-size: 0.92rem; }

        .bento-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          margin-bottom: 0.5rem;
        }

        .bento-icon.indigo { background: var(--brand-soft); color: var(--brand); }
        .bento-icon.amber { background: var(--warning-soft); color: #b45309; }
        .bento-icon.emerald { background: var(--success-soft); color: #047857; }
        .bento-icon.violet { background: #f5f3ff; color: #7c3aed; }
        .bento-icon.cyan { background: #ecfeff; color: #0891b2; }
        .bento-icon.rose { background: #fff1f2; color: #be123c; }

        .bento-card h3 { font-size: 1.15rem; font-family: 'Manrope', sans-serif; }
        .bento-card p { font-size: 0.92rem; }

        .bento-visual {
          margin-top: auto;
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 1.25rem;
        }

        .mini-chart {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 0.4rem;
          height: 110px;
        }

        .mini-bar {
          flex: 1;
          background: linear-gradient(180deg, #c7d2fe 0%, #6366f1 100%);
          border-radius: 6px 6px 2px 2px;
          min-height: 8px;
          transition: transform 0.3s ease;
        }

        .mini-bar.highlight {
          background: linear-gradient(180deg, #f0abfc 0%, #c026d3 100%);
          box-shadow: 0 -8px 20px rgba(192, 38, 211, 0.25);
        }

        .bento-metric {
          display: flex;
          align-items: baseline;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: 0.5rem;
        }

        .metric-value {
          font-family: 'Manrope', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        .metric-label {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .bento-slug-demo {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .slug-mock {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.7rem 0.95rem;
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
        }

        .slug-mock.alt { border-color: var(--brand-light); background: var(--brand-soft); }

        .slug-host { color: var(--text-muted); }
        .slug-custom { color: var(--brand); font-weight: 700; }

        /* === Steps === */
        .steps {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 1rem;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .steps {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .step-arrow { transform: rotate(90deg); padding: 0.5rem 0; }
        }

        .step {
          background: var(--bg-surface);
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .step:hover { border-color: var(--brand-light); transform: translateY(-2px); }

        .step-num {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: #fff;
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          display: grid;
          place-items: center;
          font-size: 0.95rem;
          box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
        }

        .step h3 { font-size: 1.1rem; }
        .step p { font-size: 0.92rem; }

        .step-visual {
          margin-top: auto;
          padding: 0.85rem 1rem;
          background: #0a0a0a;
          border-radius: var(--radius);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.82rem;
          color: #d4d4d8;
          min-height: 80px;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .code-line {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .code-mono { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; }
        .code-mono.muted { color: #71717a; }
        .code-mono.brand { color: #a5b4fc; }

        .dot-r, .dot-y, .dot-g {
          width: 9px;
          height: 9px;
          border-radius: 50%;
        }
        .dot-r { background: #fb7185; }
        .dot-y { background: #fbbf24; }
        .dot-g { background: #4ade80; }

        .cursor-blink {
          display: inline-block;
          width: 7px;
          height: 14px;
          background: #a5b4fc;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        .step-arrow {
          display: grid;
          place-items: center;
          color: var(--text-faint);
          padding: 0 0.25rem;
        }

        /* === CTA === */
        .cta {
          position: relative;
          background: #0a0a0a;
          color: #fafafa;
          border-radius: var(--radius-2xl);
          padding: 4.5rem 3rem;
          text-align: center;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 3rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .cta { grid-template-columns: 1fr; padding: 3rem 1.5rem; text-align: center; }
        }

        .cta-glow {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(600px 300px at 20% 0%, rgba(99, 102, 241, 0.4) 0%, transparent 60%),
            radial-gradient(500px 300px at 80% 100%, rgba(236, 72, 153, 0.32) 0%, transparent 60%);
          z-index: 0;
        }

        .cta-content { position: relative; z-index: 1; }

        .cta-content h2 {
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          color: #fafafa;
          margin: 1.25rem 0 0.85rem;
          background: linear-gradient(180deg, #ffffff 0%, #9ca3af 60%, #6b7280 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .cta-content p {
          color: rgba(250, 250, 250, 0.7);
          font-size: 1.02rem;
          max-width: 520px;
          margin: 0 auto 2rem;
        }

        .cta-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .eyebrow-on-dark {
          background: rgba(255, 255, 255, 0.08);
          color: #c4b5fd;
          border-color: rgba(196, 181, 253, 0.18);
        }

        .btn-ghost-on-dark {
          color: rgba(250, 250, 250, 0.85);
          border-color: rgba(255, 255, 255, 0.15);
          background: transparent;
        }

        .btn-ghost-on-dark:hover {
          background: rgba(255, 255, 255, 0.06);
          color: #fff;
          border-color: rgba(255, 255, 255, 0.25);
        }

        .cta-decoration {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .cta-decoration { max-width: 280px; margin: 0 auto; }
        }

        .dec-link {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius);
          padding: 0.75rem 1rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: rgba(250, 250, 250, 0.5);
          text-align: left;
          backdrop-filter: blur(8px);
        }

        .dec-link span {
          color: #a5b4fc;
          font-weight: 700;
        }

        /* === Section wrappers === */
        .section-darker {
          width: 100%;
          background: var(--bg-muted);
          padding: 3rem 0;
          margin-top: 3rem;
        }
        .section-default {
          width: 100%;
        }
      `}</style>
    </>
  );
}
