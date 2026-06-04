import CategoryPage from '@/components/CategoryPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audio for Events — Oak Project Baja',
  description: 'Professional sound system rental, microphones, and audio equipment for events in Baja California.',
}

export default function AudioPage() {
  return <CategoryPage category="audio" />
}
