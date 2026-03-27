"use client";

import SpeakerCard from "@/components/speakerCard";

interface ExhibitorCard {
  id: number;
  image: string;
  name: string;
  description: string;
}

const exhibitors: ExhibitorCard[] = [
  {
    id: 1,
    image: "/image/image1.svg",
    name: "Jhonatan Boulanger (PERÚ)",
    description: "Un líder apasionado por formar generaciones firmes en identidad.",
  },
  {
    id: 2,
    image: "/image/image2.svg",
    name: "Carlos Escobar (ESPAÑA)",
    description: "Un pastor de convicción que inspira a vivir el evangelio con poder.",
  },
  {
    id: 3,
    image: "/image/image3.svg",
    name: "Daniel Páez (COLOMBIA)",
    description: "Impulsa a los jóvenes a vivir encendidos por el espíritu santo.",
  },
];

export default function Exhibitors() {
  return (
    <div className="w-full py-10 px-4 bg-gradient-to-br from-purple-50 to-blue-50">

      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#01204C] mb-4">
        Speakers Nacionales e Internacionales
      </h2>

      <p className="mt-2 text-sm md:text-lg text-black/80 font-medium tracking-wider max-w-2xl mx-auto mb-8 text-center">
        Voces inspiradoras que compartirán su fe y experiencias para fortalecer tu camino espiritual.
      </p>

      {/* GRID + Responsive overlap */}
      <div
        className="
           flex 
          flex-col md:flex-row 
          justify-center 
          items-center
          gap-6 md:gap-[66px]6px]
        "
      >
        {exhibitors.map((card, index) => {
          // const overlap = ["md:z-10", "md:z-20 md:-ml-44", "md:z-30 md:-ml-44"][index];

          return (
            <div
              className="transition-all duration-300 hover:shadow-xl hover:shadow-black/20 rounded-2xl"
              key={card.id}
            >
              <SpeakerCard {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
