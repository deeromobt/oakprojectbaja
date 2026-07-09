'use client'

import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

interface Props {
  children: ReactNode
  as?: ElementType
  className?: string
  style?: CSSProperties
  stagger?: number
  duration?: number
  start?: string
}

/**
 * Splits text into masked lines/words and reveals them word-by-word on scroll
 * (Hungry Tiger style). The heading text must be plain text children.
 */
export default function SplitReveal({
  children,
  as: Tag = 'div',
  className = '',
  style,
  stagger = 0.06,
  duration = 0.9,
  start = 'top 85%',
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)

    let split: SplitType | null = null
    let tween: gsap.core.Tween | null = null

    // fonts must be ready or line-splitting mis-measures
    const run = () => {
      split = new SplitType(el, { types: 'lines,words', lineClass: 'sr-line', wordClass: 'sr-word' })
      if (!split.words) return
      gsap.set(split.words, { yPercent: 118 })
      tween = gsap.to(split.words, {
        yPercent: 0,
        duration,
        stagger,
        ease: 'power4.out',
        scrollTrigger: { trigger: el, start, once: true },
      })
    }

    if (document.fonts && document.fonts.status !== 'loaded') {
      document.fonts.ready.then(run)
    } else {
      run()
    }

    return () => {
      tween?.scrollTrigger?.kill()
      tween?.kill()
      split?.revert()
    }
  }, [stagger, duration, start])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag_ = Tag as any
  return (
    <Tag_ ref={ref} className={className} style={style}>
      {children}
    </Tag_>
  )
}
