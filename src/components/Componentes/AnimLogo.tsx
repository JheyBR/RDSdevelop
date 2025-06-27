  "use client";

  import React, { useEffect, useState } from "react";
  import LogoPhraseOnly from "../Componentes/LogoRDSphrase";
  import LogoCodeOnlymay from "../Componentes/LogoRDSmay";
  import LogoCodeOnlymen from "../Componentes/LogoRDSmen";
  import LogoRDS_S from "../Componentes/LogoRDS_S";
  import LogoRDS_D from "../Componentes/LogoRDS__D";
  import LogoRDS_R from "../Componentes/LogoRDS__R";

  const phraseToType = "//reliable development software";

  const AnimLogo = ({
    phrase = phraseToType,
    textSize = "text-4xl md:text-5xl",
    logoSize = 800,
    phraseSize = 1150,
    height = "h-screen",
    center = true,
  }: {
    phrase?: string;
    textSize?: string;
    logoSize?: number;
    phraseSize?: number;
    height?: string;
    center?: boolean;
  }) => {
    const [step, setStep] = useState(0);
    const [typedText, setTypedText] = useState("");

    useEffect(() => {
      if (step === 1 && typedText.length < phrase.length) {
        const timeout = setTimeout(() => {
          setTypedText(phrase.slice(0, typedText.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      }

      if (step === 1 && typedText.length === phrase.length) {
        setTimeout(() => setStep(2), 50);
      }
    }, [typedText, step, phrase]);

    useEffect(() => {
      const timer = setTimeout(() => setStep(1), 800);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      if (step === 2) {
        setTimeout(() => setStep(3), 1000);
      }
    }, [step]);

    useEffect(() => {
      if (step === 3) setTimeout(() => setStep(4), 100);
      if (step === 4) setTimeout(() => setStep(5), 120);
      if (step === 5) setTimeout(() => setStep(6), 120);
      if (step === 6) setTimeout(() => setStep(7), 120);
    }, [step]);

    return (
      <section
        className={`relative ${height} bg-black ${center ? "flex items-center justify-center" : ""} overflow-hidden`}
      >
        {/* Máquina de escribir */}
        {step === 1 && (
          <div className={`text-white font-Arial ${textSize}`}>
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
        )}

        {/* Frase SVG */}
        {step >= 2 && (
          <div className="absolute top-[38.5%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
            <LogoPhraseOnly width={phraseSize} height={phraseSize / 2} />
          </div>
        )}

        {/* Etiqueta <rds/> */}
        {step >= 3 && (
          <>
            <div
              className={`absolute top-[38%] ${step >= 4 ? "left-[49%]" : "left-[36%]"} -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ease-in-out`}
            >
              <LogoCodeOnlymay width={logoSize} height={logoSize} />
            </div>
            <div
              className={`absolute top-[38%] ${step >= 4 ? "left-[49%]" : "left-[62%]"} -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ease-in-out`}
            >
              <LogoCodeOnlymen width={logoSize} height={logoSize} />
            </div>
          </>
        )}

        {/* Letras progresivas */}
        {step >= 5 && (
          <div className="absolute top-[37.5%] left-[48.5%] -translate-x-1/2 -translate-y-1/2 z-30 flex gap-2 items-center justify-center blur-sm opacity-0 animate-[focusIn_2s_ease-out_forwards]">
            <LogoRDS_D width={logoSize} height={logoSize} />
          </div>
        )}

        {step >= 6 && (
          <>
            <div className="absolute top-[37.5%] left-[49%] -translate-x-1/2 -translate-y-1/2 z-30 flex gap-2 items-center justify-center blur-sm opacity-0 animate-[focusIn_1.5s_ease-out_forwards]">
              <LogoRDS_R width={logoSize} height={logoSize} />
            </div>
            <div className="absolute top-[37.5%] left-[48.5%] -translate-x-1/2 -translate-y-1/2 z-30 flex gap-2 items-center justify-center blur-sm opacity-0 animate-[focusIn_1.5s_ease-out_forwards]">
              <LogoRDS_S width={logoSize} height={logoSize} />
            </div>
          </>
        )}
      </section>
    );
  };

  export default AnimLogo;
