'use client';

import { useState } from 'react';
import {
  createUserRedirect,
  deleteUserRedirect,
  updateUserRedirect,
} from '@/lib/user-actions';

interface Redirect {
  id: string;
  url: string;
  clicks: number;
  created_at?: string;
}

interface DashboardStats {
  totals: {
    links: number;
    totalClicks: number;
    activeLinks: number;
    avgClicksPerLink: number;
    bestLinkId: string | null;
    bestLinkClicks: number;
  };
  clicksLast7Days: Array<{
    date: string;
    clicks: number;
  }>;
  topLinks: Array<{
    id: string;
    url: string;
    clicks: number;
  }>;
  recentClicks: Array<{
    redirect_id: string;
    clicked_at: string;
    source_type: string | null;
    referrer_host: string | null;
  }>;
  trafficSources: Array<{
    source: string;
    clicks: number;
  }>;
}

const IconChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
);
const IconLink = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);
const IconTrending = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
);
const IconTarget = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);
const IconPlus = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const IconCopy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
);
const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
);
const IconTrash = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
);
const IconQR = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 14h3v3h-3zM19 14h2v2h-2zM14 19h2v2h-2zM19 19h2v2h-2z" /></svg>
);
const IconBarChart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
);
const IconExternal = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const IconLinkBig = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);

function formatDayLabel(date: string) {
  return new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
}

function formatRelativeDate(date: string) {
  const ts = new Date(date).getTime();
  const diffMs = Date.now() - ts;
  const min = Math.floor(diffMs / 60000);
  const hour = Math.floor(min / 60);
  const day = Math.floor(hour / 24);

  if (min < 1) return 'just now';
  if (min < 60) return `${min} min ago`;
  if (hour < 24) return `${hour} h ago`;
  return `${day} d ago`;
}

function formatSourceLabel(source: string | null) {
  if (!source || source === 'unknown') return 'direct';
  if (source === 'direct') return 'direct';
  if (source === 'internal') return 'internal';
  if (source === 'social') return 'social';
  if (source === 'search') return 'search';
  if (source === 'referral') return 'external site';
  return source;
}

