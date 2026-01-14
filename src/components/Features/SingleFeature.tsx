"use client";
import { useState } from "react";
import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="group relative cursor-pointer"
    >
      {/* Línea lateral */}
      <span className="absolute left-0 top-0 h-full w-[2px] bg-blue-500/60 
        scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

      <div
        className="
          relative rounded-2xl border border-blue-500/20 
          bg-white/80 dark:bg-[#0b0f1a]/80 
          p-8 transition-all duration-500
          hover:translate-x-1
          hover:border-blue-500/50
          hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]
        "
      >
        {/* Icon */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl 
          bg-blue-500/10 text-blue-500 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
          {title}
        </h3>

        {/* Main text */}
        <p className="text-body-color text-base leading-relaxed">
          {paragraph}
        </p>

        {/* Expanded */}
        <div
          className={`grid transition-all duration-500 ${
            open
              ? "grid-rows-[1fr] opacity-100 mt-6"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm text-body-color/80 border-t border-blue-500/20 pt-4">
              Este paso evita decisiones reactivas y alinea tecnología con objetivos reales.
            </p>
          </div>
        </div>

        {/* CTA tipo Who / Mindset */}
        <span
          className="
            mt-6 inline-flex items-center gap-2 
            text-sm font-medium text-blue-500
            group
          "
        >
          {open ? "¿Qué sigue después?" : "¿Por qué este paso importa?"}
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </span>
      </div>
    </div>
  );
};

export default SingleFeature;
