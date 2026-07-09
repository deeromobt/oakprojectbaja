'use client'

import { useEffect, useRef, type CSSProperties } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  src: string
  alt?: string
  className?: string
  style?: CSSProperties
  priority?: boolean
  /** grayscale by default; set false for a colour accent */
  bw?: boolean
  sizes?: string
}

/**
 * Full-bleed B&W editorial image with a scroll-triggered mask reveal
 * (clip wipes up + slight scale settle). Reduced-motion safe.
 */
export default function EditorialImage({
  src,
  alt = '',
  className = '',
  style,
  priority = false,
  bw = true,
  sizes = '100vw',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.registerPlugin(ScrollTrigger)
    const tween = gsap.fromTo(
      el,
      { clipPath: 'inset(0 0 100% 0)', scale: 1.14 },
      {
        clipPath: 'inset(0 0 0% 0)',
        scale: 1,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      }
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', ...style }}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: 'cover', filter: bw ? 'grayscale(1) contrast(1.06)' : 'none' }}
      />
    </div>
  )
}
