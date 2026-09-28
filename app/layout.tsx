import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ali — Frontend Developer',
  description: 'Ali is a frontend developer in Nigeria building modern, responsive and user-friendly digital products.',
  generator: 'v0.app',
  openGraph: {
    title: 'Ali — Frontend Developer',
    description: 'Frontend developer building modern digital products from Nigeria.',
    type: 'website',
  },
  icons: {
    icon: '/profile.jpg',
    apple: '/profile.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
