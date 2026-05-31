import Link from 'next/link'
import ChatWindow from '@/components/ChatWindow'
import { prisma } from '@/lib/prisma'

export default async function MessagesPage({
  searchParams,
}: {
  searchParams: Promise<{
    senderId?: string
    receiverId?: string
    productId?: string
  }>
}) {
  const params = await searchParams
  const testCustomer = await prisma.user.findUnique({
    where: { email: 'customer@rizqyhub.com' },
    select: { id: true, fullName: true },
  })

  const senderId = params.senderId ?? testCustomer?.id
  const receiverId = params.receiverId

  const receiver = receiverId
    ? await prisma.user.findUnique({
        where: { id: receiverId },
        select: { id: true, fullName: true, role: true },
      })
    : null

  const product = params.productId
    ? await prisma.product.findUnique({
        where: { id: params.productId },
        select: { id: true, title: true },
      })
    : null

  const producers = !receiverId
    ? await prisma.user.findMany({
        where: { role: 'PRODUCER', status: 'APPROVED' },
        select: { id: true, fullName: true },
        orderBy: { fullName: 'asc' },
      })
    : []

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="font-medium text-green-700 hover:text-green-900">
            العودة للمتجر
          </Link>
        </div>

        <section className="mb-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
          <p className="font-bold">تنبيه مرحلي</p>
          <p className="mt-1">
            نظام تسجيل الدخول الحالي تجريبي، لذلك تستخدم هذه الصفحة حساب العميل التجريبي مؤقتًا عند عدم توفر جلسة مستخدم.
            عند تفعيل المصادقة سيتم أخذ هوية العميل أو الأسرة المنتجة من الجلسة مباشرة.
          </p>
        </section>

        <section className="mb-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-green-800">محادثة آمنة داخل التطبيق</h1>
          <p className="mt-2 text-gray-600">
            جميع الرسائل تمر عبر فلتر يمنع أرقام الجوال والبريد والروابط وحسابات التواصل، حتى عند كتابتها على أسطر متعددة أو بفواصل.
          </p>
          {product && (
            <p className="mt-4 rounded-xl bg-green-50 p-3 text-sm text-green-800">
              بخصوص المنتج: <span className="font-bold">{product.title}</span>
            </p>
          )}
          {receiver && (
            <p className="mt-2 text-sm text-gray-600">
              الطرف الآخر: <span className="font-bold">{receiver.fullName}</span>
            </p>
          )}
        </section>

        {senderId && receiverId ? (
          <ChatWindow senderId={senderId} receiverId={receiverId} />
        ) : (
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-green-800">اختر أسرة منتجة لبدء محادثة</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {producers.map((producer) => (
                <Link
                  key={producer.id}
                  href={`/messages?receiverId=${producer.id}`}
                  className="rounded-2xl border border-gray-100 p-4 font-semibold text-gray-700 transition hover:border-green-200 hover:bg-green-50"
                >
                  {producer.fullName}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
