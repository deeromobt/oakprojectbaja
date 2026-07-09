import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import Tilt3D from '@/components/Tilt3D'

export const metadata: Metadata = {
  title: 'About Us — Oak Project Baja',
  description: 'Learn the story of Oak Project Baja, a company specializing in furniture rental, audio, lighting, and photography for events in Baja California.',
}

const values = [
  { icon: '🎯', title: 'Precision', desc: 'Every detail matters. We deliver on time and as promised, no excuses.' },
  { icon: '✨', title: 'Quality', desc: 'Premium inventory, carefully maintained and constantly updated.' },
  { icon: '🤝', title: 'Commitment', desc: 'Your event is our priority from the first contact to the last pickup.' },
  { icon: '🌵', title: 'Local roots', desc: 'We know Baja California like no one else. We are part of this land.' },
]

const team = [
  { name: 'Your name here', role: 'Founder & Director', initials: 'TN' },
  { name: 'Collaborator', role: 'Event Coordinator', initials: 'CO' },
  { name: 'Sofía Angulo', role: 'In-House Photographer', initials: 'SA' },
]

export default function NosotrosPage() {
  return (
    <div className="py-12" style={{ background: '#FCF7E8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>Our story</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 italic" style={{ color: '#2A1E08' }}>
            Born in Baja,<br />built to celebrate
          </h1>
          <p className="text-lg leading-relaxed mb-4" style={{ color: '#7A6535' }}>
            Oak Project Baja was born from a simple idea: Baja California deserves an events company that matches its landscapes and its people. From Valle de Guadalupe to Los Cabos, we've been present at the most important moments of hundreds of families and businesses.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: '#7A6535' }}>
            With 16 years as DJs in Cabo San Lucas, we evolved into a full-service event production and rental company — with a catalog of products available to quote online.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 p-8 rounded-2xl depth-2" style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}>
          {[
            { value: '300+', label: 'Events completed' },
            { value: '16 years', label: 'As DJs in Cabo San Lucas' },
            { value: '300+', label: 'Products in catalog' },
            { value: 'Baja Sur', label: 'Full coverage' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold mb-1" style={{ color: '#2A1E08' }}>{stat.value}</p>
              <p className="text-sm" style={{ color: '#968148' }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>Our values</p>
            <h2 className="text-3xl font-bold italic" style={{ color: '#2A1E08' }}>What defines us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <Tilt3D key={v.title} max={5} lift={8}>
                <div className="rounded-2xl p-5 h-full depth-1" style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}>
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: '#2A1E08' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#7A6535' }}>{v.desc}</p>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>The team</p>
            <h2 className="text-3xl font-bold italic" style={{ color: '#2A1E08' }}>The people behind every event</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <Tilt3D key={i} max={5} lift={9} glare>
                <div className="rounded-2xl p-6 text-center h-full depth-1" style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4"
                    style={{ background: '#D9C99A', color: '#2A1E08' }}
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: '#2A1E08' }}>{member.name}</h3>
                  <p className="text-sm" style={{ color: '#968148' }}>{member.role}</p>
                </div>
              </Tilt3D>
            ))}
          </div>
        </div>

        {/* Testimonial highlight */}
        <div className="mb-20 p-8 sm:p-12 rounded-3xl text-center depth-2" style={{ background: '#EDE4CC', border: '1px solid #C9B889' }}>
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="#C9B889" style={{ color: '#C9B889' }} />)}
          </div>
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-6" style={{ color: '#2A1E08' }}>
            "From the first call to the last detail, the Oak Project team was professional and attentive. The photos were spectacular and the lighting completely transformed the venue."
          </p>
          <p className="font-semibold" style={{ color: '#968148' }}>Carlos & Sofía Ruiz</p>
          <p className="text-sm" style={{ color: '#C9B889' }}>Quinceañera — Tijuana</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold italic mb-4" style={{ color: '#2A1E08' }}>Shall we talk about your event?</h2>
          <p className="mb-8" style={{ color: '#7A6535' }}>Get a quote in minutes or reach us directly on WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cotizacion" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold btn-gold justify-center">
              Get a quote <ArrowRight size={18} />
            </Link>
            <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold btn-outline justify-center">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
