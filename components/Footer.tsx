import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t" style={{ background: '#0a0a0a', borderColor: 'rgba(255,255,255,0.12)' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          <div>
            <Image
              src="/logo.png"
              alt="Oak Project Baja"
              width={140}
              height={56}
              className="h-11 w-auto mb-5"
              style={{ filter: 'brightness(0) invert(0.92)' }}
            />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Furniture, audio, lighting, photography and video for weddings and events across Baja California Sur.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold mb-5 tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>The Studio</h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/rentas', label: 'Furniture' },
                { href: '/rentas', label: 'Audio' },
                { href: '/rentas', label: 'Lighting' },
                { href: '/media', label: 'Photography' },
                { href: '/media', label: 'Video' },
                { href: '/djs', label: 'DJ' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm tracking-wide transition-opacity hover:opacity-50" style={{ color: '#f2f0eb' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold mb-5 tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Enquiries</h4>
            <ul className="flex flex-col gap-3 text-sm" style={{ color: '#f2f0eb' }}>
              <li style={{ color: 'rgba(255,255,255,0.5)' }}>Baja California Sur, México</li>
              <li>
                <a href="mailto:bookings@oakprojectbaja.com" className="transition-opacity hover:opacity-50">
                  bookings@oakprojectbaja.com
                </a>
              </li>
              <li>
                <Link href="/cotizacion" className="transition-opacity hover:opacity-50">
                  Request a quote →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Oak Project Baja
          </p>
          <p className="text-[11px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
            oakprojectbaja.com
          </p>
        </div>
      </div>
    </footer>
  )
}
