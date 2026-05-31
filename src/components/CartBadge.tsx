// src/components/CartBadge.tsx
'use client'

import { useCart } from '@/context/CartContext'

export default function CartBadge() {
  const { getTotalItems } = useCart()
  const count = getTotalItems()
  
  if (count === 0) return null
  
  return (
    <span className="bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-2 animate-bounce">
      {count}
    </span>
  )
}