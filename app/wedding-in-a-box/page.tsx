import Link from 'next/link'
import RevealSection from '@/components/RevealSection'
import SplitReveal from '@/components/SplitReveal'
import EditorialImage from '@/components/EditorialImage'
import CloudflareVideo from '@/components/CloudflareVideo'

const included = [
  {
    n: '01',
    title: 'Photography',
    detail: 'Full-day coverage. Ceremony, reception, portraits, details.',
  },
  {
    n: '02',
    title: 'Cinematography',
    detail: 'Cinematic highlight film + ceremony cut. Delivered in weeks, not months.',
  },
  {
    n: '03',
    title: 'Professional Audio',
    detail: 'Line array speakers, wireless mics, monitor mix — ceremony through last dance.',
  },
  {
    n: '04',
    title: 'Lighting Design',
    detail: 'Moving heads, LED par wash, architectural rigging. We design the atmosphere.',
  },
  {
    n: '05',
    title: 'DJ',
    detail: 'Open-format sets curated to your music taste. We read the room.',
  },
  {
    n: '06',
    title: 'Dance Floor',
    detail: 'Custom-sized for your venue and guest count. Included in the build.',
  },
  {
    n: '07',
    title: 'Full Production & Setup',
    detail: 'Load-in, rigging, soundcheck, teardown. You never lift a finger.',
  },
]

const events = [
  { couple: 'Julius & Indera', venue: "Petunia's Garden", services: 'Audio · Lighting' },
  { couple: 'Jessica & Charlie', venue: 'Baja Luna', services: 'Audio · Lighting · Video' },
  { couple: 'Hayden & Delanie', venue: "Flora's Farm", services: 'Audio · Lighting · DJ' },
  { couple: 'Blake & Maeghan', venue: 'Rooftop 360', services: 'Audio · Lighting · DJ' },
]

