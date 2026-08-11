import Link from 'next/link'
import RevealSection from '@/components/RevealSection'
import SplitReveal from '@/components/SplitReveal'
import EditorialImage from '@/components/EditorialImage'
import CloudflareVideo from '@/components/CloudflareVideo'

const included = [
  { n: '01', title: 'Photography', detail: 'Full-day coverage. Ceremony, reception, portraits, details.' },
  { n: '02', title: 'Cinematography', detail: 'Cinematic highlight film + ceremony cut. Delivered in weeks, not months.' },
  { n: '03', title: 'Professional Audio', detail: 'Line array speakers, wireless mics, monitor mix — ceremony through last dance.' },
  { n: '04', title: 'Lighting Design', detail: 'Moving heads, LED par wash, architectural rigging. We design the atmosphere.' },
  { n: '05', title: 'DJ', detail: 'Open-format sets curated to your music taste. We read the room.' },
  { n: '06', title: 'Dance Floor', detail: 'Custom-sized for your venue and guest count. Included in the build.' },
  { n: '07', title: 'Full Production & Setup', detail: 'Load-in, rigging, soundcheck, teardown. You never lift a finger.' },
]

const events = [
  { couple: 'Julius & Indera', venue: "Petunia's Garden", services: 'Audio · Lighting' },
  { couple: 'Jessica & Charlie', venue: 'Baja Luna', services: 'Audio · Lighting · Video' },
  { couple: 'Hayden & Delanie', venue: "Flora's Farm", services: 'Audio · Lighting · DJ' },
  { couple: 'Blake & Maeghan', venue: 'Rooftop 360', services: 'Audio · Lighting · DJ' },
]

