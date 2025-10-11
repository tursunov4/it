// app/layout.tsx
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script"; // ✅ Yandex.Metrika uchun
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import ThankYouModal from "@/components/modal/ThankYouModal";
import ConsultationModal from "@/components/modal/ConsultationModal";

// Font
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
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch SEO data");

    const data = await res.json();
    return data[0];
  } catch (error) {
    console.error("SEO fetch error:", error);
    return null;
  }
}

// generateMetadata → SEO uchun
export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSEO();

  if (!seo) {
    return {
      title: "It outsourcing",
      description: "Default description",
      other: {
        "yandex-verification": "51b99d074829ad3b",
      },
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
    other: {
      "yandex-verification": "51b99d074829ad3b",
    },
  };
}

// RootLayout
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        {/* ✅ Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) return;
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],
              k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(104533567, 'init', {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104533567"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>

      <body className={`${manropeSans.variable} antialiased`}>
        <ModalProvider>
          <Header />
          {/* ✅ 404 bo‘layotgan linklar uchun fallback router ishlatish */}
          <main>{children}</main>
          <Footer />
          <ThankYouModal />
          <ConsultationModal />
        </ModalProvider>
      </body>
    </html>
  );
}
