'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';

const IconDashboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" /></svg>
);
const IconLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
);
const IconQR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 14h3v3h-3zM19 14h2v2h-2zM14 19h2v2h-2zM19 19h2v2h-2z" /></svg>
);
const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
);
const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
);
const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
const IconPlus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);

const navItems = [
  { href: '/dashboard', label: 'Overview', Icon: IconDashboard, exact: true },
  { href: '/dashboard#links', label: 'My links', Icon: IconLink },
  { href: '/dashboard#stats', label: 'Statistics', Icon: IconChart },
];

const tools = [
  { href: '/dashboard#qr', label: 'QR Codes', Icon: IconQR },
  { href: '/dashboard#settings', label: 'Settings', Icon: IconSettings },
];

export function DashboardShell({
  children,
  title,
  subtitle,
  pageActions,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  pageActions?: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="dashboard-shell">
      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)} />}

      <aside className={`dashboard-sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <Link href="/" className="brand">
            <span className="brand-mark">D</span>
            <span>FlexURL</span>
          </Link>
          <button
            className="btn btn-icon btn-ghost mobile-only"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        </div>

        <div>
          <div className="sidebar-section-title">Navigation</div>
          <nav className="sidebar-nav">
            {navItems.map((item) => {
              const active = item.exact ? pathname === item.href : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`sidebar-link ${active ? 'active' : ''}`}
                >
                  <item.Icon />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <div className="sidebar-section-title">Tools</div>
          <nav className="sidebar-nav">
            {tools.map((item) => (
              <Link key={item.href} href={item.href} className="sidebar-link">
                <item.Icon />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="brand-mark" style={{ width: 36, height: 36, fontSize: '0.9rem' }}>
              <UserButton afterSignOutUrl="/" appearance={{ elements: { userButtonBox: { width: '100%', height: '100%' }, userButtonAvatarBox: { width: 36, height: 36 } } }} />
            </div>
            <div className="sidebar-user-info">
              <span className="sidebar-user-name">My account</span>
              <span className="sidebar-user-role">User space</span>
            </div>
          </div>
        </div>
      </aside>

      <div className="dashboard-main">
        <header className="dashboard-topbar">
          <div className="dashboard-topbar-title">
            <button
              className="btn btn-icon btn-ghost mobile-only"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu />
            </button>
            <Link href="/dashboard" className="brand desktop-only" style={{ fontSize: '1rem' }}>
              <span className="brand-mark" style={{ width: 28, height: 28, fontSize: '0.85rem' }}>D</span>
              <span>FlexURL</span>
            </Link>
          </div>
          <div className="dashboard-topbar-actions">
            <Link href="/" className="btn btn-ghost btn-sm desktop-only">
              <IconHome />
              <span>Home</span>
            </Link>
            <Link href="/dashboard#new" className="btn btn-gradient btn-sm">
              <IconPlus />
              <span>New link</span>
            </Link>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-content-narrow">
            {(title || pageActions) && (
              <div className="dashboard-page-header">
                <div>
                  {title && <h1 className="dashboard-page-title">{title}</h1>}
                  {subtitle && <p className="dashboard-page-subtitle">{subtitle}</p>}
                </div>
                {pageActions}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mobile-only { display: none; }

        @media (max-width: 900px) {
          .mobile-only { display: inline-flex; }
          .desktop-only { display: none !important; }
        }
      `}</style>
    </div>
  );
}
