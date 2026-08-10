import Link from 'next/link'
import RevealSection from '@/components/RevealSection'
import SplitReveal from '@/components/SplitReveal'

const eventTypes = [
  { title: 'Birthday Parties', desc: 'From intimate gatherings to full-scale productions — sound, lighting, and DJ all in.' },
  { title: 'Anniversaries', desc: 'A milestone worth marking with the same care as a wedding day.' },
  { title: 'Corporate Events', desc: 'Professional production that reflects your brand and impresses your guests.' },
  { title: 'Gender Reveals', desc: 'Joyful moments elevated with lighting, music, and seamless coordination.' },
  { title: 'Rehearsal Dinners', desc: 'Set the tone for the big day — relaxed but beautifully produced.' },
  { title: 'Private Gatherings', desc: 'Villas, yachts, rooftops — we bring the production to you.' },
]

const services = [
  { n: '01', title: 'Audio & Sound', desc: 'Crystal-clear sound scaled to your space and guest count.' },
  { n: '02', title: 'Lighting', desc: 'Moving heads, LED par lights, and architectural rigging for any atmosphere.' },
  { n: '03', title: 'DJ', desc: 'Open-format sets that read the room and keep the energy right.' },
  { n: '04', title: 'Photography & Film', desc: 'Document the celebration — candid, editorial, or both.' },
  { n: '05', title: 'Dance Floor', desc: 'Custom-sized floors for any venue configuration.' },
  { n: '06', title: 'Setup & Coordination', desc: 'Full production management — load-in to load-out, no stress on your end.' },
]

export default function Celebraciones() {
  return (
    <div style={{ background: '#FCF7E8' }}>

      {/* 1 — Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 -mt-24"
        style={{ minHeight: '70vh', background: '#201208' }}
      >
        <RevealSection>
          <p className="mb-8 text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(201,184,137,0.75)' }}>
            Oak Project Baja — Events
          </p>
        </RevealSection>
        <SplitReveal
          as="h1"
          className="uppercase leading-[0.9] mb-8 max-w-4xl"
          style={{ color: '#FCF7E8', fontSize: 'clamp(2.8rem,8vw,7rem)', letterSpacing: '-0.01em' }}
        >
          Every celebration deserves a production.
        </SplitReveal>
        <RevealSection delay={120}>
          <p className="max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(252,247,232,0.65)', fontStyle: 'italic', fontSize: 'clamp(1rem,2.2vw,1.3rem)' }}>
            The same production quality we bring to weddings, scaled to your celebration.
          </p>
        </RevealSection>
      </section>

      {/* 2 — Event types grid */}
      <section className="px-6 py-28 sm:py-40" style={{ background: '#FCF7E8' }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>
              What we produce
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9] mb-16"
            style={{ color: '#2A1E08', fontSize: 'clamp(2.2rem,7vw,5.5rem)', letterSpacing: '-0.01em' }}
          >
            Every kind of event
          </SplitReveal>
          <div className="grid md:grid-cols-2 gap-px" style={{ border: '1px solid #D9C99A' }}>
            {eventTypes.map((e, i) => (
              <RevealSection key={e.title} delay={i * 40}>
                <div
                  className="p-8 sm:p-10"
                  style={{ borderColor: '#D9C99A', background: i % 2 === 0 ? '#FCF7E8' : '#EDE4CC' }}
                >
                  <p
                    className="uppercase mb-3"
                    style={{ color: '#2A1E08', fontSize: 'clamp(1.1rem,2.2vw,1.4rem)', letterSpacing: '-0.01em' }}
                  >
                    {e.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A6535' }}>{e.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Services numbered list */}
      <section className="px-6 pb-28 sm:pb-40 border-t" style={{ background: '#FCF7E8', borderColor: '#D9C99A' }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="mt-16 mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>
              What&apos;s available
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9] mb-16"
            style={{ color: '#2A1E08', fontSize: 'clamp(2.2rem,7vw,5.5rem)', letterSpacing: '-0.01em' }}
          >
            Production services
          </SplitReveal>
          <div className="flex flex-col">
            {services.map((s, i) => (
              <RevealSection key={s.n} delay={i * 45}>
                <div
                  className="flex items-start py-7 sm:py-9 border-t gap-8"
                  style={{ borderColor: '#D9C99A' }}
                >
                  <span className="shrink-0 text-xs pt-1.5" style={{ color: '#C9B889' }}>{s.n}</span>
                  <div>
                    <p
                      className="uppercase leading-none mb-2"
                      style={{ color: '#2A1E08', fontSize: 'clamp(1.4rem,3.5vw,2.5rem)', letterSpacing: '-0.01em' }}
                    >
                      {s.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#7A6535' }}>{s.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
            <div className="border-t" style={{ borderColor: '#D9C99A' }} />
          </div>
        </div>
      </section>

      {/* 4 — CTA */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-36"
        style={{ background: '#201208' }}
      >
        <RevealSection>
          <p className="mb-6 text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(201,184,137,0.75)' }}>
            Ready when you are
          </p>
        </RevealSection>
        <SplitReveal
          as="h2"
          className="uppercase leading-[0.9] mb-10 max-w-3xl"
          style={{ color: '#FCF7E8', fontSize: 'clamp(2.4rem,7vw,6rem)', letterSpacing: '-0.01em' }}
        >
          Tell us about your event.
        </SplitReveal>
        <RevealSection delay={100}>
          <Link
            href="/cotizacion"
            className="px-10 py-4 text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-80"
            style={{ background: '#968148', color: '#FCF7E8', fontWeight: 600 }}
          >
            Start a Quote
          </Link>
        </RevealSection>
      </section>

    </div>
  )
}
