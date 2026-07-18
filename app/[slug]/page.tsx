import { redirect, notFound } from 'next/navigation';
import sql from '@/lib/db';
import { decrypt } from '@/lib/encryption';

export default async function RedirectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug === 'favicon.png') notFound();

  const result = await sql`SELECT url, expires_at FROM redirects WHERE id = ${slug}`;

  if (result.rows.length === 0) {
    redirect('/#404');
  }

  const row = result.rows[0];

  if (row.expires_at && new Date(row.expires_at) < new Date()) {
    redirect('/#404');
  }

  let destination: string;
  try {
    destination = decrypt(row.url);
  } catch {
    redirect('/#404');
  }

  redirect(destination);
}
