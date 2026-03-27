"use client";
import { useState } from "react";
import ItineraryDay from "@/components/itinerary-day";
import TabsDays from "@/components/tabDays";

export default function Itinerary() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-5 md:space-y-7">
      <header className="text-center px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#01204C] mb-4">
          Itinerario Legacy
        </h2>
        <p className="mt-2 text-sm md:text-lg text-black/80 font-medium tracking-wider">
          3 días de impacto
        </p>
      </header>

      <TabsDays active={activeDay} setActive={setActiveDay} />
      <div className="flex justify-end">
      <button
            onClick={() => window.open("/itinerario-legacy.pdf", "_blank")}
            className=" px-2 md:px-8 py-2 bg-transparent border border-black text-black font-semibold rounded-full transition-all duration-200  sm:w-auto text-sm
            hover:shadow-lg hover:border-[#01204C] hover:text-[#01204C] active:scale-95disabled:bg-gray-400 disabled:text-gray-700 disabled:border-gray-400 disabled:shadow-none"
          >
            Descargar Itinerario
      </button>
      </div>

      {activeDay === 1 && (
        <ItineraryDay
          dayNumber={1}
          dayTitle="Día 1"
          date="Jueves, 14 de Mayo"
          events={[
            { time: "07:00 PM", title: "Apertura", description: "Inicio Conferencia Legacy", type: "Conferencia" },
          ]}
        />
      )}

      {activeDay === 2 && (
        <ItineraryDay
          dayNumber={2}
          dayTitle="Día 2"
          date="Viernes, 15 de Mayo"
          events={[
            { time: "08:00 AM", title: "I Plenaria", description: "Conferencia general", type: "Conferencia" },
            { time: "10:00 AM", title: "II Plenaria", description: "Conferencia general", type: "Conferencia" },
            { time: "12:00 PM", title: "Panel 5 en 1", description: "Conversatorio", type: "Panel" },
            { time: "04:00 PM", title: "Apertura Concierto Barak", type: "Concierto" },
            { time: "06:30 PM", title: "Previas Concierto", description: "Detrás de escena", type: "Concierto" },
            { time: "08:00 PM", title: "Concierto Barak", type: "Concierto" },
          ]}
        />
      )}

      {activeDay === 3 && (
        <ItineraryDay
          dayNumber={3}
          dayTitle="Día 3"
          date="Sábado, 16 de Mayo"
          events={[
            { time: "08:30 AM", title: "III Plenaria", description: "Conferencia general", type: "Conferencia" },
            { time: "10:30 AM", title: "IV Plenaria", description: "Conferencia general", type: "Conferencia" },
            { time: "12:00 PM", title: "Foro", description: "Clausura de la conferencia", type: "Foro" },
            { time: "03:00 PM", title: "Talleres", type: "Taller" },
            { time: "07:30 PM", title: "Cierre", description: "Clausura de la conferencia", type: "Clausura" },
          ]}
        />
      )}

    </section>
  );
}
