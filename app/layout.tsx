// app/layout.tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import ThankYouModal from "@/components/modal/ThankYouModal";
import ConsultationModal from "@/components/modal/ConsultationModal";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

// API’dan SEO fetch qilish
async function getSEO() {
  try {
    const res = await fetch("https://uslovie-true.ru/api/seo/", {
      headers: {
        Authorization: `Token fe548b78d11c03b75a46a427dde0b49de862195e`,
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
    title: seo.page_main_title || "It outsourcing",
    description: seo.page_main_description || "Default description",
    keywords: seo.page_main_keywords || "",
    openGraph: {
      title: seo.page_main_title,
      description: seo.page_main_description,
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
      <body className={`${manropeSans.variable} antialiased`}>
        <ModalProvider>
          <Header />
          {children}
          <Footer />
          <ThankYouModal />
          <ConsultationModal />
        </ModalProvider>
      </body>
    </html>
  );
}
