import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'FlexURL | Modern URL Redirection & Analytics',
    description: 'Transform your long links into short, memorable URLs and track your performance in real time with FlexURL.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
