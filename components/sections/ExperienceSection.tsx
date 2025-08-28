"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Поддержка серверов",
    desc: "ПО будет обновлено, мониторинг производительности и качества уровня сервиса будет отслеживаться в режиме 24/7.",
    img: "/svg/ser1.png", // 🔹 o'zingizning rasm yo'lini qo'ying
  },
  {
    title: "Облачные решения",
    desc: "Облачные решения позволяют сократить издержки и повысить качество ведения бизнеса.",
    img: "/svg/ser2.png",
  },
  {
    title: "Профессиональная поддержка",
    desc: "Наши работники технической поддержки помогут решить возникающие проблемы круглосуточно!",
    img: "/svg/ser3.png",
  },
];

const ExperienceSection = () => {
  const router = useRouter();
  return (
    <section className="  py-[42px] md:py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center  text-[20px] md:text-[34px] font-semibold  mb-5 md:mb-[40px]">
          17 лет опыта в IT
        </h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#16161C]  w-full rounded-2xl  flex flex-col justify-between items-center  hover:shadow-lg transition"
            >
              <div className=" p-5 md:p-[40px]">
                <h3 className="text-white text-lg font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.desc}</p>
              </div>

              <Image
                src={service.img}
                alt={service.title}
                width={412}
                height={268}
                className="  w-full   "
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className=" flex justify-center    mt-[26px] mb:mt-[42px]">
          <button
            onClick={() => router.push("/service")}
            className="  w-full md:w-auto justify-center flex items-center cursor-pointer gap-[10px]  btn-gradient   transition-all duration-500  font-semibold text-[16px]  text-white  rounded-[14px] p-[10px]  border border-[#FFA362]"
          >
            Перейти к услугам
            <Image
              src={"/svg/btnicon.svg"}
              alt={"btnicon"}
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
