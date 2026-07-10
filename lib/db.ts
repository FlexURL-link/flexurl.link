import { Pool } from 'pg';

const rawUrl = process.env.POSTGRES_URL ?? '';
const url = new URL(rawUrl);
url.searchParams.delete('sslmode');

const pool = new Pool({
    connectionString: url.toString(),
    ssl: { rejectUnauthorized: false },
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
      CREATE TABLE IF NOT EXISTS redirects (
        id TEXT PRIMARY KEY,
        url TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        expires_at TIMESTAMP
      )
    `;
    } catch (error) {
        console.error('Database initialization failed:', error);
    }
}

export default sql;
