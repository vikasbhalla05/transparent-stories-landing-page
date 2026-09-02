import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://transparentstories.com'),

  title: 'Transparent Stories — Performance Marketing & Creative Agency',

  description:
    'We help brands grow through performance marketing, creative strategy, content, CRO, SEO and data-backed decision making.',

  icons: {
    icon: '/favicon.ico',
  },

  openGraph: {
    title: 'Transparent Stories — Performance Marketing & Creative Agency',

    description:
      'We help brands grow through performance marketing, creative strategy, content, CRO, SEO and data-backed decision making.',

    url: '/',

    siteName: 'Transparent Stories',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Transparent Stories',
      },
    ],

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Transparent Stories — Performance Marketing & Creative Agency',

    description:
      'We help brands grow through performance marketing, creative strategy, content, CRO, SEO and data-backed decision making.',

    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}