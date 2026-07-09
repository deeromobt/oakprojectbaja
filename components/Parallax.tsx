'use client'

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** fraction of travel; higher = stronger parallax. 0.1 subtle → 0.3 strong */
  speed?: number
}

/**
 * GSAP scrub parallax — the element drifts on the Y axis as its parent scrolls
 * through the viewport. Synced with Lenis via ScrollTrigger. Reduced-motion safe.
 */
export default function Parallax({ children, className = '', style, speed = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)

    const move = speed * 100
    const tween = gsap.fromTo(
      el,
      { yPercent: -move },
      {
        yPercent: move,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform', ...style }}>
      {children}
    </div>
  )
}
