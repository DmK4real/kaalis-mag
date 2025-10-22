import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Kaalis Magazine', template: '%s — Kaalis' },
  description: 'Magazine digital lifestyle d’Abidjan',
  metadataBase: new URL('http://localhost:3000'),
  openGraph: { siteName: 'Kaalis Magazine', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-dvh antialiased">
        <Header />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
