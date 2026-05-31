// src/app/cart/page.tsx
'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">سلة التسوق فارغة</h2>
          <p className="text-gray-600 mb-6">ابدأ التسوق الآن من متجرنا!</p>
          <Link href="/" className="btn-primary inline-block">
            🛍️ تصفح المنتجات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* العنوان */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-green-800 mb-2">🛒 سلة التسوق</h1>
          <p className="text-gray-600">لديك {getTotalItems()} منتجات في السلة</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* قائمة المنتجات */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex gap-4">
                {/* صورة المنتج */}
                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* تفاصيل المنتج */}
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-green-700 font-bold text-lg">{item.price.toFixed(2)} ر.س</p>
                  <p className="text-gray-500 text-sm">الكمية: {item.quantity}</p>
                </div>

                {/* زر الحذف */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 self-start p-2"
                  title="إزالة من السلة"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          {/* ملخص الطلب */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">ملخص الطلب</h2>
              
              <div className="space-y-3 border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>عدد المنتجات:</span>
                  <span className="font-bold">{getTotalItems()}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-green-700">
                  <span>المجموع الكلي:</span>
                  <span>{getTotalPrice().toFixed(2)} ر.س</span>
                </div>
              </div>

              <Link href="/checkout" className="btn-primary w-full py-3 text-lg mb-3 inline-flex items-center justify-center">
                ✅ إتمام الشراء
              </Link>
              
              <Link href="/" className="text-green-600 hover:text-green-800 font-medium text-center block">
                ← متابعة التسوق
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}