"use client";

import { useState } from "react";

const services = [
  {
    id: 0,
    label: "Sitios Web",
    title: "Desarrollo de Sitios Web Profesionales",
    description:
      "Diseñamos y desarrollamos páginas web modernas, autoadministrables y optimizadas para buscadores (SEO). Pensadas para negocios que necesitan presencia digital sólida y funcional.",
    route: [
      "Contacto inicial (WhatsApp o formulario)",
      "Reunión de levantamiento de información",
      "Propuesta de diseño y estructura",
      "Aprobación y presupuesto",
      "Desarrollo web",
      "Entrega final y soporte postventa",
    ],
    benefits: [
      "Mayor visibilidad online",
      "Captación efectiva de clientes",
      "Diseño personalizado y escalable",
      "Optimización para motores de búsqueda",
      "Control completo sobre contenidos",
    ],
    cta: "Ver cómo construimos sitios que convierten",
  },
  {
    id: 1,
    label: "Software a Medida",
    title: "Software a la Medida & Plataforma SaaS (WIS)",
    description:
      "Implementamos nuestra plataforma SaaS WIS o desarrollamos software 100% a la medida cuando el proceso del negocio lo exige.",
    route: [
      "Diagnóstico y mapeo de procesos",
      "Evaluación de viabilidad con WIS",
      "Desarrollo e integración personalizada",
      "Pruebas y ajustes",
      "Capacitación y despliegue",
      "Soporte técnico según el plan",
    ],
    benefits: [
      "Adaptabilidad total al proceso",
      "Reducción de errores operativos",
      "Ahorro frente a soluciones genéricas",
      "Escalable y accesible",
      "Datos centralizados y seguros",
    ],
    cta: "Ver cómo ordenamos operaciones",
  },
  {
    id: 2,
    label: "RDS Kids",
    title: "RDS Kids — Programación de Videojuegos",
    description:
      "Programa educativo para niños desde los 8 años enfocado en lógica, creatividad y pensamiento computacional mediante videojuegos.",
    route: [
      "Registro del padre o madre",
      "Entrevista pedagógica de nivelación",
      "Asignación de grupo y plataforma",
      "Clases virtuales o presenciales",
      "Retroalimentación continua",
      "Certificación por niveles",
    ],
    benefits: [
      "Estimula lógica y creatividad",
      "Introducción lúdica a la programación",
      "Habilidades del siglo XXI",
      "Descubrimiento de vocaciones",
      "Certificación digital",
    ],
    cta: "Conocer el programa educativo",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative py-28">
      <div className="container max-w-7xl mx-auto px-6">

        {/* Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`group relative overflow-hidden rounded-xl border p-6 text-left transition-all
                  ${
                    activeService === index
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-blue-500/30"
                  }`}
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-40 group-hover:opacity-100 transition duration-300" 
                  style={{
                    filter: "blur(30px)",
                    background:
                      "radial-gradient(circle at bottom, rgba(53,92,255,0.25), transparent 70%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-xs tracking-widest text-blue-500 mb-2">
                    SERVICIO
                  </p>
                  <h3 className="text-2xl font-bold">
                    {service.label}
                  </h3>
                </div>
              </button>
            ))}
          </div>


        {/* Card principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 rounded-2xl border border-blue-500/40 p-14 bg-[#181a2a]/80">

          {/* LEFT */}
          <div>
            <p className="text-xs tracking-widest text-blue-500 mb-4">
              SERVICIO 0{activeService + 1}
            </p>

            <h2 className="text-4xl font-bold mb-6">
              {services[activeService].title}
            </h2>

            <p className="text-lg text-body-color mb-10">
              {services[activeService].description}
            </p>

            <button className="inline-flex items-center gap-3 text-blue-500 font-medium group">
              {services[activeService].cta}
              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid gap-6">
            <div className="rounded-xl border border-blue-500/30 p-6">
              <h4 className="font-semibold mb-4">Ruta del usuario</h4>
              <ul className="space-y-2 text-sm text-body-color">
                {services[activeService].route.map((step, i) => (
                  <li key={i}>• {step}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-blue-500/30 p-6">
              <h4 className="font-semibold mb-4">Beneficios clave</h4>
              <ul className="space-y-2 text-sm text-body-color">
                {services[activeService].benefits.map((benefit, i) => (
                  <li key={i}>• {benefit}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
