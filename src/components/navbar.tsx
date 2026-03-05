"use client";

export default function Header() {
  return (
    <header className="w-full px-6 pt-8 pb-4 flex flex-col items-center relative">

      <nav className="w-full">
        <ul className="flex justify-center items-center gap-x-4 md:gap-x-8 gap-y-2 text-sm font-medium text-white tracking-[1px]">
          <li><a className="hover:text-cyan-300 transition-colors" href="#">Inicio</a></li>
          <li><a className="hover:text-cyan-300 transition-colors" href="#">Expositores</a></li>
          <li><img src="/logos/logocdd.png" alt="Legacy Logo" className="max-w-[30px] h-auto block mix-blend-screen opacity-90"/></li>
          <li><a className="hover:text-cyan-300 transition-colors" href="#">Banda</a></li>
          <li><a className="hover:text-cyan-300 transition-colors" href="#">Itinerario</a></li>
        </ul>
      </nav>

    </header>
  );
}
