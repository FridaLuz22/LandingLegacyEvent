"use client";

import Countdown from "./count";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] md:min-h-screen flex flex-col items-center justify-center text-white overflow-hidden pt-[40px] md:pt-[70px]">

      <img
        src="/image/hero_mob.png"
        alt="Hero Mobile"
        className="block md:hidden absolute inset-0 w-full h-full object-cover opacity-70"
      />

      <img
        src="/image/hero_web.png"
        alt="Hero Desktop"
        className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-black/55"></div>

      <div className="absolute top-[5%] left-[-25%] w-[90vw] h-[90vw] bg-[#2f7df6]/50 blur-[120px] rounded-full opacity-40 md:blur-[160px]"></div>
      <div className="absolute bottom-[-10%] right-[-20%] w-[75vw] h-[75vw] bg-purple-500/55 blur-[120px] rounded-full opacity-40 md:blur-[160px]"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
        
        <h2 className="tracking-[0.30em] uppercase font-semibold text-[10px] text-white/70 md:text-sm leading-[1.4]">
          Conferencia Internacional
        </h2>

        <p className="mt-4 text-[11px] md:text-sm uppercase tracking-[0.28em] text-white/90 leading-[1.5]">
          Adolescentes · Jóvenes · Hijos de Pastores
        </p>
        
        <h1 
          className="
            font-heading 
            text-[22vw] sm:text-[18vw] md:text-[11vw]
            font-black uppercase 
            leading-[0.8] 
            tracking-[-0.02em]
            text-transparent bg-clip-text bg-white
          "
          style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.20)' }}
        >
          LEGACY
        </h1>

        <p className="mt-4 md:mt-4 text-base text-white/90 leading-[1.4] md:leading-tight max-w-sm md:text-xl">
          Una conferencia diseñada para equipar, inspirar y llevarte a un nuevo nivel.
        </p>

        <p className="
          mt-4 
          text-lg md:text-3xl
          font-extrabold 
          tracking-[0.20em]
          text-[#2f7df6]
          drop-shadow-[0_0_25px_rgba(47,125,246,0.9)]
        ">
          14 · 15 · 16 de Mayo
        </p>

        <p className="
          mt-1 
          text-xs md:text-base 
          uppercase 
          tracking-[0.18em]
          text-white/85 
          font-semibold
        ">
          Casa de Dios · Av. Amazonas 1006, Tingo María — Perú
        </p>


        <button
          className="
            mt-6 
            px-8 py-3 
            rounded-full
            font-semibold 
            tracking-wide 
            uppercase
            text-white

            /* MODO MOBILE (activo siempre) */
            bg-[#2f7df6]/30
            border-[#2f7df6]/40
            shadow-[0_0_35px_rgba(47,125,246,0.8)]
            scale-[1.05]

            /* MODO DESKTOP (restaura lo normal) */
            md:bg-white/10
            md:border-white/20
            md:shadow-[0_8px_25px_rgba(255,255,255,0.25)]
            md:scale-100

            /* Hover DESKTOP */
            md:hover:bg-[#2f7df6]/30
            md:hover:border-[#2f7df6]/40
            md:hover:shadow-[0_0_35px_rgba(47,125,246,0.8)]
            md:hover:scale-[1.05]

            backdrop-blur-md 
            transition-all duration-300
          "
        >
          Comprar Entrada
        </button>

        <div className="mt-8 md:mt-10 w-full max-w-2xl">
          <Countdown />
        </div>

      </div>
    </section>
  );
}
