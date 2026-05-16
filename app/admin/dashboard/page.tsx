import { isAdmin } from '@/lib/auth';
import { getRedirects, getAdminStats } from '@/lib/actions';
import { redirect } from 'next/navigation';
import DashboardClient from './DashboardClient';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  if (!(await isAdmin())) {
    redirect('/admin');
  }

  const [redirects, stats] = await Promise.all([getRedirects(), getAdminStats()]);

  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <div className="container header-flex">
          <div className="dashboard-brand">
            <span className="brand">DraykoRedirect</span>
            <span className="brand-pill">Admin</span>
          </div>
          <form action="/api/auth/logout" method="POST">
            <button type="submit" className="btn btn-soft">
              Deconnexion
            </button>
          </form>
        </div>
      </header>

      <div className="content">
        <section className="admin-stats-summary animate-in">
          <div className="stat-mini-card">
            <span className="label">Liens totaux</span>
            <span className="value">{stats.totals.total_links}</span>
          </div>
          <div className="stat-mini-card">
            <span className="label">Clics totaux</span>
            <span className="value">{stats.totals.total_clicks}</span>
          </div>
          <div className="stat-mini-card">
            <span className="label">Nouveaux (24h)</span>
            <span className="value">+{stats.totals.new_links_24h}</span>
          </div>
        </section>

        <DashboardClient initialRedirects={redirects} />
      </div>

      <style jsx>{`
        .admin-stats-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-mini-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
        }

        .stat-mini-card .label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .stat-mini-card .value {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--brand);
        }
      `}</style>
    </main>
  );
}

