import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserRedirectById, getUserRedirectLinkStats } from '@/lib/user-actions';
import { DashboardShell } from '@/components/DashboardShell';
import Link from 'next/link';
import LinkStatsClient from './LinkStatsClient';

const IconArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const dynamic = 'force-dynamic';

export default async function LinkStatsPage({ params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth();
  if (!userId) {
    redirect('/dashboard/sign-in');
  }

  const { id } = await params;
  const [link, stats] = await Promise.all([getUserRedirectById(id), getUserRedirectLinkStats(id)]);

  return (
    <DashboardShell
      title={link ? `Statistics for /${link.id}` : 'Link not found'}
      subtitle={link?.url || 'No destination associated.'}
      pageActions={
        <Link href="/dashboard" className="btn btn-soft btn-sm">
          <IconArrowLeft />
          Back
        </Link>
      }
    >
      <LinkStatsClient data={{ link, stats }} />
    </DashboardShell>
  );
}
