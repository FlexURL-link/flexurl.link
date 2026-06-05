import { PublicNav, PublicFooter } from '@/components/PublicLayout';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PublicNav />
      <main className="min-h-screen">{children}</main>
      <PublicFooter />
    </>
  );
}
