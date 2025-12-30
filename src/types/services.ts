export interface Service {
  id: number,
  name: string,
  price: number
}

export interface CartItem extends Service {
  quantity: number
}