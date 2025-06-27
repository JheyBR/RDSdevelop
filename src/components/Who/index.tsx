"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Who() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
        <section className="relative z-10 py-10 md:py-5 lg:py-10">
          <div className="container">
            
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[900px] text-center">
                  <h1 className="mt-5 mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    Digitalizamos el futuro de tu negocio
                  </h1>
                  <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    En RSDev no solo desarrollamos software; diseñamos soluciones estratégicas que impulsan la evolución de tu empresa hacia un futuro más inteligente, ágil y conectado.
                  </p>
                  <h2 className="mb-5 text-xl font-bold leading-tight text-black dark:text-white sm:leading-tight  md:leading-tight">
                    Más que tareas, creamos transformación
                  </h2>
                  <p className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                    Nos comprometemos con la transformación profunda: analizamos tus desafíos en detalle y colaboramos contigo hasta entregar resultados que generan impacto real y medible.
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                  
                  <div className="relative aspect-77/40 items-center justify-center">
                    <Image
                      src="/images/video/image.png"
                      alt="video image"
                      className="object-cover"
                      fill
                    />
                    <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                      <button
                        aria-label="video play button"
                        onClick={() => setOpen(true)}
                        className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 transition hover:bg-white"
                      >
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          className="fill-current"
                        >
                          <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-30 text-xl font-bold leading-tight text-black dark:text-white sm:leading-tight  md:leading-tight">
                Ingeniería Digital para la Transformación Empresarial
              </h2>
            </div>

            <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
              <div className="absolute bottom-0 left-0 right-0 z-[-1] "></div>
                <img src="/images/video/shape.svg" alt="shape" className="w-full" />
              </div>
            </div>
        </section>
      
      <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        videoId="L61p2uyiMSo"
      />

    </>
  );
};
