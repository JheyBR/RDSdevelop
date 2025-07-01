"use client";
import React, { useEffect, useState } from "react";
import BackgroundSVG from "../Componentes/BackgroundSVG";
import LogoOficial from "../Componentes/LogoOficial";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import ConstructionScreen from "../Componentes/ConstructionScreen";

const phrases = [
  "Pagina en Construcción",
  "Diseñamos realidades digitales que transforman negocios",
  "Evolucionamos contigo, la tecnología no espera",
  "Creamos soluciones que generan impacto.",
  "Damos tu punto de partida hacia un cambio digital.",
];

const phraseToType = "//Pagina en Construcción";

const Hero = () => {
  const { theme } = useTheme(); // Detecta si es dark o light

  const color2 = theme === "dark" ? "#ffffff" : "#0400FD";
  const color3 = theme === "dark" ? "#ffffff" : "#103E94";

  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [introDone, setIntroDone] = useState(false);
  const [index, setIndex] = useState(0);

  // Máquina de escribir frase inicial
  useEffect(() => {
    if (step === 1 && typedText.length < phraseToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(phraseToType.slice(0, typedText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }

    if (step === 1 && typedText.length === phraseToType.length) {
      setTimeout(() => {
        setStep(2);
        setIntroDone(true); // ✅ Aquí se activa la rotación de frases
      }, 500);
    }
  }, [typedText, step]);

  // Inicio automático
  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 800);
    return () => clearTimeout(timer);
  }, []);

  // Cambia frases cada 5 segundos una vez termina intro
  useEffect(() => {
    if (!introDone) return;
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [index, introDone]);

  const textClass =
  theme === "dark"
    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400"
    : "text-[#35f]";

  return (
    <section
      id="home"
      className="relative z-10 pb-2 mb-20 pt-[120px]">
      {/*className="relative z-10 pb-2 mb-20 pt-[120px] md:pb-[10px] md:pt-[50px] xl:pb-[10px] xl:pt-[60px] 2xl:pb-[20px] 2xl:pt-[220px]"*/}
    
      {/* Cambia el tamaño del logo usando un contenedor con clases de Tailwind */}

      <div className="mx-auto max-w-[1000px] text-center">
          {/* Logo y Pagina en construcción en una fila de dos columnas */}
          <div className="flex flex-row items-center justify-center gap-8 mb-4">
            {/* Logo RDS */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="mt-5 mb-5 w-150 h-auto">
                <LogoOficial color2={color2} color3={color3} />
              </div>
            </div>
            {/* Pagina en construcción */}
            <div>
              <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl text-black dark:text-white ">
                {step === 0 ? "//" : typedText}
              </h1>
              <ConstructionScreen />
            </div>
          </div>

          {/* Frases rotativas */}
          <div className="relative mt-5 mb-10 min-h-[120px] flex items-center justify-center">
            <div
            className="absolute z-10 rounded-full pointer-events-none"
            style={{
              width: "1500px",
              height: "100px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              filter: "blur(45px)",
              background:
              "radial-gradient(circle at center, rgba(4, 0, 253, 0.85) 0%, rgba(16, 62, 148, 0.4) 30%, transparent 100%)",
              opacity: 0.9,
            }}
            />
            <div className="relative z-20 flex items-center justify-center min-h-[120px] w-full">
            <AnimatePresence mode="wait">
              <motion.span
              className={`text-3xl sm:text-3xl md:text-xl lg:text-3xl font-bold ${textClass}`}
              key={index}
              initial={{ opacity: 0, scale: 0.6, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: -20 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
                
              >
              {phrases[index]}
              </motion.span>
            </AnimatePresence>
            </div>
          </div>
      </div>

      <BackgroundSVG />
    </section>
  );
};

export default Hero;