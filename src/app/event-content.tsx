"use client";
import ItineraryDay from "@/components/itinerary-day";

export default function Itinerary() {
  return (
    <section className="max-w-4xl mx-auto space-y-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold tracking-wide text-white">
          Itinerario Legacy
        </h2>
        <p className="text-gray-500 mt-2">
          3 días de impacto
        </p>
      </div>

      <div className="space-y-10"></div>
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
            description: "Mensaje principal",
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
