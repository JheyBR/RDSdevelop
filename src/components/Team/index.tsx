"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const teamData = [
  {
    id: 1,
    name: "Jheison Barbosa",
    role: "Ingeniería de Proyectos · Frontend · DevOps",
    description:
      "Conecta las necesidades del negocio con soluciones bien diseñadas. Lidera la comunicación, cuida la experiencia visual y asegura despliegues estables.",
    highlights: [
      "Comunicación con el cliente",
      "Frontend moderno",
      "Infraestructura y DevOps",
    ],
    image: "/images/team/jheisonB.png",
  },
  { 
    id: 2,
    name: "Luis Toncel",
    role: "Ingeniería de Sistemas · Arquitectura de Software",
    description:
      "Diseña la arquitectura que sostiene todo el sistema, garantizando escalabilidad, seguridad y crecimiento sin reprocesos.",
    highlights: [
      "Arquitectura limpia",
      "Bases de datos",
      "Decisiones técnicas a largo plazo",
    ],
    image: "/images/team/luis.png",
  },
  {
    id: 3,
    name: "Leidi Lizcano",
    role: "Backend · Bases de Datos · Atención al Cliente",
    description:
      "Desarrolla la lógica del sistema y acompaña al cliente durante todo el proceso, asegurando seguimiento y soporte continuo.",
    highlights: [
      "Backend robusto",
      "Gestión de datos",
      "Soporte y acompañamiento",
    ],
    image: "/images/team/leidi.png",
  },
];

const Team = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const currentTheme = mounted ? theme : "dark";

  const titleClass =
    currentTheme === "dark"
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
      : "text-[#355CFF]";

  return (
    <section id="team" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Intro */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-15">
            El equipo detrás de tu solución,
            <br />
            <span className={titleClass}> en tu proyecto</span>
          </h2>
        </div>

        {/* Header */}
        <div className="relative mb-16 text-center">
          <Image
            src="/images/who/BannerPC.jpeg"
            alt="Equipo RDS"
            width={1920}
            height={200}
            className="w-full h-[100px] object-cover rounded-xl opacity-25 fade-all-edges"
            priority
          />
          <h2 className="absolute inset-0 flex items-center justify-center px-6 text-center text-white font-bold leading-tight text-[clamp(1.5rem,3vw,1.5rem)]">
            Un equipo comprometido y responsable de cada decisión técnica.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-2xl border border-blue-500/30 bg-blue-500/5 p-8 transition"
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                style={{
                  filter: "blur(120px)",
                  background:
                    "radial-gradient(circle at top, rgba(74,108,247,0.25), transparent 70%)",
                }}
              />

              {/* Avatar */}
              <div className="relative z-10 mb-6 flex justify-center">
                <div className="h-28 w-28 overflow-hidden rounded-full border border-blue-500/40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={150}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-bold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-body-color">
                  {member.role}
                </p>

                <p className="mt-4 text-base leading-relaxed text-body-color">
                  {member.description}
                </p>

                <ul className="mt-6 space-y-2 text-sm text-body-color">
                  {member.highlights.map((item, index) => (
                    <li key={index} className="flex items-center justify-center gap-2">
                      <span className="text-blue-400">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-2xl font-semibold text-white">
            Trabajas directamente con quienes construyen tu solución.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=+573507535369&text=Hola%20Quiero%20que%20hablemos%20sobre%20mi%20proyecto%20y%20las%20necesidades%20del%20mismo..."
            className="inline-flex items-center gap-3 text-lg font-medium text-blue-400 group"
          >
            Hablemos de tu proyecto
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
