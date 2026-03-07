"use client";

import Countdown from "./count";
import Cube from "@/components/cube";

export default function Hero() {
  return (
    <main className="min-h-screen relative pt-[68px] py-16 md:py-24 flex flex-col justify-center items-center w-full px-4 z-10 pb-14 md:pb-20">
      {/* Decoración de fondo */}
      <img
        src="/image/spiral.png"
        alt=""
        className="absolute right-0 top-[25px] md:top-0 max-w-[35%] md:max-w-[25%] opacity-90 pointer-events-none select-none"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"
        aria-hidden
      />

      <Cube className="top-[80vh] left-[45vw]" />
      <Cube className="top-[40vh] left-[25vw] [animation-delay:2s]" />
      <Cube className="top-[50vh] left-[75vw] [animation-delay:4s]" />

      {/* Subtítulo */}
      <div className="flex flex-col items-center gap-2 mb-2 md:mb-3">
        <span className="inline-block w-8 h-px bg-gradient-to-r from-transparent via-[#2f7df6]/80 to-transparent rounded-full" />
        <h2 className="font-heading text-[13px] md:text-[17px] tracking-[0.35em] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#e9f1f4] via-[#d9e6eb] via-70% to-[#2f7df6] text-center uppercase">
          Conferencia
        </h2>
        <p className="text-[11px] md:text-[13px] tracking-[0.25em] text-white/70 font-medium uppercase">
          Adolescentes · Jóvenes · Hijos de Pastores
        </p>
      </div>

      {/* Título principal */}
      <div className="relative text-center">
        <h1
          className="font-heading text-[20vw] sm:text-[18vw] md:text-[11vw] font-black uppercase leading-[0.85] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-[#e9f1f4] via-[#d9e6eb] via-65% to-[#2f7df6] drop-shadow-[0_4px_30px_rgba(47,125,246,0.25)] [text-shadow:0_0_60px_rgba(47,125,246,0.15)]"
          style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}
        >
          LEGACY
        </h1>

        {/* Versículo */}
        <div className="flex justify-center mt-3 md:mt-4">
          <div className="transform hover:rotate-0 hover:scale-[1.02] transition-all duration-300 -rotate-[3deg] inline-block">
            <span className="relative block bg-white text-[#0a1628] font-heading font-extrabold text-[0.85rem] md:text-[1.15rem] px-6 py-2.5 md:px-8 md:py-3 rounded-sm shadow-[0_8px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.1)_inset] border border-white/20">
              Zacarías 4:6
            </span>
          </div>
        </div>
      </div>

      {/* Fecha y lugar */}
      <div className="mt-8 md:mt-10 flex flex-col items-center gap-3 text-center max-w-md">
        <p className="text-white/90 font-medium text-sm md:text-base tracking-wide">
          14, 15 y 16 de mayo
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-white/80 text-sm">
          <span className="font-semibold text-white/95">Casa de Dios</span>
          <span className="text-white/50">·</span>
          <span>Av. Amazonas 1006, Tingo María — Perú</span>
        </div>
      </div>

      {/* Countdown */}
      <div className="mt-8 md:mt-10 w-full max-w-2xl">
        <Countdown />
      </div>
    </main>
  );
}
