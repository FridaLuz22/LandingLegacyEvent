"use client";

interface ExhibitorCard {
  id: number;
  image: string;
}

const exhibitors: ExhibitorCard[] = [
  { id: 1, image: "/image/image1.svg" },
  { id: 2, image: "/image/image2.svg" },
  { id: 3, image: "/image/image3.svg" },
];

export default function Exhibitors() {
  return (
    <div className="w-full py-10 px-4">

      {/* MOBILE - Speakers en vertical */}
      <div className="md:hidden">
        <h2 className="text-xl font-heading font-bold tracking-widest text-center text-white mb-2">
          SPEAKERS
        </h2>
        <p className="text-sm text-white/80 text-center max-w-xl mx-auto mb-6">
          Voces inspiradoras que compartirán su fe y experiencias para fortalecer tu camino espiritual.
        </p>
        <div className="flex flex-col items-center gap-6">
          {exhibitors.map((card) => (
            <div key={card.id} className="w-full max-w-xs flex justify-center">
              <img
                src={card.image}
                alt=""
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP - Título SPEAKERS + Imágenes con solapamiento */}
      <div className="hidden md:block mt-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-widest text-center text-white mb-2">
          SPEAKERS
        </h2>
        <p className="text-sm md:text-base text-white/80 text-center max-w-2xl mx-auto mb-8">
          Voces inspiradoras que compartirán su fe y experiencias para fortalecer tu camino espiritual.
        </p>
        <div className="flex justify-center items-end overflow-hidden">
          {exhibitors.map((card, index) => {
            const overlapClasses = ["z-10", "z-20 -ml-44", "z-30 -ml-44"][index];
            return (
            <div
              key={card.id}
              className={`relative ${overlapClasses} group cursor-pointer`}
            >
              <img
                src={card.image}
                alt=""
                className="w-full max-w-[750px] rounded-lg shadow-lg transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl"
              />
            </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
