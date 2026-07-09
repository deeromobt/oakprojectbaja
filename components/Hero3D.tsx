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
  far?: boolean       // further back — smaller apparent, hidden on mobile
  hideSm?: boolean    // hidden on mobile to keep text readable
}

const CARDS: Card[] = [
  // ---- left side ----
  { src: '/hero/couple-lift.jpg',   alt: 'Wedding couple on the beach', w: 210, h: 284, pos: { top: '15%', left: '4.5%' }, ry: 15,  rz: -4, z: 40,   delay: 0.0 },
  { src: '/hero/couple-desert.jpg', alt: 'Couple in the desert dunes',  w: 208, h: 140, pos: { top: '47%', left: '2%' },   ry: 19,  rz: -3, z: -150, delay: 0.6, far: true },
  { src: '/hero/ceremony.jpg',      alt: 'Wedding ceremony',            w: 186, h: 250, pos: { bottom: '9%', left: '8%' },   ry: 12,  rz: 5,  z: -40,  delay: 1.3, hideSm: true },
  // ---- right side ----
  { src: '/hero/couple-beach.jpg',  alt: 'Couple walking on the beach', w: 202, h: 272, pos: { top: '13%', right: '4.5%' }, ry: -15, rz: 4,  z: 20,   delay: 0.35 },
  { src: '/hero/couple-rocks.jpg',  alt: 'Couple by the sea',           w: 208, h: 140, pos: { top: '49%', right: '2%' },   ry: -19, rz: 3,  z: -160, delay: 0.9, far: true },
  { src: '/hero/table.jpg',         alt: 'Wedding reception table',     w: 188, h: 252, pos: { bottom: '11%', right: '7%' }, ry: -12, rz: -5, z: -50,  delay: 1.7, hideSm: true },
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
      target.current.ry = x * 14
      target.current.rx = -y * 9
    }

    const tick = () => {
      // smooth, high-quality easing toward the cursor target
      current.current.rx += (target.current.rx - current.current.rx) * 0.075
      current.current.ry += (target.current.ry - current.current.ry) * 0.075
      if (sceneRef.current) {
        sceneRef.current.style.transform =
          `rotateX(${current.current.rx.toFixed(3)}deg) rotateY(${current.current.ry.toFixed(3)}deg)`
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
          'radial-gradient(125% 100% at 50% 0%, #FFFDF7 0%, #FCF7E8 48%, #F1E6CC 100%)',
      }}
    >
      {/* soft gold glow */}
      <div
        className="absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '1000px',
          height: '1000px',
          maxWidth: '130vw',
          background:
            'radial-gradient(circle, rgba(201,184,137,0.30) 0%, rgba(201,184,137,0.10) 42%, transparent 70%)',
          filter: 'blur(6px)',
        }}
      />

      {/* 3D floating gallery */}
      <div className="absolute inset-0 hero-stage" aria-hidden="true">
        <div ref={sceneRef} className="absolute inset-0 hero-scene">
          {CARDS.map((c) => (
            <div
              key={c.src}
              className={`hero-card-wrap absolute ${c.hideSm ? 'hero-card-hide-sm' : ''}`}
              style={c.pos}
            >
              <div className="hero-float" style={{ animationDelay: `${c.delay}s` }}>
                <div
                  className="hero-card"
                  style={{
                    width: c.w,
                    height: c.h,
                    transform: `translateZ(${c.z}px) rotateY(${c.ry}deg) rotateZ(${c.rz}deg)`,
                    opacity: c.far ? 0.92 : 1,
                  }}
                >
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    sizes="240px"
                    style={{ objectFit: 'cover' }}
                  />
                  {/* glossy light-catch */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(155deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 34%)' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle cream vignette so text stays crisp over cards */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(58% 50% at 50% 44%, rgba(252,247,232,0.72) 0%, rgba(252,247,232,0) 100%)' }}
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
            style={{ height: 'auto' }}
          />
        </div>

        <h1
          className="hero-fade-up w-full text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 whitespace-pre-line"
          style={{ color: '#2A1E08', animationDelay: '0.25s' }}
        >
          {headline}
        </h1>

        <p
          className="hero-fade-up w-full text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          style={{ color: '#7A6535', animationDelay: '0.4s' }}
        >
          {subline}
        </p>

        <div className="hero-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.55s' }}>
          <Link href="/cotizacion" className="btn-gold px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Get a Quote
          </Link>
          <Link href="/mobiliario" className="btn-outline px-10 py-4 rounded-full font-semibold text-base tracking-wide">
            Browse Catalog
          </Link>
        </div>
      </div>

      {/* photo credit */}
      <div
        className="absolute bottom-5 left-6 z-10 hidden sm:block text-xs tracking-[0.18em] uppercase"
        style={{ color: 'rgba(122,101,53,0.75)' }}
      >
        Photography · {photographer}
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce" style={{ color: 'rgba(150,129,72,0.7)' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
