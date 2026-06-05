import { isAdmin } from '@/lib/auth';
import { getRedirects, getAdminStats } from '@/lib/actions';
import { redirect } from 'next/navigation';
import DashboardClient from './DashboardClient';
import { DashboardShell } from '@/components/DashboardShell';
import Link from 'next/link';

const IconLogout = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  if (!(await isAdmin())) {
    redirect('/admin');
  }

  const [redirects, stats] = await Promise.all([getRedirects(), getAdminStats()]);

  return (
    <DashboardShell
      title="Administration"
      subtitle="Service overview and redirect management."
      pageActions={
        <form action="/api/auth/logout" method="POST">
          <button type="submit" className="btn btn-soft btn-sm">
            <IconLogout />
            Log out
          </button>
        </form>
      }
    >
      <div className="stat-grid" style={{ marginBottom: '1.25rem' }}>
        <div className="stat-card animate-in">
          <div className="stat-card-label">
            <span>Total links</span>
            <div className="stat-card-icon indigo">📊</div>
          </div>
          <div className="stat-card-value">{stats.totals.total_links}</div>
          <div className="stat-card-sub">All-time</div>
        </div>
        <div className="stat-card animate-in delay-1">
          <div className="stat-card-label">
            <span>Total clicks</span>
            <div className="stat-card-icon cyan">🖱</div>
          </div>
          <div className="stat-card-value">{stats.totals.total_clicks}</div>
          <div className="stat-card-sub">Cumulative</div>
        </div>
        <div className="stat-card animate-in delay-2">
          <div className="stat-card-label">
            <span>New (24h)</span>
            <div className="stat-card-icon emerald">✨</div>
          </div>
          <div className="stat-card-value">+{stats.totals.new_links_24h}</div>
          <div className="stat-card-sub">Links created today</div>
        </div>
      </div>

      <DashboardClient initialRedirects={redirects} />
    </DashboardShell>
  );
}
