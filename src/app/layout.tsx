import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import ConditionalFooter from "@/components/ConditionalFooter";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/context/LanguageContext";

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const alinsa = localFont({
  src: [
    {
      path: "../fonts/Alinsa.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-alinsa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ingrid — Multimedia Portfolio | UX/UI, Graphic Design & Video/Photo",
  description:
    "Multidisciplinary portfolio: Mobile UX/UI prototyping, editorial & corporate graphic design, narrative short films, and artistic photography.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${satoshi.variable} ${alinsa.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-[#E6007A] selection:text-white">
        <LanguageProvider>
          <SmoothScroll>
            <Header />
            <main className="flex-1 w-full flex flex-col relative z-10 bg-white">
              {children}
            </main>
            <ConditionalFooter />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
