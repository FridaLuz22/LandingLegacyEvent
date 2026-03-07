"use client";
import ItineraryDay from "@/components/itinerary-day";

export default function Itinerary() {
  return (
    <section
      id="itinerary-content"
      className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-10 md:space-y-16"
    >
      <header className="text-center px-2">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#e9f1f4] via-[#d9e6eb] to-[#2f7df6]">
          Itinerario Legacy
        </h2>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg text-white/80 font-medium tracking-wider">
          3 días de impacto
        </p>
      </header>

      <ItineraryDay
        dayNumber={1}
        dayTitle="Día 1"
        date="Jueves, 14 de Mayo"
        events={[
          {
            time: "07:00 PM",
            title: "Apertura",
            description: "Inicio Conferencia Legacy",
            type: "Conferencia",
          },
        ]}
      />

      <ItineraryDay
        dayNumber={2}
        dayTitle="Día 2"
        date="Viernes, 15 de Mayo"
        events={[
          {
            time: "08:00 AM",
            title: "I Plenaria",
            description: "Conferencia general",
            type: "Conferencia",
          },
          {
            time: "10:00 AM",
            title: "II Plenaria",
            description: "Conferencia general",
            type: "Conferencia",
          },
          {
            time: "12:00 PM",
            title: "Panel 5 en 1",
            description: "Conversatorio",
            type: "Panel",
          },
          {
            time: "04:00 PM",
            title: "Apertura Concierto Barak",
            description: "",
            type: "Concierto",
          },
          {
            time: "06:30 PM",
            title: "Previas Concierto",
            description: "Detrás de escena",
            type: "Concierto",
          },
          {
            time: "08:00 PM",
            title: "Concierto Barak",
            description: "",
            type: "Concierto",
          },
        ]}
      />

      <ItineraryDay
        dayNumber={3}
        dayTitle="Día 3"
        date="Sábado, 16 de Mayo"
        events={[
          {
            time: "08:30 AM",
            title: "III Plenaria",
            description: "Conferencia general",
            type: "Conferencia",
          },
          {
            time: "10:30 AM",
            title: "IV Plenaria",
            description: "Conferencia general",
            type: "Conferencia",
          },
          {
            time: "12:00 PM",
            title: "Foro",
            description: "Clausura de la conferencia",
            type: "Foro",
          },
          {
            time: "03:00 PM",
            title: "Talleres",
            description: "",
            type: "Taller",
          },
          {
            time: "07:30 PM",
            title: "Cierre",
            description: "Clausura de la conferencia",
            type: "Clausura",
          },
        ]}
      />

    </section>
  );
}
