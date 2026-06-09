import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Quote } from 'lucide-react'
import VideoHero from '@/components/VideoHero'
import VideoBackground from '@/components/VideoBackground'
import CloudflareVideo from '@/components/CloudflareVideo'

const eventTypes = [
  { label: 'Weddings', icon: '💍', desc: 'Your most special day deserves the best' },
  { label: 'Corporate', icon: '🏢', desc: 'Professionalism in every event' },
  { label: 'Graduations', icon: '🎓', desc: 'Celebrate this great achievement' },
  { label: 'Private Parties', icon: '🥂', desc: 'Your vision, our execution' },
  { label: 'Villas', icon: '🏡', desc: 'Intimate luxury experiences' },
  { label: 'Yachts', icon: '⛵', desc: 'Celebrate on the Sea of Cortez' },
]

const services = [
  { href: '/mobiliario', title: 'Furniture', icon: '🪑', items: ['Professional DJ Booths', 'Modular dance floors', 'Customizable sizes', 'Setup & breakdown included'] },
  { href: '/audio', title: 'Audio', icon: '🔊', items: ['12" mid speakers', '18" subwoofers', '8" monitors', 'Wireless microphones'] },
  { href: '/iluminacion', title: 'Lighting', icon: '💡', items: ['RGB LED uplights', 'Moving heads', 'Custom gobos', 'String lights'] },
  { href: '/fotografia', title: 'Photography', icon: '📷', items: ['4–8 hour coverage', 'Photo booth with prints', 'Private online gallery', 'Portrait sessions'] },
  { href: '/video', title: 'Video', icon: '🎬', items: ['4K drone video', 'Live streaming', 'Edited highlight video', 'Photo + video package'] },
]

