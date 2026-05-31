// src/app/layout.tsx
import type { Metadata } from "next";
import { Almarai, Tajawal } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

// 📝 تحميل الخطوط العربية من Google Fonts
const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-almarai",
  display: "swap",
  preload: true,
});

const tajawal = Tajawal({
  weight: ["300", "400", "500", "700"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "رزقي هب | منصة الأسر المنتجة السعودية",
  description: "اكتشف وادعم منتجات الأسر المنتجة السعودية الأصيلة - غذاء، حرف يدوية، عناية شخصية، وخياطة",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport = {
  themeColor: "#4A5D40",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${almarai.variable} ${tajawal.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-transparent text-gray-800 antialiased">
        {/* ✅ تغليف التطبيق بـ CartProvider */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
