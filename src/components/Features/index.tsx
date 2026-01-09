"use client";
import { useState } from "react";
import featuresData from "./featuresData";
import Image from "next/image";

const Features = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative py-28 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">

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
            Cómo trabajamos
          <br />Diseñamos sistemas con intención. Sin improvisación.
          </h2>
          
        </div>

        <div className="mb-20 text-center">
          
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Steps */}
          <div className="relative pl-8">
            <span className="absolute left-3 top-0 h-full w-px bg-blue-500/20" />

            {featuresData.slice(0, 4).map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActive(index)}
                className={`group relative mb-10 flex items-start gap-6 text-left transition-all ${
                  active === index ? "opacity-100" : "opacity-60 hover:opacity-100"
                }`}
              >
                {/* Dot */}
                <span
                  className={`mt-2 h-3 w-3 rounded-full transition-all ${
                    active === index
                      ? "bg-blue-500 scale-125"
                      : "bg-blue-500/40"
                  }`}
                />

                {/* Text */}
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-500 mb-1">
                    0{index + 1}
                  </p>
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {feature.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* RIGHT — Dynamic Panel */}
          <div className="relative rounded-3xl border border-blue-500/20 bg-white dark:bg-[#0b0f1a] p-12 shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all">

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

        {/* CTA */}
        <div className="mt-28 text-center">
          <p className="text-3xl font-semibold text-black dark:text-white mb-4">
            ¿Tu sistema necesita orden?
          </p>

          <a
            href="#contact"
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

