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

const allInHouse = [
  { n: '01', title: 'Photography', desc: 'Full-day coverage. Ceremony, reception, portraits, details.' },
  { n: '02', title: 'Cinematography', desc: 'Cinematic highlight film + ceremony cut. Delivered in weeks, not months.' },
  { n: '03', title: 'Professional Audio', desc: 'Line array speakers, wireless mics, monitor mix — ceremony through last dance.' },
  { n: '04', title: 'Lighting Design', desc: 'Moving heads, LED par wash, architectural rigging. We design the atmosphere.' },
  { n: '05', title: 'DJ', desc: 'Open-format sets curated to your music taste. We read the room.' },
  { n: '06', title: 'Dance Floor', desc: 'Custom-sized for your venue and guest count. Included in the build.' },
  { n: '07', title: 'Full Production & Setup', desc: 'Load-in, rigging, soundcheck, teardown. You never lift a finger.' },
]

const processSteps = [
  { n: '01', title: 'Tell us about your wedding', desc: 'Venue, date, guest count, vibe. We listen first.' },
  { n: '02', title: 'We build your package', desc: 'A custom proposal with the exact services your day needs — and a price that fits your budget.' },
  { n: '03', title: 'We handle everything else', desc: 'From setup to teardown. You show up and enjoy your wedding.' },
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
        <HeroEditorial
          videoId="134e4fa4b335ec371611d69b2fbcd52c"
          videoPortrait
          eyebrow="Oak Project Baja"
          headline="Why hire 5 vendors when we are all 5."
        />
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

      {/* 3 — The Pitch */}
      <section
        className="px-6"
        style={{
          background: '#FCF7E8',
          paddingTop: 'clamp(60px,10vw,160px)',
          paddingBottom: 'clamp(60px,10vw,160px)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <RevealSection>
            <p
              style={{
                color: '#2A1E08',
                fontSize: 'clamp(1.05rem,2.5vw,1.65rem)',
                lineHeight: 1.65,
                marginBottom: '2.25rem',
              }}
            >
              Planning a wedding in Baja means juggling a photographer, a videographer, an audio tech, a DJ, a lighting crew, a dance floor rental, and the logistics of coordinating all of them on the same day — each with their own contract, their own invoice, and their own WhatsApp thread.
            </p>
          </RevealSection>
          <RevealSection delay={120}>
            <p
              style={{
                color: '#968148',
                fontSize: 'clamp(1.05rem,2.5vw,1.65rem)',
                lineHeight: 1.65,
                fontStyle: 'italic',
              }}
            >
              Or you call us once. We handle everything. Same team, same vision, one day that comes together exactly as you imagined it — without a single coordination call from you.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 4 — All in House */}
      <section className="px-6 pb-20 sm:pb-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>
              Everything in one package
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9] mb-14"
            style={{ color: '#2A1E08', fontSize: 'clamp(2.5rem,8vw,6.5rem)', letterSpacing: '-0.01em' }}
          >
            All in house.
          </SplitReveal>
          <div className="flex flex-col">
            {allInHouse.map((s, i) => (
              <RevealSection key={s.n} delay={i * 45}>
                <div
                  className="border-t"
                  style={{
                    borderColor: '#D9C99A',
                    paddingTop: 'clamp(18px,3vw,32px)',
                    paddingBottom: 'clamp(18px,3vw,32px)',
                  }}
                >
                  <div
                    className="flex items-baseline justify-between"
                    style={{ gap: 'clamp(16px,4vw,56px)' }}
                  >
                    <div className="flex items-baseline" style={{ gap: 'clamp(16px,4vw,56px)' }}>
                      <span className="text-xs shrink-0" style={{ color: '#C9B889' }}>{s.n}</span>
                      <div>
                        <span
                          className="uppercase block"
                          style={{ color: '#2A1E08', fontSize: 'clamp(1.15rem,3vw,2rem)', letterSpacing: '-0.01em' }}
                        >
                          {s.title}
                        </span>
                        {/* Mobile description — below title */}
                        <span className="sm:hidden block mt-1.5" style={{ color: '#7A6535', fontSize: '14px', lineHeight: 1.6 }}>
                          {s.desc}
                        </span>
                      </div>
                    </div>
                    {/* Desktop description — right side */}
                    <span
                      className="hidden sm:block text-right shrink-0"
                      style={{ color: '#7A6535', fontSize: '14px', lineHeight: 1.6, maxWidth: '340px' }}
                    >
                      {s.desc}
                    </span>
                  </div>
                </div>
              </RevealSection>
            ))}
            <div className="border-t" style={{ borderColor: '#D9C99A' }} />
          </div>
        </div>
      </section>

      {/* 5 — Editorial feature slides */}
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

      {/* 6 — The Process */}
      <section className="px-6 py-24 sm:py-36" style={{ background: '#FCF7E8' }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>
              The process
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9] mb-14"
            style={{ color: '#2A1E08', fontSize: 'clamp(2.2rem,7vw,5.5rem)', letterSpacing: '-0.01em' }}
          >
            Simple from the start.
          </SplitReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1px',
              background: '#D9C99A',
            }}
          >
            {processSteps.map((step, i) => (
              <RevealSection key={step.n} delay={i * 80}>
                <div
                  style={{
                    background: '#FCF7E8',
                    paddingTop: 'clamp(24px,4vw,48px)',
                    paddingBottom: 'clamp(24px,4vw,48px)',
                    paddingLeft: 'clamp(20px,4vw,32px)',
                    paddingRight: 'clamp(20px,4vw,32px)',
                  }}
                >
                  <span className="block mb-5 text-xs" style={{ color: '#C9B889' }}>{step.n}</span>
                  <h3
                    className="uppercase mb-4"
                    style={{ color: '#2A1E08', fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: '#7A6535', fontSize: '14px', lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Moodboard */}
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

      {/* 8 — Stats */}
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

      {/* 9 — Final CTA */}
      <section
        className="relative w-full flex flex-col items-center justify-center text-center px-6"
        style={{ background: '#201208', minHeight: '70vh' }}
      >
        <RevealSection>
          <p className="mb-6 text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Let&apos;s build yours
          </p>
        </RevealSection>
        <SplitReveal
          as="h2"
          className="uppercase leading-[0.88] mb-8 max-w-4xl"
          style={{ color: '#FCF7E8', fontSize: 'clamp(2.6rem,8vw,6.5rem)', letterSpacing: '-0.01em' }}
        >
          Tell us about your wedding.
        </SplitReveal>
        <RevealSection delay={100}>
          <p
            className="max-w-xl mx-auto mb-12"
            style={{ color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.95rem,1.8vw,1.15rem)', lineHeight: 1.7 }}
          >
            No fixed packages. No surprises. We put together a proposal based on your venue, your date, and what matters most to you — then we make it happen.
          </p>
        </RevealSection>
        <RevealSection delay={180}>
          <Link
            href="/cotizacion"
            className="px-10 py-4 text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-80"
            style={{ background: '#968148', color: '#FCF7E8', fontWeight: 600 }}
          >
            Start the Conversation
          </Link>
        </RevealSection>
      </section>
    </div>
  )
}
