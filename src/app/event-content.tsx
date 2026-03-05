"use client";
import React, { useState } from 'react';

export default function EventContent() {
  const [activeTab, setActiveTab] = useState('dia1');

  const itinerarios = {
    dia1: [
      { time: '08:00', activity: 'Bienvenida y registro' },
      { time: '09:00', activity: 'Conferencia inaugural' },
      { time: '11:00', activity: 'Descanso' },
      { time: '11:30', activity: 'Talleres paralelos' },
    ],
    dia2: [
      { time: '08:30', activity: 'Yoga matutino' },
      { time: '09:30', activity: 'Sesión de networking' },
      { time: '11:00', activity: 'Panel de discusión' },
      { time: '13:00', activity: 'Almuerzo' },
    ],
    dia3: [
      { time: '09:00', activity: 'Actividades finales' },
      { time: '10:30', activity: 'Cierre y reflexiones' },
      { time: '12:00', activity: 'Merienda de despedida' },
    ],
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6 border-b">
        {['dia1', 'dia2', 'dia3'].map((dia) => (
          <button
            key={dia}
            onClick={() => setActiveTab(dia)}
            className={`px-4 py-2 font-semibold ${
              activeTab === dia
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600'
            }`}
          >
            {dia.replace('dia', 'Día ')}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {itinerarios[activeTab as keyof typeof itinerarios].map((item, idx) => (
          <div key={idx} className="flex gap-4 border-l-4 border-blue-500 pl-4">
            <span className="font-bold text-blue-600 w-16">{item.time}</span>
            <span className="text-gray-700">{item.activity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}