'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

const IconOff = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64A9 9 0 0 1 5.64 18.36" /><path d="M12 2v4" /><circle cx="12" cy="12" r="10" /></svg>
);

const IconClock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

const IconCopy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
);

const IconLock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);

const IconLink = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);

export default function Home() {
  const [show404, setShow404] = useState(false);
  const [notFoundSlug, setNotFoundSlug] = useState('');
  const [createUrl, setCreateUrl] = useState('');
  const [customId, setCustomId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<{ slug: string } | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#404') {
      setNotFoundSlug(window.location.pathname.split('/').pop() || '');
      setShow404(true);
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      const timer = setTimeout(() => setShow404(false), 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('https://create.flexurl.link/api/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: createUrl, customId: customId || undefined }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong.');
      } else {
        setResult({ slug: data.slug });
        setCreateUrl('');
        setCustomId('');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(`https://flexurl.link/${result.slug}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Copy failed');
    }
  };

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
            <div className="hero-badge animate-in delay-1">
              <span className="hero-badge-icon">✦</span>
              180 days since launch
            </div>

            <span className="eyebrow animate-in delay-2">
              <span className="eyebrow-dot" />
              Privacy first link shortener
            </span>

            <h1 className="text-balance animate-in delay-3">
              Short links.<br />
              <span className="gradient-text">No compromise.</span>
            </h1>

            <p className="text-balance animate-in delay-4">
              No account, no tracking, no cookies. Just a link that works.
            </p>

            <div className="hero-trust animate-in delay-5">
              <div className="trust-item">
                <IconCheck /> No account needed
              </div>
              <div className="trust-item">
                <IconCheck /> Zero data collected
              </div>
              <div className="trust-item">
                <IconCheck /> Links expire automatically
              </div>
            </div>
          </div>

          {/* Hero form */}
          <div className="hero-visual animate-scale delay-3">
            <div className="hero-form-card">
              {result ? (
                <div className="hero-result">
                  <div className="hero-result-success">
                    <IconCheck /> Link created!
                  </div>
                  <div className="hero-input-group">
                    <span className="hero-input-prefix">flexurl.link/</span>
                    <input type="text" value={result.slug} readOnly style={{ fontWeight: 700, fontFamily: 'JetBrains Mono, monospace', textAlign: 'center' }} />
                  </div>
                  <div className="hero-result-actions">
                    <button onClick={copyLink} className="btn btn-primary" type="button">
                      {copied ? <><IconCheck /> Copied</> : <><IconCopy /> Copy link</>}
                    </button>
                    <button onClick={() => setResult(null)} className="btn btn-soft" type="button">
                      Create another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCreate} className="hero-create-form">
                  <div className="hero-form-field">
                    <label className="hero-form-label" htmlFor="hero-url">Destination URL</label>
                    <input
                      id="hero-url"
                      type="url"
                      value={createUrl}
                      onChange={(e) => setCreateUrl(e.target.value)}
                      required
                      placeholder="https://example.com/my-long-url"
                    />
                  </div>

                  <div className="hero-form-field">
                    <label className="hero-form-label" htmlFor="hero-slug">
                      Custom slug <span className="hero-form-hint">(optional)</span>
                    </label>
                    <div className="hero-input-group">
                      <span className="hero-input-prefix">flexurl.link/</span>
                      <input
                        id="hero-slug"
                        type="text"
                        value={customId}
                        onChange={(e) => setCustomId(e.target.value)}
                        placeholder="my-slug"
                        maxLength={100}
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="hero-alert hero-alert-error">
                      {error}
                    </div>
                  )}

                  <button type="submit" disabled={loading} className="btn btn-gradient btn-lg btn-block">
                    {loading ? <><span className="hero-spinner" /> Creating...</> : 'Create short link'}
                  </button>
                </form>
              )}

              <div className="hero-form-footer">
                <a href="https://create.flexurl.link" target="_blank" rel="noreferrer" className="hero-form-link">
                  Open full editor <IconArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-darker">
        {/* FEATURES */}
        <section id="features" className="container section-space">
          <div className="section-head">
            <span className="eyebrow"><span className="eyebrow-dot" />Why FlexURL</span>
            <h2>Shortened links, <span className="gradient-text">nothing else.</span></h2>
            <p>No accounts, no dashboards, no analytics. Just a link that works.</p>
          </div>

          <div className="bento">
            <article className="bento-card animate-in">
              <div className="bento-icon emerald"><IconShield /></div>
              <h3>Zero tracking</h3>
              <p>No clicks counted, no visitors profiled, no data harvested. Your links are just links.</p>
            </article>

            <article className="bento-card animate-in delay-1">
              <div className="bento-icon violet"><IconOff /></div>
              <h3>No account required</h3>
              <p>No sign-up, no login, no password reset emails. Paste a URL and you&apos;re done.</p>
            </article>

            <article className="bento-card animate-in delay-2">
              <div className="bento-icon amber"><IconClock /></div>
              <h3>Expiration dates</h3>
              <p>Set how long your link lives. When it expires, it&apos;s gone. No residue, no data left behind.</p>
            </article>

            <article className="bento-card animate-in delay-3">
              <div className="bento-icon indigo"><IconLock /></div>
              <h3>Encrypted destinations</h3>
              <p>Destination URLs are encrypted at rest. Even we can&apos;t read where your links point to.</p>
            </article>

            <article className="bento-card bento-wide animate-in delay-4">
              <div className="bento-head">
                <div className="bento-icon rose"><IconLink /></div>
                <h3>Custom slugs</h3>
                <p>Create memorable, on-brand short links. Or let us generate a random one for you.</p>
              </div>
              <div className="bento-slug-demo">
                <div className="slug-mock">
                  <span className="slug-host">flexurl.link/</span>
                  <span className="slug-custom">launch-day</span>
                </div>
                <div className="slug-mock alt">
                  <span className="slug-host">flexurl.link/</span>
                  <span className="slug-custom">summer-sale</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>

      <div className="section-default">
        {/* HOW IT WORKS */}
        <section id="how" className="container section-space">
          <div className="section-head">
            <span className="eyebrow"><span className="eyebrow-dot" />How it works</span>
            <h2>Paste. Shorten. <span className="gradient-text">Done.</span></h2>
            <p>From a raw URL to a short link in under 5 seconds.</p>
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
              <h3>Customize (or not)</h3>
              <p>Choose a slug or let us generate one. Optionally set an expiration date.</p>
              <div className="step-visual">
                <div className="code-line">
                  <span className="code-mono muted">flexurl.link/</span>
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
              <h3>Share it</h3>
              <p>Copy your short link and share it anywhere. No strings attached.</p>
              <div className="step-visual">
                <div className="code-line">
                  <span className="tag tag-emerald">&#9679; Active</span>
                  <span className="code-mono muted">Ready to share</span>
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
              <span className="eyebrow eyebrow-on-dark"><span className="eyebrow-dot" />Ready?</span>
              <h2>Create your first link.</h2>
              <p>No account. No tracking. No BS. Just a short link that works.</p>
              <div className="cta-actions">
                <a href="https://create.flexurl.link" target="_blank" rel="noreferrer" className="btn btn-gradient">
                  Create a link
                  <IconArrow />
                </a>
                <Link href="/#features" className="btn btn-ghost-on-dark">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="cta-decoration" aria-hidden="true">
              <div className="dec-link">flexurl.link/<span>launch</span></div>
              <div className="dec-link">flexurl.link/<span>summer</span></div>
              <div className="dec-link">flexurl.link/<span>deal-2026</span></div>
            </div>
          </div>
        </section>
      </div>

      {show404 && (
        <div className="toast-404">
          <span className="toast-404-icon">!</span>
          <span>The URL <strong>/{notFoundSlug}</strong> you requested doesn&apos;t exist.</span>
          <button className="toast-404-close" onClick={() => setShow404(false)}>&times;</button>
        </div>
      )}

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

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.2rem;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
          letter-spacing: 0.025em;
          margin-bottom: 1.25rem;
        }

        .hero-badge-icon {
          font-size: 1rem;
        }

        /* === Hero form === */
        .hero-visual {
          position: relative;
        }

        .hero-form-card {
          background: var(--bg-surface);
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          padding: 2rem;
          animation: scaleIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .hero-create-form {
          display: flex;
          flex-direction: column;
        }

        .hero-form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }

        .hero-form-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .hero-form-hint {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        .hero-input-group {
          display: flex;
          align-items: stretch;
          border: 1px solid var(--line);
          border-radius: var(--radius-sm);
          background: #fff;
          overflow: hidden;
          transition: border-color 0.18s ease, box-shadow 0.18s ease;
        }

        .hero-input-group:focus-within {
          border-color: var(--brand-light);
          box-shadow: 0 0 0 4px var(--brand-soft);
        }

        .hero-input-prefix {
          display: flex;
          align-items: center;
          padding: 0 0.75rem;
          background: var(--bg-soft);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 500;
          border-right: 1px solid var(--line);
          white-space: nowrap;
        }

        .hero-input-group input {
          border: 0;
          border-radius: 0;
          padding: 0.72rem 0.85rem;
          background: transparent;
          font-size: 0.92rem;
        }

        .hero-input-group input:focus { box-shadow: none; }

        .hero-alert {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 0.9rem;
          border-radius: var(--radius);
          border: 1px solid;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }

        .hero-alert-error {
          background: var(--danger-soft);
          color: #991b1b;
          border-color: rgba(220, 38, 38, 0.2);
        }

        .hero-spinner {
          width: 18px;
          height: 18px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        .hero-result {
          text-align: center;
        }

        .hero-result-success {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: var(--success-soft);
          color: #065f46;
          border: 1px solid rgba(5, 150, 105, 0.2);
          border-radius: var(--radius);
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .hero-result .hero-input-group {
          margin-bottom: 1rem;
        }

        .hero-result-actions {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        .hero-form-footer {
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--line);
          text-align: center;
        }

        .hero-form-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.84rem;
          font-weight: 600;
          color: var(--brand);
          transition: color 0.18s ease;
        }

        .hero-form-link:hover {
          color: var(--brand-dark);
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

        .bento-wide { grid-column: span 2; }

        @media (max-width: 900px) {
          .bento { grid-template-columns: repeat(2, 1fr); }
          .bento-wide { grid-column: span 2; }
        }

        @media (max-width: 540px) {
          .bento { grid-template-columns: 1fr; }
          .bento-wide { grid-column: span 1; }
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
        .bento-icon.rose { background: #fff1f2; color: #be123c; }

        .bento-card h3 { font-size: 1.15rem; font-family: 'Manrope', sans-serif; }
        .bento-card p { font-size: 0.92rem; }

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

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.74rem;
          font-weight: 700;
          padding: 0.2rem 0.55rem;
          border-radius: 999px;
        }

        .tag-emerald {
          background: rgba(16, 185, 129, 0.12);
          color: #059669;
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
          margin-top: 2rem;
        }
        .section-default {
          width: 100%;
        }

        .toast-404 {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          background: var(--danger-soft);
          border: 1px solid rgba(220, 38, 38, 0.18);
          border-radius: var(--radius);
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          box-shadow: var(--shadow-lg);
          z-index: 999;
          animation: fadeInUp 0.35s ease;
          max-width: 420px;
        }

        .toast-404-icon {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--danger);
          color: #fff;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .toast-404 strong {
          color: var(--text-main);
        }

        .toast-404-close {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 1rem;
          color: var(--text-muted);
          transition: background 0.18s ease, color 0.18s ease;
          margin-left: auto;
        }

        .toast-404-close:hover {
          background: var(--bg-muted);
          color: var(--text-main);
        }

        @media (max-width: 640px) {
          .toast-404 {
            left: 1rem;
            right: 1rem;
            bottom: 1rem;
            max-width: none;
          }
        }
      `}</style>
    </>
  );
}
