"use client";

import Link from "next/link";
import ServiceCard from "../../components/card/ServiceCard";
import { use, useEffect, useState } from "react";
import api from "@/api/api";
import { ServiceType } from "@/types";

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
    image: "/serviced1.png",
    imageMobile: "/servicem1.png",
    slug: "it-outsourcing",
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
    image: "/serviced1.png",
    imageMobile: "/servicem1.png",
    slug: "it-outsourcing",
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
    image: "/serviced1.png",
    imageMobile: "/servicem1.png",
    slug: "virtual-office",
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
    image: "/serviced1.png",
    imageMobile: "/servicem1.png",
    slug: "it-outsourcing",
  },
];

export default function ServicesPage() {
  const [data, setData] = useState<ServiceType[]>([]);
  useEffect(() => {
    api
      .get("/uslugi/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className=" mt-[14px] mb-[42px] md:mt-[28px] md:mb-[64px]">
      {/* Breadcrumb */}
      <div className="container">
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C]  text-[12px] md:text-[14px] mb-4">
          <Link href={"/"}>Главная</Link> <span>/</span>{" "}
          <Link href={"#"}>Наши услуги</Link>
        </div>

        {/* Title */}
        <h2 className="font-semibold  mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Наши услуги
        </h2>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {data.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
