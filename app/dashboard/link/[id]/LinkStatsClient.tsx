'use client';

import Link from 'next/link';

interface LinkStatsData {
  link: { id: string; url: string } | null;
  stats: {
    totals: {
      clicks: number;
      last24h: number;
      last7d: number;
      stayedUntilRedirect: number;
      leftBeforeRedirect: number;
    };
    clicksLast7Days: Array<{ date: string; clicks: number }>;
    waitLast7Days: Array<{ date: string; stayed: number; left: number }>;
    trafficSources: Array<{ source: string; clicks: number }>;
    topReferrers: Array<{ referrer_host: string; clicks: number }>;
    topCountries: Array<{ country_code: string; clicks: number }>;
    topDevices: Array<{ device_type: string; clicks: number }>;
    topBrowsers: Array<{ browser_name: string; clicks: number }>;
    topOS: Array<{ os_name: string; clicks: number }>;
  };
}

const IconBarChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10" /><line x1="18" y1="20" x2="18" y2="4" /><line x1="6" y1="20" x2="6" y2="16" /></svg>
);
const IconLink = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
);
const IconGlobe = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" /></svg>
);
const IconTarget = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
);
const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
const IconArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
);

function formatDayLabel(date: string) {
  return new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
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

function buildLinePoints(values: number[], maxValue: number, width: number, height: number, pad: number) {
  const safeMax = Math.max(maxValue, 1);
  const step = values.length > 1 ? (width - pad * 2) / (values.length - 1) : 0;
  return values
    .map((value, index) => {
      const x = pad + step * index;
      const y = height - pad - (value / safeMax) * (height - pad * 2);
      return `${x},${y}`;
    })
    .join(' ');
}

export default function LinkStatsClient({ data }: { data: LinkStatsData }) {
  const { link, stats } = data;

  if (!link) {
    return (
      <div className="empty-state">
        <div className="empty-state-title">Link not found</div>
        <Link href="/dashboard" className="btn btn-soft" style={{ marginTop: '1rem' }}>
          <IconArrowLeft /> Back to dashboard
        </Link>
      </div>
    );
  }

  const maxDailyClicks = Math.max(...stats.clicksLast7Days.map((d) => d.clicks), 1);
  const waitMax = Math.max(...stats.waitLast7Days.flatMap((d) => [d.stayed, d.left]), 1);
  const stayedValues = stats.waitLast7Days.map((d) => d.stayed);
  const leftValues = stats.waitLast7Days.map((d) => d.left);
  const stayedPoints = buildLinePoints(stayedValues, waitMax, 520, 180, 16);
  const leftPoints = buildLinePoints(leftValues, waitMax, 520, 180, 16);
  const totalDecisions = stats.totals.stayedUntilRedirect + stats.totals.leftBeforeRedirect;
  const stayedRatio = totalDecisions > 0 ? Math.round((stats.totals.stayedUntilRedirect / totalDecisions) * 1000) / 10 : 0;

  return (
    <div className="dash-stack">
      {/* === TOP STATS === */}
      <div className="stat-grid">
        <div className="stat-card animate-in">
          <div className="stat-card-label">
            <span>Total clicks</span>
            <div className="stat-card-icon indigo"><IconBarChart /></div>
          </div>
          <div className="stat-card-value">{stats.totals.clicks}</div>
          <div className="stat-card-sub">All-time</div>
        </div>

        <div className="stat-card animate-in delay-1">
          <div className="stat-card-label">
            <span>Last 24h</span>
            <div className="stat-card-icon cyan"><IconClock /></div>
          </div>
          <div className="stat-card-value">{stats.totals.last24h}</div>
          <div className="stat-card-sub">recent clicks</div>
        </div>

        <div className="stat-card animate-in delay-2">
          <div className="stat-card-label">
            <span>Last 7 days</span>
            <div className="stat-card-icon violet"><IconTarget /></div>
          </div>
          <div className="stat-card-value">{stats.totals.last7d}</div>
          <div className="stat-card-sub">this week</div>
        </div>

        <div className="stat-card animate-in delay-3">
          <div className="stat-card-label">
            <span>Conversion rate</span>
            <div className="stat-card-icon emerald"><IconCheck /></div>
          </div>
          <div className="stat-card-value">{stayedRatio}%</div>
          <div className="stat-card-sub">stay until redirect</div>
        </div>
      </div>

      <div className="stat-grid stat-grid-half">
        <div className="stat-card animate-in delay-4">
          <div className="stat-card-label">
            <span>Stay</span>
            <div className="stat-card-icon emerald"><IconCheck /></div>
          </div>
          <div className="stat-card-value">{stats.totals.stayedUntilRedirect}</div>
          <div className="stat-card-sub">visitors who waited</div>
        </div>
        <div className="stat-card animate-in delay-5">
          <div className="stat-card-label">
            <span>Leave</span>
            <div className="stat-card-icon rose"><IconX /></div>
          </div>
          <div className="stat-card-value">{stats.totals.leftBeforeRedirect}</div>
          <div className="stat-card-sub">exit before redirect</div>
        </div>
      </div>

      {/* === TREND CHART === */}
      <article className="panel animate-in">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Wait / leave trend (7 days)</h2>
            <p className="panel-title-sub">Visitor behaviour over time</p>
          </div>
          <span className="tag tag-emerald">Stay: {stayedRatio}%</span>
        </div>
        <div className="panel-body">
          <div className="trend-chart">
            <svg viewBox="0 0 520 180" className="line-chart" role="img" aria-label="Wait and leave chart">
              <polyline points={stayedPoints} className="line-stayed" />
              <polyline points={leftPoints} className="line-left" />
            </svg>
            <div className="x-axis-labels">
              {stats.waitLast7Days.map((point) => (
                <span key={point.date}>{formatDayLabel(point.date)}</span>
              ))}
            </div>
          </div>
          <div className="legend-row">
            <span className="legend-item"><i className="legend-dot stayed" /> Stay until redirect</span>
            <span className="legend-item"><i className="legend-dot left" /> Leave before redirect</span>
          </div>
        </div>
      </article>

      {/* === 7 DAYS BARS === */}
      <article className="panel animate-in">
        <div className="panel-header">
          <div>
            <h2 className="panel-title">Clicks over 7 days</h2>
            <p className="panel-title-sub">Daily click volume</p>
          </div>
        </div>
        <div className="panel-body">
          {stats.clicksLast7Days.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-title">No data yet</div>
            </div>
          ) : (
            <div className="bars-row">
              {stats.clicksLast7Days.map((point) => (
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
        {/* === SOURCES === */}
        <article className="panel">
          <div className="panel-header">
            <h2 className="panel-title">
              <span className="stat-card-icon indigo" style={{ width: 28, height: 28, borderRadius: 8 }}><IconLink /></span>
              Traffic source
            </h2>
          </div>
          <div className="panel-body">
            {stats.trafficSources.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-title">No source</div>
              </div>
            ) : (
              <div className="analytics-list">
                {stats.trafficSources.map((row) => {
                  const total = Math.max(stats.totals.clicks, 1);
                  return (
                    <div key={row.source} className="analytics-row">
                      <div className="analytics-label">
                        <span className="tag">{formatSourceLabel(row.source)}</span>
                      </div>
                      <div className="analytics-bar-wrap">
                        <div
                          className={`analytics-bar ${row.source === 'search' ? 'cyan' : row.source === 'social' ? 'violet' : row.source === 'direct' ? 'emerald' : ''}`}
                          style={{ width: `${(row.clicks / total) * 100}%` }}
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

        {/* === TOP REFERRERS === */}
        <article className="panel">
          <div className="panel-header">
            <h2 className="panel-title">
              <span className="stat-card-icon cyan" style={{ width: 28, height: 28, borderRadius: 8 }}><IconGlobe /></span>
              Top referrers
            </h2>
          </div>
          <div className="panel-body">
            {stats.topReferrers.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-title">No external referrer</div>
              </div>
            ) : (
              <div className="analytics-list">
                {stats.topReferrers.map((row) => {
                  const total = Math.max(stats.totals.clicks, 1);
                  return (
                    <div key={row.referrer_host} className="analytics-row">
                      <div className="analytics-label" style={{ flex: '0 0 200px' }}>
                        <span className="mono" style={{ fontSize: '0.84rem' }}>{row.referrer_host}</span>
                      </div>
                      <div className="analytics-bar-wrap">
                        <div className="analytics-bar" style={{ width: `${(row.clicks / total) * 100}%` }} />
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

      <div className="dash-grid">
        {/* === TOP COUNTRIES === */}
        <article className="panel">
          <div className="panel-header">
            <h2 className="panel-title">
              <span className="stat-card-icon emerald" style={{ width: 28, height: 28, borderRadius: 8 }}><IconGlobe /></span>
              Countries (Top 10)
            </h2>
          </div>
          <div className="panel-body">
            {stats.topCountries.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-title">No data</div>
              </div>
            ) : (
              <div className="analytics-list">
                {stats.topCountries.map((c) => {
                  const total = Math.max(stats.totals.clicks, 1);
                  return (
                    <div key={c.country_code} className="analytics-row">
                      <div className="analytics-label">
                        <span>{c.country_code === 'Unknown' ? '🌍 Unknown' : `📍 ${c.country_code}`}</span>
                      </div>
                      <div className="analytics-bar-wrap">
                        <div className="analytics-bar emerald" style={{ width: `${(c.clicks / total) * 100}%` }} />
                      </div>
                      <span className="analytics-count">{c.clicks}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </article>

        {/* === TOP DEVICES === */}
        <article className="panel">
          <div className="panel-header">
            <h2 className="panel-title">
              <span className="stat-card-icon violet" style={{ width: 28, height: 28, borderRadius: 8 }}>💻</span>
              Devices
            </h2>
          </div>
          <div className="panel-body">
            <div className="analytics-list">
              {stats.topDevices.map((d) => {
                const total = Math.max(stats.totals.clicks, 1);
                return (
                  <div key={d.device_type} className="analytics-row">
                    <div className="analytics-label">
                      <span style={{ textTransform: 'capitalize' }}>
                        {d.device_type === 'mobile' ? '📱 Mobile' : d.device_type === 'tablet' ? '📱 Tablet' : '💻 Desktop'}
                      </span>
                    </div>
                    <div className="analytics-bar-wrap">
                      <div className="analytics-bar" style={{ width: `${(d.clicks / total) * 100}%` }} />
                    </div>
                    <span className="analytics-count">{d.clicks}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        {/* === TOP BROWSERS === */}
        <article className="panel">
          <div className="panel-header">
            <h2 className="panel-title">
              <span className="stat-card-icon amber" style={{ width: 28, height: 28, borderRadius: 8 }}>🌐</span>
              Browsers
            </h2>
          </div>
          <div className="panel-body">
            <div className="analytics-list">
              {stats.topBrowsers.map((b) => {
                const total = Math.max(stats.totals.clicks, 1);
                return (
                  <div key={b.browser_name} className="analytics-row">
                    <div className="analytics-label">
                      <span>{b.browser_name}</span>
                    </div>
                    <div className="analytics-bar-wrap">
                      <div className="analytics-bar violet" style={{ width: `${(b.clicks / total) * 100}%` }} />
                    </div>
                    <span className="analytics-count">{b.clicks}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </article>

        {/* === TOP OS === */}
        <article className="panel">
          <div className="panel-header">
            <h2 className="panel-title">
              <span className="stat-card-icon rose" style={{ width: 28, height: 28, borderRadius: 8 }}>⚙️</span>
              Operating systems
            </h2>
          </div>
          <div className="panel-body">
            <div className="analytics-list">
              {stats.topOS.map((o) => {
                const total = Math.max(stats.totals.clicks, 1);
                return (
                  <div key={o.os_name} className="analytics-row">
                    <div className="analytics-label">
                      <span>{o.os_name}</span>
                    </div>
                    <div className="analytics-bar-wrap">
                      <div className="analytics-bar soft" style={{ width: `${(o.clicks / total) * 100}%` }} />
                    </div>
                    <span className="analytics-count">{o.clicks}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </div>

      <style jsx>{`
        .dash-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .dash-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 900px) {
          .dash-grid { grid-template-columns: 1fr; }
        }

        .stat-grid-half {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 540px) {
          .stat-grid-half { grid-template-columns: 1fr; }
        }

        .trend-chart {
          background: var(--bg-soft);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 1rem;
        }

        .line-chart {
          width: 100%;
          height: 200px;
          display: block;
        }

        .line-stayed,
        .line-left {
          fill: none;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .line-stayed { stroke: #10b981; }
        .line-left { stroke: #ef4444; }

        .x-axis-labels {
          margin-top: 0.5rem;
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          text-align: center;
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 600;
        }

        .legend-row {
          margin-top: 1rem;
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .legend-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          display: inline-block;
        }

        .legend-dot.stayed { background: #10b981; }
        .legend-dot.left { background: #ef4444; }
      `}</style>
    </div>
  );
}
