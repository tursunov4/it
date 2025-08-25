// app/blog/[id]/page.tsx
"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const relatedPosts = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  title: "Конкуренция и технологии",
  excerpt:
    "Основными законами современного общества являются: свобода предпринимательства, право частной собственности...",
  date: "12.05.25",
  image: "/placeholder.png", // public papkaga rasm qo'yish kerak
}));

export default function BlogDetailPage() {
  return (
    <div className="bg-[#0E0E0E] min-h-screen py-10 text-white">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6">
          <span className="hover:text-white cursor-pointer">Главная</span> /{" "}
          <span className="hover:text-white cursor-pointer">Блог</span> /{" "}
          <span className="text-white">Конкуренция и IT технологии</span>
        </div>

        {/* Post Title */}
        <h1 className="text-3xl font-semibold mb-3">
          Конкуренция и it технологии
        </h1>

        {/* Date */}
        <p className="text-sm text-gray-400 mb-6">12.05.25</p>

        {/* Image */}
        <div className="w-full h-72 sm:h-96 bg-gray-200 flex items-center justify-center rounded-xl mb-8">
          <Image
            src="/placeholder.png"
            alt="Post image"
            width={200}
            height={200}
            className="opacity-70"
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-invert max-w-none mb-10 text-gray-200 leading-relaxed">
          <p>
            Основными законами современного общества являются: свобода
            предпринимательства, право частной собственности и наличие
            конкурентной среды. Предпринимательство получает стабильность только
            в условиях конкуренции, а главное условие конкуренции —
            эффективность производства. Развивающиеся страны имеют нестабильный,
            слабеющий и недостаточный результат, основное использование ресурсов
            — человеческие и денежные ресурсы.
          </p>
          <p>
            Но наибольшей результативностью — обладают способности,
            инновационные решения и использование информационных технологий
            (ИТ). Для успешного развития бизнеса сегодня необходимо применение
            цифровых решений: CRM-системы, автоматизация процессов, обработка
            больших данных, искусственный интеллект, машинное обучение,
            электронная коммерция, цифровой маркетинг. Все это формирует новые
            конкурентные преимущества на современном рынке.
          </p>
          <p>
            Современные компании вынуждены адаптироваться к изменениям рынка,
            внедрять цифровые инструменты и развивать собственные инновационные
            решения. В этом контексте использование ИТ становится ключевым
            фактором для выживания и успешного развития предприятий.
          </p>
        </div>

        {/* Related posts */}
        <h2 className="text-2xl font-semibold mb-6">Может быть интересно</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {relatedPosts.map((post) => (
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
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
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
