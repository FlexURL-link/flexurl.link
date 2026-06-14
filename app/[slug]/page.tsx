import sql, { initDb } from '@/lib/db';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import RedirectPageClient from './RedirectPageClient';
import { UAParser } from 'ua-parser-js';
import { decrypt } from '@/lib/encryption';

function parseHost(rawUrl: string | null): string | null {
    if (!rawUrl) return null;
    try {
        return new URL(rawUrl).hostname.toLowerCase();
    } catch {
        return null;
    }
}

function getSourceType({
    referrerHost,
    originHost,
    secFetchSite,
    currentHost,
}: {
    referrerHost: string | null;
    originHost: string | null;
    secFetchSite: string | null;
    currentHost: string | null;
}): string {
    const host = (referrerHost || originHost || '').toLowerCase();
    const localHost = (currentHost || '').toLowerCase();

    if (host) {
        if (localHost && (host === localHost || host.endsWith(`.${localHost}`))) {
            return 'internal';
        }

        if (
            host.includes('google.') ||
            host.includes('bing.') ||
            host.includes('duckduckgo.') ||
            host.includes('yahoo.')
        ) {
            return 'search';
        }

        if (
            host.includes('x.com') ||
            host.includes('twitter.com') ||
            host.includes('facebook.com') ||
            host.includes('instagram.com') ||
            host.includes('tiktok.com') ||
            host.includes('linkedin.com') ||
            host.includes('reddit.com') ||
            host.includes('youtube.com')
        ) {
            return 'social';
        }

        return 'referral';
    }

    if (secFetchSite === 'same-origin' || secFetchSite === 'same-site') {
        return 'internal';
    }
    if (secFetchSite === 'cross-site') {
        return 'referral';
    }

    return 'direct';
}

function isBot(userAgent: string): boolean {
    const botPattern = /bot|crawler|spider|scraper|crawling|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|facebot|twitterbot|rogerbot|linkedinbot|embedly|quora|pinterest|slack|vkshare|w3c_validator|whatsapp|telegram|discord|applebot|semrush|ahrefs|dotbot|mj12bot|uptimerobot|pingdom|monitoring/i;
    return botPattern.test(userAgent);
}

export default async function RedirectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const reserved = ['admin', 'api', 'favicon.ico', 'robots.txt', 'sitemap.xml', 'privacy', 'terms'];
    if (!slug || reserved.includes(slug) || slug.includes('.')) {
        return redirect('/#404');
    }

    try {
        await initDb();
        const headerStore = await headers();
        const referer = headerStore.get('referer');
        const origin = headerStore.get('origin');
        const secFetchSite = headerStore.get('sec-fetch-site');
        const currentHost = headerStore.get('host');
        const userAgent = headerStore.get('user-agent') || '';
        const countryCode = headerStore.get('x-vercel-ip-country') || headerStore.get('cf-ipcountry');
        const city = headerStore.get('x-vercel-ip-city');
        const region = headerStore.get('x-vercel-ip-country-region');
        const asn = headerStore.get('x-vercel-ip-as-number');
        const ipAddress = headerStore.get('x-forwarded-for')?.split(',')[0] || headerStore.get('x-real-ip');
        const language = headerStore.get('accept-language')?.split(',')[0].split(';')[0];

        const ua = new UAParser(userAgent).getResult();
        const browserName = ua.browser.name || 'Unknown';
        const osName = ua.os.name || 'Unknown';
        const deviceType = ua.device.type || 'desktop';

        const referrerHost = parseHost(referer);
        const originHost = parseHost(origin);
        const sourceType = getSourceType({ referrerHost, originHost, secFetchSite, currentHost });
        const botDetected = isBot(userAgent);

        const { rows } = await sql`SELECT url, countdown_seconds FROM redirects WHERE id = ${slug}`;
        const redirectData = rows[0] as { url: string; countdown_seconds: number | null } | undefined;

        if (redirectData) {
            const eventToken = `${slug}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
            let trackedToken = '';
            const countdownSeconds = redirectData.countdown_seconds ?? 5;

            await sql`UPDATE redirects SET clicks = clicks + 1 WHERE id = ${slug}`;
            await sql`
              INSERT INTO redirect_click_events (
                redirect_id, referrer_host, source_type, country_code, user_agent, 
                ip_address, language, device_type, os_name, browser_name,
                city, region, is_bot, referrer_url, asn
              )
              VALUES (
                ${slug}, ${referrerHost}, ${sourceType}, ${countryCode}, ${userAgent},
                ${ipAddress}, ${language}, ${deviceType}, ${osName}, ${browserName},
                ${city}, ${region}, ${botDetected}, ${referer}, ${asn}
              )
            `;
            try {
                await sql`
                  INSERT INTO redirect_wait_events (redirect_id, event_token, status)
                  VALUES (${slug}, ${eventToken}, 'pending')
                `;
                trackedToken = eventToken;
            } catch (trackingError) {
                console.error('Redirect wait tracking insert failed:', trackingError);
            }

            const decryptedUrl = decrypt(redirectData.url);
            return <RedirectPageClient url={decryptedUrl} eventToken={trackedToken} countdownSeconds={countdownSeconds} />;
        }
    } catch (error) {
        console.error('Redirect error:', error);
    }

    return redirect('/#404');
}
