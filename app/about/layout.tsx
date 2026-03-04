// app/layout.tsx
import type { Metadata } from "next";

// API’dan SEO fetch qilish
async function getSEO() {
  try {
    const res = await fetch("https://true-team.ru/api/seo/", {
      headers: {
        Authorization: `Token 60ac092b74b21bd99d7de8c3f1e06d25c7bdba80`,
      },
      cache: "no-store", // har safar yangilanishi uchun
    });

    if (!res.ok) throw new Error("Failed to fetch SEO data");

    const data = await res.json();
    return data[0]; // API massiv qaytarsa, birinchi elementni olamiz
  } catch (error) {
    console.error("SEO fetch error:", error);
    return null;
  }
}

// generateMetadata → har sahifada SEO chiqishi uchun
export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSEO();

  if (!seo) {
    return {
      title: "It outsourcing",
      description: "Default description",
    };
  }

  return {
    title: seo.page_about_title || "It outsourcing",
    description: seo.page_about_description || "Default description",
    keywords: seo.page_about_keywords || "",
    openGraph: {
      title: seo.page_about_title,
      description: seo.page_about_description,
      siteName: "It outsourcing",
      type: "website",
    },
  };
}

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div>{children}</div>;
}
