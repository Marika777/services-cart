import { services } from './data/servicesData'
import { ServiceCard } from './components/ServiceCard'
import { Cart } from './components/Cart'
import { CartProvider } from './providers/CartProvider'
import { useCart } from './hooks/useCart'
import './App.css'

function AppContent() {
  const { total } = useCart()

  return (
    <div className="app">
      <header>
        <h1>Каталог услуг</h1>
      </header>
      <main className="main">
        <section className="services-grid">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} />
          ))}
        </section>
        {total > 0 && <Cart />}
      </main>
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App
