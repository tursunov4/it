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

export const metadata: Metadata = {
  title: "It autsorcing",
  description: "it autsorcing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeSans.variable}  antialiased`}>
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
