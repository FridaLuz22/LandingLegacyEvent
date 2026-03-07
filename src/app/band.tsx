'use client';
import React from "react";
import Image from "next/image";

export default function Band() {
  return (
    <div className="band-container">
      <div className="band-image-wrapper flex justify-center">
        <Image
          src="/image/barakband.png"
          alt="Imagen de la banda"
          width={800}
          height={600}
          priority
        />
      </div>
      <style jsx>{`
        .band-container {
          padding: 2rem;
          text-align: center;
        }
        .band-image-wrapper {
          margin-top: 2rem;
        }
        .band-image-inner {
          overflow: visible;
        }
        .band-image {
          display: block;
          animation: band-pulse 5s ease-in-out infinite;
        }
        .band-shine {
          position: absolute;
          inset: 0;
          margin: 1rem;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255, 255, 255, 0.06) 45%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.06) 55%,
            transparent 60%
          );
          background-size: 200% 100%;
          pointer-events: none;
          animation: band-shine 4s ease-in-out infinite;
        }
        @keyframes band-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        @keyframes band-shine {
          0% {
            background-position: 150% 0;
          }
          100% {
            background-position: -50% 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .band-image,
          .band-shine {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
