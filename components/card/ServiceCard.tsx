"use client";

import { ServiceType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { memo } from "react";

function ServiceCardComponent({ service }: { service: ServiceType }) {
  const router = useRouter();

  return (
    <div className="bg-[#FAFAFA] rounded-[22px] p-5 md:p-[30px] flex gap-[26px] justify-between shadow-md hover:shadow-lg transition">
      {/* Left Side */}
      <div className="flex flex-col justify-between w-full lg:w-[calc(100%-206px)]">
        {/* Title + description */}
        <div>
          <h3 className="font-semibold text-[15px] md:text-[20px] text-[#121212] mb-4">
            {service.title}
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: service.description }}
            className="font-normal text-[12px] md:text-[16px] text-[#121212CC]"
          />
        </div>

        {/* List + Mobile image + Button */}
        <div>
          <span className="block w-full h-[1px] bg-[#1212120F] my-5 md:my-[30px]" />

          <ul className="list-disc list-inside space-y-1 font-normal text-[12px] md:text-[16px] text-[#121212CC] mb-4">
            {service?.characteristic_services?.map((point, idx) => (
              <li key={idx}>{point.short_description}</li>
            ))}
          </ul>

          {/* Mobile image */}
          <Image
            src={service.image}
            alt={service.title}
            width={280}
            height={120}
            className="rounded-[16px] object-cover block lg:hidden w-full my-4 h-[120px]"
            placeholder="blur"
            blurDataURL="/placeholder.png"
          />

          <button
            onClick={() => router.push(`/service/${service.slug}`)}
            className="w-full md:w-auto justify-center flex items-center cursor-pointer gap-[10px] btn-gradient text-[14px] md:text-[16px] font-semibold text-white rounded-[14px] p-[10px] border border-[#FFA362] transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            Узнать подробнее
            <Image
              src={"/svg/btnicon.svg"}
              alt={"btnicon"}
              width={28}
              height={28}
            />
          </button>
        </div>
      </div>

      {/* Desktop image */}
      <Image
        src={service.image}
        alt={service.title}
        width={180}
        height={287}
        className="rounded-[22px] object-contain hidden lg:block w-[180px]"
        placeholder="blur"
        blurDataURL="/placeholder.png"
      />
    </div>
  );
}

const ServiceCard = memo(ServiceCardComponent);
export default ServiceCard;
