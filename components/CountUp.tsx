'use client'

import { useEffect, useRef, type CSSProperties } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  value: string
  className?: string
  style?: CSSProperties
}

/**
 * Counts a numeric value up from zero when it scrolls into view (Terminal style).
 * Keeps any prefix/suffix ("300+", "16 years", "98%"). Non-numeric values render static.
 */
export default function CountUp({ value, className = '', style }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const m = value.match(/[\d][\d.,]*/)
    if (!m) return // nothing numeric — leave as-is
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)

    const raw = m[0]
    const numStr = raw.replace(/,/g, '')
    const target = parseFloat(numStr)
    const decimals = (numStr.split('.')[1] || '').length
    const grouped = raw.includes(',')
    const prefix = value.slice(0, m.index)
    const suffix = value.slice((m.index || 0) + raw.length)

    const fmt = (n: number) => {
      const s = n.toFixed(decimals)
      return grouped ? Number(s).toLocaleString('en-US') : s
    }

    const obj = { n: 0 }
    el.textContent = prefix + fmt(0) + suffix
    const tween = gsap.to(obj, {
      n: target,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => {
        el.textContent = prefix + fmt(obj.n) + suffix
      },
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    })
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [value])

  return (
    <span ref={ref} className={className} style={style}>
      {value}
    </span>
  )
}
