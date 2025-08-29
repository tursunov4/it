"use client";
import { useModal } from "@/context/ModalContext";
import { ServiceType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";

const ServiceItemHeroSection = ({ data }: { data: ServiceType | null }) => {
  const { openModal } = useModal();
  return (
    <section className="bg-[url('/serviceitembg.png')] bg-no-repeat bg-cover bg-center pb-3 pt-5 md:pt-[28px] md:pb-[64px] h-[520px] md:h-[670px] rounded-[20px] md:rounded-[26px] mx-2 md:mx-5">
      <div className="container h-full">
        <div className="flex flex-col h-full justify-between">
          <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C]  text-[12px] md:text-[14px] mb-4">
            <Link href={"/"}>Главная</Link> <span>/</span>{" "}
            <Link href={"/service"}> Наши услуги</Link>
            <span>/</span>
            <Link href={"#"}>{data?.title}</Link>
          </div>
          <div className="max-w-[800px]">
            <h1 className="font-semibold text-[19px] md:text-[48px] leading-[138%] mb-4 md:mb-[25px]">
              {data?.title} <br /> ИТ-отдел от{" "}
              {data?.price && Math.ceil(data?.price || 30000)} / мес.
            </h1>
            <p
              dangerouslySetInnerHTML={{ __html: data?.description || "" }}
              className="font-normal text-[12px] md:text-[22px] leading-[138%] mb-4   md:mb-[40px]"
            ></p>
            <button
              onClick={() => openModal()}
              className="  w-full md:w-auto justify-center flex items-center cursor-pointer gap-[10px]  btn-gradient   transition-all duration-500  font-semibold text-[16px]  text-white  rounded-[14px] p-[10px]  border border-[#FFA362]"
            >
              Получить предложение
              <Image
                src={"/svg/btnicon.svg"}
                alt={"btnicon"}
                width={28}
                height={28}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItemHeroSection;
