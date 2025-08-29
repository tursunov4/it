"use client";
import api from "@/api/api";
import { AboutType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutHeroSection = () => {
  const [data, setData] = useState<AboutType[]>([]);

  useEffect(() => {
    api
      .get("/about/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const aboutData = data?.[0];

  return (
    <section className="container">
      <h1 className="font-semibold text-[34px] mb-[40px]">О нас</h1>
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Left Content */}
        {aboutData?.image && (
          <Image
            src={aboutData.image}
            className="w-full"
            width={1000}
            height={1000}
            alt="about image"
          />
        )}

        <div
          dangerouslySetInnerHTML={{ __html: aboutData?.description || "" }}
          className="p-5 md:p-[30px] font-normal text-[12px] md:text-[16px] rounded-[16px] md:rounded-[22px] border border-[#FFFFFF61]"
        ></div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
