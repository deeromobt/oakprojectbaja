import Link from 'next/link'
import { getProductsByCategory, categoryInfo, type Category } from '@/lib/products'
import ProductCard from './ProductCard'
import Tilt3D from './Tilt3D'

export default function CategoryPage({ category }: { category: Category }) {
  const products = getProductsByCategory(category)
  const info = categoryInfo[category]

  const crossSellCategories = (info.crossSell ?? []).map((slug) => ({
    slug,
    ...categoryInfo[slug as Category],
  }))

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: '#968148' }}>
            {info.icon} {info.title}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 italic" style={{ color: '#2A1E08' }}>
            {info.subtitle}
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#7A6535' }}>
            {info.description}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Availability note */}
        <div
          className="mt-12 p-5 rounded-2xl text-sm depth-2"
          style={{ background: '#EDE4CC', border: '1px solid #D9C99A', color: '#7A6535' }}
        >
          <strong style={{ color: '#2A1E08' }}>Note:</strong> All prices are in MXN and include delivery and pickup within the Baja California metropolitan area. Events outside the area are subject to a distance surcharge. Prices may vary based on availability and season.
        </div>

        {/* Cross-sell section */}
        {crossSellCategories.length > 0 && (
          <div className="mt-16">
            <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#968148' }}>
              Complete your event
            </p>
            <h2 className="text-2xl font-bold italic mb-8" style={{ color: '#2A1E08' }}>
              The best events combine more than one service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {crossSellCategories.map(({ slug, icon, title, subtitle, description }) => (
                <Tilt3D key={slug} max={5} lift={10} glare>
                <Link
                  href={`/${slug}`}
                  className="group block rounded-2xl p-6 h-full transition-shadow duration-300 depth-1"
                  style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl mt-0.5">{icon}</span>
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#968148' }}>
                        {title}
                      </p>
                      <p className="text-lg font-bold mb-2 group-hover:underline" style={{ color: '#2A1E08' }}>
                        {subtitle}
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: '#7A6535' }}>
                        {description}
                      </p>
                      <p className="mt-4 text-sm font-semibold tracking-wide" style={{ color: '#968148' }}>
                        Browse {title} →
                      </p>
                    </div>
                  </div>
                </Link>
                </Tilt3D>
              ))}
            </div>
          </div>
        )}

        {/* CTA banner */}
        <div
          className="mt-12 rounded-2xl p-8 text-center depth-2"
          style={{ background: '#EDE4CC', border: '1px solid #D9C99A' }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase mb-2" style={{ color: '#968148' }}>
            Ready for your event?
          </p>
          <h3 className="text-2xl font-bold italic mb-3" style={{ color: '#2A1E08' }}>
            Add what you need and request your quote
          </h3>
          <p className="text-sm mb-6" style={{ color: '#7A6535' }}>
            Select the products, tell us your vision, and we'll get back to you in under 2 hours.
          </p>
          <Link
            href="/cotizacion"
            className="btn-gold inline-block px-8 py-3 rounded-full font-semibold text-sm tracking-wide"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
