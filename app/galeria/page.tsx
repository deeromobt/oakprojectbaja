import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallery — Oak Project Baja',
  description: 'Gallery of events by Oak Project Baja. Weddings, private events, and more in Baja California.',
}

const realEvents = [
  {
    title: "Indera & Julius — Wedding",
    tag: 'Wedding',
    video: '/julius-party.mp4',
    services: ['Audio', 'Lighting', 'Video'],
  },
  {
    title: "Katie & Manuel — Wedding",
    tag: 'Wedding',
    video: '/mendivil-reel.mp4',
    services: ['Audio', 'Lighting', 'Photography', 'Video'],
  },
  {
    title: "Jessica & Charlie — Audio & Lights",
    tag: 'Wedding',
    video: '/about-reel.mp4',
    services: ['Audio', 'Lighting'],
  },
]

const placeholderEvents = [
  { title: 'Corporate Event Los Cabos', tag: 'Corporate', services: ['Audio', 'Lighting'] },
  { title: 'Private Event — Los Cabos', tag: 'Private Party', services: ['Furniture', 'Audio', 'Lighting', 'Video'] },
  { title: 'Beach wedding Ensenada', tag: 'Wedding', services: ['Furniture', 'Photography', 'Video'] },
  { title: 'Birthday 50 La Paz', tag: 'Birthday', services: ['Photo booth', 'Furniture'] },
]

const categories = ['All', 'Weddings', 'Corporate', 'Private parties', 'Villas']

export default function GaleriaPage() {
  return (
    <div className="py-12" style={{ background: '#FCF7E8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>Gallery</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 italic" style={{ color: '#2A1E08' }}>
            Events we've transformed
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A6535' }}>
            Every event is a unique story. Here we share some of the most special moments we've had the privilege of being part of in Baja California.
          </p>
        </div>

        {/* Featured films */}
        <div className="mb-16 flex flex-col gap-12">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>Featured film</p>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#2A1E08' }}>Indera & Julius — Wedding Film</h2>
            <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid #D9C99A' }}>
              <video className="w-full aspect-video object-cover" src="/julius-montaje.mp4" controls playsInline style={{ background: '#EDE4CC' }} />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Audio', 'Lighting', 'Video'].map(s => (
                <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ background: '#EDE4CC', color: '#968148', border: '1px solid #D9C99A' }}>{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#2A1E08' }}>Katie & Manuel — Wedding Film</h2>
            <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid #D9C99A' }}>
              <video className="w-full aspect-video object-cover" src="/mendivil-wedding.mp4" controls playsInline style={{ background: '#EDE4CC' }} />
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Audio', 'Lighting', 'Photography', 'Video'].map(s => (
                <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ background: '#EDE4CC', color: '#968148', border: '1px solid #D9C99A' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: i === 0 ? '#968148' : '#EDE4CC',
                color: i === 0 ? '#FCF7E8' : '#7A6535',
                border: `1px solid ${i === 0 ? '#968148' : '#D9C99A'}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Real event reels grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {realEvents.map((event, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
              style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}
            >
              <video
                className="w-full aspect-video object-cover"
                src={event.video}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="p-4">
                <span className="text-xs px-2 py-0.5 rounded-full mb-2 inline-block" style={{ background: '#D9C99A', color: '#2A1E08' }}>
                  {event.tag}
                </span>
                <h3 className="font-semibold text-sm mb-2" style={{ color: '#2A1E08' }}>{event.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {event.services.map(s => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded" style={{ background: '#FCF7E8', color: '#968148', border: '1px solid #D9C99A' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {placeholderEvents.map((event, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden"
              style={{ background: '#EDE4CC', border: '1px dashed #D9C99A' }}
            >
              <div
                className="aspect-video flex flex-col items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #EDE4CC, #E0D5B8)' }}
              >
                <p className="text-4xl opacity-25">📸</p>
                <p className="text-xs" style={{ color: '#C9B889' }}>Coming soon</p>
              </div>
              <div className="p-4">
                <span className="text-xs px-2 py-0.5 rounded-full mb-2 inline-block" style={{ background: '#D9C99A', color: '#2A1E08' }}>
                  {event.tag}
                </span>
                <h3 className="font-semibold text-sm mb-2" style={{ color: '#2A1E08' }}>{event.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {event.services.map(s => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded" style={{ background: '#FCF7E8', color: '#968148', border: '1px solid #D9C99A' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl text-center" style={{ background: '#EDE4CC', border: '1px dashed #C9B889' }}>
          <p className="text-2xl mb-3">🎬</p>
          <h3 className="text-xl font-semibold mb-2" style={{ color: '#2A1E08' }}>More events coming soon</h3>
          <p className="mb-6" style={{ color: '#7A6535' }}>
            We're continuously adding new events. Ready to create yours?
          </p>
          <Link href="/cotizacion" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold btn-gold">
            Get a quote <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </div>
  )
}
