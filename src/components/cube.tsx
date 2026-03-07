"use client";

export default function Cube({ className = "" }) {
  return (
    <div
      className={`absolute w-[10px] h-[10px] border border-purple-700 animate-cube ${className}`}
      style={{
        transformOrigin: "top left",
        transform: "scale(0) rotate(0deg) translate(-50%, -50%)",
      }}
    />
  );
}
