'use client'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phone = '526241691988'
  const message = encodeURIComponent('Hi! I\'d like to get a quote for my event with Oak Project Baja.')

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl group"
      style={{ background: '#25D366', color: '#fff' }}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={22} fill="white" />
      <span className="text-sm font-semibold hidden sm:block">
        WhatsApp
      </span>
    </a>
  )
}
