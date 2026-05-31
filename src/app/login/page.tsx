// src/app/login/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // هنا سنكتب كود تسجيل الدخول الحقيقي لاحقاً
    console.log('جاري تسجيل الدخول...', { method: loginMethod });
    setTimeout(() => {
      setLoading(false);
      alert('هذه نسخة تجريبية! سيتم تفعيل الدخول قريباً.');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        
        {/* رأس الصفحة */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800">تسجيل الدخول</h2>
          <p className="mt-2 text-sm text-gray-600">أهلاً بك في منصة رزقي هب</p>
          
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

        {/* أزرار التبديل بين الإيميل والجوال */}
        <div className="flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setLoginMethod('email')}
            className={`flex-1 py-3 text-sm font-medium border rounded-r-none ${
              loginMethod === 'email'
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
             البريد الإلكتروني
          </button>
          <button
            type="button"
            onClick={() => setLoginMethod('phone')}
            className={`flex-1 py-3 text-sm font-medium border rounded-l-none ${
              loginMethod === 'phone'
                ? 'bg-green-700 text-white border-green-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            📱 رقم الجوال
          </button>
        </div>

        {/* نموذج الدخول */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            
            {/* حقل الإيميل */}
            {loginMethod === 'email' && (
              <div>
                <label htmlFor="email-address" className="sr-only">البريد الإلكتروني</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="البريد الإلكتروني"
                />
              </div>
            )}

            {/* حقل الجوال */}
            {loginMethod === 'phone' && (
              <div>
                <label htmlFor="phone-number" className="sr-only">رقم الجوال</label>
                <input
                  id="phone-number"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  dir="ltr"
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="05xxxxxxxx"
                />
              </div>
            )}

            {/* حقل كلمة المرور */}
            <div>
              <label htmlFor="password" className="sr-only">كلمة المرور</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="كلمة المرور"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
            >
              {loading ? 'جاري التحقق...' : 'دخول'}
            </button>
          </div>

          <div className="text-center">
            <Link href="/register" className="font-medium text-green-600 hover:text-green-500">
              ليس لديك حساب؟ سجل الآن
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}