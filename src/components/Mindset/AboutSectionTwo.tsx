import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { useState } from "react";  

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionTwo= () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

 
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
          <SectionTitle
            title="Sembramos talento desde el juego"
            paragraph="Creemos en una educación que empodera.  
                        Por eso creamos una escuela donde niños de 8 a 16 años aprenden lógica, diseño y código creando videojuegos."
            center
          /> 
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <SectionTitle
                title="Escuela de Programación"
                paragraph="Tecnología que transforma vidas"
                mb="44px"
              />
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                   Tecnología que transforma vidas
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Nuestra escuela enseña más que programación. Forma mentes creativas, críticas y colaborativas.
                  Desde los 8 hasta los 16 años, los niños aprenden con Scratch, Roblox Studio y Unity.
                  Crean, fallan, solucionan, y juegan creando su propio futuro.
                </p>
              </div>
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
             
                  <div className="w-full px-3 ">
                    <List text="✅ 1 beca por cada 3 estudiantes pagos" />
                    <List text="🤝 Patrocinio de empresas y entidades públicas" />
                    <List text="🕹️ Videojuegos reales creados por los alumnos" />
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
