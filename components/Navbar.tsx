'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useCartStore } from '@/lib/store'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '/media', label: 'Media' },
  { href: '/djs', label: 'DJs' },
  { href: '/rentas', label: 'Rentals' },
  { href: '/galeria', label: 'Gallery' },
  { href: '/nosotros', label: 'About' },
]

const pillStyle: React.CSSProperties = {
  background: 'rgba(252,247,232,0.72)',
  border: '1px solid rgba(217,201,154,0.7)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  boxShadow: '0 12px 34px -16px rgba(42,30,8,0.28)',
}

export default function Navbar() {
  const { getItemCount, setCartOpen } = useCartStore()
  const itemCount = getItemCount()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 pointer-events-none">
      <div className="mx-auto max-w-6xl px-3 sm:px-5 pt-3">
        {/* floating pill */}
        <div
          className="pointer-events-auto flex items-center justify-between gap-4 rounded-full pl-5 pr-2 py-2"
          style={pillStyle}
        >
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/logo.png" alt="Oak Project Baja" width={110} height={44} className="h-9 w-auto" priority />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase transition-opacity hover:opacity-50"
                style={{ color: '#2A1E08' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 rounded-full transition-colors"
              style={{ color: '#968148' }}
            >
              <ShoppingCart size={19} />
              {itemCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center"
                  style={{ background: '#968148', color: '#FCF7E8' }}
                >
                  {itemCount}
                </span>
              )}
            </button>

            <Link
              href="/cotizacion"
              className="hidden md:block px-5 py-2.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase transition-opacity hover:opacity-85"
              style={{ background: '#968148', color: '#FCF7E8' }}
            >
              Enquire
            </Link>

            <button
              className="md:hidden p-2 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: '#968148' }}
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        {/* mobile dropdown panel */}
        {menuOpen && (
          <div
            className="pointer-events-auto md:hidden mt-2 rounded-3xl p-2"
            style={pillStyle}
          >
            <div className="flex flex-col">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-2xl text-sm"
                  style={{ color: '#7A6535' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cotizacion"
                className="mt-1 py-3 px-4 rounded-2xl text-sm font-semibold btn-gold text-center"
                onClick={() => setMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
