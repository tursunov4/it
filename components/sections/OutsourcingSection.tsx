"use client";

import React from "react";
import { Server } from "lucide-react";
import Image from "next/image";

const services = [
  {
    text: "Круглосуточное обслуживание серверов, компьютеров, оргтехники, всей существующей IT-инфраструктуры.",
  },
  {
    text: "Мониторинг 24/7 оборудования и работоспособности всех основополагающих информационных систем.",
  },
  {
    text: "Проведение плановых регламентных работ, установка и настройка ПО, обучение и консультация сотрудников.",
  },
  {
    text: "Минимум 20 IT-инженеров поддержки доступны 24/7 и 365 дней в году. Скорость реакции на заявку – до 15 мин.",
  },
];

const OutsourcingSection = () => {
  return (
    <section className="bg-white mx-2 md:mx-5 rounded-2xl shadow-md py-[42px] md:py-[64px]">
      <div className="container ">
        {/* Title */}
        <h2 className=" font-semibold  text-[20px]  text-center md:text-start md:text-[34px] md:mb-[38px]  text-[#121212] mb-[20px]">
          IT аутсорсинг в Москве
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#F1F1F1]   rounded-[16px] md:rounded-[22px] p-5 md:p-[40px] flex flex-col items-start gap-3 hover:shadow-md transition"
            >
              <div className="  mb-5 md:mb-[30px] ">
                <Image
                  src={"/svg/source.svg"}
                  width={38}
                  height={38}
                  alt={"server"}
                  className=" w-[32px] h-[32px] md:w-[38px] md:h-[38px]"
                />
              </div>
              <p className="text-[#121212]  font-normal text-[16px] ">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutsourcingSection;
