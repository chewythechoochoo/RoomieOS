import type { Metadata, Viewport } from 'next'
import { Gaegu } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const gaegu = Gaegu({ 
  weight: ['300', '400', '700'],
  subsets: ["latin"],
  variable: '--font-gaegu'
});

export const metadata: Metadata = {
  title: 'RoomieOS - The Shared Home, Finally Organized',
  description: 'A cozy iOS-first workspace for roommates to manage chores, expenses, conversations, and house rules in one place. An operating system for shared living.',
  generator: 'v0.app',
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' },
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#FDF6E3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${gaegu.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
