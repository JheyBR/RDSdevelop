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
      {/* Línea lateral activa */}
      <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-500 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100" />

      <div className="relative rounded-2xl border border-blue-500/15 bg-white dark:bg-[#0b0f1a] p-8 transition-all duration-300
        hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]">

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 transition-all duration-300 group-hover:scale-110">
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

        {/* Expanded content */}
        <div
          className={`grid transition-all duration-300 ${
            open ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-sm text-body-color/80 border-t border-blue-500/20 pt-4">
              Este paso reduce riesgos, mejora decisiones y asegura que cada acción tenga un impacto medible.
            </p>
          </div>
        </div>

        {/* Indicator */}
        <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-blue-500/70">
          {open ? "Menos detalle" : "Más detalle"}
          <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>↓</span>
        </span>
      </div>
    </div>
  );
};

export default SingleFeature;
