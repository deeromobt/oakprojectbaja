'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from './products'

export interface CartItem {
  product: Product
  quantity: number
}

export interface EventDetails {
  name: string
  email: string
  phone: string
  eventType: string
  eventDate: Date | null
  venue: string
  guestCount: string
  notes: string
  budget?: string
  hearAbout?: string
}

interface CartStore {
  items: CartItem[]
  eventDetails: EventDetails
  isCartOpen: boolean
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  setCartOpen: (open: boolean) => void
  setEventDetails: (details: Partial<EventDetails>) => void
  getTotal: () => number
  getItemCount: () => number
}

const defaultEventDetails: EventDetails = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: null,
  venue: '',
  guestCount: '',
  notes: '',
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      eventDetails: defaultEventDetails,
      isCartOpen: false,

      addItem: (product, quantity = 1) => {
        set(state => {
          const existing = state.items.find(i => i.product.id === product.id)
          if (existing) {
            return {
              items: state.items.map(i =>
                i.product.id === product.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            }
          }
          return { items: [...state.items, { product, quantity }] }
        })
      },

      removeItem: (productId) => {
        set(state => ({ items: state.items.filter(i => i.product.id !== productId) }))
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        set(state => ({
          items: state.items.map(i =>
            i.product.id === productId ? { ...i, quantity } : i
          ),
        }))
      },

      clearCart: () => set({ items: [], eventDetails: defaultEventDetails }),

      setCartOpen: (open) => set({ isCartOpen: open }),

      setEventDetails: (details) =>
        set(state => ({ eventDetails: { ...state.eventDetails, ...details } })),

      getTotal: () => {
        return get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0)
      },
    }),
    {
      name: 'oak-cart',
      partialize: (state) => ({ items: state.items, eventDetails: state.eventDetails }),
    }
  )
)
