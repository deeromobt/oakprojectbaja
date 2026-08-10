import Link from 'next/link'
import RevealSection from '@/components/RevealSection'
import SplitReveal from '@/components/SplitReveal'

const services = [
  { n: '01', title: 'Photography & Film', desc: 'Capturing every moment, from first look to last dance.' },
  { n: '02', title: 'Audio & Sound', desc: 'Crystal-clear sound for ceremony, cocktail hour, and reception.' },
  { n: '03', title: 'Lighting & Production', desc: 'Moving heads, LED par lights, and architectural rigging.' },
  { n: '04', title: 'DJ', desc: 'Open-format sets that read the room and keep the floor full.' },
  { n: '05', title: 'Dance Floor', desc: 'Custom-sized dance floors tailored to your venue.' },
  { n: '06', title: 'Setup & Coordination', desc: 'Full production management — load-in to load-out.' },
]

const pillars = [
  {
    title: 'One Vendor',
    desc: 'Less coordination stress, one point of contact for every moving part of your day.',
  },
  {
    title: 'Built for Baja',
    desc: '16 years staging events across Los Cabos — we know every venue, every wind, every light.',
  },
  {
    title: 'Custom Pricing',
    desc: 'Every package is scoped and priced to your specific event, guest count, and venue.',
  },
]

export default function WeddingInABox() {
  return (
    <div style={{ background: '#FCF7E8' }}>

      {/* 1 — Hero */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 -mt-24"
        style={{ minHeight: '80vh', background: '#201208' }}
      >
        <RevealSection>
          <p className="mb-8 text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(201,184,137,0.75)' }}>
            Oak Project Baja — Weddings
          </p>
        </RevealSection>
        <SplitReveal
          as="h1"
          className="uppercase leading-[0.9] whitespace-pre-line mb-8 max-w-4xl"
          style={{ color: '#FCF7E8', fontSize: 'clamp(2.8rem,8vw,7rem)', letterSpacing: '-0.01em' }}
        >
          {'Everything your wedding needs.\nOne team. One vision.'}
        </SplitReveal>
        <RevealSection delay={120}>
          <p className="max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(252,247,232,0.65)', fontStyle: 'italic', fontSize: 'clamp(1rem,2.2vw,1.3rem)' }}>
            Tailored packages for weddings in Baja California Sur
          </p>
        </RevealSection>
      </section>

      {/* 2 — Manifesto */}
      <section className="px-6 py-28 sm:py-40" style={{ background: '#FCF7E8' }}>
        <div className="max-w-3xl mx-auto text-center">
          <RevealSection>
            <p className="leading-relaxed" style={{ color: '#2A1E08', fontSize: 'clamp(1.15rem,2.5vw,1.55rem)' }}>
              Most couples hire 4–6 separate vendors for their wedding day.
              We handle it all — and because we do, every element is designed to work together perfectly.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 3 — Services numbered list */}
      <section className="px-6 pb-28 sm:pb-40" style={{ background: '#FCF7E8' }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>
              What&apos;s included
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9] mb-16"
            style={{ color: '#2A1E08', fontSize: 'clamp(2.2rem,7vw,5.5rem)', letterSpacing: '-0.01em' }}
          >
            The full production
          </SplitReveal>
          <div className="flex flex-col">
            {services.map((s, i) => (
              <RevealSection key={s.n} delay={i * 45}>
                <div
                  className="flex items-start justify-between py-7 sm:py-9 border-t gap-8"
                  style={{ borderColor: '#D9C99A' }}
                >
                  <div className="flex items-baseline gap-6 sm:gap-12 flex-1">
                    <span className="shrink-0 text-xs" style={{ color: '#C9B889' }}>{s.n}</span>
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
                </div>
              </RevealSection>
            ))}
            <div className="border-t" style={{ borderColor: '#D9C99A' }} />
          </div>
        </div>
      </section>

      {/* 4 — Why Oak */}
      <section className="px-6 py-28 sm:py-36 border-t" style={{ background: '#FCF7E8', borderColor: '#D9C99A' }}>
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p className="mb-5 text-[11px] tracking-[0.4em] uppercase" style={{ color: '#968148' }}>
              Why Oak
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9] mb-16"
            style={{ color: '#2A1E08', fontSize: 'clamp(2.2rem,7vw,5.5rem)', letterSpacing: '-0.01em' }}
          >
            Built different
          </SplitReveal>
          <div className="grid md:grid-cols-3 gap-10">
            {pillars.map((p, i) => (
              <RevealSection key={p.title} delay={i * 70}>
                <div
                  className="pt-8 border-t"
                  style={{ borderColor: '#D9C99A' }}
                >
                  <p
                    className="uppercase mb-4"
                    style={{ color: '#2A1E08', fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', letterSpacing: '-0.01em' }}
                  >
                    {p.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A6535' }}>{p.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CTA */}
      <section
        className="flex flex-col items-center justify-center text-center px-6 py-36"
        style={{ background: '#201208' }}
      >
        <RevealSection>
          <p className="mb-6 text-[11px] tracking-[0.4em] uppercase" style={{ color: 'rgba(201,184,137,0.75)' }}>
            Let&apos;s get started
          </p>
        </RevealSection>
        <SplitReveal
          as="h2"
          className="uppercase leading-[0.9] mb-10 max-w-3xl"
          style={{ color: '#FCF7E8', fontSize: 'clamp(2.4rem,7vw,6rem)', letterSpacing: '-0.01em' }}
        >
          Your wedding, fully produced.
        </SplitReveal>
        <RevealSection delay={100}>
          <Link
            href="/cotizacion"
            className="px-10 py-4 text-[11px] tracking-[0.22em] uppercase transition-opacity hover:opacity-80"
            style={{ background: '#968148', color: '#FCF7E8', fontWeight: 600 }}
          >
            Build Your Package
          </Link>
        </RevealSection>
      </section>

    </div>
  )
}
