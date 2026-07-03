'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/lib/store'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '/mobiliario', label: 'Furniture' },
  { href: '/media', label: 'Media' },
  { href: '/djs', label: 'DJs' },
  { href: '/rentas', label: 'Rentals' },
  { href: '/galeria', label: 'Gallery' },
  { href: '/nosotros', label: 'About' },
]

export default function Navbar() {
  const { getItemCount, setCartOpen } = useCartStore()
  const itemCount = getItemCount()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: 'rgba(252,247,232,0.95)', borderColor: '#D9C99A', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Oak Project Baja"
              width={120}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide transition-colors"
                style={{ color: '#7A6535', fontFamily: 'inherit' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#2A1E08')}
                onMouseLeave={e => (e.currentTarget.style.color = '#7A6535')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded-lg transition-colors"
              style={{ color: '#968148' }}
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{ background: '#968148', color: '#FCF7E8' }}
                >
                  {itemCount}
                </span>
              )}
            </button>

            <Link
              href="/cotizacion"
              className="hidden md:block px-4 py-2 rounded-lg text-sm font-semibold btn-gold"
            >
              Get a Quote
            </Link>

            <button
              className="md:hidden p-2 rounded-lg"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: '#968148' }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t" style={{ background: '#FCF7E8', borderColor: '#D9C99A' }}>
          <div className="px-4 py-3 flex flex-col gap-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm"
                style={{ color: '#7A6535' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cotizacion"
              className="py-2 px-4 rounded-lg text-sm font-semibold btn-gold text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
