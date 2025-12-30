import { useContext } from 'react'
import { CartContext } from '../contexts/cart-context'
import type { CartContextType } from '../contexts/cart-context'

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('error: useCart')
  }
  return context
}
