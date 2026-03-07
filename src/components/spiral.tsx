"use client";

export default function Spiral({ className = "" }) {
  return (
    <img
      src="/image/circle.svg"
      alt="spiral"
      className={`pointer-events-none select-none animate-spin-slow ${className}`}
    />
  );
}
