import Link from 'next/link'
import Image from 'next/image'
import AddToCartButton from './AddToCartButton'

export type ProductCardItem = {
  id: string
  title: string
  description?: string | null
  price: number | string | { toString: () => string }
  stock: number
  images?: string[] | null
  isOrganic?: boolean
  category?: {
    slug: string
    name: string
  } | null
  producer?: {
    user?: {
      fullName?: string | null
    } | null
  } | null
  _count?: {
    orderItems?: number
  }
}

const categoryStyles: Record<string, { icon: string; color: string }> = {
  food: { icon: '🍯', color: 'bg-amber-100 text-amber-800' },
  handicrafts: { icon: '🎨', color: 'bg-rose-100 text-rose-800' },
  personal_care: { icon: '🧴', color: 'bg-teal-100 text-teal-800' },
  sewing: { icon: '🧵', color: 'bg-violet-100 text-violet-800' },
}

function formatPrice(price: ProductCardItem['price']) {
  const num =
    typeof price === 'string'
      ? parseFloat(price)
      : typeof price === 'number'
        ? price
        : parseFloat(price.toString())

  return Number.isNaN(num) ? 0.0.toFixed(2) : num.toFixed(2)
}

function ProductCard({ product }: { product: ProductCardItem }) {
  const imageUrl = product.images?.[0] || '/images/placeholder-product.jpg'
  const producerName = product.producer?.user?.fullName || 'أسرة منتجة'
  const category = product.category?.slug
    ? categoryStyles[product.category.slug]
    : undefined

  return (
    <article className="card group block h-full">
      <Link href={`/products/${product.id}`} className="block overflow-hidden rounded-3xl">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
          {category && (
            <span className={`absolute top-3 right-3 ${category.color} rounded-full px-2 py-1 text-xs font-bold shadow-sm`}>
              {category.icon}
            </span>
          )}
          {product.isOrganic && (
            <span className="absolute top-3 left-3 rounded-full bg-green-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
              🌿 عضوي
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-grow flex-col p-4">
        <Link href={`/products/${product.id}`} className="block transition-colors group-hover:text-green-800">
          <h3 className="font-heading mb-1 line-clamp-2 text-base text-green-800 md:text-lg">
            {product.title}
          </h3>
        </Link>

        <p className="mb-3 text-xs text-gray-500">من: {producerName}</p>

        {typeof product._count?.orderItems === 'number' && product._count.orderItems > 0 && (
          <p className="mb-3 text-xs font-semibold text-amber-700">
            تم طلبه {product._count.orderItems} مرة
          </p>
        )}

        <div className="mt-auto flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-green-800 md:text-xl">
            {formatPrice(product.price)} ر.س
          </span>
          <AddToCartButton
            product={{
              id: product.id,
              title: product.title,
              price: Number(product.price),
              images: product.images,
            }}
          />
        </div>
      </div>
    </article>
  )
}

export default function ProductGrid({ products }: { products: ProductCardItem[] }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 py-12 text-center">
        <p className="text-lg text-gray-600">لا توجد منتجات متاحة حاليًا في هذا القسم.</p>
        <p className="mt-2 text-sm text-gray-500">عد قريبًا لاكتشاف منتجات جديدة من الأسر المنتجة.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
