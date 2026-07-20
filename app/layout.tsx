import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HOTT — L\'élégance absolue',
  description:
    'HOTT — Équipement équestre ultra-luxe. Redéfinissez le lien avec votre cheval grâce à un savoir-faire d\'exception.',
  generator: 'v0.app',
  openGraph: {
    title: 'HOTT — L\'élégance absolue',
    description: 'HOTT — Équipement équestre ultra-luxe.',
    url: 'https://hott.com',
    siteName: 'HOTT',
    images: [
      {
        url: '/hott-hero.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOTT — L\'élégance absolue',
    description: 'HOTT — Équipement équestre ultra-luxe.',
    images: ['/hott-hero.png'],
  },
  icons: {
    icon: [
      {
        url: '/hott-logo.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/hott-logo.svg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${jost.variable} bg-white`}
    >
      <body className="antialiased bg-white text-black font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
