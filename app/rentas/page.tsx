import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rentals Catalog — Oak Project Baja',
  description: 'Browse our full rentals catalog: audio, lighting, DJ equipment and dance floors. Available for any event in Baja California Sur.',
}

type CatalogItem = {
  name: string
  description: string
  price: string
  note?: string
}

type CatalogCategory = {
  category: string
  index: string
  items: CatalogItem[]
}

const catalog: CatalogCategory[] = [
  {
    category: 'Audio',
    index: '01',
    items: [
      { name: 'Line Array QSC', description: 'Professional line array speaker for large coverage areas', price: '$100 USD / unit' },
      { name: 'Subwoofer 18"', description: 'Deep bass extension for any sound system', price: '$80 USD / unit' },
      { name: 'QSC K12.2 Speaker', description: 'Versatile full-range speaker for medium to large events', price: '$75 USD / unit' },
      { name: 'QSC K8 Stage Monitor', description: 'Floor monitor for performers and DJs', price: '$50 USD / unit' },
      { name: 'Wireless Microphone', description: 'Handheld or lavalier, ideal for ceremonies and speeches', price: '$60 USD / unit' },
      { name: 'On-ear Wireless Monitor', description: 'In-ear monitor for performers requiring personal mix', price: '$50 USD / unit' },
    ],
  },
  {
    category: 'Lighting',
    index: '02',
    items: [
      { name: 'Moving Head Light', description: 'Automated beam and wash fixtures for dynamic lighting shows', price: '$75 USD / unit' },
      { name: 'Par LED', description: 'RGB LED uplighting for color wash and ambiance', price: '$15 USD / unit' },
      { name: 'Fog Machine', description: 'Atmospheric haze for dramatic lighting effects', price: '$50 USD / unit' },
      { name: 'Aluminum Truss 3m', description: 'Structural truss for rigging lights and screens', price: '$40 USD / unit' },
      { name: 'DMX Programming & Operator', description: 'Full show programming and live operation by our lighting tech', price: '$200 USD / event' },
    ],
  },
  {
    category: 'DJ',
    index: '03',
    items: [
      { name: 'DJ Booth', description: 'Professional DJ booth, setup and breakdown included', price: '$150 USD' },
      { name: 'DJ Daniel Romo', description: 'Full DJ service — includes mixing equipment, 6 hours, setup and breakdown', price: '$800 USD / event' },
    ],
  },
  {
    category: 'Dance Floor',
    index: '04',
    items: [
      {
        name: 'Dance Floor',
        description: 'Modular dance floor available in multiple sizes to fit your venue and guest count. Contact us for dimensions and availability.',
        price: 'A cotizar / Quote on request',
        note: 'Available in multiple sizes. Contact us for dimensions and availability.',
      },
    ],
  },
  {
    category: 'Logistics',
    index: '05',
    items: [
      { name: 'Setup & Breakdown', description: 'Professional crew handles all equipment load-in, setup, and breakdown at your venue', price: '$450 USD', note: 'Included in all packages.' },
    ],
  },
]

export default function RentasPage() {
  return (
    <div style={{ background: '#FCF7E8' }}>

      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20" style={{ background: '#FCF7E8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#968148' }}>
              Catalog
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl mb-7 leading-tight"
              style={{ color: '#2A1E08' }}
            >
              Everything you need,<br />in one place.
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
            >
              Browse individual items and services available to rent for any event — weddings,
              corporate, private parties or villa celebrations anywhere in Baja California Sur.
              All prices in USD + IVA (16%).
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="pb-24 sm:pb-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 sm:gap-24">
            {catalog.map((section) => (
              <RevealSection key={section.category}>
                <div className="flex flex-col sm:flex-row sm:gap-16">

                  {/* Category label column */}
                  <div className="sm:w-48 flex-shrink-0 mb-6 sm:mb-0">
                    <span className="text-xs font-mono" style={{ color: '#C9B889' }}>{section.index}</span>
                    <h2
                      className="text-2xl sm:text-3xl mt-1"
                      style={{ color: '#2A1E08' }}
                    >
                      {section.category}
                    </h2>
                  </div>

                  {/* Items */}
                  <div
                    className="flex-1 flex flex-col gap-[1px]"
                    style={{ background: '#D9C99A' }}
                  >
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 p-6"
                        style={{ background: '#FCF7E8' }}
                      >
                        <div className="flex-1">
                          <h3
                            className="text-lg sm:text-xl mb-1"
                            style={{ color: '#2A1E08' }}
                          >
                            {item.name}
                          </h3>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
                          >
                            {item.description}
                          </p>
                          {item.note && (
                            <p
                              className="text-xs mt-2 italic"
                              style={{ color: '#C9B889' }}
                            >
                              {item.note}
                            </p>
                          )}
                        </div>
                        <div className="sm:text-right sm:ml-8 flex-shrink-0">
                          <span
                            className="text-base font-semibold"
                            style={{ color: '#968148' }}
                          >
                            {item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <p
              className="mt-12 text-xs"
              style={{ color: '#C9B889' }}
            >
              * All prices in USD. IVA (16%) not included. Final price subject to event date, location, and quantity. Some items require minimum quantities — contact us for details.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="py-24 sm:py-32 border-t"
        style={{ background: '#EDE4CC', borderColor: '#D9C99A' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#968148' }}>
                  Wedding in a Box
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: '#2A1E08' }}>
                  Need everything<br />together?
                </h2>
                <p
                  className="mt-4 text-base leading-relaxed max-w-md"
                  style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
                >
                  Ask about our Wedding in a Box packages — audio, lighting, DJ, photography and
                  video, all bundled into one seamless production built around your event.
                </p>
              </div>
              <Link
                href="/cotizacion"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm btn-gold whitespace-nowrap flex-shrink-0"
              >
                Ask for a Custom Package <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

    </div>
  )
}
