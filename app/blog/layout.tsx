// app/layout.tsx
import type { Metadata } from "next";

// API’dan SEO fetch qilish
async function getSEO() {
  try {
    const res = await fetch("http://185.4.65.234/api/seo/", {
      headers: {
        Authorization: `Token bc6040a552b68c265ae8114a08207a40f753ee6b`,
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
    title: seo.page_blog_title || "It outsourcing",
    description: seo.page_blog_description || "Default description",
    keywords: seo.page_blog_keywords || "",
    openGraph: {
      title: seo.page_blog_title,
      description: seo.page_blog_description,
      siteName: "It outsourcing",
      type: "website",
    },
  };
}

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
