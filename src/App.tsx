import { useCart } from './hooks/useCart'
import { services } from './data/servicesData'
import { ServiceCard } from './components/ServiceCard'
import { Cart } from './components/Cart'
import './App.css'

function App() {
  const { total } = useCart()

  console.log(total)

  return (
    <div className='app'>
      <header>
        <h1>Каталог услуг</h1>
      </header>

      <main className='main'>
        <section className='services-grid'>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </section>

        <Cart />
      </main>
    </div>
  )
}

export default App
