import Link from 'next/link'
import HeroEditorial from '@/components/HeroEditorial'
import SplitReveal from '@/components/SplitReveal'
import RevealSection from '@/components/RevealSection'
import CountUp from '@/components/CountUp'
import EditorialImage from '@/components/EditorialImage'
import CloudflareVideo from '@/components/CloudflareVideo'

const marquee = ['Weddings', 'Photography', 'Film', 'Audio', 'Lighting', 'DJ', 'Production', 'Rentals']

const features = [
  { n: '01', label: 'Photography & Film', title: 'Every detail,\nimmortalized.', img: '/editorial/charlie_ceremony.jpg', href: '/media', credit: 'Jessica & Charlie — Baja Luna' },
  { n: '02', label: 'The Celebration', title: 'A day made\nto remember.', img: '/editorial/charlie_table.jpg', href: '/rentas', credit: 'Jessica & Charlie — Baja Luna' },
  { n: '03', label: 'Rentals & Production', title: 'Staged to\nperfection.', videoId: 'debc5af9f99542083c548ad644051c98', href: '/rentas', credit: 'The Mendivils' },
]

const services = [
  { n: '01', title: 'Dance Floors', href: '/rentas' },
  { n: '02', title: 'Audio', href: '/rentas' },
  { n: '03', title: 'Lighting', href: '/rentas' },
  { n: '04', title: 'Photography', href: '/media' },
  { n: '05', title: 'Video', href: '/media' },
  { n: '06', title: 'DJ', href: '/djs' },
]

const stats = [
  { v: '300+', l: 'Events staged' },
  { v: '16', l: 'Years in Baja' },
  { v: '98%', l: 'Would return' },
  { v: '6', l: 'Disciplines' },
]


