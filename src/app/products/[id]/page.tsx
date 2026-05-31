// src/app/products/[id]/page.tsx
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AddToCartButton from '@/components/AddToCartButton'

// إعداد الاتصال بقاعدة البيانات
const adapter = new PrismaPg(process.env.DATABASE_URL!)
const prisma = new PrismaClient({ adapter })

// ✅ التصحيح: params يجب أن يكون Promise في Next.js 15/16
export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params
  const { id } = params

  // جلب بيانات المنتج
  const product = await prisma.product.findUnique({
    where: { id: id }, // ✅ الآن id متاح بشكل صحيح
    include: {
      category: true,
      producer: {
        select: {
          user: { select: { fullName: true } },
          userId: true,
          pickupCity: true,
          pickupDistrict: true
        }
      },
    },
  })

  // إذا لم يتم العثور على المنتج، أظهر صفحة 404
  if (!product) {
    notFound()
  }

  const imageUrl = product.images?.[0] || '/images/placeholder-product.jpg'
  const producerName = product.producer?.user?.fullName || 'أسرة منتجة'

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* زر العودة */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-900 font-medium transition-colors">
            <span className="ml-2">←</span> العودة للمتجر
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* قسم الصورة */}
            <div className="bg-gray-100 p-8 flex items-center justify-center min-h-[400px]">
              {/* ✅ تم حذف onError لأنه غير مدعوم في Server Components */}
              <Image
                src={imageUrl}
                alt={product.title}
                width={640}
                height={640}
                className="h-auto max-w-full rounded-2xl object-contain shadow-lg"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>

            {/* قسم المعلومات */}
            <div className="p-8 md:p-12 flex flex-col">
              
              {/* التصنيف */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  product.category.slug === 'food' ? 'bg-amber-100 text-amber-800' :
                  product.category.slug === 'handicrafts' ? 'bg-rose-100 text-rose-800' :
                  product.category.slug === 'personal_care' ? 'bg-teal-100 text-teal-800' :
                  'bg-violet-100 text-violet-800'
                }`}>
                  {product.category.name}
                </span>
                {product.isOrganic && (
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold"> عضوي</span>
                )}
              </div>

              {/* العنوان */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>

              {/* الوصف */}
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">{product.description}</p>

              {/* معلومات الأسرة المنتجة */}
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-8 flex items-start gap-3">
                <span className="text-2xl">🏠</span>
                <div>
                  <p className="text-sm text-green-800 font-bold mb-1">من إنتاج: {producerName}</p>
                  {product.producer?.pickupCity && (
                    <p className="text-sm text-gray-600">📍 {product.producer.pickupCity} - {product.producer.pickupDistrict || 'المملكة'}</p>
                  )}
                </div>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">السعر شامل الضريبة</p>
                    <p className="text-4xl font-bold text-green-700">{product.price.toFixed(2)} <span className="text-lg font-normal">ر.س</span></p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <AddToCartButton
                      product={{
                        id: product.id,
                        title: product.title,
                        price: Number(product.price),
                        images: product.images,
                      }}
                    />
                    <Link
                      href={`/messages?receiverId=${product.producer.userId}&productId=${product.id}`}
                      className="btn-outline inline-flex items-center justify-center"
                    >
                      مراسلة الأسرة المنتجة
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
