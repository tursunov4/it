import Image from "next/image";
import React from "react";

const ServicesItemSection = () => {
  const services = [
    {
      id: "web-development",
      icon: "/svg/galochka.svg",
      title: "Экспресс-аудит ИТ-систем",
      description:
        "Предоставим рекомендации по оптимизации текущей инфраструктуры в течении         3-ех недель",
    },
    {
      id: "mobile-apps",
      icon: "/svg/galochka.svg",
      title: "Обслуживание ПК техники",
      description:
        "Проведем первичную инвентаризацию      компьютерной техники для дальнейшего обслуживания",
    },
    {
      id: "devops",
      icon: "/svg/galochka.svg",
      title: "Обслуживание      оборудования",
      description:
        "Cisco, Mikrotik, Juniper, Huawei, Zyxel и другие        вендоры",
    },
    {
      id: "testing",
      icon: "/svg/galochka.svg",
      title: "Обслуживание телефонии АТС/BATC",
      description:
        "Как собственные IP/ аналоговые АТС, так и арендованные BATC",
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
