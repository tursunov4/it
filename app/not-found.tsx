import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

// 🔹 SEO uchun metadata
export const metadata: Metadata = {
  title: "404 - Страница не найдена",
  description: "Упс! Страница не найдена. Вернитесь на главную страницу.",
};

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="mx-auto flex flex-col items-center justify-center text-center my-20">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-white mb-6">Упс! Страница не найдена</p>
        <Link
          href="/"
          className="px-6 py-3 btn-gradient font-medium rounded-xl shadow hover:bg-gray-200 transition duration-300"
        >
          На главную
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
