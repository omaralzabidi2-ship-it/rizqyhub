import Link from 'next/link'

export default function ReportIssuePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">نحن هنا لمساعدتك.. أبلغنا عن أي مشكلة</h1>
          <p className="text-gray-600 text-lg mb-6">نواجهها معاً - فريق الدعم جاهز للاستماع وحل أي تحدٍ يواجهك في رزقي هب</p>

          <section className="mb-8 bg-green-50 p-6 rounded-2xl">
            <p className="text-gray-700 leading-relaxed">
              في رزقي هب، نؤمن أن كل مشكلة هي فرصة للتحسين. سواء كنت عميلاً واجهت صعوبة في الطلب، أو أسرة منتجة تواجه تحدياً تقنياً، فريقنا ملتزم بحل مشكلتك خلال 24 ساعة عمل. اختر نوع المشكلة أدناه وسنوجهك للحل الأسرع.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">🔹 اختر نوع المشكلة للإبلاغ:</h2>
            
            {/* مشاكل الطلبات */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🛍️</span>
                مشاكل متعلقة بالطلبات (للعملاء)
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">منتج غير مطابق للوصف أو الصور</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">تأخر في التوصيل عن الوقت المتفق عليه</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">مشكلة في الدفع أو الخصم المالي</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">طلب مفقود أو لم يصل</p>
                </div>
              </div>
            </div>

            {/* مشاكل الحساب والبيع */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏠</span>
                مشاكل متعلقة بالحساب أو البيع (للأسر المنتجة)
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">صعوبة في رفع المنتجات أو إدارة المخزون</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">مشكلة في استلام الأرباح أو التحويلات البنكية</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">تعليق الحساب أو مشكلة في التوثيق</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">طلبات وهمية أو عملاء غير جادين</p>
                </div>
              </div>
            </div>

            {/* مشاكل تقنية */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💻</span>
                مشاكل تقنية في المنصة
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">خطأ في التسجيل أو تسجيل الدخول</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">الصفحة لا تعمل أو تظهر رسالة خطأ</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">مشكلة في تحميل الصور أو عرض المنتجات</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">تطبيق الجوال لا يعمل بشكل صحيح</p>
                </div>
              </div>
            </div>

            {/* مشاكل الأمان */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                مشاكل الأمان والخصوصية
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">شك في نشاط مشبوه على حسابي</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">استلام رسائل غير مرغوب فيها أو احتيالية</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">قلق حول حماية بياناتي الشخصية</p>
                </div>
              </div>
            </div>

            {/* اقتراحات عامة */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">💬</span>
                اقتراحات أو شكاوى عامة
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">فكرة لتحسين تجربة المنصة</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">شكوى حول تعامل مع مستخدم آخر</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <p className="text-gray-700">ملاحظة على سياسة أو خدمة معينة</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">📝 نموذج الإبلاغ السريع:</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">المعلومات المطلوبة للإبلاغ الفعال:</h3>
              
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-2">نوع الحساب:</p>
                  <p className="text-sm">عميل / أسرة منتجة / زائر</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">نوع المشكلة:</p>
                  <p className="text-sm">اختر من القائمة أعلاه</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">رقم الطلب (إن وجد):</p>
                  <p className="text-sm">مثال: #RZQ-2026-00123</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">وصف مفصل للمشكلة:</p>
                  <p className="text-sm">اشرح ما حدث، متى، وكيف أثر عليك</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">الخطوات التي جربتها لحلها:</p>
                  <p className="text-sm">مثال: أعدت تحميل الصفحة، جربت متصفح آخر...</p>
                </div>
                
                <div>
                  <p className="font-semibold mb-2">مرفقات مساعدة (اختياري لكن مُشجَّع):</p>
                  <p className="text-sm">صور للشاشة، لقطات للخطأ، نسخ من المحادثات</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-bold">💡 نصيحة:</span> كلما كان وصفك أدق وأرفقت صوراً، استطعنا حل مشكلتك أسرع!
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">📞 طرق التواصل مع فريق الدعم:</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 border rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
                <p className="text-gray-700 mb-2">للمشاكل التفصيلية والشكاوى الرسمية</p>
                <a href="mailto:omaralzabidi2@gmail.com" className="text-green-700 hover:underline font-semibold">
                  omaralzabidi2@gmail.com
                </a>
              </div>
              
              <div className="p-6 border rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">رقم الجوال (واتساب)</h3>
                <p className="text-gray-700 mb-2">للتواصل السريع والعاجل</p>
                <a href="https://wa.me/966551987536" target="_blank" rel="noreferrer" className="text-green-700 hover:underline font-semibold">
                  966551987536
                </a>
              </div>

              <div className="p-6 border rounded-2xl md:col-span-2">
                <h3 className="text-lg font-bold text-gray-900 mb-2">ساعات الدعم</h3>
                <div className="text-gray-700 space-y-1">
                  <p>السبت - الخميس: من 9:00 صباحاً إلى 6:00 مساءً</p>
                  <p>الجمعة: من 4:00 مساءً إلى 8:00 مساءً</p>
                  <p>الحد الأقصى للرد: 48 ساعة عمل</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8 bg-green-50 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 نحن نقدّر ملاحظاتك</h3>
            <p className="text-gray-700">
              كل بلاغ أو اقتراح يساعدنا على تطوير المنصة وتقديم خدمة أفضل. شكراً لك على اختيارك رزقي هب!
            </p>
          </section>

          <div className="mt-8 text-center">
            <Link href="/" className="btn-primary inline-flex items-center justify-center px-6 py-3">العودة للصفحة الرئيسية</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
