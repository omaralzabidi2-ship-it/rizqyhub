// src/context/CartContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 1. تعريف شكل بيانات المنتج في السلة
export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

// 2. تعريف وظائف السلة
type CartContextType = {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
};

// 3. إنشاء السياق
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4. الموفر (Provider) الذي يغلف التطبيق
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  // التأكد من أننا نعمل على المتصفح (Client) لتجنب أخطاء hydration
  useEffect(() => {
    setIsClient(true);
    // تحميل السلة المحفوظة عند فتح الموقع
    const savedCart = localStorage.getItem('rizqy-cart');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart) as CartItem[];
        setCart(parsed.map((item) => ({
          ...item,
          price: Number(item.price),
          quantity: Number(item.quantity),
        })));
      } catch (error) {
        console.error("Failed to parse cart", error);
      }
    }
  }, []);

  // حفظ السلة تلقائياً عند أي تغيير
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('rizqy-cart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  // إضافة منتج
  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // إذا المنتج موجود، زد الكمية
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // إذا جديد، أضفه بكمية 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // حذف منتج
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // مسح السلة بالكامل
  const clearCart = () => {
    setCart([]);
  };

  // حساب المجموع الكلي
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // حساب عدد القطع
  const getTotalItems = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 5. دالة مساعدة لاستخدام السلة في أي مكان
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}