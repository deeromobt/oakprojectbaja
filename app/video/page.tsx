import CategoryPage from '@/components/CategoryPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video for Events — Oak Project Baja',
  description: 'Professional video production for events, weddings, drone footage, and livestream in Baja California.',
}

export default function VideoPage() {
  return <CategoryPage category="video" />
}
