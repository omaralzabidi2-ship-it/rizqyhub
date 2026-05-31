'use client'

import Link from 'next/link'
import { useCart } from '@/context/CartContext'

export default function CheckoutPage() {
  const { cart, getTotalItems, getTotalPrice, clearCart } = useCart()
  const totalItems = getTotalItems()
  const totalPrice = getTotalPrice().toFixed(2)

  const handleCheckout = () => {
    clearCart()
    alert('✅ تم تأكيد طلبك بنجاح! شكراً لتسوقك معنا.')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-green-800 mb-2">🧾 إتمام الشراء</h1>
              <p className="text-gray-600">تحقق من محتويات السلة قبل تأكيد الطلب.</p>
            </div>
            <Link href="/" className="btn-outline inline-flex items-center justify-center px-6 py-3">
              ← العودة للمتجر
            </Link>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-gray-700 mb-4">سلة التسوق فارغة حالياً.</p>
              <Link href="/" className="btn-primary inline-flex items-center justify-center px-6 py-3">
                ابدأ التسوق
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-3xl border border-gray-200 p-4 flex gap-4 items-center">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white border border-gray-200">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-semibold text-gray-900">{item.title}</h2>
                      <p className="text-gray-500 text-sm">الكمية: {item.quantity}</p>
                      <p className="text-green-700 font-bold mt-2">{item.price.toFixed(2)} ر.س</p>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">ملخص الطلب</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>عدد المنتجات</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>تكلفة الشحن</span>
                    <span>مجاني</span>
                  </div>
                </div>
                <div className="flex justify-between text-xl font-bold text-green-700 mb-6">
                  <span>المجموع الكلي</span>
                  <span>{totalPrice} ر.س</span>
                </div>
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="btn-primary w-full py-3 text-lg"
                >
                  ✅ تأكيد الطلب
                </button>
              </aside>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