export default function WeddingInABox() {
  return (
    <div style={{ background: '#FCF7E8' }}>

      {/* 1 — Video Hero */}
      <section className="relative w-full -mt-24 overflow-hidden" style={{ height: '95vh' }}>
        <CloudflareVideo id="debc5af9f99542083c548ad644051c98" mode="cover" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(20,12,4,0.35) 0%, rgba(20,12,4,0.1) 40%, rgba(20,12,4,0.85) 100%)' }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-20">
          <RevealSection>
            <p className="mb-6 text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(201,184,137,0.85)' }}>
              Oak Project Baja — Wedding in a Box
            </p>
          </RevealSection>
          <SplitReveal
            as="h1"
            className="uppercase leading-[0.88] max-w-5xl mx-auto"
            style={{ color: '#FCF7E8', fontSize: 'clamp(2.8rem,8vw,7.5rem)', letterSpacing: '-0.01em' }}
          >
            Why hire five vendors when we are all five.
          </SplitReveal>
        </div>
      </section>

      {/* 2 — The pitch */}
      <section className="px-6 py-28 sm:py-40" style={{ background: '#FCF7E8' }}>
        <div className="max-w-4xl mx-auto">
          <RevealSection>
            <p
              className="leading-relaxed mb-10"
              style={{ color: '#2A1E08', fontSize: 'clamp(1.2rem,2.8vw,1.7rem)', lineHeight: 1.6 }}
            >
              Planning a wedding in Baja means juggling a photographer, a videographer, an audio tech,
              a DJ, a lighting crew, a dance floor rental, and the logistics of coordinating all of them
              on the same day — each with their own contract, their own invoice, and their own WhatsApp thread.
            </p>
          </RevealSection>
          <RevealSection delay={80}>
            <p
              className="leading-relaxed"
              style={{ color: '#968148', fontStyle: 'italic', fontSize: 'clamp(1.2rem,2.8vw,1.7rem)', lineHeight: 1.6 }}
            >
              Or you call us once. We handle everything. Same team, same vision, one day that comes
              together exactly as you imagined it — without a single coordination call from you.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 3 — What's included */}
      <section className="px-6 pb-28 sm:pb-36 border-t" style={{ background: '#FCF7E8', borderColor: '#D9C99A' }}>
        <div className="max-w-6xl mx-auto pt-16">
          <RevealSection>
            <p className="mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>
              Everything in one package
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9] mb-16"
            style={{ color: '#2A1E08', fontSize: 'clamp(2.2rem,7vw,5.5rem)', letterSpacing: '-0.01em' }}
          >
            All in house.
          </SplitReveal>
          <div className="flex flex-col">
            {included.map((s, i) => (
              <RevealSection key={s.n} delay={i * 40}>
                <div
                  className="flex items-start py-7 sm:py-8 border-t gap-6 sm:gap-14"
                  style={{ borderColor: '#D9C99A' }}
                >
                  <span className="shrink-0 text-xs pt-1" style={{ color: '#C9B889', minWidth: '2rem' }}>{s.n}</span>
                  <div className="flex-1 sm:flex sm:items-baseline sm:justify-between gap-8">
                    <p
                      className="uppercase mb-1 sm:mb-0 shrink-0"
                      style={{ color: '#2A1E08', fontSize: 'clamp(1.3rem,3vw,2rem)', letterSpacing: '-0.01em' }}
                    >
                      {s.title}
                    </p>
                    <p className="text-sm leading-relaxed max-w-md text-right hidden sm:block" style={{ color: '#7A6535' }}>
                      {s.detail}
                    </p>
                    <p className="text-sm leading-relaxed mt-1 sm:hidden" style={{ color: '#7A6535' }}>
                      {s.detail}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
            <div className="border-t" style={{ borderColor: '#D9C99A' }} />
          </div>
        </div>
      </section>

      {/* 4 — Photo break */}
      <div className="grid grid-cols-2 gap-[1px]" style={{ background: '#D9C99A', height: '60vh' }}>
        <EditorialImage src="/editorial/charlie_ceremony.jpg" className="relative" sizes="50vw" />
        <EditorialImage src="/editorial/charlie_table.jpg" className="relative" sizes="50vw" />
      </div>

      {/* 5 — How it works */}
      <section className="px-6 py-28 sm:py-40" style={{ background: '#FCF7E8' }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>
              The process
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9] mb-16"
            style={{ color: '#2A1E08', fontSize: 'clamp(2.2rem,7vw,5.5rem)', letterSpacing: '-0.01em' }}
          >
            Simple from the start.
          </SplitReveal>
          <div className="grid md:grid-cols-3 gap-[1px]" style={{ background: '#D9C99A' }}>
            {[
              { n: '01', title: 'Tell us about your wedding', desc: 'Venue, date, guest count, vibe. We listen first.' },
              { n: '02', title: 'We build your package', desc: 'A custom proposal with the exact services your day needs — and a price that fits your budget.' },
              { n: '03', title: 'We handle everything else', desc: 'From setup to teardown. You show up and enjoy your wedding.' },
            ].map((step, i) => (
              <RevealSection key={step.n} delay={i * 70}>
                <div className="px-8 py-12" style={{ background: '#FCF7E8' }}>
                  <span className="block text-xs mb-8" style={{ color: '#C9B889' }}>{step.n}</span>
                  <p
                    className="uppercase leading-tight mb-5"
                    style={{ color: '#2A1E08', fontSize: 'clamp(1.1rem,2.2vw,1.5rem)', letterSpacing: '-0.01em' }}
                  >
                    {step.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A6535' }}>{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Recent weddings */}
      <section className="px-6 pb-28 sm:pb-36 border-t" style={{ background: '#FCF7E8', borderColor: '#D9C99A' }}>
        <div className="max-w-6xl mx-auto pt-16">
          <RevealSection>
            <p className="mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>
              Recent weddings
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9] mb-16"
            style={{ color: '#2A1E08', fontSize: 'clamp(2.2rem,7vw,5.5rem)', letterSpacing: '-0.01em' }}
          >
            The work.
          </SplitReveal>
          <div className="flex flex-col">
            {events.map((e, i) => (
              <RevealSection key={e.couple} delay={i * 50}>
                <div
                  className="flex items-center justify-between py-6 sm:py-8 border-t gap-4"
                  style={{ borderColor: '#D9C99A' }}
                >
                  <div>
                    <p
                      className="uppercase leading-none"
                      style={{ color: '#2A1E08', fontSize: 'clamp(1.1rem,2.8vw,2rem)', letterSpacing: '-0.01em' }}
                    >
                      {e.couple}
                    </p>
                    <p className="mt-1 text-sm" style={{ color: '#7A6535' }}>{e.venue}</p>
                  </div>
                  <p className="text-xs tracking-widest text-right shrink-0" style={{ color: '#C9B889' }}>
                    {e.services}
                  </p>
                </div>
              </RevealSection>
            ))}
            <div className="border-t" style={{ borderColor: '#D9C99A' }} />
          </div>
        </div>
      </section>

      {/* 7 — CTA */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: '70vh', background: '#201208' }}
      >
        <RevealSection>
          <p className="mb-6 text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(201,184,137,0.75)' }}>
            Let&apos;s build yours
          </p>
        </RevealSection>
        <SplitReveal
          as="h2"
          className="uppercase leading-[0.9] mb-6 max-w-3xl"
          style={{ color: '#FCF7E8', fontSize: 'clamp(2.4rem,7vw,6rem)', letterSpacing: '-0.01em' }}
        >
          Tell us about your wedding.
        </SplitReveal>
        <RevealSection delay={80}>
          <p className="max-w-lg mx-auto mb-12 leading-relaxed" style={{ color: 'rgba(252,247,232,0.55)', fontSize: '1rem' }}>
            No fixed packages. No surprises. We put together a proposal based on your venue,
            your date, and what matters most to you — then we make it happen.
          </p>
        </RevealSection>
        <RevealSection delay={140}>
          <Link
            href="/cotizacion"
            className="px-12 py-4 text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-80"
            style={{ background: '#968148', color: '#FCF7E8', fontWeight: 600 }}
          >
            Start the Conversation
          </Link>
        </RevealSection>
      </section>

    </div>
  )
}
