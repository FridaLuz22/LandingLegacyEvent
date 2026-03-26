"use client";

interface ExhibitorCard {
  id: number;
  image: string;
  name: string;
  description: string;
}


export default function SpeakerCard({ image, name, description }: ExhibitorCard) {
  return (
    <div className="w-full max-w-xs rounded-2xl border border-gray-300 overflow-hidden shadow-sm bg-white">
      <div className="h-64 bg-gray-300 flex items-center justify-center">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="px-5 py-4">
        <h3 className="font-semibold text-[#01204C] text-lg ">{name}</h3>
        <p className="text-sm text-black/70 mt-1 text-justify">{description}</p>
      </div>
    </div>
  );
}
