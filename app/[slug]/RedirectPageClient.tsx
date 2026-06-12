'use client';

import { useEffect, useState } from 'react';

type RedirectEventStatus = 'completed' | 'abandoned';

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="2" />
  </svg>
);

export default function RedirectPageClient({ url, eventToken }: { url: string; eventToken: string }) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    let finalEventSent = false;
    let redirectStarted = false;

    const sendStatus = (status: RedirectEventStatus) => {
      if (!eventToken) return;
      if (finalEventSent) return;
      finalEventSent = true;

      const payload = JSON.stringify({ eventToken, status });
      const blob = new Blob([payload], { type: 'application/json' });
      const sent = navigator.sendBeacon('/api/redirect-events', blob);
      if (!sent) {
        fetch('/api/redirect-events', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    };

    const onPageHide = () => {
      if (!redirectStarted) {
        sendStatus('abandoned');
      }
    };

    window.addEventListener('pagehide', onPageHide);

    if (countdown <= 0) {
      redirectStarted = true;
      sendStatus('completed');
      const timer = setTimeout(() => {
        window.location.href = url;
      }, 40);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('pagehide', onPageHide);
      };
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, [countdown, eventToken, url]);

  return (
    <div className="redirect-interpage">
      <div className="redirect-card">
        <div className="redirect-count">{countdown}</div>
        <h1 style={{ fontSize: '1.4rem', fontFamily: 'Manrope, sans-serif', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Redirecting…
        </h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
          You will be redirected in <strong style={{ color: 'var(--brand)' }}>{countdown}</strong> second{countdown > 1 ? 's' : ''}.
        </p>

        <div className="redirect-target">
          <span style={{ color: 'var(--text-faint)', fontSize: '0.74rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Destination
          </span>
          {url}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
          <a
            href={url}
            className="btn btn-primary btn-sm"
            rel="noreferrer noopener"
          >
            <IconExternal />
            Open now
          </a>
        </div>

        <p style={{ marginTop: '1.5rem', fontSize: '0.82rem', color: 'var(--text-faint)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
          <IconShield />
          Powered by <strong style={{ color: 'var(--text-secondary)', fontWeight: 700 }}>FlexURL</strong>
        </p>
      </div>
    </div>
  );
}
