// app/blog/page.tsx
"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const posts = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: "Конкуренция и технологии",
  excerpt:
    "Основными законами современного общества являются: свобода предпринимательства, право частной собственности...",
  date: "12.05.25",
  image: "/placeholder.png", // public papkaga placeholder qo'yishingiz mumkin
}));

export default function BlogPage() {
  return (
    <div className="bg-[#0E0E0E] min-h-screen py-10 text-white">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6">
          <span className="hover:text-white cursor-pointer">Главная</span> /{" "}
          <span className="text-white">Блог</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-semibold mb-10">Блог</h1>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#181818] rounded-2xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-44 bg-gray-200 flex items-center justify-center">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={100}
                  className="opacity-70"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-300 mb-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-gray-400 text-xs mb-3">
                  <span>{post.date}</span>
                </div>

                <button className="mt-auto bg-orange-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-orange-600 transition">
                  Читать полностью
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
