"use client";

import featuresData from "./featuresData";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Search, Layers, Code2, RefreshCcw } from 'lucide-react';

const Features = () => {
  const [active, setActive] = useState(0);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  
  const stepIcons = [
                      Search,      // Diagnóstico
                      Layers,      // Arquitectura
                      Code2,       // Desarrollo
                      RefreshCcw,  // Iteración
                    ];

  useEffect(() => setMounted(true), []);
  const currentTheme = mounted ? theme : "dark";

  const titleClass =
    currentTheme === "dark"
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
      : "text-[#355CFF]"; 

  return (
    <section id="process" className="relative py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-15">
            Antes de escribir una línea de código, hay decisiones que
            <br />
            <span className={titleClass}> no se pueden saltar.</span>
          </h2>
        </div>
        {/* Header */}
        <div className="relative mb-16 text-center">
          <Image
            src="/images/who/BannerPC.jpeg"
            alt="Equipo RDS"
            width={1920}
            height={200}
            className="w-full h-[100px] object-cover rounded-xl opacity-25  fade-all-edges"
            priority
          />
          <h2 className="absolute inset-0 flex items-center justify-center px-6 text-center text-white font-bold leading-tight text-[clamp(1.5rem,3vw,1.5rem)]">
            ¿Cómo trabajamos?
          <br />Diseñamos sistemas con intención. Sin improvisación.
          </h2>

        </div>

        <div className="mb-20 text-center">
          
        </div>

        {/* Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-2  gap-16 items-start">

          {/* LEFT — Steps */}
          <div className="relative pl-8">
            <span className="absolute left-3 top-0 h-full w-px bg-blue-500/20" />

            {featuresData.slice(0, 4).map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActive(index)}
                className={`group relative mb-8 w-full text-left rounded-xl border 
                border-blue-500/40 bg-white/80 dark:bg-[#181a2a]/80 
                p-4  transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
                ${active === index ? "ring-2 ring-blue-500/60" : ""}`}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition"
                  style={{
                    filter: "blur(30px)",
                    background:
                      "radial-gradient(circle at bottom, rgba(53,92,255,0.25), transparent 70%)",
                  }}
                />
                {/* Dot */}
                <span
                  className={`mt-2 h-3 w-3 rounded-full transition-all ${
                    active === index
                      ? "bg-blue-500 scale-125"
                      : "bg-blue-500/40"
                  }`}
                />

                {/* Text */}
                <div className="relative z-10 flex gap-4 items-start">
                  {/* Number */}
                  <span className="lg:text-4xl md:text-4xl text-4xl font-bold text-blue-500/10 select-none">
                    0{index + 1}
                  </span>

                  {/* Text */}
                  <div>
                    <p className="text-xs tracking-widest text-blue-500 font-bold mb-1">
                      PASO
                    </p>

                    <h3 className="lg:text-xl md:text-md text-sm font-semibold text-black dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — Dynamic Panel */}
          <div className="flex flex-col justify-center items-center relative z-10">
            {/* Icon */}
            <div className="mb-6 flex justify-start">
              <div className=" text-blue-400">
                {(() => {
                  const Icon = stepIcons[active];
                  return <Icon size={90} strokeWidth={1.5} />;
                })()}
              </div>
            </div>            
            <div className="group relative rounded-xl border border-blue-500/40 
              bg-white/80 dark:bg-[#181a2a]/80 p-10 
              transition-all duration-300
              hover:shadow-xl">

              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition"
                style={{
                  filter: "blur(40px)",
                  background:
                    "radial-gradient(circle at bottom, rgba(53,92,255,0.25), transparent 70%)",
                }}
              />  
              
              <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
                {featuresData[active].title}
              </h3>

              <p className="text-lg text-body-color leading-relaxed mb-10">
                {featuresData[active].paragraph}
              </p>

              <p className="text-sm uppercase tracking-widest text-blue-500/70">
                {active === 0 && "El software sin contexto es solo gasto."}
                {active === 1 && "La tecnología sin estrategia no escala."}
                {active === 2 && "El código también comunica orden."}
                {active === 3 && "Lo estable también evoluciona."}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-15 text-center">
          <p className="text-3xl font-semibold text-black dark:text-white mb-4">
            ¿Tu sistema necesita orden?
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=+573507535369&text=Hola%20Quiero%20que%20hablemos%20sobre%20mi%20proyecto%20y%20las%20necesidades%20del%20mismo..."
            className="inline-flex items-center gap-3 text-xl font-medium text-blue-500 group"
          >
            Iniciemos una conversación
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

