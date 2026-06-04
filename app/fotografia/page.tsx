import CategoryPage from '@/components/CategoryPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography for Events — Oak Project Baja',
  description: 'Professional photography services for weddings, corporate events, and celebrations in Baja California.',
}

export default function FotografiaPage() {
  return <CategoryPage category="fotografia" />
}
