"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ExhibitorCard {
  id: number;
  image: string;
}

const exhibitors: ExhibitorCard[] = [
  { id: 1, image: "/image/image10.png" },
  { id: 2, image: "/image/image10.png" },
  { id: 3, image: "/image/image10.png" },
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
      <div className="md:hidden relative flex items-center justify-center">

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

      {/* DESKTOP GRID */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mt-10">
        {exhibitors.map((card) => (
          <div key={card.id}>
            <img
              src={card.image}
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
