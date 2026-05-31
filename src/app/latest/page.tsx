import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'
import { prisma } from '@/lib/prisma'

export default async function LatestProductsPage() {
  const products = await prisma.product.findMany({
    where: {
      status: 'APPROVED',
      stock: { gt: 0 },
    },
    include: {
      category: { select: { slug: true, name: true } },
      producer: {
        select: {
          user: { select: { fullName: true } },
        },
      },
    },
    orderBy: { createdAt: 'desc' },
    take: 24,
  })

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-bold text-green-700">وصل حديثًا</p>
          <h1 className="mb-4 text-3xl font-bold text-green-800 md:text-4xl">الأحدث</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-600">
            أحدث المنتجات المعتمدة في رزقي هب، مرتبة من الأحدث إلى الأقدم حتى تتابع كل جديد من الأسر المنتجة أولًا بأول.
          </p>
        </section>

        <ProductGrid products={products} />

        <div className="mt-10 text-center">
          <Link href="/" className="btn-outline inline-flex items-center justify-center">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </main>
  )
}
