import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Oak Media — Creative & Digital Services | Oak Project Baja',
  description: 'Photography, video, web design, content creation and branding — Oak Media is the creative arm of Oak Project Baja. Based in Baja California Sur.',
}

const services = [
  {
    index: '01',
    name: 'Photography',
    description: 'Two-photographer teams for weddings, events and brand sessions. Private online gallery. Delivery within 4 weeks.',
    byline: 'Led by Sofía Angulo — our in-house photographer',
  },
  {
    index: '02',
    name: 'Video',
    description: 'Cinema-quality wedding films and event videos produced by a dedicated 3-person crew. Full-length film + social media highlight reel.',
    byline: 'Led by Daniel Romo — our in-house videographer',
  },
  {
    index: '03',
    name: 'Web Design & Development',
    description: 'Custom websites built to perform — fast, beautiful, and tailored to your brand. From single landing pages to full e-commerce experiences.',
  },
  {
    index: '04',
    name: 'Content Creation',
    description: 'Photo and video content produced specifically for social media, advertising and digital campaigns. Reels, carousels, brand shoots and more.',
  },
  {
    index: '05',
    name: 'Branding & Identity',
    description: 'Logo design, visual identity, color palettes, typography systems and brand guidelines. We build the visual language your business needs to stand out.',
  },
]

export default function MediaPage() {
  return (
    <div style={{ background: '#FCF7E8' }}>

      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-44 sm:pb-28" style={{ background: '#FCF7E8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: '#968148' }}>
              OAK MEDIA
            </p>
          </RevealSection>
          <RevealSection delay={80}>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight"
              style={{ color: '#2A1E08', fontFamily: 'var(--font-higuen)' }}
            >
              Every story deserves<br />to be told well.
            </h1>
          </RevealSection>
          <RevealSection delay={160}>
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)', maxWidth: '580px' }}
            >
              From wedding films to brand identities, from photography to full web experiences —
              Oak Media is the creative arm of Oak Project Baja. We help you capture, build and
              communicate what matters.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Services — editorial numbered list */}
      <section className="pb-24 sm:pb-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            {services.map((service, i) => (
              <RevealSection key={service.index} delay={i * 60}>
                <Link
                  href="/cotizacion"
                  className="group flex items-start justify-between py-8 sm:py-10 border-t transition-colors duration-300"
                  style={{ borderColor: '#D9C99A' }}
                >
                  <div className="flex items-start gap-6 sm:gap-12 flex-1 min-w-0">
                    <span
                      className="text-xs font-mono pt-1.5 shrink-0"
                      style={{ color: '#C9B889' }}
                    >
                      {service.index}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h2
                        className="text-3xl sm:text-4xl lg:text-5xl mb-3 transition-opacity duration-300 group-hover:opacity-60"
                        style={{ color: '#2A1E08', fontFamily: 'var(--font-higuen)' }}
                      >
                        {service.name}
                      </h2>
                      <p
                        className="text-sm sm:text-base leading-relaxed max-w-lg"
                        style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
                      >
                        {service.description}
                      </p>
                      {'byline' in service && service.byline && (
                        <p className="mt-3 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: '#968148' }}>
                          {service.byline}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-6 pt-2">
                    <span
                      className="hidden sm:block text-xs font-semibold tracking-[0.12em] uppercase"
                      style={{ color: '#968148' }}
                    >
                      Get a quote
                    </span>
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
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

      {/* CTA Section */}
      <section
        className="py-24 sm:py-32 border-t"
        style={{ background: '#EDE4CC', borderColor: '#D9C99A' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="max-w-2xl">
              <h2
                className="text-4xl sm:text-5xl lg:text-6xl mb-6"
                style={{ color: '#2A1E08', fontFamily: 'var(--font-higuen)' }}
              >
                Ready to start?
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed mb-10"
                style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
              >
                Tell us about your project and we&apos;ll put together a proposal within 48 hours.
              </p>
              <Link
                href="/cotizacion"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-base btn-gold"
              >
                Start a Project <ArrowRight size={18} />
              </Link>
              <p
                className="mt-6 text-sm italic"
                style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
              >
                Web, branding and content projects are quoted individually based on scope.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

    </div>
  )
}
