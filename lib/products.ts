export type Category = 'mobiliario' | 'audio' | 'iluminacion' | 'fotografia' | 'video'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  unit: string
  category: Category
  popular?: boolean
  minQty?: number
  highlights?: string[]
}

export const products: Product[] = [
  // FURNITURE
  {
    id: 'mob-001', name: 'DJ Booth', category: 'mobiliario', price: 4000, unit: 'per event', popular: true, minQty: 1,
    description: 'Professional DJ Booth available for rental. The perfect stage to make the DJ the center of the night.',
    highlights: ['Professional finish', 'Compatible with any equipment', 'Setup & breakdown included'],
  },
  {
    id: 'mob-002', name: 'Dance Floor', category: 'mobiliario', price: 0, unit: 'per event', popular: true, minQty: 1,
    description: 'Modular dance floor for rental. Transform any space into the perfect floor for your guests to enjoy all night long.',
    highlights: ['Customizable size', 'Non-slip surface', 'Setup & breakdown included'],
  },

  // AUDIO
  {
    id: 'aud-001', name: '12" Mid Speaker', category: 'audio', price: 2400, unit: 'per unit', popular: true, minQty: 1,
    description: 'High-power 12-inch QSC speaker. Reproduces mid and high frequencies with clarity and projection in any space.',
    highlights: ['High sound clarity', 'Ideal for vocals and instruments', 'Available in pairs'],
  },
  {
    id: 'aud-002', name: '18" Subwoofer', category: 'audio', price: 4000, unit: 'per unit', popular: true, minQty: 1,
    description: '18-inch subwoofer for deep, impactful bass. Adds power and body to any sound system.',
    highlights: ['Deep, impactful bass', 'High performance', 'Available in pairs'],
  },
  {
    id: 'aud-003', name: 'QSC K8 Monitor', category: 'audio', price: 3200, unit: 'per unit', minQty: 1,
    description: '8-inch QSC K8 monitor for stage or DJ. Reproduces the mix with fidelity for those on stage.',
    highlights: ['Precise reference sound', 'Compact and powerful', 'Ideal for DJs and artists'],
  },
  {
    id: 'aud-004', name: 'Shure Wireless Microphone', category: 'audio', price: 800, unit: 'per unit', popular: true, minQty: 1,
    description: 'Professional Shure handheld wireless microphone. Stable, clear signal for presenters, emcees, and performers.',
    highlights: ['Stable signal, no interference', 'Long battery life', 'Compatible with any PA system'],
  },

  // LIGHTING
  {
    id: 'ilu-001', name: '3m Aluminum Truss', category: 'iluminacion', price: 1600, unit: 'per unit', popular: true, minQty: 1,
    description: '3-meter aluminum truss for mounting professional lighting. Robust structure that transforms any space into a performance stage.',
    highlights: ['3 meters long', 'Robust structure', 'Setup & breakdown included'],
  },
  {
    id: 'ilu-002', name: 'Par LED Washlight', category: 'iluminacion', price: 1600, unit: 'per unit', popular: true, minQty: 2,
    description: 'Color wash LED par for stage, dance floor, and ambient lighting. Vibrant colors with DMX control.',
    highlights: ['Customizable colors', 'DMX control', 'Minimum 2 units'],
  },
  {
    id: 'ilu-003', name: 'Beam Light (Moving Head)', category: 'iluminacion', price: 3200, unit: 'per unit', popular: true, minQty: 2,
    description: 'Moving head with powerful beam and dynamic effects. The element that turns a reception into a true spectacle.',
    highlights: ['Dynamic beam effects', 'Programmable robotic movement', 'Minimum 2 units'],
  },
  {
    id: 'ilu-004', name: 'DMX Controller + Operator', category: 'iluminacion', price: 3200, unit: 'per event', minQty: 1,
    description: 'Professional DMX controller plus lighting operator for your event. Live programming and execution of the full lighting production.',
    highlights: ['Operator included', 'Real-time programming', 'Synchronized with music'],
  },

  // PHOTOGRAPHY
  {
    id: 'fot-001', name: 'Wedding Photography', category: 'fotografia', price: 24000, unit: 'per event', popular: true, minQty: 1,
    description: 'Full wedding photography coverage with 2 professional photographers for 8 hours. Private high-resolution gallery delivered within the first week.',
    highlights: ['2 professional photographers', '8 hours of coverage', 'Private online gallery', 'Delivered in under 1 week'],
  },
  {
    id: 'fot-002', name: 'Family Beach Session — 1 hr', category: 'fotografia', price: 5600, unit: 'per session', minQty: 1,
    description: 'Intimate family photo session on the beach in Baja California. 1 hour with a professional photographer, high-resolution edited images included.',
    highlights: ['1 hour session', '1 professional photographer', 'Edited photos delivered', 'Beach locations in BCS'],
  },
  {
    id: 'fot-003', name: 'Family Beach Session — Photos + Reel', category: 'fotografia', price: 8800, unit: 'per session', popular: true, minQty: 1,
    description: 'Complete family beach session including edited photos and a 45-second cinematic reel. The perfect way to capture your Baja California memories.',
    highlights: ['Edited photo gallery', '45-second reel included', 'Professional photographer + videographer', 'Beach locations in BCS'],
  },

  // VIDEO
  {
    id: 'vid-001', name: 'Wedding Video', category: 'video', price: 40000, unit: 'per event', popular: true, minQty: 1,
    description: 'Full wedding video production with 3 videographers and a drone pilot for 8 hours of filming. Includes 3 deliverables: 3-min film, 1-min highlights, and a 30–45 sec reel.',
    highlights: ['3 videographers + drone pilot', '8 hours of filming', '3-min wedding film', '1-min highlights + 30–45 sec reel'],
  },
  {
    id: 'vid-002', name: 'Wedding Photo + Video', category: 'video', price: 64000, unit: 'per event', popular: true, minQty: 1,
    description: 'Complete wedding photo and video package — 2 photographers and 3 videographers with drone for 8 hours. All photo and video deliverables included.',
    highlights: ['2 photographers + 3 videographers', 'Drone with pilot included', '8 hours of coverage', 'All photo & video deliverables'],
  },
  {
    id: 'vid-003', name: 'Real Estate Video', category: 'video', price: 0, unit: 'quote by property', minQty: 1,
    description: 'Professional real estate video production for luxury properties, villas, and developments in Baja California. Pricing varies by property size and scope.',
    highlights: ['Drone footage included', 'Interior & exterior walkthrough', 'Edited cinematic video', 'Custom quote by property'],
  },
]

