"use client";
import React, { useState } from "react";

export default function Choreography() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownloadBases = async () => {
    setIsDownloading(true);
    try {
      // Add your download logic here
      console.log("Downloading bases...");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleSubmitVideo = async () => {
    setIsSubmitting(true);
    try {
      // Add your video submission logic here
      console.log("Submitting video...");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-8 md:py-12">
      <div className="max-w-2xl mx-auto">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#01204C] mb-4">
          Concurso de Coreografía
        </h1>

        {/* Descripción */}
        <p className="text-center mt-2 text-sm md:text-lg text-black/80 font-medium tracking-wider md:text-lg mb-8 leading-relaxed">
          Descarga las bases de música y envía tu video de coreografía.
          Asegúrate de seguir todas las instrucciones y requisitos antes de
          enviar.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownloadBases}
            className=" px-4 md:px-8 py-3 bg-transparent border border-black text-black font-semibold rounded-full transition-all duration-200  sm:w-auto
            hover:shadow-lg hover:border-[#01204C] hover:text-[#01204C] active:scale-95disabled:bg-gray-400 disabled:text-gray-700 disabled:border-gray-400 disabled:shadow-none"
            disabled={isDownloading}
          >
            {isDownloading ? "Descargando..." : "Descargar Bases"}
          </button>

          <button
            onClick={handleSubmitVideo}
            className="px-6 md:px-8 py-3 bg-gradient-to-br from-[#0260E3] to-[#067A34]/50 text-white font-semibold rounded-full transition duration-200 w-full sm:w-auto hover:shadow-lg"
          >
            {isSubmitting ? "Enviando..." : "Enviar Video"}
          </button>
        </div>
      </div>
    </div>
  );
}
