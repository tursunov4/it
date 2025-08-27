import Image from "next/image";
import React from "react";

const ServicesItemSection = () => {
  const services = [
    {
      id: "web-development",
      icon: "/svg/galochka.svg",
      title: "Веб-разработка",
      description:
        "Создание современных веб-приложений и сайтов с использованием передовых технологий",
    },
    {
      id: "mobile-apps",
      icon: "/svg/galochka.svg",
      title: "Мобильные приложения",
      description:
        "Разработка нативных и кроссплатформенных мобильных приложений для iOS и Android",
    },
    {
      id: "devops",
      icon: "/svg/galochka.svg",
      title: "DevOps и администрирование",
      description:
        "Настройка и поддержка серверной инфраструктуры, автоматизация процессов развертывания",
    },
    {
      id: "testing",
      icon: "/svg/galochka.svg",
      title: "Тестирование ПО",
      description:
        "Комплексное тестирование программного обеспечения, автоматизация тестирования",
    },
  ];
  return (
    <section className=" py-[42px] md:py-[64px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center  text-[20px] md:text-[34px] font-semibold  mb-[20px] md:mb-[40px]">
          Что входит в услугу?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#222125] rounded-xl p-5 md:p-[32px] hover:bg-gray-800 transition-colors cursor-pointer group"
            >
              <div className="mb-4  ">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={38}
                  height={38}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-[#FFFFFFCC] font-normal text-[12px] md:text-[16px]  leading-6  ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesItemSection;
