import { NextRequest, NextResponse } from 'next/server';
import sql, { initDb } from '@/lib/db';

type RedirectEventStatus = 'completed' | 'abandoned';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const eventToken = typeof body?.eventToken === 'string' ? body.eventToken : '';
    const status = body?.status as RedirectEventStatus;

    if (!eventToken || (status !== 'completed' && status !== 'abandoned')) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    await initDb();

    await sql`
      UPDATE redirect_wait_events
      SET status = ${status}, updated_at = NOW()
      WHERE event_token = ${eventToken} AND status = 'pending'
    `;

    // Enrich click event with client-side data if provided
    if (body.screen_resolution || body.timezone || body.interpage_time_ms != null) {
      const { rows } = await sql`
        SELECT e.id FROM redirect_click_events e
        INNER JOIN redirect_wait_events w ON w.redirect_id = e.redirect_id
        WHERE w.event_token = ${eventToken}
        ORDER BY e.clicked_at DESC
        LIMIT 1
      `;
      if (rows.length > 0) {
        const clickId = rows[0].id;
        if (body.screen_resolution) {
          await sql`UPDATE redirect_click_events SET screen_resolution = ${body.screen_resolution} WHERE id = ${clickId}`;
        }
        if (body.viewport_size) {
          await sql`UPDATE redirect_click_events SET viewport_size = ${body.viewport_size} WHERE id = ${clickId}`;
        }
        if (body.timezone) {
          await sql`UPDATE redirect_click_events SET timezone = ${body.timezone} WHERE id = ${clickId}`;
        }
        if (body.connection_type) {
          await sql`UPDATE redirect_click_events SET connection_type = ${body.connection_type} WHERE id = ${clickId}`;
        }
        if (body.color_scheme) {
          await sql`UPDATE redirect_click_events SET color_scheme = ${body.color_scheme} WHERE id = ${clickId}`;
        }
        if (body.device_memory != null) {
          await sql`UPDATE redirect_click_events SET device_memory = ${body.device_memory} WHERE id = ${clickId}`;
        }
        if (body.hardware_concurrency != null) {
          await sql`UPDATE redirect_click_events SET hardware_concurrency = ${body.hardware_concurrency} WHERE id = ${clickId}`;
        }
        if (body.interpage_time_ms != null) {
          await sql`UPDATE redirect_click_events SET interpage_time_ms = ${body.interpage_time_ms} WHERE id = ${clickId}`;
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
