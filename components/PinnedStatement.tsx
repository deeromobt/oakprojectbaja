'use client'

import { useEffect, useRef, type CSSProperties } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

interface Props {
  text: string
  className?: string
  style?: CSSProperties
  background?: string
}

/**
 * Terminal-style pinned statement: the section pins to the viewport and the
 * words light up (dim → full) as you scroll through it. Reduced-motion safe
 * (renders as a normal, fully-visible statement).
 */
export default function PinnedStatement({ text, className = '', style, background = '#FCF7E8' }: Props) {
  const section = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const sec = section.current
    const txt = textRef.current
    if (!sec || !txt) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)

    let split: SplitType | null = null
    let tween: gsap.core.Tween | null = null

    const run = () => {
      split = new SplitType(txt, { types: 'words', wordClass: 'ps-word' })
      if (!split.words) return
      gsap.set(split.words, { opacity: 0.14 })
      tween = gsap.to(split.words, {
        opacity: 1,
        stagger: 0.4,
        ease: 'none',
        scrollTrigger: {
          trigger: sec,
          start: 'top top',
          end: '+=130%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
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
  }, [text])

  return (
    <section ref={section} className="relative w-full overflow-hidden" style={{ background, minHeight: '100svh' }}>
      <div className="flex items-center justify-center px-6" style={{ minHeight: '100svh' }}>
        <h2
          ref={textRef}
          className={`max-w-5xl text-center ${className}`}
          style={style}
        >
          {text}
        </h2>
      </div>
    </section>
  )
}
