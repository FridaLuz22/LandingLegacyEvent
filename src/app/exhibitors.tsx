"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? exhibitors.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === exhibitors.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full py-10 px-4">

      {/* MOBILE CAROUSEL */}
      <div className="md:hidden">
        <h2 className="text-xl font-heading font-bold tracking-widest text-center text-white mb-6">
          SPEAKERS
        </h2>
        <div className="relative flex items-center justify-center">

        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-2 bg-white/70 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="overflow-hidden w-full max-w-xs">

          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 70}%)`,
            }}
          >
            {exhibitors.map((card, index) => (
              <div
                key={card.id}
                className="min-w-[70%] px-2 flex justify-center"
              >
                <img
                  src={card.image}
                  alt=""
                  className={`rounded-lg transition-all duration-500 ${
                    index === currentIndex
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-60"
                  }`}
                />
              </div>
            ))}
          </div>

        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 bg-white/70 rounded-full"
        >
          <ChevronRight size={24} />
        </button>

        </div>
      </div>

      {/* DESKTOP - Título SPEAKERS + Imágenes con solapamiento */}
      <div className="hidden md:block mt-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold tracking-widest text-center text-white mb-8">
          SPEAKERS
        </h2>
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
