import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
    title: 'DraykoRedirect | Redirection URL Moderne & Analytique',
    description: 'Transformez vos liens longs en URLs courtes, mémorables et suivez vos performances en temps réel avec DraykoRedirect.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <body>
                <ClerkProvider>{children}</ClerkProvider>
            </body>
        </html>
    )
}
