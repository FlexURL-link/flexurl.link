'use server';

import sql, { initDb } from './db';
import { isAdmin } from './auth';
import { revalidatePath } from 'next/cache';
import { nanoid } from 'nanoid';

export async function createRedirect(url: string, customId?: string) {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    const id = customId || nanoid(6);

    try {
        await sql`INSERT INTO redirects (id, url) VALUES (${id}, ${url})`;
        revalidatePath('/admin/dashboard');
        return { success: true, id };
    } catch (error: any) {
        if (error.code === '23505') { // Postgres unique violation
            return { error: 'Cet identifiant existe déjà.' };
        }
        console.error('Create redirect error:', error);
        return { error: 'Une erreur est survenue.' };
    }
}

export async function deleteRedirect(id: string) {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    await sql`DELETE FROM redirects WHERE id = ${id}`;
    revalidatePath('/admin/dashboard');
    return { success: true };
}

export async function getRedirects() {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    try {
        // Simple way to ensure table exists in the cloud DB
        const { rows } = await sql`SELECT * FROM redirects ORDER BY created_at DESC`;
        return rows as any[];
    } catch (error: any) {
        // If table doesn't exist, try to create it and return empty list
        if (error.message?.includes('relation "redirects" does not exist')) {
            console.log('Table "redirects" not found, creating...');
            const { initDb } = await import('./db');
            await initDb();
            return [];
        }
        console.error('Get redirects error:', error);
        return [];
    }
}

export async function getAdminStats() {
    if (!(await isAdmin())) throw new Error('Unauthorized');

    try {
        await initDb();

        const { rows: totalsRows } = await sql`
      SELECT
        COUNT(*)::int AS total_links,
        (SELECT COUNT(*)::int FROM redirect_click_events)::int AS total_clicks,
        (SELECT COUNT(*) FROM redirects WHERE created_at >= NOW() - INTERVAL '24 hours')::int AS new_links_24h
      FROM redirects
    `;

        const { rows: clicksTrendRows } = await sql`
      WITH days AS (
        SELECT generate_series(
          CURRENT_DATE - INTERVAL '6 days',
          CURRENT_DATE,
          INTERVAL '1 day'
        )::date AS day
      )
      SELECT
        TO_CHAR(days.day, 'YYYY-MM-DD') AS date,
        COALESCE(COUNT(e.id), 0)::int AS clicks
      FROM days
      LEFT JOIN redirect_click_events e
        ON e.clicked_at >= days.day
       AND e.clicked_at < days.day + INTERVAL '1 day'
      GROUP BY days.day
      ORDER BY days.day ASC
    `;

        const { rows: topLinksRows } = await sql`
      SELECT id, url, clicks
      FROM redirects
      ORDER BY clicks DESC
      LIMIT 10
    `;

        return {
            totals: totalsRows[0] as { total_links: number; total_clicks: number; new_links_24h: number },
            clicksTrend: clicksTrendRows as Array<{ date: string; clicks: number }>,
            topLinks: topLinksRows as Array<{ id: string; url: string; clicks: number }>,
        };
    } catch (error) {
        console.error('Admin stats error:', error);
        return {
            totals: { total_links: 0, total_clicks: 0, new_links_24h: 0 },
            clicksTrend: [],
            topLinks: [],
        };
    }
}