const packages = [
  {
    name: 'Sound Package',
    desc: 'Professional DJ service with full sound system — ideal for any event',
    price: 1375,
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
    price: 3250,
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
    price: 6125,
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
    services: ['Audio', 'Lighting', 'Video'],
    // TODO: Replace with Julius's real testimonial
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
    // TODO: Replace with Charlie & Jessica's real testimonial
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

export default function HomePage() {
  return (
    <div>

      {/* 1 — Hero: Charlie & Jessica reel */}
      <VideoHero
        headline={"Bringing your\nperfect event to life"}
        subline="Furniture rental, audio, lighting, photography, and video for events in Baja California."
        cfId="bd123b05247e4ef098521fddab781f90"
      />

      {/* 2 — Event Types: cream */}
      <section className="py-16" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>What type of event do you have?</p>
            <h2 className="text-3xl font-bold italic" style={{ color: '#2A1E08' }}>Specialists for every occasion</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {eventTypes.map(et => (
              <Link
                key={et.label}
                href={`/cotizacion?tipo=${encodeURIComponent(et.label)}`}
                className="rounded-2xl p-4 text-center flex flex-col items-center gap-2 transition-all hover:-translate-y-1"
                style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}
              >
                <span className="text-3xl">{et.icon}</span>
                <p className="font-semibold text-sm" style={{ color: '#2A1E08' }}>{et.label}</p>
                <p className="text-xs leading-tight" style={{ color: '#7A6535' }}>{et.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Stats: original stats video */}
      <VideoBackground src="/section-stats.mp4" overlayOpacity={0.78}>
        <div className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold mb-1" style={{ color: '#FCF7E8' }}>{stat.value}</p>
                  <p className="text-sm tracking-wide" style={{ color: '#C9B889' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* 4 — Services: cream */}
      <section id="servicios" className="py-20" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>Catalog</p>
            <h2 className="text-4xl font-bold mb-3 italic" style={{ color: '#2A1E08' }}>Everything for your event</h2>
            <p className="max-w-xl mx-auto" style={{ color: '#7A6535' }}>Browse each category, build your quote, and book your date in minutes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(service => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1"
                style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="text-xl font-bold" style={{ color: '#2A1E08' }}>{service.title}</h3>
                <ul className="flex flex-col gap-1.5 flex-1">
                  {service.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#7A6535' }}>
                      <Star size={10} fill="#C9B889" style={{ color: '#C9B889', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 mt-2 font-semibold text-sm transition-all group-hover:gap-2" style={{ color: '#968148' }}>
                  See pricing & availability <ArrowRight size={14} />
                </div>
              </Link>
            ))}
            <div className="rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4" style={{ background: '#EDE4CC', border: '1px solid #C9B889' }}>
              <p className="text-3xl">✨</p>
              <h3 className="text-xl font-bold" style={{ color: '#2A1E08' }}>Need everything?</h3>
              <p className="text-sm" style={{ color: '#7A6535' }}>Build a quote combining all categories.</p>
              <Link href="/cotizacion" className="px-6 py-2.5 rounded-xl font-semibold text-sm btn-gold">Get a quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Packages: Mendivil reel background */}
      <VideoBackground cfId="134e4fa4b335ec371611d69b2fbcd52c" overlayOpacity={0.80}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#C9B889' }}>Packages</p>
              <h2 className="text-4xl font-bold mb-3 italic" style={{ color: '#FCF7E8' }}>Ready to go, no complications</h2>
              <p className="max-w-xl mx-auto" style={{ color: '#C9B889' }}>Pre-built packages for the most common events. Fully customizable to your taste.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map(pkg => (
                <div
                  key={pkg.name}
                  className="rounded-2xl p-6 flex flex-col gap-4 relative"
                  style={{
                    background: pkg.popular ? 'rgba(252,247,232,0.14)' : 'rgba(252,247,232,0.08)',
                    border: `1px solid ${pkg.popular ? 'rgba(201,184,137,0.7)' : 'rgba(201,184,137,0.25)'}`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full" style={{ background: '#968148', color: '#FCF7E8' }}>
                      Most popular
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: '#FCF7E8' }}>{pkg.name}</h3>
                    <p className="text-sm" style={{ color: '#C9B889' }}>{pkg.desc}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold" style={{ color: '#FCF7E8' }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(pkg.price)}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#C9B889' }}>estimated base price</p>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {pkg.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm" style={{ color: '#FCF7E8' }}>
                        <span style={{ color: '#C9B889' }}>✓</span> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/cotizacion?paquete=${encodeURIComponent(pkg.name)}`} className="w-full py-3 rounded-xl text-center font-semibold text-sm btn-gold mt-2 block">
                    Request this package
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-xs mt-6" style={{ color: '#C9B889' }}>
              * Packages are reference prices. Final price depends on date, location, and customization.
            </p>
          </div>
        </div>
      </VideoBackground>

      {/* 6 — Gallery Preview: cream */}
      <section className="py-20" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>Gallery</p>
              <h2 className="text-4xl font-bold italic" style={{ color: '#2A1E08' }}>Events we've transformed</h2>
            </div>
            <Link href="/galeria" className="hidden sm:flex items-center gap-1 text-sm font-semibold" style={{ color: '#968148' }}>
              See all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex justify-center gap-4">
            <div className="rounded-2xl overflow-hidden w-full max-w-xs" style={{ border: '1px solid #D9C99A' }}>
              <CloudflareVideo id="134e4fa4b335ec371611d69b2fbcd52c" mode="loop" portrait />
            </div>
            <div className="rounded-2xl overflow-hidden w-full max-w-xs" style={{ border: '1px solid #D9C99A' }}>
              <CloudflareVideo id="f4c4cb0155960b64fa063d36b0ecabc8" mode="loop" portrait />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <Link href="/galeria" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#968148' }}>
              View full gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7 — Event Showcases: real couples + video + testimonial */}
      <section className="py-20" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>Our couples</p>
            <h2 className="text-4xl font-bold" style={{ color: '#2A1E08' }}>Real events. Real stories.</h2>
            <p className="mt-3 text-lg max-w-xl mx-auto" style={{ color: '#7A6535' }}>
              Every video is backed by the people who lived it.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {eventShowcases.map((showcase, i) => (
              <div
                key={showcase.names}
                className="flex flex-col sm:flex-row rounded-3xl overflow-hidden"
                style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}
              >
                {/* Portrait reel — fixed width, natural 9:16 */}
                <div
                  className={`w-full sm:w-56 md:w-64 flex-shrink-0 ${i % 2 === 1 ? 'sm:order-2' : ''}`}
                >
                  <CloudflareVideo id={showcase.cfId} mode="loop" portrait />
                </div>

                {/* Testimonial */}
                <div className={`flex-1 p-8 sm:p-10 flex flex-col justify-center gap-5 ${i % 2 === 1 ? 'sm:order-1' : ''}`}>
                  <div className="flex gap-0.5">
                    {Array.from({ length: showcase.stars }).map((_, j) => (
                      <Star key={j} size={16} fill="#C9B889" style={{ color: '#C9B889' }} />
                    ))}
                  </div>
                  <Quote size={28} style={{ color: '#C9B889' }} />
                  <p className="text-lg leading-relaxed" style={{ color: '#2A1E08' }}>
                    "{showcase.quote}"
                  </p>
                  <div className="pt-2 border-t" style={{ borderColor: '#D9C99A' }}>
                    <p className="font-semibold" style={{ color: '#2A1E08' }}>{showcase.names}</p>
                    <p className="text-sm mb-3" style={{ color: '#968148' }}>{showcase.event}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {showcase.services.map(s => (
                        <span key={s} className="text-xs px-2.5 py-1 rounded-full" style={{ background: '#FCF7E8', color: '#968148', border: '1px solid #D9C99A' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — How it works: hero2 background */}
      <VideoBackground src="/section-cta.mp4" overlayOpacity={0.75}>
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#C9B889' }}>Process</p>
              <h2 className="text-4xl font-bold italic" style={{ color: '#FCF7E8' }}>How it works</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Browse the catalog', desc: 'Navigate by category or choose an event type and add what you need.' },
                { step: '02', title: 'Build your quote', desc: 'Customize quantities and fill in your event details to receive a breakdown.' },
                { step: '03', title: 'Book your date', desc: 'Select the date and verify availability before committing.' },
                { step: '04', title: 'Pay & confirm', desc: 'Secure online payment with Stripe. Your booking is confirmed instantly.' },
              ].map(item => (
                <div key={item.step}>
                  <div className="text-5xl font-bold mb-4" style={{ color: 'rgba(201,184,137,0.5)' }}>{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#FCF7E8' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#C9B889' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </VideoBackground>

      {/* 9 — About snippet: cream */}
      <section className="py-20" style={{ background: '#FCF7E8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden aspect-video" style={{ border: '1px solid #D9C99A' }}>
              <CloudflareVideo id="2b7b1640fdde1ebb0185d21db8055b4f" mode="loop" className="h-full" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>Who we are</p>
              <h2 className="text-4xl font-bold mb-5 italic" style={{ color: '#2A1E08' }}>
                Born in Baja,<br />built to celebrate
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#7A6535' }}>
                Oak Project Baja was born from a passion for creating memorable experiences in the unique landscapes of Baja California. We specialize in transforming spaces — from beaches to vineyards — into the perfect setting for the most important moments of your life.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#7A6535' }}>
                With 16 years as DJs in Cabo San Lucas and over 300 events under our belt, we evolved into a full-service production company. Premium inventory, professional team, and the flexibility to adapt to every vision.
              </p>
              <Link href="/nosotros" className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: '#968148' }}>
                Learn our story <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — CTA: section-stats video */}
      <VideoBackground src="/section-stats.mp4" overlayOpacity={0.55}>
        <div className="py-28 px-4 text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: '#C9B889' }}>
            Oak Project Baja
          </p>
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 italic" style={{ color: '#FCF7E8', textShadow: '0 2px 24px rgba(0,0,0,0.4)' }}>
            Ready for your event?
          </h2>
          <p className="text-xl mb-10 max-w-xl mx-auto" style={{ color: '#FCF7E8', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>
            Get a quote in minutes, book your date, and let us handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cotizacion" className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-lg btn-gold justify-center">
              Get a free quote <ArrowRight size={20} />
            </Link>
            <Link href="/galeria" className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-lg btn-outline-light justify-center">
              View gallery
            </Link>
          </div>
        </div>
      </VideoBackground>

    </div>
  )
}
