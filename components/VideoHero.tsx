'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface VideoHeroProps {
  videoSrc?: string        // e.g. '/hero.mp4'  — leave undefined until video is ready
  posterSrc?: string       // fallback image while video loads or when no video
  headline?: string
  subline?: string
}

export default function VideoHero({
  videoSrc,
  posterSrc = '/logo.png',
  headline = 'Every detail of your event,\nin one place.',
  subline = 'Furniture, audio, lighting, photography and video for events in Baja California.',
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {/* autoplay blocked — poster stays visible */})
  }, [])

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100svh' }}>
      {/* Video layer */}
      {videoSrc && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
        />
      )}

      {/* Poster / fallback when no video yet */}
      {(!videoSrc || !videoLoaded) && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'linear-gradient(160deg, #2A1E08 0%, #3D2D17 50%, #2A1E08 100%)' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,184,137,0.08) 0%, transparent 70%)',
            }}
          />
        </div>
      )}

      {/* Dark overlay — always on top of video */}
      {videoSrc && (
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(32,18,8,0.45) 0%, rgba(32,18,8,0.6) 100%)' }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '100svh' }}>
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Oak Project Baja"
            width={180}
            height={90}
            priority
            className="mx-auto"
            style={{ filter: 'brightness(0) invert(0.88) sepia(0.25) saturate(0.5)' }}
          />
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold italic leading-tight mb-6 whitespace-pre-line"
          style={{ color: '#D6C6B0', textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
        >
          {headline}
        </h1>

        {/* Sub-line */}
        <p
          className="text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          style={{ color: '#A3947F', textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
        >
          {subline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/cotizacion" className="btn-gold px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Get a Quote
          </Link>
          <Link href="/mobiliario" className="btn-outline px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Browse Catalog
          </Link>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: '#705D41' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}
