"use client";

import Link from "next/link";
import ServicePriceCard from "../../components/card/ServicePriceCard";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "@/api/api";
import { ServicePriceType } from "@/types";

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
  const [data, setData] = useState<ServicePriceType[]>([]);
  useEffect(() => {
    api
      .get("/uslugi/prices/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <main className="pt-[14px] pb-[42px] md:pt-[28px] md:pb-[64px]">
      {/* Breadcrumb */}
      <div className="container">
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C]  text-[12px] md:text-[14px] mb-4">
          <Link href={"/"}>Главная</Link> <span>/</span>{" "}
          <Link href={"#"}>Стоимость услуг</Link>
        </div>

        {/* Title */}
        <h2 className="font-semibold  mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Стоимость услуг
        </h2>

        {/* Cards */}
        <div className="space-y-4">
          {data.map((s) => (
            <ServicePriceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </main>
  );
}
