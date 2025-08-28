// app/blog/page.tsx
"use client";

import api from "@/api/api";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const posts = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: "Конкуренция и технологии",
  excerpt:
    "Основными законами современного общества являются: свобода предпринимательства, право частной собственности...",
  date: "12.05.25",
  image: "/placeholder.png", // public papkaga placeholder qo'yishingiz mumkin
}));

export default function BlogPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  useEffect(() => {
    api
      .get("/blog/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className=" min-h-screen py-10 text-white">
      <div className="container ">
        {/* Breadcrumb */}
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C]  text-[12px] md:text-[14px] mb-4">
          <Link href={"/"}>Главная</Link> <span>/</span>{" "}
          <Link href={"#"}>Стоимость услуг</Link>
        </div>

        {/* Title */}
        <h1 className="font-semibold  mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Блог
        </h1>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#1E1C24] rounded-[22px] overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <div className="w-full bg-white">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={320}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
              </div>

              {/* Content */}
              <div className=" p-5 md:p-[25px] flex flex-col ">
                <h2 className=" text-[16px]   leading-[138%] md:text-[20px] font-semibold  mb-3 md:mb-4">
                  {post.title}
                </h2>
                <p className="  text-[12px]  font-normal  leading-[138%] md:text-[16px] text-[#FFFFFFDB] mb-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center  gap-[6px] text-gray-400 leading-[144%] text-[10px] mb-3">
                  <Image
                    alt={"pencil"}
                    width={10}
                    height={10}
                    src={"/svg/pencil.svg"}
                  />
                  <span>{post.date}</span>
                </div>

                <button
                  onClick={() => router.push(`/blog/${post.id}`)}
                  className="  w-full justify-center flex items-center cursor-pointer gap-[10px]  btn-gradient  text-[14px]  transition-all duration-500  font-semibold md:text-[16px]  text-white  rounded-[14px]  p-[10px]  border border-[#FFA362]"
                >
                  Читать полностью
                  <Image
                    src={"/svg/btnicon.svg"}
                    alt={"btnicon"}
                    width={28}
                    height={28}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
