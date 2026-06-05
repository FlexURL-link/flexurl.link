import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function SignUpPage() {
    return (
        <div className="auth-screen">
            <div style={{ width: '100%', maxWidth: 440 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <Link href="/" className="brand">
                        <span className="brand-mark">D</span>
                        <span>Drayko</span>
                    </Link>
                    <span className="brand-pill">
                        <IconUser />
                        Sign up
                    </span>
                </div>
                <SignUp afterSignUpUrl="/dashboard" redirectUrl="/dashboard" />
            </div>
        </div>
    );
}
