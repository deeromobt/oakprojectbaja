import CategoryPage from '@/components/CategoryPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lighting for Events — Oak Project Baja',
  description: 'LED lighting, uplights, wash lights, and special effects rental for events in Baja California.',
}

export default function IluminacionPage() {
  return <CategoryPage category="iluminacion" />
}
