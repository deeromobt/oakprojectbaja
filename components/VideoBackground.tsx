'use client'

import { useRef, useEffect, useState } from 'react'
import CloudflareVideo from './CloudflareVideo'

interface VideoBackgroundProps {
  src?: string
  cfId?: string
  overlayOpacity?: number
  children: React.ReactNode
  className?: string
  minHeight?: string
}

export default function VideoBackground({
  src,
  cfId,
  overlayOpacity = 0.65,
  children,
  className = '',
  minHeight,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (cfId) return
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [cfId])

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={minHeight ? { minHeight } : undefined}
    >
      {cfId ? (
        <CloudflareVideo id={cfId} mode="background" />
      ) : src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.6s ease' }}
          src={src}
          autoPlay muted loop playsInline
          onCanPlay={() => setReady(true)}
        />
      ) : null}

      {!cfId && !ready && (
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #201208 0%, #2E1C0E 100%)' }}
        />
      )}

      <div
        className="absolute inset-0"
        style={{ background: `rgba(32,18,8,${overlayOpacity})` }}
      />

      <div className="relative z-10">{children}</div>
    </section>
  )
}
