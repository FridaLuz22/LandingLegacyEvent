"use client";

import Spiral from "@/components/spiral";
import Countdown from "./count";
import Cube from "@/components/cube";

export default function Hero() {
  return (
    <main className="min-h-[80vh] relative md:min-h-[100vh] flex flex-col justify-center items-center w-full px-4 z-10 pb-20">
      <img src="/image/spiral.png" alt="" className="absolute right-0 top-[25px] md:top-0 max-w-[35%] md:max-w-[25%]"/>
      
      {/* <Spiral className="absolute right-0 top-0 max-w-[35%] opacity-40" /> */}
      <Cube className="top-[80vh] left-[45vw]" />
      <Cube className="top-[40vh] left-[25vw] [animation-delay:2s]" />
      <Cube className="top-[50vh] left-[75vw] [animation-delay:4s]" />
      <h2 className="font-heading text-[14px] md:text-[18px] tracking-[8px] font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#e9f1f4] via-[#d9e6eb] via-70% to-[#2f7df6] text-center uppercase mt-2">
        CONFERENCIA
      </h2>
      {/* TITLE */}

      <div>
        <h1 className="text-[22vw] md:text-[12vw] font-heading font-black uppercase leading-[0.8] tracking-[-2px] text-transparent bg-clip-text bg-gradient-to-b from-[#e9f1f4] via-[#d9e6eb] via-70% to-[#2f7df6] drop-shadow-[0_14px_12px_rgba(0,0,0,0.5)]">
          LEGACY
        </h1>
      {/* STICKER */}
      <div className="transform hover:rotate-0 transition-transform duration-300 -rotate-[4deg] flex justify-end">
        <div className="bg-white text-black font-heading font-extrabold text-[0.8rem] md:text-[1.2rem] px-6 md:py-3 inline-block transform skew-x-[-5deg] shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
          Zacarías 4:6
        </div>
        </div>
      </div>
      <Countdown />
    </main>
  );
}
