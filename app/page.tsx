import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import HeroCinematic from '@/components/HeroCinematic'
import VideoBackground from '@/components/VideoBackground'
import CloudflareVideo from '@/components/CloudflareVideo'
import RevealSection from '@/components/RevealSection'
import Tilt3D from '@/components/Tilt3D'
import Parallax from '@/components/Parallax'
import SplitReveal from '@/components/SplitReveal'
import CountUp from '@/components/CountUp'
import PinnedStatement from '@/components/PinnedStatement'

const eventTypes = [
  { label: 'Weddings', desc: 'Your most special day deserves the best' },
  { label: 'Corporate', desc: 'Professionalism in every event' },
  { label: 'Graduations', desc: 'Celebrate this great achievement' },
  { label: 'Private Parties', desc: 'Your vision, our execution' },
  { label: 'Villas', desc: 'Intimate luxury experiences' },
  { label: 'Yachts', desc: 'Celebrate on the Sea of Cortez' },
]

const services = [
  { href: '/mobiliario', title: 'Furniture', items: ['Professional DJ Booths', 'Modular dance floors', 'Customizable sizes', 'Setup & breakdown included'] },
  { href: '/audio', title: 'Audio', items: ['12" mid speakers', '18" subwoofers', '8" monitors', 'Wireless microphones'] },
  { href: '/iluminacion', title: 'Lighting', items: ['RGB LED uplights', 'Moving heads', 'Custom gobos', 'String lights'] },
  { href: '/media', title: 'Photography', items: ['4–8 hour coverage', 'Photo booth with prints', 'Private online gallery', 'Portrait sessions'] },
  { href: '/media', title: 'Video', items: ['4K drone video', 'Live streaming', 'Edited highlight video', 'Photo + video package'] },
]

const packages = [
  {
    name: 'Sound Package',
    desc: 'Professional DJ service with full sound system — ideal for any event',
    price: 3000,
    items: [
      'DJ Service — 6 hours',
      '2 QSC mid speakers',
      '2 subwoofers 18"',
      '2 QSC K8 monitors',
      'Professional DJ Booth',
      'Setup & breakdown included',
    ],
    popular: false,
  },
  {
    name: 'Sound + Lights Package',
    desc: 'Full sound system plus lighting production with trusses, par LEDs, and moving heads',
    price: 5400,
    items: [
      'DJ Service — 6 hours',
      '2 QSC mid speakers',
      '2 subwoofers 18"',
      '2 QSC K8 monitors',
      'Professional DJ Booth',
      '2 aluminum trusses 3m',
      '4 par LEDs per truss',
      '2 moving heads per truss',
      'Setup & breakdown included',
    ],
    popular: true,
  },
  {
    name: 'Premium Package',
    desc: 'Full production: professional sound, show lighting with 4 trusses, photography, and complete video package',
    price: 10200,
    items: [
      'DJ Service — 6 hours',
      '4 QSC K12 speakers',
      '4 subwoofers 18"',
      '2 QSC K8 monitors',
      'Professional DJ Booth',
      '4 aluminum trusses 3m',
      '4 par LEDs per truss',
      '2 moving heads per truss',
      'Full photography package',
      'Horizontal edited video — 3 min',
      'Highlights video — 1 min',
      'Reel — 30 to 45 seconds',
      'Setup & breakdown included',
    ],
    popular: false,
  },
]

const eventShowcases = [
  {
    names: 'Indera & Julius',
    event: 'Wedding — Baja California Sur',
    cfId: '0be046e661a055faeee5366d66de94f9',
    services: ['Audio', 'Lighting'],
    quote: 'The energy on the dance floor was incredible all night. The sound was perfect and the lighting completely transformed the venue into something we had only imagined.',
    stars: 5,
  },
  {
    names: 'Katie & Manuel',
    event: 'Wedding — Baja California Sur',
    cfId: '134e4fa4b335ec371611d69b2fbcd52c',
    services: ['Audio', 'Lighting', 'Photography', 'Video'],
    quote: 'From the first detail to the last song, Oak Project made our wedding exactly what we dreamed of. The production quality was beyond anything we expected.',
    stars: 5,
  },
  {
    names: 'Jessica & Charlie',
    event: 'Wedding — Baja California Sur',
    cfId: 'f4c4cb0155960b64fa063d36b0ecabc8',
    services: ['Audio', 'Lighting'],
    quote: 'The audio and lighting setup was flawless. Our guests kept asking who was behind the production — the atmosphere they created was exactly what we wanted.',
    stars: 5,
  },
]

