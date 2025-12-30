import { useCart } from "../hooks/useCart"


export const Cart = () => {
  const { cart, removeFromCart, total } = useCart()

  return (
    <div className="cart">
      <h2>Выбранные услуги</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>{item.price.toLocaleString()} ₽ × {item.quantity}</span>
          <button onClick={() => removeFromCart(item.id)}>Удалить</button>
        </div>
      ))}
      <div className="total">Итого: {total.toLocaleString()} ₽</div>
      <button className="checkout-btn">Оформить заказ</button>
    </div>
  )
}