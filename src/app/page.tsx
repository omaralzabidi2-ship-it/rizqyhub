// src/app/page.tsx
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from '../components/AddToCartButton'
import CartBadge from '../components/CartBadge'

// إنشاء الـ Adapter للاتصال بقاعدة البيانات
const adapter = new PrismaPg(process.env.DATABASE_URL!)

// تمرير الـ adapter لعميل Prisma
const prisma = new PrismaClient({ adapter })

// 🗂️ بيانات الأقسام للعرض
const CATEGORIES = [
  { key: 'food', name: 'المنتجات الغذائية', icon: '🍯', color: 'bg-amber-100 text-amber-800' },
  { key: 'handicrafts', name: 'الحرف اليدوية', icon: '🎨', color: 'bg-rose-100 text-rose-800' },
  { key: 'personal_care', name: 'العناية الشخصية', icon: '🧴', color: 'bg-teal-100 text-teal-800' },
  { key: 'sewing', name: 'الخياطة والتطريز', icon: '🧵', color: 'bg-violet-100 text-violet-800' },
] as const

// 🔧 دالة مساعدة لتنسيق السعر
function formatPrice(price: number | string | { toString: () => string }) {
  const num = typeof price === 'string'
    ? parseFloat(price)
    : typeof price === 'number'
      ? price
      : parseFloat(price.toString())

  return Number.isNaN(num) ? 0.0.toFixed(2) : num.toFixed(2)
}

type HomeProduct = {
  id: string
  title: string
  price: number | string | { toString: () => string }
  images?: string[] | null
  isOrganic: boolean
  producer?: {
    user?: {
      fullName?: string | null
    } | null
  } | null
}

