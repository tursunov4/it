// app/blog/page.tsx
"use client";

import api from "@/api/api";
import { BlogType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const router = useRouter();
  const [data, setData] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await api.get("/blog/");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  return (
    <div className="min-h-screen py-10 text-white">
      <div className="container">
        {/* Breadcrumb */}
        <div className="font-semibold flex md:mb-[30px] gap-2 text-[#FFFFFF8C] text-[12px] md:text-[14px] mb-4">
          <Link href="/">Главная</Link> <span>/</span> <span>Блог</span>
        </div>

        {/* Title */}
        <h1 className="font-semibold mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Блог
        </h1>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2A2830] rounded-[22px] h-[350px] animate-pulse"
                />
              ))
            : data?.map((post) => (
                <div
                  key={post.id}
                  className="bg-[#1E1C24] rounded-[22px] overflow-hidden shadow-lg flex flex-col"
                >
                  {/* Image */}
                  <div className="w-full bg-white">
                    <Image
                      src={post.image || "/placeholder.png"}
                      alt={post.title}
                      width={320}
                      height={200}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-[25px] flex flex-col">
                    <h2 className="text-[16px] leading-[138%] md:text-[20px] font-semibold mb-3 md:mb-4 line-clamp-2">
                      {post.title}
                    </h2>
                    <p
                      dangerouslySetInnerHTML={{ __html: post.content }}
                      className="text-[12px] line-clamp-4 font-normal leading-[138%] md:text-[16px] text-[#FFFFFFDB] mb-3 flex-1"
                    ></p>

                    {/* Date */}
                    <div className="flex items-center gap-[6px] text-gray-400 leading-[144%] text-[10px] mb-3">
                      <Image
                        alt="pencil"
                        width={10}
                        height={10}
                        src="/svg/pencil.svg"
                      />
                      <span>{post.created_at?.slice(0, 10)}</span>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => router.push(`/blog/${post.slug}`)}
                      className="w-full justify-center flex items-center cursor-pointer gap-[10px] btn-gradient text-[14px] transition-all duration-500 font-semibold md:text-[16px] text-white rounded-[14px] p-[10px] border border-[#FFA362]"
                    >
                      Читать полностью
                      <Image
                        src="/svg/btnicon.svg"
                        alt="btnicon"
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
