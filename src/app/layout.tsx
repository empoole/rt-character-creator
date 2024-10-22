import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Rogue Trader Character Creator',
    description:
        'A tool for creating characters for the Rogue Trader table top rpg',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
            </body>
        </html>
    )
}
