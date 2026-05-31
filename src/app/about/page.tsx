import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">رزقي هب.. حيث تلتقي أصالة الإنتاج بفرص التمكين</h1>
          <p className="text-gray-600 text-lg mb-6">Rizqy Hub.. Where Authentic Production Meets Opportunity</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">فقرة الافتتاح</h2>
            <p className="text-gray-700 leading-relaxed">في كل منزل سعودي، توجد قصة إبداع تنتظر أن تُروى. منصة رزقي هب ليست مجرد متجر إلكتروني، بل هي حركة وطنية تهدف إلى اكتشاف هذه القصص، دعمها، وإيصالها لكل بيت في المملكة. نحن نؤمن بأن قوة الاقتصاد المحلي تبدأ من إبداع الأسر.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">لماذا تختارنا؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-2xl">
                <div className="text-2xl mb-2">🤝</div>
                <h3 className="font-bold">دعم مباشر وبدون وساطة</h3>
                <p className="text-gray-600">نربطك مباشرة بالأسرة المنتجة. عندما تشتري من رزقي هب، أنت تدعم جهود أمهات وشباب سعوديين بشكل مباشر.</p>
              </div>

              <div className="p-4 border rounded-2xl">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-bold">جودة مضمونة وموثوقة</h3>
                <p className="text-gray-600">كل منتج يمر بمرحلة فحص وتوثيق لضمان أنه يستحق اسم 'منتج سعودي أصيل'. راحتكم وثقتكم هي أولويتنا.</p>
              </div>

              <div className="p-4 border rounded-2xl">
                <div className="text-2xl mb-2">🇦</div>
                <h3 className="font-bold">هوية سعودية فخر</h3>
                <p className="text-gray-600">نفتخر بتسليط الضوء على الحرف اليدوية التراثية، المنتجات الغذائية العضوية، والابتكارات المحلية التي تليق بالمملكة.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">رسالتنا ورؤيتنا</h2>
            <p className="text-gray-700 mb-2"><strong>رؤيتنا:</strong> أن نكون المنصة الأولى والأكثر ثقة للأسر المنتجة في المملكة العربية السعودية.</p>
            <p className="text-gray-700"><strong>رسالتنا:</strong> تمكين الأسر السعودية من تحويل هواياتها ومهاراتها إلى مصادر دخل مستدامة، من خلال توفير بيئة رقمية آمنة وسهلة.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">انضم أو تسوق الآن</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-2xl text-center">
                <h3 className="font-bold mb-2">عميلاً يبحث عن الأصالة</h3>
                <p className="text-gray-600 mb-4">تصفح منتجاتنا واختر ما يناسبك.</p>
                <Link href="/" className="btn-primary inline-block">تصفّح المنتجات</Link>
              </div>

              <div className="p-4 border rounded-2xl text-center">
                <h3 className="font-bold mb-2">أسرة منتجة طموحة</h3>
                <p className="text-gray-600 mb-4">انضم إلينا اليوم وابدأ رحلتك نحو النجاح.</p>
                <Link href="/register" className="btn-outline inline-block">انضم الآن</Link>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/" className="btn-outline inline-flex items-center justify-center px-6 py-3">العودة للصفحة الرئيسية</Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
