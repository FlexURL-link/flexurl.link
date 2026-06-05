import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { getUserRedirects, getUserRedirectStats } from '@/lib/user-actions';
import { DashboardShell } from '@/components/DashboardShell';
import DashboardClient from './DashboardClient';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/dashboard/sign-in');
  }

  const [redirects, stats] = await Promise.all([getUserRedirects(), getUserRedirectStats()]);

  return (
    <DashboardShell
      title="Dashboard"
      subtitle="Manage your links and track your performance in real time."
    >
      <DashboardClient initialRedirects={redirects} initialStats={stats} />
    </DashboardShell>
  );
}
