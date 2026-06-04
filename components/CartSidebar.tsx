'use client'
import { useCartStore } from '@/lib/store'
import { formatPrice } from '@/lib/products'
import { X, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function CartSidebar() {
  const { items, isCartOpen, setCartOpen, removeItem, updateQuantity, getTotal } = useCartStore()
  const total = getTotal()

  if (!isCartOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
      <div
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md flex flex-col shadow-2xl"
        style={{ background: '#FCF7E8', borderLeft: '1px solid #D9C99A' }}
      >
        <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: '#D9C99A' }}>
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} style={{ color: '#968148' }} />
            <h2 className="text-lg font-semibold" style={{ color: '#2A1E08' }}>My Quote</h2>
            {items.length > 0 && (
              <span className="text-sm px-2 py-0.5 rounded-full" style={{ background: '#EDE4CC', color: '#7A6535' }}>
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            )}
          </div>
          <button onClick={() => setCartOpen(false)} className="p-1.5 rounded-lg transition-colors" style={{ color: '#968148' }}>
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
            <ShoppingCart size={48} style={{ color: '#D9C99A' }} />
            <p className="text-center" style={{ color: '#7A6535' }}>
              Your quote is empty. Add products and services to get started.
            </p>
            <button onClick={() => setCartOpen(false)} className="px-6 py-2 rounded-lg btn-outline text-sm font-medium">
              Browse catalog
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {items.map(item => (
                <div key={item.product.id} className="p-4 rounded-xl" style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}>
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-sm font-medium pr-2" style={{ color: '#2A1E08' }}>{item.product.name}</p>
                    <button onClick={() => removeItem(item.product.id)} className="p-1 rounded flex-shrink-0" style={{ color: '#C9B889' }}>
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p className="text-xs mb-3" style={{ color: '#968148' }}>
                    {formatPrice(item.product.price)} {item.product.unit}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ border: '1px solid #D9C99A', color: '#7A6535' }}
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium" style={{ color: '#2A1E08' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ border: '1px solid #D9C99A', color: '#7A6535' }}
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="text-sm font-semibold" style={{ color: '#2A1E08' }}>
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 border-t" style={{ borderColor: '#D9C99A' }}>
              <div className="flex justify-between items-center mb-4">
                <span style={{ color: '#7A6535' }}>Estimated total</span>
                <span className="text-2xl font-bold" style={{ color: '#2A1E08' }}>{formatPrice(total)}</span>
              </div>
              <p className="text-xs mb-4 text-center" style={{ color: '#C9B889' }}>
                * Prices in MXN. Final total may vary by date and availability.
              </p>
              <Link
                href="/cotizacion"
                onClick={() => setCartOpen(false)}
                className="block w-full py-3 rounded-xl text-center font-semibold btn-gold"
              >
                Request quote
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  )
}
