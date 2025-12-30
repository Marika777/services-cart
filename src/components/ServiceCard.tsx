import type { Service } from "../types/services";

interface ServiceCard {
  service: Service
}

export const ServiceCard = ({ service }: ServiceCard) => {

  return (
    <div className="service-card">
      <h2>{service.name}</h2>
      <p className="price">{service.price.toLocaleString()} ₽</p>
      <button>Добавить</button>
    </div>
  )
}