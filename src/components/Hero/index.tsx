  "use client"; // Esto le dice a Next.js que este componente se ejecuta del lado del cliente (navegador).

  // Importamos cosas necesarias para que el componente funcione:
  import React, { useEffect, useState } from "react"; // React es para construir interfaces. useEffect y useState son herramientas especiales que nos ayudan a manejar el tiempo y cambios.
  import Image from "next/image"; // Esto sirve para cargar imágenes de forma optimizada en Next.js.
  import AnimLogo from "../Componentes/AnimLogo"; // Importamos un componente personalizado que muestra una animación del logo.
  import BackgroundSVG from "../Componentes/BackgroundSVG"; // Importamos un fondo en forma de dibujo SVG.
  import LogoOficial from "../Componentes/LogoOficial";

  
  const Hero = () => { // Aquí comienza nuestro componente llamado Hero.
    

    return (
      <section
        id="home"
        className="relative z-10 pb-2 mb-20 pt-[120px] md:pb-[20px] md:pt-[100px] xl:pb-[10px] xl:pt-[120px] 2xl:pb-[20px] 2xl:pt-[220px]"
      >
        {/* Aquí mostramos el logo con la animación */}
        
        {/* Aquí comienza el contenido que se muestra después de la animación */}
        
          <div className="mx-auto max-w-[800px] text-center">
           
                <LogoOficial />
              <div className="flex flex-row items-center justify-center space-x-4">
                <br />
                <br />
                <br />

              </div>
              <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white sm:leading-tight md:leading-tight">
                Pagina En Construcción {/* Frase fuerte que impacta. */}
              </h1>
              <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white sm:leading-tight md:leading-tight">
                Se vienen Cositas {/* Frase fuerte que impacta. */}
              </h2>
          

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
