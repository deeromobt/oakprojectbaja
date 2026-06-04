'use client'

import { useRef, useEffect, useState } from 'react'

interface VideoBackgroundProps {
  src: string
  overlayOpacity?: number   // 0–1, default 0.65
  children: React.ReactNode
  className?: string
  minHeight?: string
}

export default function VideoBackground({
  src,
  overlayOpacity = 0.65,
  children,
  className = '',
  minHeight,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {})
  }, [])

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={minHeight ? { minHeight } : undefined}
    >
      {/* Video layer */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.6s ease' }}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setReady(true)}
      />

      {/* Fallback gradient while video loads */}
      {!ready && (
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #201208 0%, #2E1C0E 100%)' }}
        />
      )}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(32,18,8,${overlayOpacity})` }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  )
}
