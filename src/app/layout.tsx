import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Rogue Trader Origin Path',
    description:
        'A tool for creating origin paths for the Rogue Trader table top rpg',
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
