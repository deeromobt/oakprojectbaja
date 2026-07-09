'use client'

import Image from 'next/image'
import Link from 'next/link'
import SplitReveal from './SplitReveal'

interface Props {
  image?: string
  eyebrow?: string
  headline?: string
}

/**
 * Ultra-minimal B&W luxury-fashion-campaign hero: full-bleed grayscale image
 * with a top-down clip reveal + slow push-in, oversized editorial headline,
 * and magazine-style corner labels.
 */
export default function HeroEditorial({
  image = '/hero/couple-desert.jpg',
  eyebrow = 'Weddings & Events',
  headline = 'The Art of Celebration',
}: Props) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100svh', background: '#0a0a0a' }}>
      {/* full-bleed B&W image */}
      <div className="absolute inset-0 editorial-reveal">
        <div className="absolute inset-0 hero-kenburns">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'grayscale(1) contrast(1.08) brightness(0.82)' }}
          />
        </div>
      </div>

      {/* gradient for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 38%, rgba(0,0,0,0.78) 100%)' }}
      />

      {/* top corner labels */}
      <div
        className="absolute top-0 inset-x-0 z-10 flex justify-between px-6 sm:px-10 pt-28 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase hero-fade-up"
        style={{ color: 'rgba(255,255,255,0.72)', animationDelay: '0.7s' }}
      >
        <span>Oak Project — Baja California</span>
        <span className="hidden sm:block">Est. Cabo San Lucas</span>
      </div>

      {/* center headline */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 w-full" style={{ minHeight: '100svh' }}>
        <p
          className="hero-fade-up mb-5 sm:mb-7 text-[11px] tracking-[0.42em] uppercase"
          style={{ color: 'rgba(255,255,255,0.7)', animationDelay: '0.15s' }}
        >
          {eyebrow}
        </p>
        <SplitReveal
          as="h1"
          className="text-white uppercase leading-[0.86]"
          style={{ fontSize: 'clamp(3rem, 12vw, 11rem)', letterSpacing: '-0.01em' }}
        >
          {headline}
        </SplitReveal>

        <div className="hero-fade-up mt-10 sm:mt-12 flex gap-3" style={{ animationDelay: '0.65s' }}>
          <Link
            href="/cotizacion"
            className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase transition-opacity hover:opacity-80"
            style={{ background: '#fff', color: '#0a0a0a', fontWeight: 600 }}
          >
            Enquire
          </Link>
          <Link
            href="/galeria"
            className="px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase border transition-colors hover:bg-white hover:text-black"
            style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
          >
            The Work
          </Link>
        </div>
      </div>

      {/* bottom corner labels */}
      <div
        className="absolute bottom-0 inset-x-0 z-10 flex justify-between items-end px-6 sm:px-10 pb-7 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase hero-fade-up"
        style={{ color: 'rgba(255,255,255,0.72)', animationDelay: '0.8s' }}
      >
        <span>Issue 01 — Weddings</span>
        <span className="hero-scroll-cue">Scroll ↓</span>
      </div>
    </section>
  )
}