export default async function Home() {
  // جلب المنتجات النشطة والمصدق عليها لكل قسم
  const getProductsByCategory = async (categorySlug: string) => {
    try {
      return await prisma.product.findMany({
        where: {
          category: { slug: categorySlug },
          status: 'APPROVED',
          stock: { gt: 0 },
        },
        include: {
          producer: {
            select: {
              user: { select: { fullName: true } },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
        take: 4, // عرض 4 منتجات لكل قسم
      })
    } catch (error) {
      console.error(`Error fetching ${categorySlug}:`, error)
      return []
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* 🌐 شريط التنقل */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap gap-3">
            
            {/* الشعار */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl">🌟</span>
              <span className="font-heading text-xl font-bold text-green-800 group-hover:text-green-800-dark transition-colors">
                رزقي هب
              </span>
            </Link>

            {/* روابط الأقسام - للجوال */}
            <div className="flex items-center gap-2 flex-wrap md:hidden">
              {CATEGORIES.slice(0, 2).map((cat) => (
                <Link
                  key={cat.key}
                  href={`#section-${cat.key}`}
                  className="btn-primary text-xs py-2 px-3"
                >
                  {cat.icon} {cat.name.split(' ')[0]}
                </Link>
              ))}
              <Link href="/login" className="btn-accent text-xs py-2 px-3">🔑 دخول</Link>
            </div>

            {/* روابط الأقسام - للشاشات الكبيرة */}
            <div className="hidden md:flex items-center gap-2">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.key}
                  href={`#section-${cat.key}`}
                  className="text-green-800 hover:text-green-800-dark font-medium px-4 py-2 rounded-lg hover:bg-earth-100 transition-colors flex items-center gap-1"
                >
                  {cat.icon} {cat.name}
                </Link>
              ))}
            </div>

            {/* أزرار الإجراءات */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <Link href="/register" className="btn-outline text-sm py-2 px-4">
                  📝 تسجيل جديد
                </Link>
                <Link href="/login" className="btn-primary text-sm py-2 px-4">
                  🔑 تسجيل الدخول
                </Link>
              </div>
              <Link href="/cart" className="btn-accent text-sm py-2 px-4 flex items-center gap-2 relative">
                🛒 السلة
                <CartBadge />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 📖 المحتوى الرئيسي */}
      <main className="flex-grow container mx-auto px-4 py-8">
        
        {/* Hero Section */}
        <section className="text-center py-12 md:py-16 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl mb-12 relative overflow-hidden">
          {/* زخرفة خلفية */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-32 h-32 bg-amber-600 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-700 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h1 className="font-heading text-3xl md:text-5xl text-green-800 mb-4 animate-fade-in-up">
              🌟 منصة رزقي هب
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              اكتشف منتجات أصيلة من أسر سعودية منتجة، وأدعم الاقتصاد المحلي بروح التراث والحداثة
            </p>
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link href="#section-food" className="btn-primary">
                🍯 تصفح المنتجات
              </Link>
              <Link href="#contact-info" className="btn-outline inline-flex items-center gap-2">
                📞 تواصل معنا
              </Link>
            </div>
          </div>
        </section>

        {/* أزرار الفلترة السريعة */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Link href="/best-selling" className="btn-primary text-sm">🔥 الأكثر مبيعاً</Link>
          <Link href="/latest" className="btn-outline text-sm">🆕 الأحدث</Link>
          <Link href="/lowest-price" className="btn-outline text-sm">💰 الأقل سعراً</Link>
          <Link href="/organic-products" className="btn-outline text-sm">🌿 منتجات عضوية</Link>
        </div>

        {/* عرض الأقسام والمنتجات */}
        {CATEGORIES.map(async (category) => {
          const products = await getProductsByCategory(category.key)
          
          return (
            <section 
              key={category.key} 
              id={`section-${category.key}`}
              className="mb-16 scroll-mt-24"
            >
              {/* عنوان القسم */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200">
                <h2 className="section-title mb-0">
                  <span className={`${category.color} w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm`}>
                    {category.icon}
                  </span>
                  {category.name}
                </h2>
                <Link 
                  href={`/categories/${category.key}`}
                  className="text-amber-600 font-bold hover:underline flex items-center gap-1"
                >
                  عرض الكل ←
                </Link>
              </div>

              {/* شبكة المنتجات */}
              {products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {products.map((product: HomeProduct) => (
                    <ProductCard 
                      key={product.id}
                      product={product}
                      category={category}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-earth-300">
                  <p className="text-earth-500 text-lg">📦 لا توجد منتجات في هذا القسم حالياً</p>
                  <p className="text-earth-400 text-sm mt-2">عد قريباً لاكتشاف الجديد!</p>
                </div>
              )}
            </section>
          )
        })}

        {/* قسم "لماذا رزقي هب" */}
        <section className="mt-20 py-12 bg-white rounded-3xl shadow-soft border border-gray-200">
          <h2 className="section-title justify-center mb-10">✨ لماذا تختار رزقي هب؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {[
              { icon: '🤝', title: 'دعم مباشر', desc: 'تواصل مباشر مع الأسر المنتجة بدون وسطاء' },
              { icon: '✅', title: 'جودة مضمونة', desc: 'جميع المنتجات مراجعة ومصدق عليها' },
              { icon: '🚚', title: 'توصيل موثوق', desc: 'خيارات توصيل مرنة تناسب احتياجاتك' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-heading text-lg text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 🦶 تذييل الصفحة */}
      <footer className="bg-green-700 text-white py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* الشعار والوصف */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌟</span>
                <span className="font-heading text-xl font-bold">رزقي هب</span>
              </div>
              <p className="text-earth-200 text-sm leading-relaxed">
                منصة سعودية تهدف لتمكين الأسر المنتجة وعرض منتجاتهم الأصيلة للعملاء في جميع أنحاء المملكة.
              </p>
            </div>

            {/* روابط سريعة */}
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-earth-200 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">عن المنصة</Link></li>
                <li><Link href="/producers" className="hover:text-white transition-colors">الأسر المنتجة</Link></li>
                <li><Link href="#contact-info" className="hover:text-white transition-colors">تواصل معنا</Link></li>
              </ul>
            </div>

            {/* الدعم */}
            <div>
              <h4 className="font-bold mb-4">الدعم</h4>
              <ul className="space-y-2 text-earth-200 text-sm">
                <li><Link href="/faq" className="hover:text-white transition-colors">الأسئلة الشائعة</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">شروط الاستخدام</Link></li>
                <li><Link href="/report" className="hover:text-white transition-colors">الإبلاغ عن مشكلة</Link></li>
              </ul>
              <div id="contact-info" className="mt-6 text-earth-200 text-sm space-y-2 scroll-mt-24">
                <p className="font-semibold text-white">للتواصل</p>
                <p>جوال: <a href="https://wa.me/966551987536" target="_blank" rel="noreferrer" className="underline hover:text-white">966551987536</a></p>
                <p>
                  بريد إلكتروني:{' '}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=omaralzabidi2@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-white"
                  >
                    omaralzabidi2@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-6 text-center text-earth-300 text-sm">
            <p>© 2026 رزقي هب - جميع الحقوق محفوظة 🇸🇦</p>
            <p className="mt-1">منصة لدعم وتمكين الأسر المنتجة في المملكة العربية السعودية</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// 🧩 مكون بطاقة المنتج (مضمن للسهولة)
function ProductCard({ product, category }: {
  product: HomeProduct,
  category: (typeof CATEGORIES)[number] 
}) {
  const imageUrl = product.images?.[0] || '/images/placeholder-product.jpg'
  const producerName = product.producer?.user?.fullName || 'أسرة منتجة'

  return (
    <article className="card group block h-full">
      <Link href={`/products/${product.id}`} className="block overflow-hidden rounded-3xl">
        {/* صورة المنتج */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover"
            loading="lazy"
          />
          {/* شارة القسم */}
        <span className={`absolute top-3 right-3 ${category.color} text-xs font-bold px-2 py-1 rounded-full shadow-sm`}>
          {category.icon}
        </span>
        {/* شارة "عضوي" إذا وجدت */}
        {product.isOrganic && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            🌿 عضوي
          </span>
        )}
      </div>
      </Link>

      {/* معلومات المنتج */}
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/products/${product.id}`} className="group-hover:text-green-800-dark transition-colors block">
          <h3 className="font-heading text-base md:text-lg text-green-800 mb-1 line-clamp-2">
            {product.title}
          </h3>
        </Link>
        
        <p className="text-earth-500 text-xs mb-3">من: {producerName}</p>

        {/* السعر وزر الإضافة */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-green-800">
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
