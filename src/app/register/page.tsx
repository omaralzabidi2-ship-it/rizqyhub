// src/app/register/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [accountType, setAccountType] = useState<'customer' | 'producer'>('customer');
  const [contactMethod, setContactMethod] = useState<'email' | 'phone'>('email');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // هنا سنكتب كود التسجيل الحقيقي لاحقاً
    const formData = new FormData(e.target as HTMLFormElement);
    console.log('جاري التسجيل...', {
      type: accountType,
      method: contactMethod,
      data: Object.fromEntries(formData)
    });
    
    setTimeout(() => {
      setLoading(false);
      alert('✅ تم استلام بياناتك! سيتم تفعيل الحساب قريباً.');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        
        {/* رأس الصفحة */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800">🌟 إنشاء حساب جديد</h2>
          <p className="mt-2 text-sm text-gray-600">انضم إلى منصة رزقي هب للأسر المنتجة</p>
          
          {/* زر العودة للرئيسية */}
          <div className="mt-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-800 font-medium transition-colors"
            >
              ← العودة للصفحة الرئيسية
            </Link>
          </div>
        </div>

        {/* اختيار نوع الحساب: عميل أو أسرة منتجة */}
        <div className="flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setAccountType('customer')}
            className={`flex-1 py-3 text-sm font-medium border rounded-r-none ${
              accountType === 'customer'
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            👤 عميل
          </button>
          <button
            type="button"
            onClick={() => setAccountType('producer')}
            className={`flex-1 py-3 text-sm font-medium border rounded-l-none ${
              accountType === 'producer'
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            🏠 أسرة منتجة
          </button>
        </div>

        {/* نموذج التسجيل */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            
            {/* الاسم الكامل */}
            <div>
              <label htmlFor="fullName" className="sr-only">الاسم الكامل</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="الاسم الكامل"
              />
            </div>

            {/* التبديل بين الإيميل والجوال */}
            <div className="flex rounded-md shadow-sm mt-3" role="group">
              <button
                type="button"
                onClick={() => setContactMethod('email')}
                className={`flex-1 py-2 text-xs font-medium border rounded-r-none ${
                  contactMethod === 'email'
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                📧 بريد إلكتروني
              </button>
              <button
                type="button"
                onClick={() => setContactMethod('phone')}
                className={`flex-1 py-2 text-xs font-medium border rounded-l-none ${
                  contactMethod === 'phone'
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                }`}
              >
                📱 جوال
              </button>
            </div>

            {/* حقل البريد الإلكتروني */}
            {contactMethod === 'email' && (
              <div>
                <label htmlFor="email" className="sr-only">البريد الإلكتروني</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="example@email.com"
                />
              </div>
            )}

            {/* حقل رقم الجوال */}
            {contactMethod === 'phone' && (
              <div>
                <label htmlFor="phone" className="sr-only">رقم الجوال</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  pattern="^05[0-9]{8}$"
                  title="أدخل رقم جوال سعودي صحيح (مثال: 0512345678)"
                  required
                  dir="ltr"
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="05xxxxxxxx"
                />
                <p className="text-xs text-gray-500 mt-1">مثال: 0512345678</p>
              </div>
            )}

            {/* كلمة المرور */}
            <div>
              <label htmlFor="password" className="sr-only">كلمة المرور</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={6}
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="كلمة المرور (6 أحرف على الأقل)"
              />
            </div>

            {/* تأكيد كلمة المرور */}
            <div>
              <label htmlFor="confirmPassword" className="sr-only">تأكيد كلمة المرور</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="تأكيد كلمة المرور"
              />
            </div>
          </div>

          {/* ملاحظة للأسر المنتجة */}
          {accountType === 'producer' && (
            <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-xs text-amber-800">
              💡 <strong>ملاحظة:</strong> بعد التسجيل، ستحتاج إلى رفع صورة الهوية ووثيقة الأسرة المنتجة للمراجعة.
            </div>
          )}

          {/* زر الإرسال */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
              {loading ? 'جاري الإنشاء...' : 'إنشاء الحساب'}
            </button>
          </div>

          {/* رابط العودة للدخول */}
          <div className="text-center">
            <Link href="/login" className="font-medium text-green-600 hover:text-green-500">
              لديك حساب بالفعل؟ تسجيل الدخول
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}