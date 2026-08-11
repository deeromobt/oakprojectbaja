'use client'
import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export default function RevealSection({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)

    // Use `from` not `fromTo` — if ScrollTrigger never fires (iOS quirk),
    // element stays at its CSS default (visible) instead of stuck at opacity:0.
    const tween = gsap.from(el, {
      opacity: 0,
      y: 52,
      duration: 1.05,
      delay: delay / 1000,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
