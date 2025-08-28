"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PartnershipSection = () => {
  const router = useRouter();
  return (
    <section className=" py-[42px] md:py-[64px]">
      <div className="container ">
        <h2 className="text-center  text-[20px] md:text-[34px] font-semibold  mb-[20px] md:mb-[40px]">
          Сотрудничать с нами это:
        </h2>

        <div className="grid   md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Partnership Item 2 */}
          <div className="bg-[#222125] relative mt-[85px] md:mt-[140px] p-[20px]  md:p-[40px]  pt-[105px] md:pt-[160px] rounded-[22px]">
            <Image
              className="absolute top-[-85px] md:top-[-120px] w-[170px] h-[170px]  md:w-[240px] md:h-[240px]  left-1/2 -translate-x-1/2 "
              src={"/parter1.png"}
              width={240}
              height={240}
              alt={"server"}
            />
            <h3 className="font-semibold mb-3 md:mb-5  text-[16px] md:text-[20px]">
              Удобно
            </h3>
            <p className="text-[#FFFFFFDB] text-[12px] md:text-[16px] leading-[138%]">
              Простота в использовании наших решений позволяет быстро
              интегрировать системы автоматизации в ваши рабочие процессы.
            </p>
          </div>
          <div className="bg-[#222125] relative mt-[85px] md:mt-[140px] p-[20px]  md:p-[40px]  pt-[105px] md:pt-[160px] rounded-[22px]">
            <Image
              className="absolute top-[-85px] md:top-[-120px] w-[170px] h-[170px]  md:w-[240px] md:h-[240px]  left-1/2 -translate-x-1/2 "
              src={"/parter2.png"}
              width={240}
              height={240}
              alt={"server"}
            />
            <h3 className="font-semibold mb-3 md:mb-5  text-[16px] md:text-[20px]">
              Удобно
            </h3>
            <p className="text-[#FFFFFFDB] text-[12px] md:text-[16px] leading-[138%]">
              Простота в использовании наших решений позволяет быстро
              интегрировать системы автоматизации в ваши рабочие процессы.
            </p>
          </div>
          <div className="bg-[#222125] relative mt-[85px] md:mt-[140px] p-[20px]  md:p-[40px]  pt-[105px] md:pt-[160px] rounded-[22px]">
            <Image
              className="absolute top-[-85px] md:top-[-120px] w-[170px] h-[170px]  md:w-[240px] md:h-[240px]  left-1/2 -translate-x-1/2 "
              src={"/parter3.png"}
              width={240}
              height={240}
              alt={"server"}
            />
            <h3 className="font-semibold mb-3 md:mb-5  text-[16px] md:text-[20px]">
              Удобно
            </h3>
            <p className="text-[#FFFFFFDB] text-[12px] md:text-[16px] leading-[138%]">
              Простота в использовании наших решений позволяет быстро
              интегрировать системы автоматизации в ваши рабочие процессы.
            </p>
          </div>
        </div>

        {/* CTA Button */}
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

export default PartnershipSection;