const steps = [
  { n: '01', title: 'Tell us about your wedding', desc: 'Venue, date, guest count, vibe. We listen first.' },
  { n: '02', title: 'We build your package', desc: 'A custom proposal with the exact services your day needs — and a price that fits your budget.' },
  { n: '03', title: 'We handle everything else', desc: 'From setup to teardown. You show up and enjoy your wedding.' },
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
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-14" style={{ padding: '0 20px 56px' }}>
          <RevealSection>
            <p style={{ color: 'rgba(201,184,137,0.85)', fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Oak Project Baja — Wedding in a Box
            </p>
          </RevealSection>
          <SplitReveal
            as="h1"
            className="uppercase leading-[0.88] max-w-5xl mx-auto"
            style={{ color: '#FCF7E8', fontSize: 'clamp(1.8rem,7vw,7.5rem)', letterSpacing: '-0.01em' }}
          >
            Why hire five vendors when we are all five.
          </SplitReveal>
        </div>
      </section>

      {/* 2 — The pitch */}
      <section style={{ background: '#FCF7E8', padding: 'clamp(60px,10vw,160px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <RevealSection>
            <p style={{ color: '#2A1E08', fontSize: 'clamp(1.05rem,2.5vw,1.65rem)', lineHeight: 1.65, marginBottom: 'clamp(28px,5vw,40px)' }}>
              Planning a wedding in Baja means juggling a photographer, a videographer, an audio tech,
              a DJ, a lighting crew, a dance floor rental, and the logistics of coordinating all of them
              on the same day — each with their own contract, their own invoice, and their own WhatsApp thread.
            </p>
          </RevealSection>
          <RevealSection delay={80}>
            <p style={{ color: '#968148', fontStyle: 'italic', fontSize: 'clamp(1.05rem,2.5vw,1.65rem)', lineHeight: 1.65 }}>
              Or you call us once. We handle everything. Same team, same vision, one day that comes
              together exactly as you imagined it — without a single coordination call from you.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 3 — What's included */}
      <section style={{ background: '#FCF7E8', borderTop: '1px solid #D9C99A', padding: '0 clamp(20px,5vw,48px) clamp(60px,10vw,144px)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', paddingTop: 'clamp(40px,6vw,64px)' }}>
          <RevealSection>
            <p style={{ color: '#968148', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Everything in one package
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9]"
            style={{ color: '#2A1E08', fontSize: 'clamp(2rem,7vw,5.5rem)', letterSpacing: '-0.01em', marginBottom: 'clamp(32px,6vw,64px)' }}
          >
            All in house.
          </SplitReveal>
          <div>
            {included.map((s, i) => (
              <RevealSection key={s.n} delay={i * 40}>
                <div style={{ borderTop: '1px solid #D9C99A', padding: 'clamp(18px,3vw,32px) 0', display: 'flex', gap: 'clamp(16px,4vw,56px)', alignItems: 'flex-start' }}>
                  <span style={{ color: '#C9B889', fontSize: '11px', minWidth: '1.6rem', flexShrink: 0, paddingTop: '4px' }}>{s.n}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: '#2A1E08', fontSize: 'clamp(1.15rem,3vw,2rem)', letterSpacing: '-0.01em', textTransform: 'uppercase', lineHeight: 1, marginBottom: '8px' }}>
                      {s.title}
                    </p>
                    <p style={{ color: '#7A6535', fontSize: '14px', lineHeight: 1.6 }}>
                      {s.detail}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
            <div style={{ borderTop: '1px solid #D9C99A' }} />
          </div>
        </div>
      </section>

      {/* 4 — Photo break */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#D9C99A', height: 'clamp(200px,42vh,56vh)' }}>
        <EditorialImage src="/editorial/charlie_ceremony.jpg" className="relative" sizes="50vw" />
        <EditorialImage src="/editorial/charlie_table.jpg" className="relative" sizes="50vw" />
      </div>

      {/* 5 — How it works */}
      <section style={{ background: '#FCF7E8', padding: 'clamp(60px,10vw,160px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <RevealSection>
            <p style={{ color: '#968148', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '20px' }}>
              The process
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9]"
            style={{ color: '#2A1E08', fontSize: 'clamp(2rem,7vw,5.5rem)', letterSpacing: '-0.01em', marginBottom: 'clamp(32px,6vw,64px)' }}
          >
            Simple from the start.
          </SplitReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: '#D9C99A' }}>
            {steps.map((step, i) => (
              <RevealSection key={step.n} delay={i * 70}>
                <div style={{ background: '#FCF7E8', padding: 'clamp(24px,4vw,48px) clamp(20px,4vw,32px)' }}>
                  <span style={{ display: 'block', color: '#C9B889', fontSize: '11px', marginBottom: 'clamp(20px,4vw,32px)' }}>{step.n}</span>
                  <p style={{ color: '#2A1E08', fontSize: 'clamp(1.05rem,2.2vw,1.4rem)', letterSpacing: '-0.01em', textTransform: 'uppercase', lineHeight: 1.2, marginBottom: '16px' }}>
                    {step.title}
                  </p>
                  <p style={{ color: '#7A6535', fontSize: '14px', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Recent weddings */}
      <section style={{ background: '#FCF7E8', borderTop: '1px solid #D9C99A', padding: '0 clamp(20px,5vw,48px) clamp(60px,10vw,144px)' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', paddingTop: 'clamp(40px,6vw,64px)' }}>
          <RevealSection>
            <p style={{ color: '#968148', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Recent weddings
            </p>
          </RevealSection>
          <SplitReveal
            as="h2"
            className="uppercase leading-[0.9]"
            style={{ color: '#2A1E08', fontSize: 'clamp(2rem,7vw,5.5rem)', letterSpacing: '-0.01em', marginBottom: 'clamp(32px,6vw,64px)' }}
          >
            The work.
          </SplitReveal>
          <div>
            {events.map((e, i) => (
              <RevealSection key={e.couple} delay={i * 50}>
                <div style={{ borderTop: '1px solid #D9C99A', padding: 'clamp(16px,3vw,32px) 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <div>
                    <p style={{ color: '#2A1E08', fontSize: 'clamp(1rem,2.8vw,2rem)', letterSpacing: '-0.01em', textTransform: 'uppercase', lineHeight: 1 }}>
                      {e.couple}
                    </p>
                    <p style={{ color: '#7A6535', fontSize: '13px', marginTop: '6px' }}>{e.venue}</p>
                    <p style={{ color: '#C9B889', fontSize: '11px', letterSpacing: '0.1em', marginTop: '6px' }}>{e.services}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
            <div style={{ borderTop: '1px solid #D9C99A' }} />
          </div>
        </div>
      </section>

      {/* 7 — CTA */}
      <section
        style={{ minHeight: '70vh', background: '#201208', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 'clamp(80px,12vw,144px) clamp(20px,5vw,48px)' }}
      >
        <RevealSection>
          <p style={{ color: 'rgba(201,184,137,0.75)', fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: '24px' }}>
            Let&apos;s build yours
          </p>
        </RevealSection>
        <SplitReveal
          as="h2"
          className="uppercase leading-[0.9]"
          style={{ color: '#FCF7E8', fontSize: 'clamp(2rem,7vw,6rem)', letterSpacing: '-0.01em', maxWidth: '48rem', marginBottom: '24px' }}
        >
          Tell us about your wedding.
        </SplitReveal>
        <RevealSection delay={80}>
          <p style={{ color: 'rgba(252,247,232,0.55)', fontSize: 'clamp(0.9rem,1.8vw,1rem)', lineHeight: 1.7, maxWidth: '28rem', margin: '0 auto', marginBottom: 'clamp(36px,5vw,48px)' }}>
            No fixed packages. No surprises. We put together a proposal based on your venue,
            your date, and what matters most to you — then we make it happen.
          </p>
        </RevealSection>
        <RevealSection delay={140}>
          <Link
            href="/cotizacion"
            style={{ background: '#968148', color: '#FCF7E8', fontWeight: 600, padding: '16px clamp(32px,5vw,48px)', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase' }}
            className="transition-opacity hover:opacity-80 inline-block"
          >
            Start the Conversation
          </Link>
        </RevealSection>
      </section>

    </div>
  )
}
