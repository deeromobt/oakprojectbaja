import type { Metadata } from 'next'
import { EB_Garamond, Atkinson_Hyperlegible } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'
import Providers from '@/components/Providers'
import WhatsAppButton from '@/components/WhatsAppButton'

const higuen = localFont({
  src: '../public/fonts/HiguenSerif.otf',
  variable: '--font-higuen',
  display: 'swap',
})

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
})

const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  variable: '--font-atkinson',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Oak Project Baja — Furniture, Audio, Lighting & Photography Rentals',
  description: 'Furniture rental, audio, lighting, photography, and video services for events in Baja California. Get a quote online and book your date.',
  keywords: 'event furniture rental baja california, audio lighting events, photography video events baja',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${higuen.variable} ${garamond.variable} ${atkinson.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ background: '#FCF7E8' }}>
        <Providers>
          <Navbar />
          <CartSidebar />
          <main className="flex-1 pt-16">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  )
}
