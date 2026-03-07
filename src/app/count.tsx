"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(eventDate: Date): TimeLeft {
  const now = Date.now();
  const difference = eventDate.getTime() - now;

  if (difference <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const EVENT_DATE = new Date("2026-05-14T08:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(EVENT_DATE)
  );

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(EVENT_DATE));
    const interval = setInterval(
      () => setTimeLeft(calculateTimeLeft(EVENT_DATE)),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-5 px-6 sm:py-6 sm:px-8 md:py-6 md:px-10 rounded-2xl md:rounded-3xl border border-white/25 bg-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 ease-out hover:bg-white/[0.1] hover:border-white/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]"
      role="timer"
      aria-live="polite"
      aria-label="Cuenta regresiva para el evento"
    >
      {["Días", "Horas", "Mins", "Segs"].map((label, i) => {
        const value = [
          timeLeft.days,
          timeLeft.hours,
          timeLeft.minutes,
          timeLeft.seconds,
        ][i];

        return (
          <div
            key={label}
            className="flex items-center gap-1.5 sm:gap-2 group transition-transform duration-200 ease-out hover:-translate-y-0.5"
          >
            <div className="text-center transition-transform duration-200 ease-out group-hover:scale-105">
              <div
                suppressHydrationWarning
                className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tabular-nums drop-shadow-sm"
              >
                {String(value).padStart(2, "0")}
              </div>
              <div className="text-[11px] sm:text-xs md:text-sm text-white/90 font-medium tracking-wide mt-0.5">
                {label}
              </div>
            </div>

            {i < 3 && (
              <span className="mx-1 sm:mx-2 md:mx-3 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white/80 tabular-nums">
                :
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
