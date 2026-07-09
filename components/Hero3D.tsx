'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Hero3DProps {
  headline?: string
  subline?: string
  photographer?: string
}

type Card = {
  src: string
  alt: string
  w: number
  h: number
  pos: React.CSSProperties
  ry: number   // rotateY (deg)
  rz: number   // rotateZ (deg)
  z: number    // translateZ (px) — depth
  delay: number
  deep?: boolean       // far background accent — dimmed, hidden on mobile
  hideSm?: boolean     // hidden on mobile to keep text readable
}

const CARDS: Card[] = [
  // ---- left side ----
  { src: '/hero/couple-lift.jpg',   alt: 'Wedding couple on the beach', w: 208, h: 280, pos: { top: '14%', left: '4%' },  ry: 17,  rz: -5, z: -40,  delay: 0.0 },
  { src: '/hero/couple-desert.jpg', alt: 'Couple in the desert dunes',  w: 216, h: 146, pos: { top: '46%', left: '1%' },  ry: 22,  rz: -3, z: -240, delay: 0.6, deep: true },
  { src: '/hero/ceremony.jpg',      alt: 'Wedding ceremony',            w: 182, h: 244, pos: { bottom: '10%', left: '8%' }, ry: 13,  rz: 6,  z: -130, delay: 1.3, hideSm: true },
  // ---- right side ----
  { src: '/hero/couple-beach.jpg',  alt: 'Couple walking on the beach', w: 200, h: 270, pos: { top: '13%', right: '4%' }, ry: -17, rz: 5,  z: -60,  delay: 0.35 },
  { src: '/hero/couple-rocks.jpg',  alt: 'Couple by the sea',           w: 216, h: 146, pos: { top: '48%', right: '1%' }, ry: -22, rz: 3,  z: -250, delay: 0.9, deep: true },
  { src: '/hero/table.jpg',         alt: 'Wedding reception table',     w: 186, h: 250, pos: { bottom: '12%', right: '7%' }, ry: -13, rz: -6, z: -140, delay: 1.7, hideSm: true },
]

export default function Hero3D({
  headline = 'Bringing your\nperfect event to life',
  subline = 'Furniture rental, audio, lighting, photography, and video for weddings and events across Baja California.',
  photographer = 'Sofía Angulo',
}: Hero3DProps) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)
  const target = useRef({ rx: 0, ry: 0 })
  const current = useRef({ rx: 0, ry: 0 })

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduce || !fine) return

    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5   // -0.5 .. 0.5
      const y = e.clientY / window.innerHeight - 0.5
      target.current.ry = x * 16
      target.current.rx = -y * 10
    }

    const tick = () => {
      current.current.rx += (target.current.rx - current.current.rx) * 0.06
      current.current.ry += (target.current.ry - current.current.ry) * 0.06
      if (sceneRef.current) {
        sceneRef.current.style.transform =
          `rotateX(${current.current.rx.toFixed(2)}deg) rotateY(${current.current.ry.toFixed(2)}deg)`
      }
      frame.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    frame.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden hero-stage"
      style={{
        minHeight: '100svh',
        background:
          'radial-gradient(120% 90% at 50% 12%, #3a2a12 0%, #241609 45%, #150c04 100%)',
      }}
    >
      {/* golden spotlight glow */}
      <div
        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '900px',
          height: '900px',
          maxWidth: '120vw',
          background:
            'radial-gradient(circle, rgba(201,184,137,0.28) 0%, rgba(150,129,72,0.10) 40%, transparent 70%)',
          filter: 'blur(10px)',
        }}
      />

      {/* 3D floating gallery */}
      <div className="absolute inset-0 hero-stage" aria-hidden="true">
        <div ref={sceneRef} className="absolute inset-0 hero-scene">
          {CARDS.map((c) => (
            <div
              key={c.src}
              className={`hero-card-wrap absolute ${c.deep ? 'hero-card-deep' : ''} ${c.hideSm ? 'hero-card-hide-sm' : ''}`}
              style={c.pos}
            >
              <div className="hero-float" style={{ animationDelay: `${c.delay}s` }}>
                <div
                  style={{
                    width: c.w,
                    height: c.h,
                    transform: `translateZ(${c.z}px) rotateY(${c.ry}deg) rotateZ(${c.rz}deg)`,
                    borderRadius: '14px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '1px solid rgba(201,184,137,0.35)',
                    boxShadow:
                      '0 30px 60px -20px rgba(0,0,0,0.7), 0 8px 20px rgba(0,0,0,0.4)',
                    opacity: c.deep ? 0.55 : 0.94,
                    filter: c.deep ? 'blur(1px) saturate(0.9)' : 'none',
                  }}
                >
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    sizes="220px"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* warm tint to unify with palette */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, rgba(21,12,4,0) 40%, rgba(21,12,4,0.45) 100%)' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* vignette for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(70% 60% at 50% 45%, rgba(21,12,4,0.35) 0%, rgba(21,12,4,0.72) 100%)' }}
      />

      {/* Center content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-3xl mx-auto"
        style={{ minHeight: '100svh' }}
      >
        <div className="hero-fade-up" style={{ animationDelay: '0.1s' }}>
          <Image
            src="/logo.png"
            alt="Oak Project Baja"
            width={168}
            height={84}
            priority
            className="mx-auto mb-8"
            style={{ height: 'auto', filter: 'brightness(0) invert(0.9) sepia(0.22) saturate(0.5)' }}
          />
        </div>

        <h1
          className="hero-fade-up w-full text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 whitespace-pre-line"
          style={{ color: '#F3E9D2', textShadow: '0 2px 40px rgba(0,0,0,0.6)', animationDelay: '0.25s' }}
        >
          {headline}
        </h1>

        <p
          className="hero-fade-up w-full text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          style={{ color: '#C9B889', textShadow: '0 1px 12px rgba(0,0,0,0.5)', animationDelay: '0.4s' }}
        >
          {subline}
        </p>

        <div className="hero-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.55s' }}>
          <Link href="/cotizacion" className="btn-gold px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Get a Quote
          </Link>
          <Link href="/mobiliario" className="btn-outline-light px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Browse Catalog
          </Link>
        </div>
      </div>

      {/* photo credit */}
      <div
        className="absolute bottom-5 left-6 z-10 hidden sm:block text-xs tracking-[0.18em] uppercase"
        style={{ color: 'rgba(201,184,137,0.65)' }}
      >
        Photography · {photographer}
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce" style={{ color: 'rgba(201,184,137,0.7)' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
