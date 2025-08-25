"use client";

import ServicePriceCard from "../../components/card/ServicePriceCard";

const services = [
  {
    id: 1,
    title: "ИТ-аутсорсинг",
    description:
      "Комплексная техническая поддержка ИТ-инфраструктуры или отдельных сервисов компании малого и среднего бизнеса.",
    price: "от 30 000 руб.",
  },
  {
    id: 2,
    title: "ИТ-аутсорсинг",
    description:
      "Комплексная техническая поддержка ИТ-инфраструктуры или отдельных сервисов компании малого и среднего бизнеса.",
    price: "от 30 000 руб.",
  },
  {
    id: 3,
    title: "ИТ-аутсорсинг",
    description:
      "Комплексная техническая поддержка ИТ-инфраструктуры или отдельных сервисов компании малого и среднего бизнеса.",
    price: "от 30 000 руб.",
  },
  {
    id: 4,
    title: "ИТ-аутсорсинг",
    description:
      "Комплексная техническая поддержка ИТ-инфраструктуры или отдельных сервисов компании малого и среднего бизнеса.",
    price: "от 30 000 руб.",
  },
];

export default function PricingPage() {
  return (
    <main className="container flex-1 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        Главная / <span className="text-white">Стоимость услуг</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-8">Стоимость услуг</h2>

      {/* Cards */}
      <div className="space-y-4">
        {services.map((s) => (
          <ServicePriceCard key={s.id} service={s} />
        ))}
      </div>
    </main>
  );
}
