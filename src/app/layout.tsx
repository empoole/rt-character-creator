import type { Metadata } from 'next'
import './globals.css'
import { AppSettingsProvider } from '@/context/AppSettingsContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        <AppSettingsProvider>
            <html lang="en">
                <body>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </body>
            </html>
        </AppSettingsProvider>
    )
}
