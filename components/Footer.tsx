import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t mt-0" style={{ background: '#EDE4CC', borderColor: '#D9C99A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Oak Project Baja"
                width={140}
                height={56}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#7A6535' }}>
              Furniture, audio, lighting, photography and video for events in Baja California Sur.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-widest uppercase" style={{ color: '#968148' }}>Services</h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: '/mobiliario', label: 'Furniture' },
                { href: '/audio', label: 'Audio' },
                { href: '/iluminacion', label: 'Lighting' },
                { href: '/fotografia', label: 'Photography' },
                { href: '/video', label: 'Video' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors" style={{ color: '#7A6535' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 tracking-widest uppercase" style={{ color: '#968148' }}>Contact</h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: '#7A6535' }}>
              <li>Baja California Sur, México</li>
              <li>
                <a href="mailto:info@oakprojectbaja.com" className="transition-colors hover:underline">
                  info@oakprojectbaja.com
                </a>
              </li>
              <li>
                <Link href="/cotizacion" className="transition-colors hover:underline">
                  Request a quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: '#D9C99A' }}>
          <p className="text-xs" style={{ color: '#C9B889' }}>
            © {new Date().getFullYear()} Oak Project Baja. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#C9B889' }}>
            oakprojectbaja.com
          </p>
        </div>
      </div>
    </footer>
  )
}
