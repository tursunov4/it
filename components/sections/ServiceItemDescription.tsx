import { ServiceType } from "@/types";
import React from "react";

const ServiceItemDescription = ({ data }: { data: ServiceType | null }) => {
  return (
    <section className="pt-[42px] md:pt-[64px]">
      <div className="container">
        <div className="p-5 md:p-[30px]  rounded-[16px] md:rounded-[22px] border border-[#FFFFFF61]">
          <p
            dangerouslySetInnerHTML={{ __html: data?.description || "" }}
            className="font-normal text-[12px] md:text-[18px] leading-[138%] "
          ></p>
        </div>
      </div>
    </section>
  );
};

export default ServiceItemDescription;
