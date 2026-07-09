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

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 52 },
      {
        opacity: 1,
        y: 0,
        duration: 1.05,
        delay: delay / 1000,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      }
    )
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