export const categoryInfo = {
  mobiliario: {
    title: 'Furniture',
    subtitle: 'The perfect stage for every moment',
    description: 'Professional DJ Booths and modular dance floors for rental. The element that turns any space into a real party.',
    icon: '🪑',
    crossSell: ['audio', 'iluminacion'],
  },
  audio: {
    title: 'Audio',
    subtitle: 'Every word and every note reaching everyone',
    description: '12" mids, 18" subwoofers, 8" monitors, and professional wireless microphones. Sound makes or breaks an event — ours never fails.',
    icon: '🔊',
    crossSell: ['iluminacion', 'video'],
  },
  iluminacion: {
    title: 'Lighting',
    subtitle: 'The light that turns spaces into experiences',
    description: 'The right lighting can turn an empty room into a dream. We design the atmosphere you want — intimate, spectacular, or magical.',
    icon: '💡',
    crossSell: ['mobiliario', 'fotografia'],
  },
  fotografia: {
    title: 'Photography',
    subtitle: 'Moments last seconds. Photos last a lifetime',
    description: 'We capture the real emotions of your event — not forced poses. Every gallery tells the complete story of your special day in images you\'ll want to see forever.',
    icon: '📷',
    crossSell: ['video', 'iluminacion'],
  },
  video: {
    title: 'Video',
    subtitle: 'Relive your event whenever you want',
    description: 'Cinematic production that takes you back to the moment. From drones to stage cameras — we capture everything so nothing gets lost.',
    icon: '🎬',
    crossSell: ['fotografia', 'audio'],
  },
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter(p => p.category === category)
}

export function formatPrice(price: number): string {
  if (price === 0) return 'Price on request'
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
  }).format(price)
}
