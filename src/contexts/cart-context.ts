import { createContext } from 'react'
import type { Service, CartItem } from '../types/services'

export interface CartContextType {
  cart: CartItem[]
  addToCart: (service: Service) => void
  removeFromCart: (id: number) => void
  total: number
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
