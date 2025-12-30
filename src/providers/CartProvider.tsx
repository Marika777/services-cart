import React, { useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import { CartContext } from '../contexts/cart-context'
import type { CartItem, Service } from '../types/services'

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = useCallback((service: Service) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === service.id)
      if (existing) {
        return prev.map((item) =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...service, quantity: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  )
}
