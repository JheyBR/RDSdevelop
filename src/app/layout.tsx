"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "../styles/index.css";

const SOCIAL_LINKS = [
  {
    name: "whatsapp",
    icon: "fab fa-whatsapp",
    href: "https://wa.me/573507535369?text=Hola,%20quiero%20hablar%20sobre%20un%20proyecto",
    label: "Hablemos de tu sistema",
  },
];

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <div className="fixed bottom-4 right-4 z-50 group">
            {SOCIAL_LINKS.filter(s => s.name === "whatsapp").map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                className="flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 
                          shadow-lg transition-all duration-300 hover:shadow-green-500/50"
              >
                <i className={`${social.icon} text-white text-xl`} />

                <span className="max-w-0 overflow-hidden text-sm font-semibold text-white 
                                transition-all duration-300 group-hover:max-w-xs">
                  {social.label}
                </span>
              </a>
            ))}
          </div>


         </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

