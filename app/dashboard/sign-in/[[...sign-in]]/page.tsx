import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export default function SignInPage() {
    return (
        <div className="auth-screen">
            <div style={{ width: '100%', maxWidth: 440 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <Link href="/" className="brand">
                        <span className="brand-mark">D</span>
                        <span>Drayko</span>
                    </Link>
                    <span className="brand-pill">
                        <IconShield />
                        Account
                    </span>
                </div>
                <SignIn afterSignInUrl="/dashboard" redirectUrl="/dashboard" />
            </div>
        </div>
    );
}
