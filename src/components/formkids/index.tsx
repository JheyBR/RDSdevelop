//src/components/formkids/index.tsx

"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import BackgroundSVG2 from "../Componentes/BackgroundSVG2";
import Image from "next/image";

export default function FormuKids() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => setMounted(true), []);
  const currentTheme = mounted ? theme : "dark";

  const titleClass =
    currentTheme === "dark"
      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"
      : "text-[#355CFF]";

  const [formData, setFormData] = useState({
    nombre: "",
    nombre2: "",
    apellido: "",
    apellido2: "",
    curso: "",
    grado: "",
    telefono: "",
    email: "",
    comentarios: "",
    programa: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (loading) return; 

  setLoading(true);

  await fetch(
    "https://script.google.com/macros/s/AKfycbxO5L3qXjovCrllTLpObs_8YGL5sPw6ANq6FM3Jr9M9flCKMOVB0yeU2i5swiS1kkXRXg/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData),
    }
  );

  setLoading(false);

  alert("Preinscripción enviada correctamente.");

  setFormData({
    nombre: "",
    nombre2: "",
    apellido: "",
    apellido2: "",
    curso: "",
    grado: "",
    telefono: "",
    email: "",
    comentarios: "",
    programa: "",
  });
};

  return (
    <section id="formukids" className="relative z-10 py-20">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* HERO */}
        <div className="text-center mb-16">
  
          {/* Logo RDS Kids */}
          

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Formamos creadores de tecnología.
            <br />
            <span className={titleClass}>
              No solo consumidores digitales.
            </span>
          </h1>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/kids.png"
              alt="RDS Kids Logo"
              width={500}
              height={250}
              className="w-40 md:w-56 lg:w-64 object-contain"
              priority
            />
          </div>

          <p className="mt-6 max-w-3xl mx-auto">
            RDS Kids es una academia de programación y desarrollo de videojuegos diseñada para que los colegios, en articulación con RDS, fortalezcan el pensamiento lógico, analítico y creativo de sus estudiantes. 
          </p>

          <p className="mt-6 max-w-3xl mx-auto">
            Nuestro objetivo es sentar las bases tecnológicas necesarias para que, en el futuro, puedan potenciar sus habilidades en el mundo del desarrollo de software.
          </p>

        </div>

        {/* FORMULARIO */}
        <div className="bg-white/80 dark:bg-[#181a2a]/80 border border-blue-500/30 rounded-xl p-8 mb-20 shadow-lg">
          <h2 className={`text-2xl font-bold mb-6 ${titleClass}`}>
            Formulario de Preinscripción
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Primer Nombre" required className="p-3 rounded-lg border border-blue-500/40" />
            <input type="text" name="nombre2" value={formData.nombre2} onChange={handleChange} placeholder="Segundo Nombre" required className="p-3 rounded-lg border border-blue-500/40" />
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} placeholder="Primer Apellido" required className="p-3 rounded-lg border border-blue-500/40" />
            <input type="text" name="apellido2" value={formData.apellido2} onChange={handleChange} placeholder="Segundo Apellido" required className="p-3 rounded-lg border border-blue-500/40" />

         
            <select
              name="grado"
              value={formData.grado}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-blue-500/40"
            >
              <option value="">Seleccione grado</option>
                <option value="Primaria">4A Primaria</option>
                <option value="Primaria">4B Primaria</option>
                <option value="Primaria">5A Primaria</option>
                <option value="Primaria">5B Primaria</option>
                <option value="Bachillerato">6A Bachillerato</option>
                <option value="Bachillerato">6B Bachillerato</option>
                <option value="Bachillerato">7A Bachillerato</option>
                <option value="Bachillerato">7B Bachillerato</option>
                <option value="Bachillerato">8A Bachillerato</option>
                <option value="Bachillerato">8B Bachillerato</option>
                <option value="Bachillerato">9A Bachillerato</option>
            </select>

            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required className="p-3 rounded-lg border border-blue-500/40" />

            <select
                name="programa"
                value={formData.programa}
                onChange={handleChange}
                disabled={!formData.grado}
                required
                className="p-3 rounded-lg bg-transparent border border-blue-500/40 focus:outline-none"
              >
                <option value="">Programa disponible</option>

                {formData.grado === "Primaria" && (
                  <option value="scratch">Scratch</option>
                )}

                {formData.grado === "Bachillerato" && (
                  <option value="roblox">Roblox Studio (Lua)</option>
                )}
              </select>

              
            {formData.grado === "Bachillerato" && (
              <p className="md:col-span-2 text-sm text-blue-600 dark:text-blue-400">
                * Para grados 6° a 9° también es posible cambiar Roblox Studio (Lua) por Python,
                dependiendo de la cantidad de estudiantes inscritos y la infraestructura
                tecnológica instalada en el colegio.
              </p>
            )}

            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico" required className="p-3 rounded-lg border border-blue-500/40" />

            <div className="md:col-span-2 text-center mt-4">
              <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 rounded-lg text-white font-semibold transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Enviando..." : "Enviar →"}
                </button>
            </div>

          </form>
        </div>
        <div className="mt-20 mb-24">

          {/* TÍTULO PRINCIPAL */}
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-6 ${titleClass}`}>
              ACADEMIA DE PROGRAMACIÓN RDS Kids
            </h2>
            <h3 className="text-2xl font-semibold mb-4">
              Programación de Videojuegos para Niños y Jóvenes
            </h3>

            <p className="max-w-3xl mx-auto text-body-color dark:text-body-color-dark leading-relaxed">
              Formamos niños y jóvenes en programación a través de videojuegos y tecnología real.
              RDS Kids enseña pensamiento lógico, creatividad y resolución de problemas
              con un enfoque práctico, progresivo y adaptado a cada edad.
            </p>

            <p className="mt-4 text-lg font-semibold">
              No es solo aprender a jugar. Es aprender a crear.
            </p>
          </div>

          {/* RUTA DE APRENDIZAJE */}
          <div className="mb-20">
            <h3 className={`text-2xl font-bold text-center mb-10 ${titleClass}`}>
              Ruta de Aprendizaje
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="border border-blue-500/30 rounded-xl p-6 bg-white/70 dark:bg-[#181a2a]/70">
                <h4 className="text-xl font-bold mb-3">🧩 Scratch</h4>
                <p>
                  Introducción a la lógica y pensamiento computacional para niños.
                  Secuencias, eventos, condicionales y creatividad mediante proyectos interactivos.
                </p>
              </div>

              <div className="border border-blue-500/30 rounded-xl p-6 bg-white/70 dark:bg-[#181a2a]/70">
                <h4 className="text-xl font-bold mb-3">🎮 Roblox Studio (Lua)</h4>
                <p>
                  Desarrollo de videojuegos interactivos.
                  Programación estructurada aplicada a mundos virtuales y experiencias jugables.
                </p>
              </div>

              <div className="border border-blue-500/30 rounded-xl p-6 bg-white/70 dark:bg-[#181a2a]/70">
                <h4 className="text-xl font-bold mb-3">🐍 Python</h4>
                <p>
                  Lógica avanzada, automatización y bases sólidas de programación real.
                  Ideal para estudiantes que desean profundizar en el mundo tecnológico.
                </p>
              </div>

              <div className="border border-blue-500/30 rounded-xl p-6 bg-white/70 dark:bg-[#181a2a]/70">
                <h4 className="text-xl font-bold mb-3">🌐 Desarrollo Web</h4>
                <p>
                  Introducción a HTML, CSS y JavaScript.
                  Creación de páginas web reales y comprensión del funcionamiento de internet.
                </p>
              </div>

            </div>
          </div>

          {/* BENEFICIOS */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className={`text-2xl font-bold mb-8 ${titleClass}`}>
              Beneficios Clave
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">

              <div className="border border-blue-500/20 rounded-lg p-5">
                ✔ Estimula lógica y creatividad
              </div>

              <div className="border border-blue-500/20 rounded-lg p-5">
                ✔ Introducción lúdica a la programación
              </div>

              <div className="border border-blue-500/20 rounded-lg p-5">
                ✔ Habilidades del siglo XXI
              </div>

              <div className="border border-blue-500/20 rounded-lg p-5">
                ✔ Aprendizaje progresivo según edad y nivel
              </div>

              <div className="border border-blue-500/20 rounded-lg p-5">
                ✔ Bases sólidas para futuras carreras tecnológicas
              </div>

              <div className="border border-blue-500/20 rounded-lg p-5">
                ✔ Certificación digital
              </div>

            </div>
          </div>

        </div>
      </div>
      <BackgroundSVG2 />
    {loading && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white dark:bg-[#181a2a] p-8 rounded-xl flex flex-col items-center gap-4 shadow-xl">
      
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="font-semibold text-center">
        Enviando información...
      </p>

    </div>
  </div>
)}
    </section>
  );
}