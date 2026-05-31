import Link from 'next/link'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">نساعدك على فهم منصة رزقي هب بكل سهولة</h1>
          <p className="text-gray-600 text-lg mb-6">جمعنا هنا لأهم الأسئلة التي تصلنا من عملائنا الكرام والأسر المنتجة. إذا لم تجد إجابتك، لا تتردد في التواصل معنا مباشرة!</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">🛍️ للعملاء (المشتري)</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">1. كيف أطلب منتجاً من المنصة؟</h3>
                <p>تصفح الأقسام، اختر المنتج، أضفه للسلة، ثم اتبع خطوات إتمام الطلب. ستصلك رسالة تأكيد عبر البريد أو الجوال فور استلام طلبك.</p>
              </div>
              <div>
                <h3 className="font-semibold">2. هل المنتجات أصلية وآمنة للاستهلاك؟</h3>
                <p>نعم، جميع المنتجات مقدمة من أسر سعودية منتجة مُوثقة. نلتزم بمعايير الجودة والنظافة، ونشجعك دائماً على قراءة وصف المنتج وتاريخ الصلاحية (للمواد الغذائية).</p>
              </div>
              <div>
                <h3 className="font-semibold">3. كيف أتابع حالة طلبي؟</h3>
                <p>بعد الطلب، ستتمكن من متابعة حالة طلبك عبر صفحة "طلباتي" في حسابك، أو عبر الإشعارات التي نرسلها لك عند كل تحديث.</p>
              </div>
              <div>
                <h3 className="font-semibold">4. ما هي طرق الدفع المتاحة؟</h3>
                <p>نوفر خيارات مرنة تناسب الجميع: الدفع عند الاستلام، التحويل البنكي، والمحافظ الرقمية (مدى، Apple Pay، STC Pay).</p>
              </div>
              <div>
                <h3 className="font-semibold">5. هل يمكنني استرجاع أو استبدال المنتج؟</h3>
                <p>نعم، يمكنك طلب الاسترجاع أو الاستبدال خلال 48 ساعة من استلام الطلب، بشرط أن يكون المنتج غير مستخدم وبعبوته الأصلية (لا ينطبق على المنتجات الغذائية القابلة للتلف).</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">🏠 للأسر المنتجة (البائع)</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">6. كيف أنضم كمنصة كأسرة منتجة؟</h3>
                <p>سجلي حساب جديد، اختاري نوع الحساب "أسرة منتجة"، وارفعي صورة الهوية ووثيقة الأسرة المنتجة (إن وجدت). سيتم مراجعة طلبك خلال 24-48 ساعة.</p>
              </div>
              <div>
                <h3 className="font-semibold">7. هل هناك رسوم أو عمولات على المنصة؟</h3>
                <p>نعمل بشفافية تامة: عمولة رمزية جداً على كل عملية بيع ناجحة فقط (لا توجد اشتراكات شهرية أو رسوم تسجيل). هدفنا تمكينك لا تحميلك الأعباء.</p>
              </div>
              <div>
                <h3 className="font-semibold">8. كيف أستلم أرباحي؟</h3>
                <p>بعد تسليم الطلب بنجاح، يتم تحويل المبلغ إلى حسابك البنكي خلال 3-5 أيام عمل. يمكنك متابعة رصيدك وأرباحك من لوحة التحكم الخاصة بك.</p>
              </div>
              <div>
                <h3 className="font-semibold">9. ما هي مسؤولياتي كبائعة على المنصة؟</h3>
                <p>ضمان جودة المنتج، الالتزام بمواعيد التسليم، الرد على استفسارات العملاء، وتحديث حالة الطلبات بانتظام. نحن ندعمك بكل خطوة.</p>
              </div>
              <div>
                <h3 className="font-semibold">10. هل تقدمون دعماً تسويقياً أو تدريبياً؟</h3>
                <p>نعم! نوفر ورش عمل شهرية، نصائح للتصوير والعرض، ومجتمعاً تشاركين فيه الخبرات مع أسر منتجة ناجحة.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">📦 الشحن والتوصيل</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">11. كيف يتم توصيل الطلبات؟</h3>
                <p>يعتمد ذلك على اتفاقك مع العميل أو سياسة المنتج. بعض الأسر توصّل بنفسها، والبعض الآخر يستخدم خدمات توصيل موثوقة نرشحها لكم.</p>
              </div>
              <div>
                <h3 className="font-semibold">12. من يتحمل تكلفة الشحن؟</h3>
                <p>تختلف حسب المنتج والمنطقة. غالباً ما تكون مدمجة في السعر، أو يدفعها العميل، وسنوضح ذلك بوضوح قبل إتمام الطلب.</p>
              </div>
              <div>
                <h3 className="font-semibold">13. ما مدة التوصيل المتوقعة؟</h3>
                <p>عادة بين 2 إلى 5 أيام عمل حسب المدينة والبعد الجغرافي. سيتم توضيح المدة المتوقعة لكل منتج في صفحته.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">🔒 الأمان والخصوصية</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">14. هل بياناتي آمنة على المنصة؟</h3>
                <p>بالتأكيد. نلتزم بأعلى معايير حماية البيانات وفق نظام حماية البيانات الشخصية السعودي (PDPL). لا نشارك بياناتك مع أي طرف ثالث أبداً.</p>
              </div>
              <div>
                <h3 className="font-semibold">15. كيف أثق في الأسر المنتجة؟</h3>
                <p>كل أسرة تمر بمرحلة تحقق وتوثيق. بالإضافة إلى نظام التقييمات والمراجعات من العملاء السابقين، مما يضمن لك تجربة شراء آمنة.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">🛠️ الدعم والمساعدة</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">16. كيف أتواصل مع فريق الدعم؟</h3>
                <p>عبر زر "تواصل معنا" في أسفل الموقع، أو عبر الواتساب، أو البريد الإلكتروني. نرد خلال ساعات العمل الرسمية (9 ص - 6 م).</p>
              </div>
              <div>
                <h3 className="font-semibold">17. ماذا أفعل إذا واجهت مشكلة في الطلب؟</h3>
                <p>تواصلي معنا فوراً عبر الدعم، وسنتولى mediation بينك وبين الأسرة المنتجة لإيجاد حل عادل وسريع خلال 24 ساعة.</p>
              </div>
            </div>
          </section>

          <div className="text-center mt-8">
            <Link href="/" className="btn-primary inline-flex items-center justify-center px-6 py-3">العودة للصفحة الرئيسية</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
