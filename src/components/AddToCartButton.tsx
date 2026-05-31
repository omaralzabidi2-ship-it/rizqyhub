// src/components/AddToCartButton.tsx
'use client'

import { useCart } from '@/context/CartContext'

export default function AddToCartButton({ product }: { product: any }) {
  const { addToCart } = useCart()
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: Number(product.price),
      image: product.images?.[0] || '/images/placeholder-product.jpg',
      quantity: 1
    })
    alert(`✅ تمت إضافة "${product.title}" للسلة!`)
  }
  
  return (
    <button 
      onClick={handleAddToCart}
      className="btn-primary text-xs py-2 px-3 md:py-2 md:px-4 hover:shadow-lg transition-all cursor-pointer"
      type="button"
    >
      أضف للسلة
    </button>
  )
}