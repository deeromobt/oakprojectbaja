'use client'

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** max tilt in degrees */
  max?: number
  /** lift toward viewer in px on hover */
  lift?: number
  /** show a soft moving highlight */
  glare?: boolean
}

/**
 * Subtle mouse-driven 3D tilt for cards. Disabled on touch / reduced-motion.
 * Wraps its children; the child should fill the wrapper (e.g. h-full).
 */
export default function Tilt3D({
  children,
  className = '',
  style,
  max = 6,
  lift = 12,
  glare = false,
}: Props) {
  const inner = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const enabled = useRef(false)

  useEffect(() => {
    enabled.current =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = inner.current
    if (!el || !enabled.current) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateZ(${lift}px)`
    if (glareRef.current) {
      glareRef.current.style.opacity = '1'
      glareRef.current.style.background = `radial-gradient(circle at ${((px + 0.5) * 100).toFixed(0)}% ${((py + 0.5) * 100).toFixed(0)}%, rgba(255,252,240,0.35), transparent 55%)`
    }
  }

  const onLeave = () => {
    const el = inner.current
    if (!el) return
    el.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)'
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }

  return (
    <div className={`tilt3d-outer ${className}`} style={style} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={inner} className="tilt3d-inner">
        {children}
        {glare && <div ref={glareRef} className="tilt3d-glare" aria-hidden="true" />}
      </div>
    </div>
  )
}
