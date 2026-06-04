'use client'
import { useCartStore } from '@/lib/store'
import { formatPrice } from '@/lib/products'
import { Trash2, Plus, Minus, Calendar, ArrowRight, ShoppingCart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const eventTypes = [
  'Wedding', 'Quinceañera', 'Birthday', 'Corporate Event',
  'Graduation', 'Baby Shower / Baptism', 'Private Party', 'Concert / Show', 'Other',
]

const budgetRanges = [
  'Under $40,000 MXN',
  '$40,000 – $75,000 MXN',
  '$75,000 – $120,000 MXN',
  '$120,000 – $170,000 MXN',
  'Over $170,000 MXN',
  'Corporate event (special quote)',
  'Not defined yet',
]

const hearAboutUs = [
  'Friend referral', 'Instagram', 'Facebook', 'TikTok',
  'Google', 'A wedding planner / coordinator', 'Other',
]

export default function CotizacionPage() {
  const { items, removeItem, updateQuantity, eventDetails, setEventDetails } = useCartStore()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4" style={{ background: '#FCF7E8' }}>
        <div className="text-center max-w-lg">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold italic mb-4" style={{ color: '#2A1E08' }}>
            Request received!
          </h1>
          <p className="mb-2 text-lg" style={{ color: '#7A6535' }}>
            Hi <strong style={{ color: '#2A1E08' }}>{eventDetails.name}</strong>, we received your quote request.
          </p>
          <p className="mb-8" style={{ color: '#7A6535' }}>
            We'll reach out within the next few hours at <strong style={{ color: '#2A1E08' }}>{eventDetails.email}</strong> or via WhatsApp with all the details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-8 py-3 rounded-xl font-semibold btn-gold inline-block">
              Back to home
            </Link>
            <a
              href={`https://wa.me/526241691988?text=${encodeURIComponent(`Hi, I just sent a quote request for ${eventDetails.eventType || 'my event'}. My name is ${eventDetails.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl font-semibold btn-outline inline-flex items-center gap-2 justify-center"
            >
              <MessageCircle size={16} /> Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12" style={{ background: '#FCF7E8' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>Quote</p>
          <h1 className="text-4xl font-bold italic mb-2" style={{ color: '#2A1E08' }}>Tell us your vision</h1>
          <p style={{ color: '#7A6535' }}>Share the details of your event and we'll prepare a personalized proposal.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left — Selected items */}
          <div className="lg:col-span-2">
            <h2 className="text-base font-semibold mb-4" style={{ color: '#2A1E08' }}>
              Selected services
            </h2>

            {items.length === 0 ? (
              <div className="rounded-2xl p-8 text-center" style={{ background: '#EDE4CC', border: '1px dashed #D9C99A' }}>
                <ShoppingCart size={36} className="mx-auto mb-3" style={{ color: '#C9B889' }} />
                <p className="text-sm mb-4" style={{ color: '#7A6535' }}>
                  Add products from the catalog or send the request without a selection and we'll advise you.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    { slug: 'mobiliario', label: 'Furniture' },
                    { slug: 'audio', label: 'Audio' },
                    { slug: 'iluminacion', label: 'Lighting' },
                    { slug: 'fotografia', label: 'Photography' },
                    { slug: 'video', label: 'Video' },
                  ].map(cat => (
                    <Link key={cat.slug} href={`/${cat.slug}`} className="px-3 py-1.5 rounded-lg text-xs btn-outline capitalize">
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {items.map(item => (
                  <div key={item.product.id} className="rounded-xl p-4" style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-medium text-sm" style={{ color: '#2A1E08' }}>{item.product.name}</p>
                        <p className="text-xs" style={{ color: '#968148' }}>{item.product.unit}</p>
                      </div>
                      <button onClick={() => removeItem(item.product.id)} className="p-1 rounded" style={{ color: '#C9B889' }}>
                        <Trash2 size={13} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ border: '1px solid #D9C99A', color: '#7A6535' }}>
                          <Minus size={11} />
                        </button>
                        <span className="w-7 text-center text-sm" style={{ color: '#2A1E08' }}>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ border: '1px solid #D9C99A', color: '#7A6535' }}>
                          <Plus size={11} />
                        </button>
                      </div>
                      <span className="text-xs font-medium" style={{ color: '#7A6535' }}>
                        ×{item.quantity}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="rounded-xl p-4 text-center text-sm" style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}>
                  <p style={{ color: '#7A6535' }}>Final pricing will be included in your personalized proposal.</p>
                </div>
              </div>
            )}

            {/* WhatsApp shortcut */}
            <div className="mt-6 p-4 rounded-2xl" style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}>
              <p className="text-sm font-semibold mb-1" style={{ color: '#2A1E08' }}>Prefer to talk directly?</p>
              <p className="text-xs mb-3" style={{ color: '#968148' }}>Message us on WhatsApp and we'll reply in minutes.</p>
              <a
                href="https://wa.me/526241691988?text=Hi!%20I%27d%20like%20to%20get%20a%20quote%20for%20my%20event%20with%20Oak%20Project%20Baja."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center w-full py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02]"
                style={{ background: '#25D366', color: '#fff' }}
              >
                <MessageCircle size={16} /> Open WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Full qualification form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit}>
              <h2 className="text-base font-semibold mb-4" style={{ color: '#2A1E08' }}>Your event details</h2>
              <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}>

                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>Full name *</label>
                    <input type="text" required value={eventDetails.name} onChange={e => setEventDetails({ name: e.target.value })}
                      placeholder="Your name" className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: '#2A1E08' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>Email address *</label>
                    <input type="email" required value={eventDetails.email} onChange={e => setEventDetails({ email: e.target.value })}
                      placeholder="you@email.com" className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: '#2A1E08' }} />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>Phone / WhatsApp *</label>
                  <input type="tel" required value={eventDetails.phone} onChange={e => setEventDetails({ phone: e.target.value })}
                    placeholder="+52 624 000 0000" className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: '#2A1E08' }} />
                  <p className="text-xs mt-1" style={{ color: '#968148' }}>We use WhatsApp to respond faster.</p>
                </div>

                {/* Event type + Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>Event type *</label>
                    <select required value={eventDetails.eventType} onChange={e => setEventDetails({ eventType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: eventDetails.eventType ? '#2A1E08' : '#C9B889' }}>
                      <option value="" disabled>Select</option>
                      {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>
                      <Calendar size={11} className="inline mr-1" />Event date *
                    </label>
                    <input type="date" required min={new Date().toISOString().split('T')[0]}
                      value={eventDetails.eventDate ? new Date(eventDetails.eventDate).toISOString().split('T')[0] : ''}
                      onChange={e => setEventDetails({ eventDate: e.target.value ? new Date(e.target.value) : null })}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: '#2A1E08' }} />
                  </div>
                </div>

                {/* Venue + Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>Event venue</label>
                    <input type="text" value={eventDetails.venue} onChange={e => setEventDetails({ venue: e.target.value })}
                      placeholder="Hall, ranch, beach..." className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: '#2A1E08' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>Number of guests</label>
                    <input type="number" min="1" value={eventDetails.guestCount} onChange={e => setEventDetails({ guestCount: e.target.value })}
                      placeholder="e.g. 150" className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: '#2A1E08' }} />
                  </div>
                </div>

                {/* Budget range */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>
                    Approximate budget *
                  </label>
                  <select required
                    value={(eventDetails as { budget?: string }).budget ?? ''}
                    onChange={e => setEventDetails({ ...eventDetails, budget: e.target.value } as Parameters<typeof setEventDetails>[0])}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: (eventDetails as { budget?: string }).budget ? '#2A1E08' : '#C9B889' }}>
                    <option value="" disabled>Select a range</option>
                    {budgetRanges.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                  <p className="text-xs mt-1" style={{ color: '#968148' }}>This helps us prepare the most suitable proposal for you.</p>
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>
                    How did you find us?
                  </label>
                  <select
                    value={(eventDetails as { hearAbout?: string }).hearAbout ?? ''}
                    onChange={e => setEventDetails({ ...eventDetails, hearAbout: e.target.value } as Parameters<typeof setEventDetails>[0])}
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: (eventDetails as { hearAbout?: string }).hearAbout ? '#2A1E08' : '#C9B889' }}>
                    <option value="" disabled>Select</option>
                    {hearAboutUs.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                {/* Vision */}
                <div>
                  <label className="block text-xs font-semibold mb-1.5 tracking-wide uppercase" style={{ color: '#968148' }}>
                    Tell us your vision *
                  </label>
                  <textarea required rows={4} value={eventDetails.notes} onChange={e => setEventDetails({ notes: e.target.value })}
                    placeholder="Describe your ideal event — the atmosphere, the colors, the moments you don't want to miss, any references you have... The more you tell us, the better proposal we can make you."
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
                    style={{ background: '#FCF7E8', border: '1px solid #D9C99A', color: '#2A1E08' }} />
                </div>

                <button type="submit" className="w-full py-3.5 rounded-xl font-semibold btn-gold flex items-center justify-center gap-2 text-base">
                  Send quote request
                  <ArrowRight size={18} />
                </button>

                <p className="text-xs text-center" style={{ color: '#C9B889' }}>
                  We respond within 24 hours. No commitment required.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
