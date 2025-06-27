"use client";

import React, { useEffect, useState } from "react";
import LogoPhraseOnly from "../Componentes/LogoRDSphrase";
import LogoCodeOnlymay from "../Componentes/LogoRDSmay"; // "<"
import LogoCodeOnlymen from "../Componentes/LogoRDSmen"; // "/>"
import LogoRDS_S from "../Componentes/LogoRDS_S";
import LogoRDS_D from "../Componentes/LogoRDS__D";
import LogoRDS_R from "../Componentes/LogoRDS__R";
import BackgroundSVG from "../Componentes/BackgroundSVG";

const phraseToType = "//reliable development software";

const Hero = () => {
  const [step, setStep] = useState(0);

  const [typedText, setTypedText] = useState("");

  // Máquina de escribir frase inicial
  useEffect(() => {
    if (step === 1 && typedText.length < phraseToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(phraseToType.slice(0, typedText.length + 1));
      }, 60);
      return () => clearTimeout(timeout);
    }

    if (step === 1 && typedText.length === phraseToType.length) {
      setTimeout(() => setStep(2), 50);
    }
  }, [typedText, step]);

  // Inicio automático
  useEffect(() => {
    const timer = setTimeout(() => setStep(1), 800);
    return () => clearTimeout(timer);
  }, []);

  // Del paso 2 al 3
  useEffect(() => {
    if (step === 2) {
      setTimeout(() => setStep(3), 1000);
    }
  }, [step]);

  // Animación progresiva de la etiqueta <rds/>
  useEffect(() => {
    if (step === 3) setTimeout(() => setStep(4), 100); // separar símbolos
    if (step === 4) setTimeout(() => setStep(5), 120); // mostrar d
    if (step === 5) setTimeout(() => setStep(6), 120); // mostrar r y d
    if (step === 6) setTimeout(() => setStep(7), 120); // mostrar r, d y s
  }, [step]);

  return (
    <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Máquina de escribir */}
      {step === 1 && (
        <div className="text-white font-Arial text-4xl">
          {typedText}
          <span className="animate-pulse">|</span>
        </div>
      )}

      {/* Frase SVG */}
     
      {step >= 2 && (
        <div
          style={{
            position: "absolute",
            top: "40.8%",
            left: "48.7%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <LogoPhraseOnly width={1150} height={550} />
        </div>
      )}

 
      {step >= 3 && (
        <>
          <div
            style={{
              position: "absolute",
              top: "38%",
              left: step >= 4 ? "49%" : "36%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              transition: "left 0.6s ease",
            }}
          >
            <LogoCodeOnlymay width={800} height={800} />
          </div>
          <div
            style={{
              position: "absolute",
              top: "38%",
              left: step >= 4 ? "49%" : "62%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              transition: "left 0.6s ease",
            }}
          >
            <LogoCodeOnlymen width={800} height={800} />
          </div>

        </>
      )}  

     

      {step >= 5 && (
        <>
         
          <div
            style={{
              position: "absolute",
              top: "37.5%",
              left: "48.5%",
              transform: "translate(-50%, -50%)",
              zIndex: 21,
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
              filter: "blur(5px)",
              opacity: 0,
              animation: "focusIn 2s ease-out forwards",
            }}
          >
              <LogoRDS_D width={800} height={800} />
          </div>
        </>
      )}
      {step >= 6 && (
        <>
          
          
          <div
            style={{
              position: "absolute",
              top: "37.5%",
              left: "49%",
              transform: "translate(-50%, -50%)",
              zIndex: 21,
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
              filter: "blur(5px)",
              opacity: 0,
              animation: "focusIn 1.5s ease-out forwards",
            }}
          >
              <LogoRDS_R width={800} height={800} />
          </div>
        </>
      )}
      {step >= 6 && (
        <>
          
          <div
            style={{
              position: "absolute",
              top: "37.5%",
              left: "48.5%",
              transform: "translate(-50%, -50%)",
              zIndex: 21,
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
              filter: "blur(5px)",
              opacity: 0,
              animation: "focusIn 1.5s ease-out forwards",
            }}
          >
              <LogoRDS_S width={800} height={800} />
          </div> 
        </>
      )}
      <BackgroundSVG />
    </section>
  );
};

export default Hero;

                           