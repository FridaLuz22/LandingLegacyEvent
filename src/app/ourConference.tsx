"use client";
import React, { useState } from 'react';

export default function OurConference() {
    const [videoId] = useState('W9tUnz5dvXg'); // Reemplaza con tu ID de video de YouTube

    return (
        <div className="conference-container bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-8 md:py-12">
            <h1 className="conference-title text-3xl md:text-4xl font-bold text-center text-[#01204C] mb-4">Nuestra Conferencia</h1>
            
            <p className="conference-description text-center text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
               Agregar detalles sobre el evento,
                fechas, temas a tratar y cualquier información relevante.
            </p>

            <div className="video-container max-w-4xl mx-auto">
                <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="Conference Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}