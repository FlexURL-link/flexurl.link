'use client';

import { useState } from 'react';
import { createRedirect, deleteRedirect } from '@/lib/actions';

const IconLink = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);
const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const IconCopy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
);
const IconLinkBig = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);

export default function DashboardClient({ initialRedirects }: { initialRedirects: any[] }) {
  const [url, setUrl] = useState('');
  const [customId, setCustomId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await createRedirect(url, customId || undefined);
      if (res.error) {
        setError(res.error);
      } else {
        setUrl('');
        setCustomId('');
        window.location.reload();
      }
    } catch {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this link?')) return;

    try {
      await deleteRedirect(id);
      window.location.reload();
    } catch {
      alert('Error while deleting.');
    }
  };

  const copyToClipboard = async (id: string) => {
    const fullUrl = `${window.location.origin}/redirect/${id}`;
    try {
      await navigator.clipboard.writeText(fullUrl);
      alert('Link copied to clipboard.');
    } catch {
      alert(`Could not copy automatically. Link: ${fullUrl}`);
    }
  };

  return (
    <div className="dash-grid">
      {/* === CREATE LINK === */}
      <article className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">
              <span className="stat-card-icon indigo" style={{ width: 28, height: 28, borderRadius: 8 }}><IconPlus /></span>
              Create a link
            </h2>
            <p className="panel-title-sub">Generate a new redirect</p>
          </div>
        </div>
        <div className="panel-body">
          <form onSubmit={handleCreate}>
            <div className="form-field">
              <label className="form-label" htmlFor="url">Destination URL</label>
              <input
                id="url"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                placeholder="https://example.com"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="slug">Custom slug <span className="form-hint">(optional)</span></label>
              <div className="input-group">
                <span className="input-group-prefix">flexurl.link/</span>
                <input
                  id="slug"
                  type="text"
                  value={customId}
                  onChange={(e) => setCustomId(e.target.value)}
                  placeholder="my-link"
                  style={{ border: 0, boxShadow: 'none' }}
                />
              </div>
              <span className="form-hint">Leave empty to auto-generate an identifier.</span>
            </div>

            {error && (
              <div className="alert alert-error" style={{ marginBottom: '1rem' }}>
                <span>⚠</span> {error}
              </div>
            )}

            <button type="submit" disabled={loading} className="btn btn-gradient" style={{ width: '100%' }}>
              {loading ? 'Creating...' : 'Generate link'}
            </button>
          </form>
        </div>
      </article>

      {/* === LIST === */}
      <article className="panel">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">
              <span className="stat-card-icon cyan" style={{ width: 28, height: 28, borderRadius: 8 }}><IconLink /></span>
              Links list
            </h2>
            <p className="panel-title-sub">{initialRedirects.length} redirect{initialRedirects.length !== 1 ? 's' : ''} saved</p>
          </div>
        </div>

        {initialRedirects.length === 0 ? (
          <div className="panel-body">
            <div className="empty-state">
              <div className="empty-state-icon"><IconLinkBig /></div>
              <div className="empty-state-title">No link created yet</div>
              <div className="empty-state-text">Use the form to create your first redirect.</div>
            </div>
          </div>
        ) : (
          <div className="link-list">
            {initialRedirects.map((r) => (
              <div key={r.id} className="link-row">
                <div className="link-row-main">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="link-slug">/redirect/{r.id}</span>
                    <span className="click-badge">{r.clicks} clicks</span>
                  </div>
                  <span className="link-url" title={r.url}>{r.url}</span>
                </div>
                <div className="link-row-actions">
                  <button onClick={() => copyToClipboard(r.id)} className="btn btn-soft btn-sm" type="button">
                    <IconCopy /> Copy
                  </button>
                  <button onClick={() => handleDelete(r.id)} className="btn btn-danger btn-sm" type="button">
                    <IconTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </article>

      <style jsx>{`
        .dash-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 1.25rem;
          align-items: start;
        }

        @media (max-width: 1100px) {
          .dash-grid { grid-template-columns: 1fr; }
        }

        .link-list {
          max-height: 720px;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}
