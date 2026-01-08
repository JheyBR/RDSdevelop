"use client";

import VideoModal from "@/components/video-modal";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import BackgroundSVG2 from "../Componentes/BackgroundSVG2";
import { useTheme } from "next-themes";

export default function Who() {
  const [isOpen, setOpen] = useState(false);

  const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
  
    // Evitar renderizado hasta que el componente esté montado
    useEffect(() => {
      setMounted(true);
    }, []);

   const currentTheme = mounted ? theme : "dark";

  const color2 = currentTheme === "dark" ? "#ffffff" : "var(--color-logo2)";
  const color3 = currentTheme === "dark" ? "#ffffff" : "var(--color-logo1)";

  const textClass =
  currentTheme === "dark"
    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400"
    : "text-[#35f]"; 

  return (
    <>
        <section className="relative z-10 ">
          <div className="container">
            <div className=" flex flex-wrap">
                <div className="relative w-full mb-5 align-items-center justify-center text-center">
                  <Image
                    src="/images/who/BannerPC.jpeg"
                    alt="Equipo de profesionales de RDS colaborando frente a computadoras en una oficina moderna y luminosa, ambiente de trabajo enfocado y positivo, fondo con elementos tecnológicos y decorativos"
                    width={1920}
                    height={100}
                    priority
                    className="w-full h-[100px] object-cover md:h-[180px] lg:h-[200px] fade-all-edges "
                  />
                  <h1 className="absolute inset-0 flex items-center justify-center px-4 text-white font-bold leading-tight lg:text-4xl  sm:text-4xl md:text-5xl">
                    “La mayoría de los negocios no tienen un problema digital.
Tienen un problema de enfoque”
                  </h1>
                </div>               
                
                <div className="w-full px-4">
                  <div className="mx-auto max-w-[1200px] text-center w-full px-4">
                    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-4 mt-10">
                      {/* Fondo blur azul alineado a la izquierda */}
                      <div className="relative z-10">
                        <div
                          className="absolute z-0 rounded-full pointer-events-none"
                          style={{
                            width: "1800px",
                            height: "80px",
                            top: "40%",
                            left: "-50px",
                            transform: "translateY(-50%)",
                            filter: "blur(60px)",
                            background:
                              "radial-gradient(circle at left, rgba(4, 0, 253, 0.85) 0%, rgba(16, 62, 148, 0.4) 30%, transparent 100%)",
                            opacity: 0.9,
                          }}
                        />
                        <p className="mb-12 font-bold text-xl leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                          Páginas web que no convierten, sistemas que no se adaptan al negocio
y una brecha tecnológica que empieza desde la educación.

Nada de eso se soluciona con plantillas ni improvisación.
                        </p>
                      </div>
                      <div className="relative mx-auto mb-8 w-full max-w-[350px]">
                        <div
                          className="absolute inset-0 rounded-lg pointer-events-none"
                          style={{
                            filter: "blur(30px)",
                            background:
                              "radial-gradient(circle at center, rgba(4, 0, 253, 0.85) 0%, rgba(16, 62, 148, 0.4) 60%, transparent 100%)",
                            opacity: 0.7,
                            zIndex: 0,
                          }}
                        />
                        <Image
                          src="/images/who/developerWho.jpeg"
                          alt="Imagen de un equipo de profesionales de RDS trabajando en un proyecto de software, con pantallas que muestran código y gráficos, ambiente colaborativo y tecnológico"
                          width={100}
                          height={100}
                          className="relative rounded-lg object-cover w-full"
                          style={{ zIndex: 1 }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-15 mt-10">
                      <h2 className={`text-3xl sm:text-3xl md:text-xl lg:text-3xl font-bold ${textClass}`}>
                        Vamos más allá de lo técnico. Analizamos tus desafíos, diseñamos contigo cada paso y entregamos resultados medibles.
                      </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-8 mb-4">
                      {/* Tarjeta 1 */}
                      <div className="relative group flex-1 min-w-[380px] max-w-[600px] flex flex-col justify-between bg-white dark:bg-[#181a2a] bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border border-blue-500">
                      <div
                        className="absolute inset-0 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"
                        style={{
                        filter: "blur(24px)",
                        background:
                          "radial-gradient(circle at center, rgba(4, 0, 253, 0.15) 0%, rgba(16, 62, 148, 0.08) 60%, transparent 100%)",
                        zIndex: 0,
                        }}
                      />
                      <p className="relative mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl p-6 z-10">
                        Te adaptas, o desapareces. Transformamos tu negocio desde las entrañas. Es el inicio de tu revolución digital.
                      </p>
                      <div className="w-full px-4 mb-5">
                        <button className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark w-full">
                        🔥 Quiero transformar mi negocio
                        </button>
                      </div>
                      </div>
                      {/* Tarjeta 2 */}
                      <div className="relative group flex-1 min-w-[380px] max-w-[600px] flex flex-col justify-between bg-white dark:bg-[#181a2a] bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-lg overflow-hidden transition-all duration-300 border border-blue-500">
                      <div
                        className="absolute inset-0 pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100"
                        style={{
                        filter: "blur(24px)",
                        background:
                          "radial-gradient(circle at center, rgba(4, 0, 253, 0.15) 0%, rgba(16, 62, 148, 0.08) 60%, transparent 100%)",
                        zIndex: 0,
                        }}
                      />
                      <p className="relative mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl p-6 z-10">
                        Cada línea de código es parte de una estrategia, tu crecimiento, porque no solo creamos sistemas, creamos transformación en presencia.
                      </p>
                      <div className="w-full px-4 mb-5">
                        <button className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark w-full">
                        💡 Muéstrame cómo lo hacen
                        </button>
                      </div>
                      </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-4">
                    </div>
                  </div>
                </div>
            </div>
          </div>
        <BackgroundSVG2 /> {/* Fondo decorativo en forma de SVG */}
          
        </section>
    </>
  );
};


{/*<h2 className="mb-30 text-xl font-bold leading-tight text-black dark:text-white sm:leading-tight  md:leading-tight">*/}
