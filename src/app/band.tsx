'use client';
import React from "react";
import Image from "next/image";

export default function Band() {
  return (
    <div className="band-container">
      {/* <h1 className="text-3xl font-heading text-center mb-8 text-white">Banda</h1> */}
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
          border-radius: 8px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