export default function DashboardClient({
  initialRedirects,
  initialStats,
}: {
  initialRedirects: Redirect[];
  initialStats: DashboardStats;
}) {
  const [activeView, setActiveView] = useState<'stats' | 'links'>('links');
  const [url, setUrl] = useState('');
  const [customId, setCustomId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const maxDailyClicks = Math.max(...initialStats.clicksLast7Days.map((d) => d.clicks), 1);
  const totalClicks = initialStats.totals.totalClicks;
  const linksCount = initialStats.totals.links;
  const avgClicks = initialStats.totals.avgClicksPerLink;
  const bestLink = initialStats.totals.bestLinkId
    ? { id: initialStats.totals.bestLinkId, clicks: initialStats.totals.bestLinkClicks }
    : null;

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await createUserRedirect(url, customId || undefined);
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

  return (
    <div className="dash-stack">
      {/* === STATS OVERVIEW === */}
      <div className="stat-grid">
        <div className="stat-card animate-in">
          <div className="stat-card-label">
            <span>Total clicks</span>
            <div className="stat-card-icon indigo"><IconChart /></div>
          </div>
          <div className="stat-card-value">{totalClicks.toLocaleString('en-US')}</div>
          <div className="stat-card-sub">{initialStats.totals.activeLinks} active links</div>
        </div>

        <div className="stat-card animate-in delay-1">
          <div className="stat-card-label">
            <span>Links created</span>
            <div className="stat-card-icon cyan"><IconLink /></div>
          </div>
          <div className="stat-card-value">{linksCount}</div>
          <div className="stat-card-sub">Avg. {avgClicks} click / link</div>
        </div>

        <div className="stat-card animate-in delay-2">
          <div className="stat-card-label">
            <span>Top link</span>
            <div className="stat-card-icon emerald"><IconTrending /></div>
          </div>
          <div className="stat-card-value">
            {bestLink ? bestLink.clicks : '—'}
          </div>
          <div className="stat-card-sub">
            {bestLink ? (
              <span className="mono" style={{ color: 'var(--brand)' }}>/{bestLink.id}</span>
            ) : (
              'None yet'
            )}
          </div>
        </div>

        <div className="stat-card animate-in delay-3">
          <div className="stat-card-label">
            <span>Unique sources</span>
            <div className="stat-card-icon violet"><IconTarget /></div>
          </div>
          <div className="stat-card-value">{initialStats.trafficSources.length}</div>
          <div className="stat-card-sub">traffic origins</div>
        </div>
      </div>

      {/* === TABS === */}
      <div className="tabs-wrap">
        <div className="tabs" role="tablist" aria-label="Dashboard view selector">
          <button
            type="button"
            className={`tab ${activeView === 'links' ? 'active' : ''}`}
            onClick={() => setActiveView('links')}
            role="tab"
            aria-selected={activeView === 'links'}
          >
            <IconLink /> Links
          </button>
          <button
            type="button"
            className={`tab ${activeView === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveView('stats')}
            role="tab"
            aria-selected={activeView === 'stats'}
          >
            <IconBarChart /> Statistics
          </button>
        </div>
      </div>

      {activeView === 'links' ? (
        <div className="dash-grid">
          {/* === CREATE LINK PANEL === */}
          <article className="panel" id="new">
            <div className="panel-header">
              <div>
                <h2 className="panel-title">
                  <span className="stat-card-icon indigo" style={{ width: 28, height: 28, borderRadius: 8 }}><IconPlus /></span>
                  Create a link
                </h2>
                <p className="panel-title-sub">Shorten a URL in seconds</p>
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
                    placeholder="https://example.com/my-very-long-article"
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
                      placeholder="my-campaign"
                      style={{ border: 0, boxShadow: 'none' }}
                    />
                  </div>
                </div>

                <button type="submit" disabled={loading} className="btn btn-gradient" style={{ width: '100%' }}>
                  {loading ? 'Creating...' : 'Create link'}
                </button>
              </form>

              {error && (
                <div className="alert alert-error" style={{ marginTop: '1rem' }}>
                  <span>⚠</span> {error}
                </div>
              )}
            </div>
          </article>

          {/* === LINKS LIST === */}
          <article className="panel">
            <div className="panel-header">
              <div>
                <h2 className="panel-title">
                  <span className="stat-card-icon cyan" style={{ width: 28, height: 28, borderRadius: 8 }}><IconLink /></span>
                  Your links
                </h2>
                <p className="panel-title-sub">{initialRedirects.length} link{initialRedirects.length !== 1 ? 's' : ''} in total</p>
              </div>
            </div>

            {initialRedirects.length === 0 ? (
              <div className="panel-body">
                <div className="empty-state">
                  <div className="empty-state-icon"><IconLinkBig /></div>
                  <div className="empty-state-title">No links yet</div>
                  <div className="empty-state-text">Create your first short link using the form.</div>
                </div>
              </div>
            ) : (
              <div className="link-list">
                {initialRedirects.map((redirect) => (
                  <RedirectItem key={redirect.id} redirect={redirect} />
                ))}
              </div>
            )}
          </article>
        </div>
      ) : (
        <div className="dash-stack">
          {/* === ACTIVITY CHART === */}
          <article className="panel">
            <div className="panel-header">
              <div>
                <h2 className="panel-title">Last 7 days activity</h2>
                <p className="panel-title-sub">Traffic evolution on your links</p>
              </div>
              <div className="tag tag-indigo">
                <IconTrending />
                {totalClicks} clicks total
              </div>
            </div>
            <div className="panel-body">
              {initialStats.clicksLast7Days.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon"><IconChart /></div>
                  <div className="empty-state-title">No data yet</div>
                  <div className="empty-state-text">Your statistics will appear as soon as the first clicks come in.</div>
                </div>
              ) : (
                <div className="bars-row">
                  {initialStats.clicksLast7Days.map((point) => (
                    <div key={point.date} className="bar-col">
                      <div className="bar-wrap">
                        <div
                          className="bar"
                          style={{
                            height: `${Math.max((point.clicks / maxDailyClicks) * 150, point.clicks > 0 ? 12 : 4)}px`,
                          }}
                          title={`${point.clicks} clicks`}
                        />
                      </div>
                      <span className="bar-count">{point.clicks}</span>
                      <span className="bar-label">{formatDayLabel(point.date)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>

          <div className="dash-grid">
            {/* === TOP LINKS === */}
            <article className="panel">
              <div className="panel-header">
                <h2 className="panel-title">
                  <span className="stat-card-icon emerald" style={{ width: 28, height: 28, borderRadius: 8 }}><IconTrending /></span>
                  Top links
                </h2>
              </div>
              <div className="panel-body panel-body-tight">
                {initialStats.topLinks.length === 0 ? (
                  <div className="empty-state" style={{ margin: '1rem' }}>
                    <div className="empty-state-title">No performance to show</div>
                  </div>
                ) : (
                  <div>
                    {initialStats.topLinks.map((link) => {
                      const max = Math.max(...initialStats.topLinks.map((l) => l.clicks), 1);
                      return (
                        <div key={link.id} className="link-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.5rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                            <div className="link-row-main">
                              <a href={`/redirect/${link.id}`} target="_blank" rel="noreferrer" className="link-slug">
                                /{link.id}
                              </a>
                              <span className="link-url">{link.url}</span>
                            </div>
                            <span className="click-badge">{link.clicks} clicks</span>
                          </div>
                          <div className="analytics-bar-wrap" style={{ flex: 'none' }}>
                            <div className="analytics-bar emerald" style={{ width: `${(link.clicks / max) * 100}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </article>

            {/* === TRAFFIC SOURCES === */}
            <article className="panel">
              <div className="panel-header">
                <h2 className="panel-title">
                  <span className="stat-card-icon violet" style={{ width: 28, height: 28, borderRadius: 8 }}><IconTarget /></span>
                  Traffic sources
                </h2>
              </div>
              <div className="panel-body">
                {initialStats.trafficSources.length === 0 ? (
                  <div className="empty-state">
                    <div className="empty-state-title">No data yet</div>
                  </div>
                ) : (
                  <div className="analytics-list">
                    {initialStats.trafficSources.map((row) => {
                      const max = Math.max(...initialStats.trafficSources.map((s) => s.clicks), 1);
                      return (
                        <div key={row.source} className="analytics-row">
                          <div className="analytics-label">
                            <span className="tag">{formatSourceLabel(row.source)}</span>
                          </div>
                          <div className="analytics-bar-wrap">
                            <div
                              className={`analytics-bar ${row.source === 'search' ? 'cyan' : row.source === 'social' ? 'violet' : row.source === 'direct' ? 'emerald' : ''}`}
                              style={{ width: `${(row.clicks / max) * 100}%` }}
                            />
                          </div>
                          <span className="analytics-count">{row.clicks}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </article>
          </div>

          {/* === RECENT ACTIVITY === */}
          <article className="panel">
            <div className="panel-header">
              <h2 className="panel-title">
                <span className="stat-card-icon amber" style={{ width: 28, height: 28, borderRadius: 8 }}><IconChart /></span>
                Recent activity
              </h2>
              <span className="tag">Real-time</span>
            </div>
            <div className="panel-body panel-body-tight">
              {initialStats.recentClicks.length === 0 ? (
                <div className="empty-state" style={{ margin: '1rem' }}>
                  <div className="empty-state-icon"><IconChart /></div>
                  <div className="empty-state-title">No recent clicks</div>
                </div>
              ) : (
                <div>
                  {initialStats.recentClicks.map((event, index) => (
                    <div key={`${event.redirect_id}-${event.clicked_at}-${index}`} className="link-row">
                      <div className="link-row-main">
                        <a href={`/redirect/${event.redirect_id}`} target="_blank" rel="noreferrer" className="link-slug">
                          /{event.redirect_id}
                        </a>
                        {event.referrer_host && (
                          <span className="link-url">via {event.referrer_host}</span>
                        )}
                      </div>
                      <div className="link-row-actions">
                        <span className="tag tag-indigo">{formatSourceLabel(event.source_type)}</span>
                        <span className="click-badge">{formatRelativeDate(event.clicked_at)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      )}

      <style jsx>{`
        .dash-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .dash-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 1.25rem;
          align-items: start;
        }

        @media (max-width: 1100px) {
          .dash-grid { grid-template-columns: 1fr; }
        }

        .tabs-wrap {
          display: flex;
          justify-content: flex-start;
        }

        .link-list {
          max-height: 720px;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}

function RedirectItem({ redirect }: { redirect: Redirect }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editUrl, setEditUrl] = useState(redirect.url);
  const [showQr, setShowQr] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this link?')) return;
    try {
      await deleteUserRedirect(redirect.id);
      window.location.reload();
    } catch {
      alert('Error while deleting.');
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateUserRedirect(redirect.id, editUrl);
      setIsEditing(false);
      window.location.reload();
    } catch {
      alert('Save failed');
    } finally {
      setIsSaving(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/redirect/${redirect.id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      alert('Copy failed');
    }
  };

  return (
    <div className="link-row">
      <div className="link-row-main">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <a href={`/redirect/${redirect.id}`} target="_blank" rel="noreferrer" className="link-slug">
            /{redirect.id} <IconExternal />
          </a>
          <span className="click-badge">{redirect.clicks} clicks</span>
        </div>

        {isEditing ? (
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <input
              type="url"
              value={editUrl}
              onChange={(e) => setEditUrl(e.target.value)}
              style={{ flex: 1, minWidth: 200 }}
              autoFocus
            />
            <button onClick={handleSave} disabled={isSaving} className="btn btn-primary btn-sm" type="button">
              <IconCheck /> OK
            </button>
            <button onClick={() => setIsEditing(false)} className="btn btn-soft btn-sm" type="button">
              Cancel
            </button>
          </div>
        ) : (
          <span className="link-url">{redirect.url}</span>
        )}

        {showQr && (
          <div style={{ marginTop: '0.85rem', display: 'inline-block', padding: '0.65rem', background: '#fff', border: '1px solid var(--line)', borderRadius: 12 }}>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(
                `${typeof window !== 'undefined' ? window.location.origin : ''}/redirect/${redirect.id}`,
              )}`}
              alt="QR Code"
              style={{ display: 'block' }}
            />
          </div>
        )}
      </div>

      <div className="link-row-actions">
        <button onClick={copyToClipboard} className="btn btn-soft btn-sm" type="button" title="Copy link">
          {copied ? <><IconCheck /> Copied</> : <><IconCopy /> Copy</>}
        </button>
        <a href={`/dashboard/link/${redirect.id}`} className="btn btn-soft btn-sm" title="View stats">
          <IconBarChart /> Stats
        </a>
        <button onClick={() => setShowQr((prev) => !prev)} className="btn btn-soft btn-sm" type="button" title="QR Code">
          <IconQR /> QR
        </button>
        <button onClick={() => setIsEditing(true)} className="btn btn-soft btn-sm" type="button" title="Edit">
          <IconEdit /> Edit
        </button>
        <button onClick={handleDelete} className="btn btn-danger btn-sm" type="button" title="Delete">
          <IconTrash /> Delete
        </button>
      </div>
    </div>
  );
}
