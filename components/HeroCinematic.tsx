'use client'

import Link from 'next/link'
import CloudflareVideo from './CloudflareVideo'

interface Props {
  headline?: string
  subline?: string
  eyebrow?: string
  cfId?: string
}

/**
 * Terminal-Industries-style cinematic hero: full-bleed wedding film with a slow
 * Ken Burns push-in, layered cinematic gradient, bold overlaid headline, and a
 * "scroll to explore" cue.
 */
export default function HeroCinematic({
  headline = 'Bringing your perfect event to life',
  subline = 'Furniture, audio, lighting, photography and video for weddings and events across Baja California.',
  eyebrow = 'Weddings & Events · Baja California',
  cfId = 'bd123b05247e4ef098521fddab781f90',
}: Props) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100svh', background: '#160c04' }}>
      {/* full-bleed cinematic film with slow push-in */}
      <div className="absolute inset-0 hero-kenburns">
        <CloudflareVideo id={cfId} mode="background" />
      </div>

      {/* cinematic gradients — moody, legible top (nav) + strong bottom (headline) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,7,3,0.68) 0%, rgba(11,7,3,0.34) 28%, rgba(11,7,3,0.42) 55%, rgba(11,7,3,0.92) 100%)',
        }}
      />
      {/* radial darken behind the headline for punch */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 62%, rgba(11,7,3,0.55) 0%, rgba(11,7,3,0) 72%)',
        }}
      />

      {/* content — lower third, editorial */}
      <div
        className="relative z-10 flex flex-col justify-end items-center text-center px-6 pb-28 sm:pb-32"
        style={{ minHeight: '100svh' }}
      >
        <p
          className="hero-fade-up text-xs sm:text-sm font-semibold tracking-[0.32em] uppercase mb-6"
          style={{ color: '#E9D9A8', animationDelay: '0.1s' }}
        >
          {eyebrow}
        </p>

        <h1
          className="hero-fade-up w-full max-w-5xl text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.98] mb-7"
          style={{ color: '#FCF7E8', textShadow: '0 2px 40px rgba(0,0,0,0.5)', animationDelay: '0.22s' }}
        >
          {headline}
        </h1>

        <p
          className="hero-fade-up w-full max-w-xl text-lg sm:text-xl leading-relaxed mb-10"
          style={{ color: 'rgba(252,247,232,0.86)', textShadow: '0 1px 14px rgba(0,0,0,0.5)', animationDelay: '0.36s' }}
        >
          {subline}
        </p>

        <div className="hero-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.5s' }}>
          <Link href="/cotizacion" className="btn-gold px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Get a Quote
          </Link>
          <Link href="/mobiliario" className="btn-outline-light px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Browse Catalog
          </Link>
        </div>
      </div>

      {/* scroll to explore */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase" style={{ color: 'rgba(252,247,232,0.7)' }}>
          Scroll to explore
        </span>
        <span className="hero-scroll-cue" style={{ color: 'rgba(233,217,168,0.9)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </span>
      </div>
    </section>
  )
}
