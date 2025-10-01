"use client";
import api from "@/api/api";
import { AboutType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AboutHeroSection = () => {
  const [data, setData] = useState<AboutType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await api.get("/about/");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching about data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  const aboutData = data?.[0];

  return (
    <section className="container">
      <h1 className="font-semibold text-[34px] mb-[40px]">О нас</h1>

      <div className="grid lg:grid-cols-2 items-center  gap-5">
        {/* Left Content */}
        {loading ? (
          <div className="w-full h-[300px] bg-gray-300 animate-pulse rounded-[16px]" />
        ) : (
          aboutData?.image && (
            <Image
              src={aboutData.image}
              className="w-full rounded-[16px]"
              width={1000}
              height={600}
              alt="about image"
              priority
              placeholder="blur"
              blurDataURL="/placeholder.png" // fallback placeholder
            />
          )
        )}

        {/* Right Content */}
        {loading ? (
          <div className="space-y-3">
            <div className="h-5 w-3/4 bg-gray-300 animate-pulse rounded-md" />
            <div className="h-5 w-2/4 bg-gray-300 animate-pulse rounded-md" />
            <div className="h-5 w-full bg-gray-300 animate-pulse rounded-md" />
            <div className="h-5 w-4/6 bg-gray-300 animate-pulse rounded-md" />
          </div>
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: aboutData?.description || "" }}
            className="p-5 md:p-[30px] font-normal text-[12px] md:text-[16px] rounded-[16px] md:rounded-[22px] border border-[#FFFFFF61]"
          ></div>
        )}
      </div>
    </section>
  );
};

export default AboutHeroSection;
