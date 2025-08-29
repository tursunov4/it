"use client";

import Link from "next/link";
import ServiceCard from "../../components/card/ServiceCard";
import { useEffect, useState } from "react";
import api from "@/api/api";
import { ServiceType } from "@/types";

export default function ServicesPage() {
  const [data, setData] = useState<ServiceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get("/uslugi/services/");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="mt-[14px] mb-[42px] md:mt-[28px] md:mb-[64px]">
      <div className="container">
        {/* Breadcrumb */}
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C] text-[12px] md:text-[14px] mb-4">
          <Link href={"/"}>Главная</Link> <span>/</span>{" "}
          <span>Наши услуги</span>
        </div>

        {/* Title */}
        <h2 className="font-semibold mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Наши услуги
        </h2>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {loading
            ? Array.from({ length: 4 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 animate-pulse rounded-[22px] h-[250px]"
                />
              ))
            : data?.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
        </div>
      </div>
    </section>
  );
}
