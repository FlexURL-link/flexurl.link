'use client';

import Link from 'next/link';

// --- Icons (Inline SVGs for no dependencies) ---
const IconChart = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
);
const IconLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);

const stats = [
  { label: 'Liens générés', value: '1.2M+' },
  { label: 'Uptime garanti', value: '99.9%' },
  { label: 'Utilisateurs', value: '45k+' },
  { label: 'Temps de réponse', value: '< 50ms' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="landing-nav">
        <div className="container landing-nav-inner">
          <div className="brand" style={{ fontSize: '1.3rem', fontWeight: 800 }}>
            Drayko<span className="gradient-text">Redirect</span>
          </div>
          <div className="nav-links">
            <Link href="#features">Fonctionnalités</Link>
            <Link href="#stats">Impact</Link>
            <Link href="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container hero-section">
        <div className="hero-content animate-in">
          <span className="hero-badge">L'outil de redirection de référence</span>
          <h1 className="text-balance" style={{ marginTop: '1.2rem', textAlign: 'center' }}>
            Transformez vos URLs en <br />
            <span className="gradient-text">liens intelligents</span> et mémorables.
          </h1>
          <p style={{ maxWidth: 700, margin: '1.5rem auto', textAlign: 'center', fontSize: '1.1rem' }}>
            DraykoRedirect offre une infrastructure robuste pour raccourcir, gérer et analyser vos liens
            en temps réel. Simple, ultra-rapide et conçu pour la performance.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link href="/dashboard" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.05rem' }}>
              Commencer gratuitement
            </Link>
            <Link href="#features" className="btn btn-soft" style={{ padding: '0.8rem 2rem' }}>
              Découvrir les outils
            </Link>
          </div>
        </div>

        {/* Hero Preview Card */}
        <div className="hero-visual animate-in delay-2" style={{ marginTop: '5rem' }}>
          <div className="glass-card main-preview">
            <div className="preview-header">
              <div className="dots">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <div className="preview-url-bar">redirect.drayko.xyz/awesome-git</div>
            </div>
            <div className="preview-body">
              <div className="input-mockup">
                <div className="label">Destination URL</div>
                <div className="field">https://github.com/drayko/my-awesome-project-2026</div>
              </div>
              <div className="arrow-mockup">
                <IconZap />
              </div>
              <div className="input-mockup active">
                <div className="label">Lien Court</div>
                <div className="field-group">
                  <div className="field-prefix">redirect.drayko.xyz/</div>
                  <div className="field-value">awesome-git</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="container section-space" style={{ borderTop: '1px solid var(--line)', paddingTop: '4rem' }}>
        <div className="stats-grid-row animate-in delay-3">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-value gradient-text">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bento Features Section */}
      <section id="features" className="container section-space">
        <div className="section-head text-center" style={{ marginBottom: '3rem', maxWidth: 'none' }}>
          <h2 style={{ textAlign: 'center' }}>Une suite d'outils complète</h2>
          <p style={{ textAlign: 'center' }}>Tout ce dont vous avez besoin pour piloter votre trafic.</p>
        </div>

        <div className="bento-grid">
          {/* Feature 1: Analytics (Large) */}
          <div className="glass-card bento-item col-span-2 row-span-2">
            <div>
              <div className="icon-wrap color-blue"><IconChart /></div>
              <h3>Analyses Détaillées</h3>
              <p>Suivez chaque clic avec une précision chirurgicale. Visualisez la provenance géographique, les navigateurs et les sources de trafic en temps réel.</p>
            </div>
            <div className="feature-visual chart-preview">
              <div className="bar-h" style={{ width: '80%' }}></div>
              <div className="bar-h" style={{ width: '45%' }}></div>
              <div className="bar-h" style={{ width: '60%' }}></div>
            </div>
          </div>

          {/* Feature 2: Speed (Medium) */}
          <div className="glass-card bento-item col-span-2">
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <div className="icon-wrap color-orange"><IconZap /></div>
                <h3>Vitesse Éclair</h3>
                <p>Redirections via Edge Computing pour une latence minimale partout dans le monde.</p>
              </div>
            </div>
          </div>

          {/* Feature 3: Security */}
          <div className="glass-card bento-item col-span-1">
            <div className="icon-wrap color-green"><IconShield /></div>
            <h3>Sécurité SSL</h3>
            <p>Tous vos liens sont sécurisés par défaut avec HTTPS.</p>
          </div>

          {/* Feature 4: Custom Slugs */}
          <div className="glass-card bento-item col-span-1">
            <div className="icon-wrap color-purple"><IconLink /></div>
            <h3>Slugs Custom</h3>
            <p>Personnalisez vos liens pour renforcer votre branding.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container section-space">
        <div className="glass-card how-step-card">
          <div className="how-grid">
            <div className="how-text">
              <h2>Comment ça marche ?</h2>
              <p>En moins de 10 secondes, votre lien est prêt à être partagé avec le monde entier.</p>
              <div className="steps-list">
                <div className="step-item">
                  <div className="step-num">1</div>
                  <div>
                    <h4>Collez votre URL</h4>
                    <p>Entrez l'adresse de destination, peu importe sa longueur.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">2</div>
                  <div>
                    <h4>Personnalisez</h4>
                    <p>Choisissez un nom court et facile à retenir.</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-num">3</div>
                  <div>
                    <h4>Partagez</h4>
                    <p>Utilisez votre lien partout et suivez ses performances.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="how-visual-placeholder">
              {/* Visual decoration */}
              <div className="blob-decoration"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container section-space">
        <div className="glass-card cta-premium">
          <h2 style={{ color: 'white' }}>Prêt à passer au niveau supérieur ?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem' }}>
            Rejoignez des milliers d'utilisateurs qui font confiance à DraykoRedirect pour leurs liens.
          </p>
          <Link href="/dashboard" className="btn btn-primary" style={{ background: 'white', color: 'var(--brand)', border: 'none' }}>
            Ouvrir mon dashboard
          </Link>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="brand" style={{ marginBottom: '1rem', opacity: 0.6 }}>DraykoRedirect</div>
          <p>© 2026 DraykoRedirect. Crafted for performance.</p>
        </div>
      </footer>

      <style jsx>{`
        .hero-section {
          padding-top: calc(var(--nav-height) + 6rem);
          padding-bottom: 6rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: inline-block;
          border-radius: 999px;
          background: var(--brand-soft);
          color: var(--brand);
          padding: 0.5rem 1.2rem;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 10px rgba(29, 78, 216, 0.1);
        }

        .hero-actions {
          margin-top: 2.5rem;
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .main-preview {
          width: 100%;
          max-width: 900px;
          overflow: hidden;
          padding: 0;
          border: 1px solid rgba(255,255,255,0.5);
          box-shadow: var(--shadow-xl);
        }

        .preview-header {
           background: rgba(246, 248, 251, 0.5);
           padding: 0.8rem 1.2rem;
           display: flex;
           align-items: center;
           border-bottom: 1px solid var(--line);
        }

        .dots {
          display: flex;
          gap: 0.5rem;
          margin-right: 2rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d1d5db;
        }

        .preview-url-bar {
          background: white;
          border-radius: 6px;
          padding: 0.3rem 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
          flex: 1;
          border: 1px solid var(--line);
        }

        .preview-body {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: white;
        }

        .input-mockup {
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 1rem;
          background: var(--bg-page);
        }

        .input-mockup.active {
          border-color: var(--brand);
          background: white;
          box-shadow: 0 0 0 4px var(--brand-soft);
        }

        .input-mockup .label {
          font-size: 0.7rem;
          text-transform: uppercase;
          font-weight: 800;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }

        .input-mockup .field {
          font-family: monospace;
          color: var(--text-main);
          font-size: 1rem;
        }

        .field-group {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .field-prefix { color: var(--text-muted); }
        .field-value { color: var(--brand); }

        .arrow-mockup {
          display: flex;
          justify-content: center;
          color: var(--brand);
          opacity: 0.3;
        }

        .stats-grid-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 3rem;
          text-align: center;
          padding: 2rem 0;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: 'Manrope', sans-serif;
        }

        .stat-label {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.8rem;
        }

        .color-blue { background: #eff6ff; color: #2563eb; }
        .color-orange { background: #fff7ed; color: #ea580c; }
        .color-green { background: #f0fdf4; color: #16a34a; }
        .color-purple { background: #faf5ff; color: #9333ea; }

        .feature-visual {
           margin-top: 2rem;
           background: var(--bg-soft);
           border-radius: 8px;
           padding: 1.5rem;
           display: flex;
           flex-direction: column;
           gap: 1rem;
        }

        .bar-h {
          height: 12px;
          border-radius: 999px;
          background: var(--brand);
          opacity: 0.2;
        }

        .how-step-card {
          padding: 4rem;
        }

        .how-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .steps-list {
          margin-top: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .step-item {
          display: flex;
          gap: 1.5rem;
        }

        .step-num {
          width: 36px;
          height: 36px;
          background: var(--brand);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          flex-shrink: 0;
        }

        .how-visual-placeholder {
          height: 300px;
          background: var(--bg-soft);
          border-radius: var(--radius);
          position: relative;
          overflow: hidden;
        }

        .blob-decoration {
          position: absolute;
          width: 200px;
          height: 200px;
          background: var(--brand);
          filter: blur(80px);
          opacity: 0.1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .cta-premium {
          background: var(--brand);
          padding: 6rem 5rem;
          text-align: center;
          box-shadow: 0 20px 40px rgba(29, 78, 216, 0.2);
          border-radius: 24px;
        }

        @media (max-width: 900px) {
          .stats-grid-row { grid-template-columns: repeat(2, 1fr); }
          .how-grid { grid-template-columns: 1fr; }
          .how-visual-placeholder { display: none; }
          .cta-premium { padding: 3rem 1.5rem; }
        }
      `}</style>
    </main>
  );
}