export default function Home() {
  return (
    <div style={{ background: '#FCF7E8' }}>
      {/* 1 — Hero */}
      <div className="-mt-24">
        <HeroEditorial image="/hero/hero-beach.jpg" eyebrow="Weddings & Events" headline="The Art of Celebration" />
      </div>

      {/* 2 — Word marquee */}
      <div className="overflow-hidden py-6 border-y" style={{ borderColor: '#D9C99A' }}>
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 34s linear infinite', width: 'max-content' }}>
          {[...marquee, ...marquee].map((w, i) => (
            <span key={i} className="mx-8 uppercase" style={{ color: '#2A1E08', fontSize: 'clamp(1.6rem,4vw,3rem)', letterSpacing: '-0.01em' }}>
              {w}
              <span className="ml-8" style={{ color: '#C9B889' }}>—</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3 — Manifesto */}
      <section className="px-6 py-28 sm:py-40" style={{ background: '#FCF7E8' }}>
        <div className="max-w-5xl mx-auto text-center">
          <RevealSection>
            <p className="mb-8 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>Oak Project Baja</p>
          </RevealSection>
          <SplitReveal as="h2" className="uppercase leading-[0.92]" style={{ color: '#2A1E08', fontSize: 'clamp(2.2rem,7vw,6rem)', letterSpacing: '-0.01em' }}>
            Every wedding, a campaign. Every detail, considered.
          </SplitReveal>
        </div>
      </section>

      {/* 4 — Editorial features */}
      {features.map((f, i) => (
        <Link key={f.n} href={f.href} className="group block relative w-full overflow-hidden" style={{ height: '92vh' }}>
          {'videoId' in f && f.videoId
            ? <CloudflareVideo id={f.videoId} mode="cover" />
            : <EditorialImage src={(f as any).img} alt={f.label} className="absolute inset-0" priority={i === 0} />
          }
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(20,12,4,0.4) 0%, rgba(20,12,4,0.12) 40%, rgba(20,12,4,0.74) 100%)' }} />
          <div className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-12 ${i % 2 === 1 ? 'items-end text-right' : 'items-start text-left'}`}>
            <div className="flex w-full justify-between text-[11px] tracking-[0.28em] uppercase" style={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
              <span>{f.n} / 03</span>
              <span>{f.credit ? f.credit : f.label}</span>
            </div>
            <div>
              <h3 className="uppercase whitespace-pre-line leading-[0.9]" style={{ color: '#FCF7E8', fontSize: 'clamp(2.5rem,8vw,7rem)', letterSpacing: '-0.01em', textShadow: '0 2px 30px rgba(0,0,0,0.45)' }}>
                {f.title}
              </h3>
              <span className="inline-block mt-6 text-[11px] tracking-[0.2em] uppercase border-b pb-1 transition-opacity group-hover:opacity-60" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}>
                Discover →
              </span>
            </div>
          </div>
        </Link>
      ))}

      {/* 5 — Services index */}
      <section className="px-6 py-28 sm:py-40" style={{ background: '#FCF7E8' }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>The Studio</p>
          </RevealSection>
          <SplitReveal as="h2" className="uppercase leading-[0.9] mb-16" style={{ color: '#2A1E08', fontSize: 'clamp(2.5rem,8vw,6.5rem)', letterSpacing: '-0.01em' }}>
            Everything, in one place
          </SplitReveal>
          <div className="flex flex-col">
            {services.map((s, i) => (
              <RevealSection key={s.n} delay={i * 45}>
                <Link href={s.href} className="group flex items-center justify-between py-6 sm:py-8 border-t" style={{ borderColor: '#D9C99A' }}>
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="text-xs" style={{ color: '#C9B889' }}>{s.n}</span>
                    <span className="uppercase transition-opacity group-hover:opacity-50" style={{ color: '#2A1E08', fontSize: 'clamp(1.8rem,5vw,3.5rem)', letterSpacing: '-0.01em' }}>{s.title}</span>
                  </div>
                  <span className="text-2xl transition-transform group-hover:translate-x-2" style={{ color: '#968148' }}>→</span>
                </Link>
              </RevealSection>
            ))}
            <div className="border-t" style={{ borderColor: '#D9C99A' }} />
          </div>
        </div>
      </section>

      {/* 6 — Moodboard */}
      <section className="px-3 sm:px-6 pb-6" style={{ background: '#FCF7E8' }}>
        <RevealSection>
          <p className="px-3 mb-6 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>The Work — Selected Frames</p>
        </RevealSection>
        <div className="grid grid-cols-3 auto-rows-[38vh] gap-3">
          <div className="relative overflow-hidden row-span-2">
            <CloudflareVideo id="134e4fa4b335ec371611d69b2fbcd52c" mode="cover" portrait />
          </div>
          <EditorialImage src="/editorial/charlie_ceremony.jpg" className="relative" sizes="33vw" />
          <div className="relative overflow-hidden row-span-2">
            <CloudflareVideo id="f4c4cb0155960b64fa063d36b0ecabc8" mode="cover" portrait />
          </div>
          <EditorialImage src="/editorial/charlie_table.jpg" className="relative" sizes="33vw" />
        </div>
        <RevealSection className="mt-8 text-center">
          <Link href="/galeria" className="inline-block text-[11px] tracking-[0.2em] uppercase border-b pb-1" style={{ color: '#968148', borderColor: '#D9C99A' }}>
            View the full gallery →
          </Link>
        </RevealSection>
      </section>

      {/* 7 — Stats */}
      <section className="px-6 py-28 sm:py-36 border-t" style={{ background: '#FCF7E8', borderColor: '#D9C99A' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <RevealSection key={s.l} delay={i * 70} className="text-center">
              <CountUp value={s.v} className="block" style={{ color: '#2A1E08', fontSize: 'clamp(3rem,9vw,6rem)', letterSpacing: '-0.02em', lineHeight: 1 }} />
              <p className="mt-3 text-[11px] tracking-[0.2em] uppercase" style={{ color: '#968148' }}>{s.l}</p>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* 8 — Final CTA */}
      <section className="relative w-full overflow-hidden" style={{ height: '92vh' }}>
        <EditorialImage src="/editorial/charlie_table.jpg" alt="" className="absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(20,12,4,0.55), rgba(20,12,4,0.45) 50%, rgba(20,12,4,0.8))' }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ height: '92vh' }}>
          <p className="mb-6 text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(255,255,255,0.8)' }}>Your day, staged</p>
          <SplitReveal as="h2" className="uppercase leading-[0.9] mb-10 max-w-4xl" style={{ color: '#FCF7E8', fontSize: 'clamp(2.6rem,8vw,6.5rem)', letterSpacing: '-0.01em' }}>
            Let&apos;s create something unforgettable
          </SplitReveal>
          <Link href="/cotizacion" className="px-10 py-4 text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-80" style={{ background: '#968148', color: '#FCF7E8', fontWeight: 600 }}>
            Enquire Now
          </Link>
        </div>
      </section>
    </div>
  )
}
