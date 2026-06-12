import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL?.replace(/sslmode=(?:prefer|require|verify-ca)/g, 'sslmode=verify-full'),
});

function sql(strings: TemplateStringsArray, ...values: unknown[]) {
    let text = '';
    const params: unknown[] = [];
    strings.forEach((str, i) => {
        text += str;
        if (i < values.length) {
            params.push(values[i]);
            text += `$${params.length}`;
        }
    });
    return pool.query(text, params);
}

export async function initDb() {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL,
        email_hash TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        username TEXT,
        avatar_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
        await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS username TEXT`;
        await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS avatar_url TEXT`;
        await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS email_hash TEXT`;
        await sql`CREATE UNIQUE INDEX IF NOT EXISTS users_email_hash_uidx ON users(email_hash) WHERE email_hash IS NOT NULL`;

        await sql`
      CREATE TABLE IF NOT EXISTS redirects (
        id TEXT PRIMARY KEY,
        url TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        clicks INTEGER DEFAULT 0,
        user_id TEXT
      )
    `;
        await sql`CREATE INDEX IF NOT EXISTS redirects_user_id_idx ON redirects(user_id)`;

        await sql`
      CREATE TABLE IF NOT EXISTS redirect_click_events (
        id BIGSERIAL PRIMARY KEY,
        redirect_id TEXT NOT NULL REFERENCES redirects(id) ON DELETE CASCADE,
        clicked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        referrer_host TEXT,
        source_type TEXT,
        country_code TEXT,
        user_agent TEXT,
        ip_address TEXT,
        language TEXT,
        device_type TEXT,
        os_name TEXT,
        browser_name TEXT
      )
    `;
        await sql`CREATE INDEX IF NOT EXISTS redirect_click_events_redirect_id_idx ON redirect_click_events(redirect_id)`;
        await sql`CREATE INDEX IF NOT EXISTS redirect_click_events_clicked_at_idx ON redirect_click_events(clicked_at)`;
        await sql`CREATE INDEX IF NOT EXISTS redirect_click_events_source_type_idx ON redirect_click_events(source_type)`;
        await sql`CREATE INDEX IF NOT EXISTS redirect_click_events_referrer_host_idx ON redirect_click_events(referrer_host)`;
        await sql`CREATE INDEX IF NOT EXISTS redirect_click_events_device_type_idx ON redirect_click_events(device_type)`;
        await sql`CREATE INDEX IF NOT EXISTS redirect_click_events_browser_name_idx ON redirect_click_events(browser_name)`;

        await sql`
      CREATE TABLE IF NOT EXISTS redirect_wait_events (
        id BIGSERIAL PRIMARY KEY,
        redirect_id TEXT NOT NULL REFERENCES redirects(id) ON DELETE CASCADE,
        event_token TEXT NOT NULL UNIQUE,
        status TEXT NOT NULL DEFAULT 'pending',
        started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
        await sql`CREATE UNIQUE INDEX IF NOT EXISTS redirect_wait_events_event_token_uidx ON redirect_wait_events(event_token)`;
        await sql`CREATE INDEX IF NOT EXISTS redirect_wait_events_redirect_id_idx ON redirect_wait_events(redirect_id)`;
        await sql`CREATE INDEX IF NOT EXISTS redirect_wait_events_status_idx ON redirect_wait_events(status)`;
    } catch (error) {
        console.error('Database initialization failed:', error);
    }
}

export default sql;
