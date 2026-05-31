import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">سياسة الخصوصية في منصة رزقي هب</h1>
          <p className="text-gray-600 text-lg mb-6">آخر تحديث: ١ يونيو ٢٠٢٦</p>

          <p className="text-gray-700 leading-relaxed mb-6">
            نحن في منصة رزقي هب نؤمن بأن خصوصيتك وبياناتك الشخصية هي أمانة نلتزم بحمايتها بأعلى معايير الأمان والشفافية. تم إعداد هذه السياسة لتوضيح كيفية جمعنا، استخدامنا، وحماية بياناتك عند استخدامك للمنصة، وذلك تماشياً مع نظام حماية البيانات الشخصية في المملكة العربية السعودية.
          </p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ١. البيانات التي نجمعها</h2>
            <p className="text-gray-700 leading-relaxed mb-3">نجمع فقط البيانات الضرورية لتقديم خدماتنا وتحسين تجربتك:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>بيانات الحساب: الاسم، رقم الجوال، البريد الإلكتروني، كلمة المرور (مشفرة).</li>
              <li>بيانات العنوان والشحن: المدينة، الحي، العنوان التفصيلي، ورقم المبنى (لضمان وصول الطلبات).</li>
              <li>بيانات الأسر المنتجة: صورة الهوية الوطنية، وثيقة الأسرة المنتجة، البيانات البنكية (للتحويلات)، ومعلومات المنتجات.</li>
              <li>بيانات المعاملات: سجل الطلبات، طرق الدفع، ومبالغ الفواتير.</li>
              <li>بيانات تقنية تلقائية: عنوان IP، نوع المتصفح، نظام التشغيل، وسجل التصفح داخل المنصة لتحسين الأداء.</li>
            </ul>
            <p className="text-gray-700 font-semibold mt-3">⚠️ ملاحظة هامة: لا نقوم بتخزين بيانات البطاقات البنكية الكاملة. جميع عمليات الدفع تتم عبر بوابات دفع معتمدة وآمنة (مثل مدى، Apple Pay، والتحويلات البنكية المباشرة).</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٢. كيف نستخدم بياناتك؟</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>✅ إتمام طلباتك ومعالجتها بدقة وسرعة.</li>
              <li>✅ التواصل معك بخصوص حالة الطلب، التحديثات، أو الدعم الفني.</li>
              <li>✅ تمكين الأسر المنتجة من استلام طلبات عملائهم وتحويل الأرباح.</li>
              <li>✅ تحسين تجربة المستخدم، تطوير الميزات، وإصلاح الأخطاء التقنية.</li>
              <li>✅ الامتثال للأنظمة واللوائح السعودية الرسمية عند الطلب.</li>
              <li>✅ إرسال إشعارات تسويقية فقط إذا وافقت عليها صراحةً (يمكنك إلغاء الاشتراك في أي وقت).</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٣. مشاركة البيانات مع أطراف ثالثة</h2>
            <p className="text-gray-700 leading-relaxed mb-3">نحن لا نبيع، نؤجر، أو نشارك بياناتك الشخصية مع أي طرف ثالث لأغراض تجارية. قد نشارك بيانات محدودة فقط في الحالات التالية:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>🔸 مع الأسر المنتجة: فقط بيانات التوصيل الضرورية لتنفيذ طلبك (الاسم، الهاتف، العنوان).</li>
              <li>🔸 مقدمي الخدمات: شركات الشحن، بوابات الدفع، وموفري الاستضافة الآمنة، وهم ملتزمون باتفاقيات سرية صارمة.</li>
              <li>الجهات النظامية: عند وجود طلب رسمي من هيئة الاتصالات وتقنية المعلومات، وزارة التجارة، أو أي جهة قضائية مختصة.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٤. كيف نحمي بياناتك؟</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>🔒 تشفير البيانات أثناء النقل (SSL/TLS) وعند التخزين.</li>
              <li>🔒 صلاحيات وصول محدودة للموظفين المعنيين فقط.</li>
              <li>🔒 مراقبة أمنية مستمرة وكشف مبكر عن أي أنشطة مشبوهة.</li>
              <li>نسخ احتياطي دوري وآمن للبيانات.</li>
              <li>🔒 تدريب فريقنا على معايير حماية الخصوصية والامتثال للنظام السعودي.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٥. حقوقك كمستخدم (حسب نظام PDPL)</h2>
            <p className="text-gray-700 leading-relaxed mb-3">تمنحك الأنظمة السعودية الحقوق التالية، ويمكنك ممارستها عبر الإعدادات أو التواصل معنا:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>الوصول: طلب نسخة من بياناتك الشخصية المخزنة لدينا.</li>
              <li>✏️ التصحيح: تحديث أو تعديل بياناتك غير الدقيقة.</li>
              <li>🗑️ الحذف: طلب حذف بياناتك عند إغلاق الحساب أو انتهاء الغرض من جمعها.</li>
              <li>🚫 سحب الموافقة: إيقاف استخدام بياناتك لأغراض تسويقية أو تحليلية في أي وقت.</li>
              <li>📝 الاعتراض: الاعتراض على معالجة بياناتك في حالات محددة نظاماً.</li>
            </ul>
            <p className="text-gray-700 font-semibold mt-3">نلتزم بالرد على طلباتك خلال ١٥ يوماً عمل كحد أقصى.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">٦. ملفات الارتباط (Cookies) والتقنيات المماثلة</h2>
            <p className="text-gray-700 leading-relaxed">نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح، تذكر تفضيلاتك، وتحليل أداء المنصة. يمكنك التحكم بها عبر إعدادات متصفحك. استمرارك في استخدام المنصة يعني موافقتك على استخدامنا لهذه التقنيات ضمن الحدود النظامية.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٧. تحديث سياسة الخصوصية</h2>
            <p className="text-gray-700 leading-relaxed">قد نقوم بتحديث هذه السياسة بين الحين والآخر لمواكبة التطورات التقنية أو المتطلبات النظامية. سنُعلمك بأي تغيير جوهري عبر إشعار في المنصة أو بريدك الإلكتروني المسجل. نوصي بمراجعة هذه الصفحة دورياً.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">🔹 ٨. التواصل معنا بخصوص الخصوصية</h2>
            <p className="text-gray-700 leading-relaxed mb-3">لأي استفسار، طلب ممارسة حقوقك، أو الإبلاغ عن مخاوف تتعلق بالبيانات، يمكنك التواصل مع فريق حماية البيانات لدينا عبر:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>البريد الإلكتروني: <a href="mailto:omaralzabidi2@gmail.com" className="text-green-700 hover:underline">omaralzabidi2@gmail.com</a></li>
              <li>📞 966551987536</li>
              <li>📍 العنوان: المدينة المنورة، المملكة العربية السعودية</li>
            </ul>
            <p className="text-gray-700 font-semibold mt-3">نلتزم بالرد على جميع الاستفسارات خلال ٤٨ ساعة عمل.</p>
          </section>

          <div className="mt-8 text-center">
            <Link href="/" className="btn-primary inline-flex items-center justify-center px-6 py-3">العودة للصفحة الرئيسية</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
