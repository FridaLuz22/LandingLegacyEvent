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
        <a
          href="/itinerario-legacy.pdf"
          download="itinerario-legacy.pdf"
          className="inline-flex items-center gap-2 mt-4 sm:mt-5 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-cyan-200 font-medium text-sm sm:text-base hover:bg-white/20 hover:border-cyan-400/50 hover:text-cyan-100 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar itinerario (PDF)
        </a>
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
