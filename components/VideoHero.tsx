'use client'

import Link from 'next/link'
import Image from 'next/image'
import CloudflareVideo from './CloudflareVideo'

interface VideoHeroProps {
  cfId?: string
  headline?: string
  subline?: string
}

export default function VideoHero({
  cfId,
  headline = 'Every detail of your event,\nin one place.',
  subline = 'Furniture, audio, lighting, photography and video for events in Baja California.',
}: VideoHeroProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100svh' }}>
      {/* Video layer */}
      {cfId ? (
        <CloudflareVideo id={cfId} mode="background" />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, #2A1E08 0%, #3D2D17 50%, #2A1E08 100%)' }}
        />
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(32,18,8,0.45) 0%, rgba(32,18,8,0.6) 100%)' }}
      />

      {/* Content — logo pushed to lower third, headline on one line below */}
      <div className="relative z-10 flex flex-col items-center justify-end text-center px-6 pb-28 sm:pb-36" style={{ minHeight: '100svh' }}>
        <div className="mb-5">
          <Image
            src="/logo.png"
            alt="Oak Project Baja"
            width={320}
            height={160}
            priority
            className="mx-auto"
            style={{ filter: 'brightness(0) invert(0.88) sepia(0.25) saturate(0.5)' }}
          />
        </div>

        <p
          className="text-lg sm:text-xl lg:text-2xl mb-4 whitespace-nowrap"
          style={{ color: '#D6C6B0', textShadow: '0 2px 24px rgba(0,0,0,0.5)', fontFamily: 'var(--font-higuen)', letterSpacing: '0.04em' }}
        >
          {headline}
        </p>

        <p
          className="text-sm sm:text-base max-w-md leading-relaxed mb-10"
          style={{ color: '#A3947F', textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
        >
          {subline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/cotizacion" className="btn-gold px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Get a Quote
          </Link>
          <Link href="/mobiliario" className="btn-outline-light px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Browse Catalog
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: '#705D41' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
