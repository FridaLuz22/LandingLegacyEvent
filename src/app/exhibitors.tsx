'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';




interface Exhibitor {
  id: number;
  name: string;
  description: string;
  image: string;
}

const exhibitors: Exhibitor[] = [
  {
    id: 1,
    name: 'Exhibitor One',
    description: 'Descripción del expositor',
    image: '/images/exhibitor1.jpg',
  },
  {
    id: 2,
    name: 'Exhibitor Two',
    description: 'Descripción del expositor',
    image: '/images/exhibitor2.jpg',
  },
  {
    id: 3,
    name: 'Exhibitor Three',
    description: 'Descripción del expositor',
    image: '/images/exhibitor3.jpg',
  },
];

export default function Exhibitors() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? exhibitors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === exhibitors.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full px-4 py-12">
      <h2 className="text-3xl font-heading text-center mb-8 text-white ">Expositores</h2>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        <div className="relative flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full max-w-xs">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={exhibitors[currentIndex].image}
                alt={exhibitors[currentIndex].name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {exhibitors[currentIndex].name}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {exhibitors[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="p-2 hover:bg-gray-200 rounded-full transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {exhibitors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {exhibitors.map((exhibitor) => (
          <div key={exhibitor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={exhibitor.image}
              alt={exhibitor.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{exhibitor.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{exhibitor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}