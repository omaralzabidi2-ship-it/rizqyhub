import Link from 'next/link'

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">شروط الاستخدام في منصة رزقي هب</h1>
          <p className="text-gray-600 text-lg mb-6">آخر تحديث: ١ يونيو ٢٠٢٦</p>

          <p className="text-gray-700 leading-relaxed mb-6">
            أهلاً بك في منصة رزقي هب. باستخدامك للموقع أو التطبيق أو أي من خدماتنا، فإنك توافق صراحةً على الالتزام بهذه الشروط والأحكام. نهدف من خلالها إلى ضمان بيئة رقمية آمنة، عادلة، ومحفزة للأسر المنتجة والعملاء الكرام، تماشياً مع أنظمة وزارة التجارة وهيئة الاتصالات وتقنية المعلومات في المملكة العربية السعودية.
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ١. الأهلية والتسجيل</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>يجب أن يكون عمرك ١٨ سنة فأكثر لإنشاء حساب أو إجراء عمليات شراء/بيع.</li>
              <li>التسجيل كـ أسرة منتجة يتطلب تقديم بيانات صحيحة، صورة هوية وطنية سارية، ووثيقة الأسرة المنتجة (أو ما يعادلها نظاماً).</li>
              <li>أنت المسؤول الوحيد عن الحفاظ على سرية كلمة مرور حسابك، وجميع الأنشطة التي تتم من خلاله.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٢. طبيعة المنصة ودورنا</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>رزقي هب هي منصة وسيطة تقنية تربط بين الأسر المنتجة والعملاء.</li>
              <li>لا نملك المنتجات المعروضة، ولا نتدخل في تحديد أسعارها، ولا نتحمل مسؤولية التصنيع أو التخزين أو التوصيل المباشر.</li>
              <li>دورنا يقتصر على توفير البنية التحتية الرقمية، أدوات العرض، نظام الدفع الآمن، وآلية التقييم لضمان تجربة موثوقة.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٣. التزامات الأسر المنتجة (البائعين)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">عند الانضمام كبائع، تلتزم بما يلي:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>✅ تقديم منتجات أصلية، آمنة، ومتوافقة مع المواصفات والمقاييس السعودية.</li>
              <li>✅ الالتزام بمواعيد الإنتاج والتسليم المتفق عليها مع العميل.</li>
              <li>✅ الإفصاح الصادق عن مكونات المنتجات، تواريخ الصلاحية، وأي مواد قد تسبب حساسية.</li>
              <li>✅ عدم بيع منتجات ممنوعة نظاماً أو تضر بالصحة العامة.</li>
              <li>✅ الرد على استفسارات العملاء واحترام حقوقهم وفق سياسة الاسترجاع المعتمدة.</li>
              <li>✅ تحمل مسؤولية أي مخالفة نظامية تنتج عن منتجاتك أو ممارساتك التجارية.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٤. التزامات العملاء (المشترين)</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>✅ الالتزام بدفع المبالغ المتفق عليها عند إتمام الطلب.</li>
              <li>✅ تقديم بيانات توصيل صحيحة وقابلة للتواصل.</li>
              <li>✅ عدم إساءة استخدام المنصة، أو نشر محتوى مسيء، أو محاولة التحايل على أنظمة الدفع.</li>
              <li>✅ احترام جهد الأسر المنتجة والالتزام بظروف الإنتاج المنزلي المعقولة.</li>
              <li>✅ الإبلاغ فوراً عن أي منتج غير مطابق للوصف أو تالف عند الاستلام.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٥. الملكية الفكرية</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>جميع عناصر المنصة (الشعار، التصميم، النصوص، البرمجيات، وقواعد البيانات) هي ملكية فكرية حصرية لمنصة رزقي هب ومحمية نظاماً.</li>
              <li>تحتفظ الأسر المنتجة بحقوق الملكية الفكرية لمنتجاتها وصورها، وتمنح المنصة ترخيصاً غير حصري لعرضها وتسويقها داخل إطار المنصة فقط.</li>
              <li>يُحظر نسخ، تعديل، أو إعادة نشر أي محتوى من المنصة دون إذن خطي مسبق.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٦. المحظورات والسلوك غير المسموح</h2>
            <p className="text-gray-700 leading-relaxed mb-3">يُحظر بشكل قاطع:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>بيع منتجات مقلدة، مغشوشة، أو منتهية الصلاحية.</li>
              <li>🚫 التحايل على عمولات المنصة أو محاولة إتمام الصفقات خارجها.</li>
              <li>🚫 نشر بيانات شخصية للآخرين دون موافقتهم، أو استخدام المنصة لأغراض احتيالية.</li>
              <li>إدخال برمجيات خبيثة، أو محاولة اختراق أنظمة المنصة أو حسابات المستخدمين.</li>
              <li>🚫 أي نشاط يتعارض مع الأنظمة السعودية أو القيم المجتمعية.</li>
            </ul>
            <p className="text-gray-700 font-semibold mt-3">يحق للمنصة تعليق أو إنهاء الحسابات المخالفة فوراً دون إشعار مسبق، مع الاحتفاظ بحق المطالبة بالتعويض نظاماً.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٧. المدفوعات، الأسعار، والرسوم</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>الأسعار تحددها الأسر المنتجة بشكل مستقل. المنصة لا تتدخل في التسعير.</li>
              <li>تفرض المنصة عمولة خدمة رمزية تُخصم فقط عند إتمام عملية بيع ناجحة وتأكيد الاستلام. لا توجد رسوم اشتراك أو تسجيل.</li>
              <li>جميع المعاملات المالية مؤمنة عبر بوابات دفع مرخصة من مؤسسة النقد السعودي (ساما).</li>
              <li>في حال فشل الدفع أو رفض الاستلام، يحق للمنصة تعويض الأسرة المنتجة عن التكاليف الفعلية وفق سياسة واضحة.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٨. إخلاء المسؤولية والحد من المسؤولية</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>تقدم المنصة خدماتها "كما هي" و"كما تتوفر". لا نضمن استمرارية الخدمة دون انقطاع تقني طارئ.</li>
              <li>لا نتحمل مسؤولية أي أضرار غير مباشرة، خسارة أرباح، أو تأخير ناتج عن ظروف خارجة عن إرادتنا (كوارث طبيعية، أعطال في شبكات الاتصال، أو إخلال من طرف ثالث).</li>
              <li>تقتصر مسؤوليتنا المالية تجاه أي طرف على العمولة المحصلة فعلياً من العملية محل النزاع.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٩. تعديل الشروط وإنهاء الخدمة</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>نحتفظ بحق تعديل هذه الشروط في أي وقت لمواكبة التطورات التقنية أو المتطلبات النظامية. سيتم إشعارك بالتغييرات الجوهريّة عبر البريد الإلكتروني أو إشعار داخل المنصة.</li>
              <li>استمرارك في استخدام المنصة بعد التعديل يعني موافقتك الضمنية على الشروط الجديدة.</li>
              <li>يحق لك إغلاق حسابك في أي وقت. ويحق لنا تعليق الحسابات المخالفة أو غير النشطة لفترات طويلة وفق سياساتنا الداخلية.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ١٠. القانون الحاكم وحل النزاعات</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>تخضع هذه الشروط وتفسر وفقاً لأنظمة المملكة العربية السعودية، وتحديداً نظام التجارة الإلكترونية ولائحة حماية المستهلك.</li>
              <li>نسعى لحل أي نزاع ودياً عبر فريق الدعم خلال ١٥ يوماً. في حال عدم الوصول لحل، يختص القضاء السعودي بالنظر في النزاع.</li>
              <li>نلتزم بآلية التبليغ عن المخالفات التجارية عبر القنوات الرسمية المعتمدة من وزارة التجارة.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ١١. التواصل الرسمي</h2>
            <p className="text-gray-700 leading-relaxed mb-3">لأي استفسار قانوني، بلاغ مخالفة، أو طلب توضيح بشأن الشروط:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>البريد الإلكتروني: <a href="mailto:omaralzabidi2@gmail.com" className="text-green-700 hover:underline">omaralzabidi2@gmail.com</a></li>
              <li>📞 966551987536</li>
              <li>📍 العنوان: المدينة المنورة، المملكة العربية السعودية</li>
            </ul>
            <p className="text-gray-700 font-semibold mt-3">نرد على الاستفسارات القانونية خلال ٤٨ ساعة عمل.</p>
          </section>

          <div className="mt-8 text-center">
            <Link href="/" className="btn-primary inline-flex items-center justify-center px-6 py-3">العودة للصفحة الرئيسية</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
