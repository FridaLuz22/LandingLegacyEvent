'use client';
import React from "react";
import Image from "next/image";

export default function Band() {
  return (
    <div className="band-container">
      <div className="band-image-wrapper flex flex-col justify-center items-center gap-2">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#01204C] mb-4">
            Desde República Dominicana
          </h2>
          <p className="mt-2 text-sm md:text-lg text-black/80 font-medium tracking-wider max-w-2xl">
            Una banda con raíces caribeñas que fusiona la fe y la música para llevar un mensaje de esperanza y adoración desde el corazón de la isla.
          </p>
        </div>
        <div className="relative group cursor-pointer">
          {/* Gradiente de fondo tipo glow */}
          <img
            src="/image/gradient-green.svg"
            alt=""
            className="absolute -inset-16 -z-10 opacity-40 object-cover pointer-events-none rounded-lg"
            aria-hidden
          />
          <Image
            src="/image/barakband.png"
            alt="Imagen de la banda"
            width={800}
            height={600}
            priority
            className="relative rounded-lg shadow-lg transition-transform duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl"
          />
        </div>
      </div>
      <style jsx>{`
        .band-container {
          padding: 1rem;
          text-align: center;
        }
        .band-image-wrapper {
          
        }
        .band-image-inner {
          overflow: visible;
        }
        .band-image {
          display: block;
          animation: band-pulse 5s ease-in-out infinite;
        }
        @keyframes band-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .band-image {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
