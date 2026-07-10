import { redirect } from 'next/navigation';
import sql from '@/lib/db';
import { decrypt } from '@/lib/encryption';

export default async function RedirectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const result = await sql`SELECT url FROM redirects WHERE id = ${slug}`;

  if (result.rows.length === 0) {
    redirect('/#404');
  }

  let destination: string;
  try {
    destination = decrypt(result.rows[0].url);
  } catch {
    redirect('/#404');
  }

  redirect(destination);
}
