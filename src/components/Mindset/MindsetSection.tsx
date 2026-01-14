"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const mindsetCards = [
  {
    number: "01",
    tag: "CRITERIO",
    title: "Más código no es más solución",
    subtitle: "El exceso también rompe sistemas.",
    detail: `La mayoría de los proyectos fallan
no por falta de tecnología,
sino por decisiones mal tomadas
desde el primer día.`,
    cta: "¿Por qué pasa esto?",
  },
  {
    number: "02",
    tag: "ENFOQUE",
    title: "El problema casi nunca es técnico",
    subtitle: "Y tratarlo como tal cuesta caro.",
    detail: `Procesos mal definidos.
Objetivos difusos.
Software construyendo ruido
en lugar de impacto.`,
    cta: "¿Dónde está el error real?",
  },
  {
    number: "03",
    tag: "VISIÓN",
    title: "La diferencia está en el por qué",
    subtitle: "No en la herramienta.",
    detail: `Ahí se separan los proveedores
de los equipos que piensan,
deciden y construyen como socios.`,
    cta: "¿Cuál es la diferencia clave?",
  },
];

export default function Mindset() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => setMounted(true), []);
  const currentTheme = mounted ? theme : "dark";

  const titleClass =
    currentTheme === "dark"
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
      : "text-[#355CFF]"; 

  return (
    <section className="relative z-10 pt-5 lg:pt-15">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mt-0 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-15">
            No todo problema se soluciona con 
            <br /><span className={titleClass}> software.</span>
          </h2>
        </div>
        <div className="relative mb-16 text-center">
          <Image
            src="/images/Who/BannerPC.jpeg"
            alt="Equipo RDS"
            width={1920}
            height={200}
            className="w-full h-[100px] object-cover rounded-xl opacity-25  fade-all-edges"
            priority
          />
          <h1 className="absolute inset-0 flex items-center justify-center px-6 text-center text-white font-bold leading-tight text-[clamp(1.5rem,3vw,1.5rem)]">
            Y cuando se necesita, hacerlo sin criterio cuesta más que no hacerlo.
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mindsetCards.map((card, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="group relative cursor-pointer overflow-hidden
                rounded-xl border border-blue-500/40 
                bg-white/80 dark:bg-[#181a2a]/80 p-8
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Background Number */}
                <span className="absolute top-4 right-4 text-7xl font-bold 
                text-blue-500/10 select-none pointer-events-none">
                  {card.number}
                </span>

                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition"
                  style={{
                    filter: "blur(30px)",
                    background:
                      "radial-gradient(circle at bottom, rgba(53,92,255,0.25), transparent 70%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <span className="text-xs tracking-widest text-blue-500 font-bold">
                    {card.tag}
                  </span>

                  <h3 className={`mt-3 text-xl font-bold ${titleClass}`}>
                    {card.title}
                  </h3>

                  <p className="mt-2 text-body-color dark:text-body-color-dark">
                    {card.subtitle}
                  </p>

                  {/* Expand */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 mt-6" : "max-h-0"
                    }`}
                  >
                    <div className="border-l-2 border-blue-500 pl-4 
                    text-sm leading-relaxed text-body-color 
                    dark:text-body-color-dark whitespace-pre-line">
                      {card.detail}
                    </div>
                  </div>

                  <p className="mt-4 text-sm font-medium text-blue-500 inline-flex items-center gap-2 group">
                    {isOpen ? (
                      <>
                        Ocultar
                        <span className="transition-transform duration-300 group-hover:-translate-y-1.5">
                          ↑
                        </span>
                      </>
                    ) : (
                      <>
                        {card.cta}
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Anchor */}
        <div className="relative mt-10 max-w-2xl mx-auto text-center">
          <div
            className="group relative overflow-hidden rounded-xl 
            border border-blue-500/40 
            bg-white/80 dark:bg-[#181a2a]/80 
            p-12 transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-xl opacity-0 
              group-hover:opacity-100 transition"
              style={{
                filter: "blur(35px)",
                background:
                  "radial-gradient(circle at bottom, rgba(53,92,255,0.25), transparent 70%)",
              }}
            />

            {/* Content */}
            <h3 className="relative z-10 text-xl md:text-2xl font-bold">
              El software sin criterio{" "}
              <span className={titleClass}>es solo gasto.</span>
            </h3>
          </div>
        </div>


      </div>
    </section>
  );
}
