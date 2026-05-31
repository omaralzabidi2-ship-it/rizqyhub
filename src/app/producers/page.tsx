import Link from 'next/link'

export default function ProducersPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">أسرتك المنتجة.. شريك نجاحنا في رزقي هب</h1>
          <p className="text-gray-600 text-lg mb-6">Your Productive Family.. Our Success Partner at Rizqy Hub</p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">فقرة الافتتاح</h2>
            <p className="text-gray-700 leading-relaxed">هل تمتلكين مهارة في الطبخ، الخياطة، الحرف اليدوية، أو أي منتج منزلي مميز؟ منصة رزقي هب تفتح لكِ أبواب النجاح. نحن هنا لتحويل هوايتك إلى مشروع ناجح، ومنتجاتك إلى مصدر دخل مستدام.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">لماذا تنضمين إلى رزقي هب؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-2xl">
                <div className="text-2xl mb-2">📈</div>
                <h3 className="font-bold">وصول أوسع لعملائك</h3>
                <p className="text-gray-600">لا تكتفي بالزبائن المحليين. منصتنا تصلك بآلاف العملاء في جميع أنحاء المملكة الذين يبحثون عن منتجات أصيلة.</p>
              </div>

              <div className="p-4 border rounded-2xl">
                <div className="text-2xl mb-2">💰</div>
                <h3 className="font-bold">دخل إضافي بدون رأس مال كبير</h3>
                <p className="text-gray-600">ابدئي من منزلك، بمعدات بسيطة، ووصّلي منتجاتك لآلاف المنازل. نحن نوفر لكِ المنصة، التسويق، والدعم.</p>
              </div>

              <div className="p-4 border rounded-2xl">
                <div className="text-2xl mb-2">🎓</div>
                <h3 className="font-bold">دعم وتدريب مستمر</h3>
                <p className="text-gray-600">نقدم ورش عمل، نصائح تسويقية، ودعم فني لمساعدتك في تطوير منتجاتك وزيادة مبيعاتك.</p>
              </div>

              <div className="p-4 border rounded-2xl">
                <div className="text-2xl mb-2">🏆</div>
                <h3 className="font-bold">شهادة موثوقة واعتماد رسمي</h3>
                <p className="text-gray-600">بعد التسجيل والمراجعة، تحصلين على شهادة 'أسرة منتجة معتمدة' تزيد ثقة العملاء بمنتجاتك.</p>
              </div>

              <div className="p-4 border rounded-2xl">
                <div className="text-2xl mb-2">🤝</div>
                <h3 className="font-bold">مجتمع داعم ومتعاون</h3>
                <p className="text-gray-600">انضمي لمجتمع من الأسر المنتجة الناجحة، تشاركي الخبرات، وكوني جزءاً من حركة التمكين الاقتصادي.</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">كيف تبدئين؟</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>الخطوة 1:</strong> سجلي في المنصة — املئي نموذج التسجيل البسيط وارفعي صورة الهوية ووثيقة الأسرة المنتجة (إن وجدت).</li>
              <li><strong>الخطوة 2:</strong> أضيفي منتجاتك — بعد الموافقة، يمكنك إضافة منتجاتك مع الصور، الوصف، والأسعار بسهولة.</li>
              <li><strong>الخطوة 3:</strong> استقبلي الطلبات — عندما يشتري عميل منتجك، ستتلقين إشعاراً فوراً لتبدأي التحضير والتوصيل.</li>
              <li><strong>الخطوة 4:</strong> نمّي مشروعك — مع زيادة المبيعات، يمكنك إضافة منتجات جديدة وتطوير مشروعك المنزلي.</li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">شروط الانضمام</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>✅ أن تكوني سعودية الجنسية أو مقيمة</li>
              <li>✅ امتلاك مهارة أو منتج منزلي (غذائي، حرفي، خياطة، عناية شخصية)</li>
              <li>✅ الالتزام بالجودة والنظافة في الإنتاج</li>
              <li>✅ توفر وثيقة الأسرة المنتجة (اختياري في البداية، إلزامي لاحقاً)</li>
              <li>✅ الالتزام بمواعيد التسليم المتفق عليها</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">قصص نجاح ملهمة</h2>
            <blockquote className="border-l-4 border-green-200 pl-4 italic text-gray-700 mb-2">"بدأتُ ببيع التمر المحشي في حينا، واليوم أخدم أكثر من 200 عميل في الرياض!" — أم محمد، غذاء</blockquote>
            <blockquote className="border-l-4 border-green-200 pl-4 italic text-gray-700">"حرفتي في التطريز كانت هواية، والآن أصبحت مصدر دخلي الأساسي." — فاطمة، حرف يدوية</blockquote>
          </section>

          <section className="mb-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">دعوة للعمل</h2>
            <p className="text-gray-700 mb-4">لا تنتظري أكثر.. حلمك يبدأ من هنا! انضمي اليوم لأكثر من 500 أسرة منتجة ناجحة على منصة رزقي هب.</p>
            <div className="flex justify-center gap-4">
              <Link href="/register" className="btn-primary inline-block px-6 py-3">انضمي الآن</Link>
              <Link href="/" className="btn-outline inline-block px-6 py-3">تصفّحي المنتجات</Link>
            </div>
          </section>
          <div className="mt-8 text-center">
            <Link href="/" className="btn-outline inline-flex items-center justify-center px-6 py-3">العودة للصفحة الرئيسية</Link>
          </div>

        </div>
      </div>
    </div>
  )
}
