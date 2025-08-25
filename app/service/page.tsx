"use client";

import ServiceCard from "../../components/card/ServiceCard";

const services = [
  {
    id: 1,
    title: "ИТ-аутсорсинг",
    description:
      "Комплексная техническая поддержка ИТ-инфраструктуры или отдельных сервисов компании малого и среднего бизнеса.",
    points: [
      "Выездная и удалённая поддержка 24/7",
      "Гарантия уровня сервиса по договору (SLA)",
    ],
    image: "/images/service1.png",
  },
  {
    id: 2,
    title: "ИТ-аутстаффинг",
    description:
      "Системный администратор в офисе с требуемым графиком работы без оформления в штат.",
    points: [
      "Специалист технологий",
      "Подмена сотрудника (больничный или отпуск)",
      "Замена специалиста по требованию клиента",
    ],
    image: "/images/service2.png",
  },
  {
    id: 3,
    title: "Виртуальный офис",
    description:
      "Единое информационное пространство для полноценного ведения вашего бизнеса.",
    points: [
      "Организация удалённой работы «под ключ»",
      "Сервисы для IT-предприятия и сотрудников",
      "Ежемесячное ресурсное сопровождение",
    ],
    image: "/images/service3.png",
  },
  {
    id: 4,
    title: "ИТ-консалтинг",
    description:
      "Решение проблем работы ИТ-систем, подразделений, внутреннего взаимодействия технологий и бизнеса.",
    points: [
      "Аудит информационных систем и безопасности",
      "Разработка ИТ-стратегии",
      "Аудит бизнес-процессов",
    ],
    image: "/images/service4.png",
  },
];

export default function ServicesPage() {
  return (
    <section className=" py-10">
      {/* Breadcrumb */}
      <div className="container">
        <div className="text-sm text-gray-400 mb-4">
          Главная / <span className="text-white">Наши услуги</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-white mb-8">Наши услуги</h2>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
