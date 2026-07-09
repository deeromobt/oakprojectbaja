'use client'
import { useCartStore } from '@/lib/store'
import { formatPrice, type Product } from '@/lib/products'
import { Plus, Check } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import Tilt3D from './Tilt3D'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, items } = useCartStore()
  const [adding, setAdding] = useState(false)
  const inCart = items.some(i => i.product.id === product.id)

  const handleAdd = () => {
    addItem(product)
    setAdding(true)
    toast.success(`${product.name} added`)
    setTimeout(() => setAdding(false), 1500)
  }

  return (
    <Tilt3D max={5} lift={9}>
    <div
      className="rounded-2xl p-5 flex flex-col gap-3 h-full transition-shadow duration-300"
      style={{
        background: '#EDE4CC',
        border: `1px solid ${inCart ? '#968148' : '#D9C99A'}`,
        boxShadow: inCart
          ? '0 0 0 2px rgba(150,129,72,0.25), 0 18px 40px -20px rgba(42,30,8,0.28)'
          : '0 2px 6px -2px rgba(42,30,8,0.08), 0 14px 30px -16px rgba(42,30,8,0.16)',
      }}
    >
      {product.popular && (
        <span
          className="self-start text-xs font-semibold px-2 py-0.5 rounded-full tracking-wide"
          style={{ background: 'rgba(150,129,72,0.12)', color: '#968148', border: '1px solid rgba(150,129,72,0.3)' }}
        >
          Popular
        </span>
      )}
      <div>
        <h3 className="font-semibold text-base mb-1" style={{ color: '#2A1E08' }}>
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: '#7A6535' }}>
          {product.description}
        </p>
      </div>
      {product.minQty && product.minQty > 1 && (
        <p className="text-xs" style={{ color: '#C9B889' }}>
          Minimum: {product.minQty} units
        </p>
      )}
      <div className="flex items-center justify-between mt-auto pt-2">
        <div>
          <p className="text-lg font-bold" style={{ color: '#2A1E08' }}>
            {formatPrice(product.price)}
          </p>
          <p className="text-xs" style={{ color: '#C9B889' }}>
            {product.unit}
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
          style={{
            background: inCart || adding ? 'rgba(150,129,72,0.12)' : 'transparent',
            border: `1px solid ${inCart || adding ? '#968148' : '#D9C99A'}`,
            color: inCart || adding ? '#968148' : '#7A6535',
          }}
        >
          {adding ? <Check size={15} /> : <Plus size={15} />}
          {inCart ? 'Added' : 'Add'}
        </button>
      </div>
    </div>
    </Tilt3D>
  )
}
