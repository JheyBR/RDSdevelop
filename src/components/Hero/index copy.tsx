  "use client"; // Esto le dice a Next.js que este componente se ejecuta del lado del cliente (navegador).

  // Importamos cosas necesarias para que el componente funcione:
  import React, { useEffect, useState } from "react"; // React es para construir interfaces. useEffect y useState son herramientas especiales que nos ayudan a manejar el tiempo y cambios.
  import Image from "next/image"; // Esto sirve para cargar imágenes de forma optimizada en Next.js.
  import AnimLogo from "../Componentes/AnimLogo"; // Importamos un componente personalizado que muestra una animación del logo.
  import BackgroundSVG from "../Componentes/BackgroundSVG"; // Importamos un fondo en forma de dibujo SVG.

  const phrases = [ // Esta es una lista de frases que van cambiando en pantalla.
    "Diseñamos realidades digitales que transforman negocios",
    "Evolucionamos contigo, la tecnología no espera",
    "Creamos soluciones que generan impacto.",
    "Damos tu punto de partida hacia un cambio digital.",
  ];

  const Hero = () => { // Aquí comienza nuestro componente llamado Hero.
    const [introDone, setIntroDone] = useState(false); // Estado que indica si terminó la animación de entrada.
    const [logoShrunk, setLogoShrunk] = useState(false); // Estado que dice si el logo ya se hizo pequeño.
    const [index, setIndex] = useState(0); // Estado que guarda cuál frase se está mostrando.

    useEffect(() => {
      if (!introDone) return; // Si la introducción no ha terminado, no hacemos nada aún.

      const timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length); // Cambia a la siguiente frase cada 3 segundos. Vuelve al inicio si llega al final.
      }, 5000);

      return () => clearTimeout(timeout); // Limpia el temporizador para evitar errores.
    }, [index, introDone]); // Se activa cada vez que cambia el índice o cuando termina la intro.

    useEffect(() => {
      const introTimer = setTimeout(() => {
        setIntroDone(true); // Después de 5 segundos, marcamos que la intro ha terminado.
      }, 5000);

      const shrinkTimer = setTimeout(() => {
        setLogoShrunk(true); // También después de 5 segundos, el logo se hace pequeño.
      }, 5000);

      return () => {
        clearTimeout(introTimer); // Limpia los temporizadores si el componente desaparece.
        clearTimeout(shrinkTimer);
      };
    }, []); // Solo se ejecuta una vez cuando el componente se muestra por primera vez.

    const logoStyle: React.CSSProperties = { // Aquí le damos estilo al logo según los estados.
      position: "fixed", // Siempre se queda en el mismo lugar, sin importar el scroll.
      top: logoShrunk ? "0px" : introDone ? "58%" : "50%", // Cambia de posición cuando la animación termina o el logo se encoge.
      left: logoShrunk ? "0px" : introDone ? "48%" : "48%",
      width: logoShrunk ? "400px" : introDone ? "100px" : "800px", // Cambia el tamaño del logo.
      height: logoShrunk ? "750px" : introDone ? "100px" : "800px",
      transform: "translate(-50%, -50%)", // Centra el logo en la pantalla.
      opacity: introDone ? 0 : 1, // Desaparece cuando la intro termina.
      zIndex: logoShrunk ? 5 : 50, // Controla qué tan encima está el logo comparado con otras cosas.
      pointerEvents: introDone ? "none" : "auto", // Evita que se pueda hacer clic cuando termina la intro.
      transition: "all 0 ease-in-out", // Hace que los cambios sean suaves.
    };

    return (
      <section
        id="home"
        className="relative z-10 pb-2 mb-20 pt-[120px] md:pb-[20px] md:pt-[100px] xl:pb-[10px] xl:pt-[120px] 2xl:pb-[20px] 2xl:pt-[220px]"
      >
        {/* Aquí mostramos el logo con la animación */}
        <div style={logoStyle}>
          <AnimLogo
            phrase="//reliable development software" // Frase fija que aparece debajo del logo.
            textSize="text-3xl md:text-3.5xl"
            logoSize={logoShrunk ? 800 : introDone ? 100 : 800} // Tamaño del logo según el estado.
            phraseSize={logoShrunk ? 1200 : introDone ? 100 : 1000} // Tamaño de la frase.
            height="h-[90vh]" // Altura de la animación.
            center={true} // Centra la animación.
          />
        </div>

        {/* Aquí comienza el contenido que se muestra después de la animación */}
        <div
          className={`relative container z-20 duration-[1500ms] transition-opacity ease-in-out ${
            logoShrunk ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ transitionDelay: logoShrunk ? "0.5s" : "0s" }}
        >
          <div className="mx-auto max-w-[800px] text-center">
            <div className="flex flex-col items-center">
              <div className="flex flex-row items-center justify-center space-x-4">
                <h1 className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white sm:leading-tight md:leading-tight">
                  En
                </h1>
                <Image
                  src="/images/logo/LOGORDS-2025W.png" // Muestra una imagen del logo.
                  alt="logo"
                  width={160}
                  height={40}
                  className="mx-auto mb-2"
                />
              </div>
              <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white sm:leading-tight md:leading-tight">
                No hacemos Software. {/* Frase fuerte que impacta. */}
              </h1>
            </div>

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
                <span className="text-3xl sm:text-3xl md:text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400 transition-all duration-[2000ms] ease-in-out">
                  {phrases[index]} {/* Muestra la frase actual de la lista */}
                </span>
              </div>
            </div>
          </div>
        </div>
        <BackgroundSVG /> {/* Fondo decorativo en forma de SVG */}
      </section>
    );
  };

  export default Hero; // Exportamos el componente para que se pueda usar en otras partes.
