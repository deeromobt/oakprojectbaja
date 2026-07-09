'use client'

import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: CSSProperties
  /** positive = moves slower than scroll (recedes); try 0.06–0.18 for subtle depth */
  speed?: number
}

/**
 * Lightweight scroll parallax — translates the element on the Y axis relative to
 * its distance from viewport center. Disabled on reduced-motion.
 */
export default function Parallax({ children, className = '', style, speed = 0.1 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    let ticking = false
    let visible = false

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) update()
      },
      { rootMargin: '120px 0px' }
    )
    io.observe(el)

    const update = () => {
      ticking = false
      if (!visible) return
      const r = el.getBoundingClientRect()
      const center = r.top + r.height / 2
      const offset = center - window.innerHeight / 2
      el.style.transform = `translate3d(0, ${(offset * -speed).toFixed(1)}px, 0)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform', ...style }}>
      {children}
    </div>
  )
}
