import CategoryPage from '@/components/CategoryPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dance Floors for Events — Oak Project Baja',
  description: 'DJ Booth and dance floor rental for events in Baja California.',
}

export default function MobiliarioPage() {
  return <CategoryPage category="mobiliario" />
}
