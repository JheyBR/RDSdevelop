  "use client"; // Esto le dice a Next.js que este componente se ejecuta del lado del cliente (navegador).

  // Importamos cosas necesarias para que el componente funcione:
  import React, { useEffect, useState } from "react"; // React es para construir interfaces. useEffect y useState son herramientas especiales que nos ayudan a manejar el tiempo y cambios.
  import Image from "next/image"; // Esto sirve para cargar imágenes de forma optimizada en Next.js.
  import AnimLogo from "../Componentes/AnimLogo"; // Importamos un componente personalizado que muestra una animación del logo.
  import BackgroundSVG from "../Componentes/BackgroundSVG"; // Importamos un fondo en forma de dibujo SVG.
  import LogoOficial from "../Componentes/LogoOficial";
  import { useTheme } from "next-themes";

    const phrases = [ // Esta es una lista de frases que van cambiando en pantalla.
      "Pagina En Construcción",
      "Diseñamos realidades digitales que transforman negocios",
      "Evolucionamos contigo, la tecnología no espera",
      "Creamos soluciones que generan impacto.",
      "Damos tu punto de partida hacia un cambio digital.",
    ];
  const phraseToType = "//reliable development software";
  const Hero = () => { // Aquí comienza nuestro componente llamado Hero.
    const { theme } = useTheme(); // detecta si es dark o light

    // Define los colores para cada modo
    const color2 = theme === "dark" ? "#ffffff" : "#0400FD"; // blanco en dark, azul en light
    const color3 = theme === "dark" ? "#ffffff" : "#103E94"; // gris claro en dark, azul más oscuro en light
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

        const [introDone, setIntroDone] = useState(false); // Estado que indica si terminó la animación de entrada.

        const [index, setIndex] = useState(0); // Estado que guarda cuál frase se está mostrando.
        
            useEffect(() => {
              if (!introDone) return; // Si la introducción no ha terminado, no hacemos nada aún.
        
              const timeout = setTimeout(() => {
                setIndex((prev) => (prev + 1) % phrases.length); // Cambia a la siguiente frase cada 3 segundos. Vuelve al inicio si llega al final.
              }, 5000);
        
              return () => clearTimeout(timeout); // Limpia el temporizador para evitar errores.
            }, [index, introDone]); // Se activa cada vez que cambia el índice o cuando termina la intro.

    return (
      <section
        id="home"
        className="relative z-10 pb-2 mb-20 pt-[120px] md:pb-[20px] md:pt-[100px] xl:pb-[10px] xl:pt-[120px] 2xl:pb-[20px] 2xl:pt-[220px]"
      >
           
          <div className="mx-auto max-w-[800px] text-center">

           
                <LogoOficial color2={color2} color3={color3} />
              <div className="flex flex-row items-center justify-center space-x-4">
                <br />
                <br />
                <br />

              </div>
            {/* Máquina de escribir */}
              {step === 1 && (
                <div className="text-black font-Arial text-4xl">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </div>
              )}
             
          

            {/* Aquí es donde van cambiando las frases una por una */}
            <div className="relative mt-10 mb-12 min-h-[120px] flex items-center justify-center">
              <div
                className="absolute z-10 rounded-full pointer-events-none"
                style={{
                  width: "1500px", // Un fondo grande con forma de halo o luz.
                  height: "100px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  filter: "blur(45px)", // Borroso para que parezca una luz suave.
                  background:
                    "radial-gradient(circle at center, rgba(4, 0, 253, 0.85) 0%, rgba(16, 62, 148, 0.4) 30%, transparent 100%)",
                  opacity: 0.9,
                }}  
              />
              <div className="relative z-20 flex items-center justify-center min-h-[120px] w-full">
                <div className="relative z-20 flex items-center justify-center min-h-[120px] w-full">
                                <span className="text-3xl sm:text-3xl md:text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 transition-all duration-[2000ms] ease-in-out">
                                  {phrases[index]} {/* Muestra la frase actual de la lista */}
                                </span>
                              </div>
              </div>
            </div>
          </div>
        
        <BackgroundSVG /> {/* Fondo decorativo en forma de SVG */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          
        </div>
      </section>
    );
  };

  export default Hero; // Exportamos el componente para que se pueda usar en otras partes.
