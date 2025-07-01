"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import BackgroundSVG2 from "../Componentes/BackgroundSVG2";

export default function Who() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
        <section className="relative z-10 ">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
                <div className="relative w-full mb-5 align-items-center justify-center text-center">
                  <Image
                    src="/images/who/BannerPC.jpeg"
                    alt="Equipo de profesionales de RDS colaborando frente a computadoras en una oficina moderna y luminosa, ambiente de trabajo enfocado y positivo, fondo con elementos tecnológicos y decorativos"
                    width={1920}
                    height={100}
                    priority
                    className="w-full h-[100px] object-cover md:h-[180px] lg:h-[200px] fade-all-edges "
                  />
                  <h1 className="absolute inset-0 flex items-center justify-center px-4 text-white text-3xl font-bold leading-tight sm:text-4xl md:text-5xl text-stroke">
                    Impulsamos tu negocio con desarrollo estratégico
                  </h1>
                </div>

                <div className="mx-auto max-w-[900px] text-center w-full px-4">
                  <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    En RDS, no solo desarrollamos software y páginas web. Diseñamos soluciones inteligentes que transforman tu empresa desde adentro hacia un futuro digital más ágil, eficiente y rentable.
                  </p>
                  <h2 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:leading-tight  md:leading-tight">
                    Vamos más allá de lo técnico. Analizamos tus desafíos, diseñamos contigo cada paso y entregamos resultados medibles.
                  </h2>
                  <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    Cada línea de código es parte de una estrategia más grande: tu crecimiento.
                  </p>
                  <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    Porque no solo creamos sistemas, creamos transformación real.
                  </p>
                </div>
            </div>
          </div>
        <BackgroundSVG2 /> {/* Fondo decorativo en forma de SVG */}
          
        </section>
      
      
    </>
  );
};


{/*<h2 className="mb-30 text-xl font-bold leading-tight text-black dark:text-white sm:leading-tight  md:leading-tight">*/}