const stats = [
  { value: '300+', label: 'Events completed' },
  { value: '16 years', label: 'As DJs in Cabo San Lucas' },
  { value: '98%', label: 'Satisfied clients' },
  { value: 'Baja Sur', label: 'Regional coverage' },
]

const marqueeItems = [
  'Audio', 'Lighting', 'Photography', 'Video',
  'Furniture', 'DJ Service', 'Weddings', 'Corporate Events', 'Baja California Sur',
]

export default function HomePage() {
  return (
    <div>

      {/* 1 — Hero (cinematic full-bleed film, Terminal-style) — pulled under floating nav */}
      <div className="-mt-24">
      <HeroCinematic
        eyebrow="Weddings & Events · Baja California"
        headline="Bringing your perfect event to life"
        subline="Furniture, audio, lighting, photography and video for weddings and events across Baja California."
        cfId="bd123b05247e4ef098521fddab781f90"
      />
      </div>

      {/* MARQUEE STRIP */}
      <div className="overflow-hidden py-3.5 border-y" style={{ background: '#FCF7E8', borderColor: '#D9C99A' }}>
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee 32s linear infinite', width: 'max-content' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-6 sm:mx-8 text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: '#C9B889' }}
            >
              {item}
              <span className="ml-6 sm:ml-8" style={{ color: '#D9C99A' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2 — Event Types: editorial list */}
      <section className="py-24 sm:py-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <RevealSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 sm:mb-20 gap-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#968148' }}>What we do</p>
                <SplitReveal as="h2" className="text-6xl sm:text-7xl lg:text-8xl leading-[0.95]" style={{ color: '#2A1E08' }}>For every occasion</SplitReveal>
              </div>
              <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#7A6535' }}>
                From intimate beach weddings to large corporate events — we bring the full production.
              </p>
            </div>
          </RevealSection>

          <div className="flex flex-col">
            {eventTypes.map((et, i) => (
              <RevealSection key={et.label} delay={i * 55}>
                <Link
                  href={`/cotizacion?tipo=${encodeURIComponent(et.label)}`}
                  className="group flex items-center justify-between py-6 sm:py-7 border-t transition-colors duration-300"
                  style={{ borderColor: '#D9C99A' }}
                >
                  <div className="flex items-baseline gap-5 sm:gap-10">
                    <span className="text-xs font-mono w-5 shrink-0" style={{ color: '#C9B889' }}>
                      0{i + 1}
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl lg:text-4xl transition-colors duration-300 group-hover:opacity-60"
                      style={{ color: '#2A1E08' }}
                    >
                      {et.label}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-8 shrink-0 ml-4">
                    <span className="hidden md:block text-sm" style={{ color: '#7A6535' }}>{et.desc}</span>
                    <ArrowRight
                      size={17}
                      className="shrink-0 transition-transform duration-300 group-hover:translate-x-1.5"
                      style={{ color: '#968148' }}
                    />
                  </div>
                </Link>
              </RevealSection>
            ))}
            <div className="border-t" style={{ borderColor: '#D9C99A' }} />
          </div>

        </div>
      </section>

      {/* 3 — Stats: video background */}
      <VideoBackground src="/section-stats.mp4" overlayOpacity={0.78}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-16">
              {stats.map((stat, i) => (
                <RevealSection key={stat.label} delay={i * 80} className="text-center">
                  <CountUp value={stat.value} className="block text-5xl sm:text-7xl mb-2" style={{ color: '#FCF7E8' }} />
                  <p className="text-xs tracking-[0.15em] uppercase" style={{ color: '#968148' }}>{stat.label}</p>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* 4 — Services: cream editorial grid */}
      <section id="servicios" className="py-24 sm:py-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <RevealSection>
            <div className="mb-16 sm:mb-20">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#968148' }}>Catalog</p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                <SplitReveal as="h2" className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95]" style={{ color: '#2A1E08' }}>Everything for your event</SplitReveal>
                <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#7A6535' }}>
                  Browse each category, build your quote, and book your date in minutes.
                </p>
              </div>
            </div>
          </RevealSection>

          {/* Grid with gap-px creating golden line separators */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]"
            style={{ background: '#D9C99A' }}
          >
            {services.map((service, i) => (
              <RevealSection key={service.href} delay={i * 70}>
                <Link
                  href={service.href}
                  className="group flex flex-col gap-6 p-8 sm:p-10 h-full transition-colors duration-300 hover:bg-[#EDE4CC]"
                  style={{ background: '#FCF7E8' }}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-mono" style={{ color: '#C9B889' }}>0{i + 1}</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ color: '#968148' }}
                    />
                  </div>
                  <h3 className="text-3xl sm:text-4xl" style={{ color: '#2A1E08' }}>{service.title}</h3>
                  <ul className="flex flex-col gap-2.5 flex-1">
                    {service.items.map(item => (
                      <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: '#7A6535' }}>
                        <span style={{ color: '#C9B889', fontSize: '0.45rem', lineHeight: 1 }}>▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span
                    className="text-xs font-semibold tracking-[0.15em] uppercase pt-4 border-t transition-colors duration-300 group-hover:text-[#2A1E08]"
                    style={{ color: '#968148', borderColor: '#D9C99A' }}
                  >
                    See pricing & availability
                  </span>
                </Link>
              </RevealSection>
            ))}

            {/* 6th cell — custom quote CTA */}
            <RevealSection delay={5 * 70}>
              <div
                className="flex flex-col justify-between gap-6 p-8 sm:p-10 h-full"
                style={{ background: '#FCF7E8' }}
              >
                <div>
                  <span className="text-xs font-mono" style={{ color: '#C9B889' }}>06</span>
                  <h3 className="text-3xl sm:text-4xl mt-5" style={{ color: '#2A1E08' }}>Need<br />everything?</h3>
                </div>
                <div>
                  <p className="text-sm mb-6 leading-relaxed" style={{ color: '#7A6535' }}>
                    Build a fully custom quote combining all categories for your event.
                  </p>
                  <Link
                    href="/cotizacion"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm btn-gold"
                  >
                    Get a quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </RevealSection>
          </div>

        </div>
      </section>

      {/* 4b — Pinned cinematic statement (Terminal-style) */}
      <PinnedStatement
        text="From an empty venue to the night you'll never forget."
        className="text-4xl sm:text-6xl lg:text-7xl leading-[1.05]"
        style={{ color: '#2A1E08' }}
        background="#FCF7E8"
      />

      {/* 5 — Wedding in a Box */}
      <section className="py-32 sm:py-40" style={{ background: '#FCF7E8' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: '#968148' }}>
              One Stop Shop
            </p>
            <SplitReveal
              as="h2"
              className="text-7xl sm:text-8xl lg:text-9xl mb-8 leading-[0.9]"
              style={{ color: '#2A1E08' }}
            >
              Wedding in a Box.
            </SplitReveal>
            <p
              className="text-base sm:text-lg leading-relaxed mb-10 mx-auto"
              style={{ color: '#7A6535', maxWidth: '560px', fontFamily: 'var(--font-garamond)' }}
            >
              Audio, lighting, photography, video, DJ and rentals — everything your wedding needs,
              curated into one seamless production. Tell us about your day and we&apos;ll build the
              perfect package around it.
            </p>
            <Link
              href="/cotizacion"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-base btn-gold"
            >
              Ask for Your Custom Package <ArrowRight size={18} />
            </Link>
            <p
              className="mt-6 text-sm italic"
              style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
            >
              Every package is built to order. No two events are the same.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* 5b — Numbered benefits (Terminal-style) */}
      <section className="py-24 sm:py-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#968148' }}>Why Oak</p>
          </RevealSection>
          <SplitReveal as="h2" className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-16 sm:mb-20" style={{ color: '#2A1E08' }}>
            One team. Every detail.
          </SplitReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]" style={{ background: '#D9C99A' }}>
            {[
              { n: '01', title: 'One team, everything', desc: 'Furniture, audio, lighting, photography, video and DJs — the whole production under one roof.' },
              { n: '02', title: '16 years on the ground', desc: 'Local expertise across Baja Sur, from Cabo beaches to Valle de Guadalupe vineyards.' },
              { n: '03', title: 'Built around your day', desc: 'Every package is made to order. No two events are the same.' },
            ].map((b, i) => (
              <RevealSection key={b.n} delay={i * 90}>
                <div className="flex flex-col gap-5 p-8 sm:p-10 h-full" style={{ background: '#FCF7E8' }}>
                  <span
                    className="text-7xl sm:text-8xl font-bold leading-none"
                    style={{ color: 'transparent', WebkitTextStroke: '1.5px #C9B889', letterSpacing: '-0.02em' }}
                  >
                    {b.n}
                  </span>
                  <h3 className="text-2xl sm:text-3xl" style={{ color: '#2A1E08' }}>{b.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: '#7A6535' }}>{b.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Gallery Preview */}
      <section className="py-24 sm:py-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <RevealSection>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#968148' }}>Gallery</p>
                <SplitReveal as="h2" className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95]" style={{ color: '#2A1E08' }}>Events we&apos;ve transformed</SplitReveal>
              </div>
              <Link
                href="/galeria"
                className="hidden sm:flex items-center gap-1.5 text-sm font-semibold pb-1 border-b transition-colors hover:opacity-60"
                style={{ color: '#968148', borderColor: '#D9C99A' }}
              >
                See all <ArrowRight size={13} />
              </Link>
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <RevealSection delay={0}>
              <Tilt3D glare max={7} lift={16}>
                <div className="rounded-2xl overflow-hidden depth-1" style={{ border: '1px solid #D9C99A' }}>
                  <CloudflareVideo id="134e4fa4b335ec371611d69b2fbcd52c" mode="loop" portrait />
                </div>
              </Tilt3D>
            </RevealSection>
            <RevealSection delay={100}>
              <Tilt3D glare max={7} lift={16}>
                <div className="rounded-2xl overflow-hidden depth-1" style={{ border: '1px solid #D9C99A' }}>
                  <CloudflareVideo id="f4c4cb0155960b64fa063d36b0ecabc8" mode="loop" portrait />
                </div>
              </Tilt3D>
            </RevealSection>
          </div>

          <RevealSection className="mt-10 flex justify-center sm:hidden">
            <Link
              href="/galeria"
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: '#968148' }}
            >
              View full gallery <ArrowRight size={13} />
            </Link>
          </RevealSection>

        </div>
      </section>

      {/* 7 — Event Showcases: cream */}
      <section className="py-24 sm:py-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <RevealSection>
            <div className="mb-16 sm:mb-20">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#968148' }}>Our couples</p>
              <SplitReveal as="h2" className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95]" style={{ color: '#2A1E08' }}>Real events. Real stories.</SplitReveal>
            </div>
          </RevealSection>

          <div className="flex flex-col gap-[1px]" style={{ background: '#D9C99A' }}>
            {eventShowcases.map((showcase, i) => (
              <RevealSection key={showcase.names}>
                {i === 0 ? (
                  /* Julius — landscape 16:9 video on top, testimonial below */
                  <div className="flex flex-col overflow-hidden" style={{ background: '#FCF7E8' }}>
                    <CloudflareVideo id={showcase.cfId} mode="loop" />
                    <div className="p-8 sm:p-10 lg:p-14 flex flex-col gap-5">
                      <div className="flex gap-0.5">
                        {Array.from({ length: showcase.stars }).map((_, j) => (
                          <Star key={j} size={13} fill="#C9B889" style={{ color: '#C9B889' }} />
                        ))}
                      </div>
                      <p className="text-xl sm:text-2xl leading-snug italic" style={{ color: '#2A1E08' }}>
                        &ldquo;{showcase.quote}&rdquo;
                      </p>
                      <div className="pt-5 border-t" style={{ borderColor: '#D9C99A' }}>
                        <p className="font-semibold mb-0.5" style={{ color: '#2A1E08' }}>{showcase.names}</p>
                        <p className="text-sm mb-4" style={{ color: '#968148' }}>{showcase.event}</p>
                        <div className="flex flex-wrap gap-2">
                          {showcase.services.map(s => (
                            <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ background: '#EDE4CC', color: '#968148', border: '1px solid #D9C99A' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Other couples — portrait reel on the side */
                  <div
                    className="flex flex-col sm:flex-row overflow-hidden"
                    style={{ background: '#FCF7E8' }}
                  >
                    <div className={`w-full sm:w-60 md:w-72 lg:w-80 flex-shrink-0 ${i % 2 === 1 ? 'sm:order-2' : ''}`}>
                      <CloudflareVideo id={showcase.cfId} mode="loop" portrait />
                    </div>
                    <div className={`flex-1 p-8 sm:p-10 lg:p-14 flex flex-col justify-center gap-6 ${i % 2 === 1 ? 'sm:order-1' : ''}`}>
                      <div className="flex gap-0.5">
                        {Array.from({ length: showcase.stars }).map((_, j) => (
                          <Star key={j} size={13} fill="#C9B889" style={{ color: '#C9B889' }} />
                        ))}
                      </div>
                      <p className="text-xl sm:text-2xl lg:text-3xl leading-snug italic" style={{ color: '#2A1E08' }}>
                        &ldquo;{showcase.quote}&rdquo;
                      </p>
                      <div className="pt-5 border-t" style={{ borderColor: '#D9C99A' }}>
                        <p className="font-semibold mb-0.5" style={{ color: '#2A1E08' }}>{showcase.names}</p>
                        <p className="text-sm mb-4" style={{ color: '#968148' }}>{showcase.event}</p>
                        <div className="flex flex-wrap gap-2">
                          {showcase.services.map(s => (
                            <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ background: '#EDE4CC', color: '#968148', border: '1px solid #D9C99A' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </RevealSection>
            ))}
          </div>

        </div>
      </section>

      {/* 8 — How it works */}
      <VideoBackground src="/section-cta.mp4" overlayOpacity={0.78}>
        <div className="py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <RevealSection>
              <div className="mb-16 sm:mb-20">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#C9B889' }}>Process</p>
                <SplitReveal as="h2" className="text-5xl sm:text-6xl lg:text-7xl leading-[0.95]" style={{ color: '#FCF7E8' }}>How it works</SplitReveal>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
              {[
                { step: '01', title: 'Browse the catalog', desc: 'Navigate by category or choose an event type and add what you need.' },
                { step: '02', title: 'Build your quote', desc: 'Customize quantities and fill in your event details to receive a breakdown.' },
                { step: '03', title: 'Book your date', desc: 'Select the date and verify availability before committing.' },
                { step: '04', title: 'Pay & confirm', desc: 'Secure online payment. Your booking is confirmed instantly.' },
              ].map((item, i) => (
                <RevealSection key={item.step} delay={i * 90}>
                  <div className="pt-6 border-t" style={{ borderColor: 'rgba(201,184,137,0.25)' }}>
                    <div className="text-5xl sm:text-6xl font-bold mb-5 leading-none" style={{ color: 'rgba(201,184,137,0.18)', letterSpacing: '-0.02em' }}>{item.step}</div>
                    <h3 className="text-lg mb-2.5" style={{ color: '#FCF7E8' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#7A6535' }}>{item.desc}</p>
                  </div>
                </RevealSection>
              ))}
            </div>

          </div>
        </div>
      </VideoBackground>

      {/* 9 — About snippet */}
      <section className="py-24 sm:py-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <RevealSection>
              <Parallax speed={0.1}>
                <Tilt3D glare max={6} lift={14}>
                  <div className="rounded-2xl overflow-hidden depth-1" style={{ border: '1px solid #D9C99A', aspectRatio: '16/9' }}>
                    <CloudflareVideo id="2b7b1640fdde1ebb0185d21db8055b4f" mode="loop" className="h-full" />
                  </div>
                </Tilt3D>
              </Parallax>
            </RevealSection>

            <RevealSection delay={120}>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#968148' }}>Who we are</p>
                <SplitReveal as="h2" className="text-5xl sm:text-6xl lg:text-7xl mb-7 leading-[0.95]" style={{ color: '#2A1E08' }}>
                  Born in Baja, built to celebrate
                </SplitReveal>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#7A6535' }}>
                  Oak Project Baja was born from a passion for creating memorable experiences in the unique landscapes of Baja California. We specialize in transforming spaces — from beaches to vineyards — into the perfect setting for the most important moments of your life.
                </p>
                <p className="text-base leading-relaxed mb-10" style={{ color: '#7A6535' }}>
                  With 16 years as DJs in Cabo San Lucas and over 300 events under our belt, we evolved into a full-service production company. Premium inventory, professional team, and the flexibility to adapt to every vision.
                </p>
                <Link
                  href="/nosotros"
                  className="inline-flex items-center gap-2 text-sm font-semibold pb-1 border-b transition-opacity hover:opacity-60"
                  style={{ color: '#968148', borderColor: '#D9C99A' }}
                >
                  Learn our story <ArrowRight size={13} />
                </Link>
              </div>
            </RevealSection>

          </div>
        </div>
      </section>

      {/* 10 — Final CTA */}
      <VideoBackground src="/section-stats.mp4" overlayOpacity={0.55}>
        <div className="py-32 sm:py-40 px-4 text-center">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: '#C9B889' }}>
              Oak Project Baja
            </p>
            <SplitReveal
              as="h2"
              className="text-6xl sm:text-7xl lg:text-8xl mb-8 leading-[0.95]"
              style={{ color: '#FCF7E8', textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}
            >
              Ready for your event?
            </SplitReveal>
            <p
              className="text-lg sm:text-xl mb-12 max-w-md mx-auto leading-relaxed"
              style={{ color: '#C9B889', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}
            >
              Get a quote in minutes, book your date, and let us handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cotizacion"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-base btn-gold justify-center"
              >
                Get a free quote <ArrowRight size={18} />
              </Link>
              <Link
                href="/galeria"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-base btn-outline-light justify-center"
              >
                View gallery
              </Link>
            </div>
          </RevealSection>
        </div>
      </VideoBackground>

    </div>
  )
}
