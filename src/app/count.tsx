"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const eventDate = new Date("2026-05-14T00:00:00");

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = eventDate.getTime() - now;

    if (difference <= 0)
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    // Solo se ejecuta en CLIENTE → evita mismatch
    const update = () => setTimeLeft(calculateTimeLeft());
    update();

    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // ➜ Esto evita que el cliente intente hidratar algo distinto
  if (!timeLeft) return null;

  return (
    <div className="flex items-center py-4 justify-center border-b border-blue-500 bg-black">
      {["Días", "Horas", "Mins", "Segs"].map((label, i) => {
        const value = [
          timeLeft.days,
          timeLeft.hours,
          timeLeft.minutes,
          timeLeft.seconds,
        ][i];

        return (
          <div key={label} className="flex items-center gap-2">
            <div className="text-center">
              <div className="text-4xl md:text-8xl font-bold 
    bg-gradient-to-r from-blue-600 via-white to-blue-600
    bg-clip-text text-transparent">
                {value}
              </div>
              <div className="text-sm text-white">{label}</div>
            </div>

            {i < 3 && (
              <span className="mx-3 text-4xl font-bold text-blue-600 md:text-8xl">
                :
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
