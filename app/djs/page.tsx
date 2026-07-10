import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import RevealSection from '@/components/RevealSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DJs — Oak Project Baja',
  description: 'Our roster of professional DJs for weddings, corporate events and private parties in Baja California Sur.',
}

type DJ = {
  name: string
  initials: string
  title: string
  genres: string[]
  bio: string
  soundcloud: string
  presskit: string
}

const djs: DJ[] = [
  {
    name: 'Paco Navarro',
    initials: 'PN',
    title: 'DJ · Producer',
    genres: ['Open Format', 'Electronic', 'House'],
    bio: 'Paco brings a producer\'s ear to every event — mixing with precision, reading the crowd, and keeping the energy exactly where it needs to be. A versatile performer equally at home at an intimate wedding reception or a high-energy corporate event.',
    soundcloud: '#',
    presskit: 'mailto:bookings@oakprojectbaja.com?subject=Presskit Request - Paco Navarro',
  },
  {
    name: 'DJ Morena',
    initials: 'DM',
    title: 'DJ · Entertainer',
    genres: ['Latin', 'Reggaeton', 'Open Format'],
    bio: 'DJ Morena is a powerhouse performer whose sets are known for their infectious energy and instinct for what gets people on the dance floor. A crowd favorite at events across Baja California.',
    soundcloud: '#',
    presskit: 'mailto:bookings@oakprojectbaja.com?subject=Presskit Request - DJ Morena',
  },
  {
    name: 'Alejandro Rivas',
    initials: 'AR',
    title: 'DJ · Selector',
    genres: ['Open Format', 'House', 'Latin'],
    bio: 'Alejandro Rivas blends deep grooves with a refined sense of timing, curating sets that build the perfect atmosphere — from cocktail hour to the peak of the celebration. A versatile, dependable selector for weddings and private events across Baja California.',
    soundcloud: '#',
    presskit: 'mailto:bookings@oakprojectbaja.com?subject=Presskit Request - Alejandro Rivas',
  },
]

export default function DJsPage() {
  return (
    <div style={{ background: '#FCF7E8' }}>

      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20" style={{ background: '#FCF7E8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#968148' }}>
              Oak DJs
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl mb-7 leading-tight"
              style={{ color: '#2A1E08' }}
            >
              The sound of<br />your celebration.
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
            >
              Our roster of professional DJs brings years of experience, touring-level equipment
              and an instinct for reading a room — from first dance to the last song of the night.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* DJ Cards */}
      <section className="pb-24 sm:pb-32" style={{ background: '#FCF7E8' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-[1px]"
            style={{ background: '#D9C99A' }}
          >
            {djs.map((dj) => (
              <RevealSection key={dj.name}>
                <div
                  className="flex flex-col gap-6 p-8 h-full"
                  style={{ background: '#FCF7E8' }}
                >
                  {/* Avatar */}
                  <div
                    className="w-full aspect-square rounded-xl flex items-center justify-center"
                    style={{ background: '#EDE4CC' }}
                  >
                    <span
                      className="text-5xl sm:text-6xl tracking-widest"
                      style={{ color: '#C9B889', fontFamily: 'var(--font-higuen)' }}
                    >
                      {dj.initials}
                    </span>
                  </div>

                  {/* Info */}
                  <div>
                    <p
                      className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                      style={{ color: '#968148' }}
                    >
                      {dj.title}
                    </p>
                    <h2
                      className="text-2xl sm:text-3xl"
                      style={{ color: '#2A1E08' }}
                    >
                      {dj.name}
                    </h2>
                  </div>

                  {/* Genre tags */}
                  <div className="flex flex-wrap gap-2">
                    {dj.genres.map((genre) => (
                      <span
                        key={genre}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{ background: '#EDE4CC', color: '#968148', border: '1px solid #D9C99A' }}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
                  >
                    {dj.bio}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: '#D9C99A' }}>
                    <Link
                      href={dj.soundcloud}
                      className="w-full py-2.5 rounded-full text-center font-semibold text-sm btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Listen on Soundcloud
                    </Link>
                    <Link
                      href={dj.presskit}
                      className="w-full py-2.5 rounded-full text-center font-semibold text-sm btn-outline"
                    >
                      Request Presskit
                    </Link>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

        </div>
      </section>

      {/* Growing roster CTA */}
      <section
        className="py-20 sm:py-28 border-t"
        style={{ background: '#EDE4CC', borderColor: '#D9C99A' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
              <div>
                <h2 className="text-2xl sm:text-3xl mb-3" style={{ color: '#2A1E08' }}>
                  Growing our roster
                </h2>
                <p
                  className="text-base leading-relaxed max-w-md"
                  style={{ color: '#7A6535', fontFamily: 'var(--font-garamond)' }}
                >
                  Interested in joining Oak Project Baja as a DJ? We&apos;re always looking for talented
                  performers who share our commitment to quality events.
                </p>
              </div>
              <Link
                href="mailto:bookings@oakprojectbaja.com?subject=DJ Application - Oak Project Baja"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm btn-gold whitespace-nowrap flex-shrink-0"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

    </div>
  )
}
