// app/blog/[id]/page.tsx
"use client";

import Image from "next/image";

const posts = Array.from({ length: 4 }).map((_, i) => ({
  id: i,
  title: "Конкуренция и технологии",
  excerpt:
    "Основными законами современного общества являются: свобода предпринимательства, право частной собственности...",
  date: "12.05.25",
  image: "/placeholder.png", // public papkaga placeholder qo'yishingiz mumkin
}));

export default function BlogDetailPage() {
  return (
    <div className=" min-h-screen py-10 text-white">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-6">
          <span className="hover:text-white cursor-pointer">Главная</span> /{" "}
          <span className="hover:text-white cursor-pointer">Блог</span> /{" "}
          <span className="text-white">Конкуренция и IT технологии</span>
        </div>

        {/* Post Title */}
        <h1 className="font-semibold  mb-[20px] md:mb-[30px] text-[20px] md:text-[34px]">
          Конкуренция и it технологии
        </h1>

        {/* Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10 md:mb-[48px]">
          <div className="w-full h-[300px] h-[490px] bg-white rounded-[16px] md:rounded-[22px]">
            <Image
              src="/placeholder.png"
              alt="Post image"
              width={200}
              height={200}
              className="opacity-70"
            />
          </div>
          <div>
            <div>
              <Image
                width={20}
                height={20}
                src="/svg/pencil.svg"
                alt="pencil"
              />
              <span>12.05.25</span>
            </div>
            <p>
              Основными законами современного общества являются: свобода
              предпринимательства, право частной собственности и наличие
              конкурентной среды. Предпринимательство получает стабильность
              только в условиях конкуренции, а главное условие конкуренции —
              эффективность производства. Развивающиеся страны имеют
              нестабильный, слабеющий и недостаточный результат, основное
              использование ресурсов — человеческие и денежные ресурсы.
            </p>
          </div>
        </div>

        {/* Post Content */}
        <div className="prose prose-invert max-w-none mb-10 text-gray-200 leading-relaxed">
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
        <h2 className="font-semibold  mb-[20px] md:mb-[40px] text-[20px] md:text-[34px]">
          Может быть интересно
        </h2>
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

                <button className="  w-full justify-center flex items-center cursor-pointer gap-[10px]  btn-gradient  text-[14px]  transition-all duration-500  font-semibold md:text-[16px]  text-white  rounded-[14px]  p-[10px]  border border-[#FFA362]">
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
