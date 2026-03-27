"use client";

import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#hero" },
  { label: "Expositores", href: "#exhibitors" },
  { label: "Banda", href: "#band" },
  { label: "Coreografia", href: "#choreography" },
  { label: "Itinerario", href: "#itinerary" },
  { label: "Conferencia", href: "#our-conference" },
  { label: "Contacto", href: "#contact" },
];

const SECTION_IDS = ["hero", "exhibitors", "band", "choreography", "itinerary", "our-conference" ,"contact"];

function scrollToSection(href: string) {
  if (href === "#hero" || href === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const id = href.slice(1);
  const el = document.getElementById(id);
  if (el) {
    const offset = 72;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-gradient-to-br from-[#024BB1] to-[#06427a]/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-white/[0.8]",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between">

        {/* ── Logo ── */}
        <button
          onClick={() => scrollToSection("#hero")}
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="Ir al inicio"
        >
          <img
            src="/logos/logocdd.png"
            alt="Casa de Dios"
            className="w-8 h-8 object-contain mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="font-heading font-black text-[15px] tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 group-hover:to-white transition-all duration-300">
            Casa de Dios
          </span>
        </button>

        {/* ── Nav Desktop ── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "") || "hero";
            const isActive = activeSection === id;
            return (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className={[
                  "relative px-4 py-2 text-[12.5px] rounded-md transition-all duration-300 font-bold",
                  isActive
                    ? "text-white border border-white bg-[#2f7df6]/10 shadow-[0_0_6px_rgba(47,125,246,0.6)]"
                    : "text-white/50 hover:text-white hover:border hover:border-[#2f7df6]/60 hover:bg-[#2f7df6]/5",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}

        </nav>

        {/* ── Hamburger ── */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] group"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={[
              "w-5 h-[1.5px] bg-white/80 rounded-full transition-all duration-300 origin-center",
              menuOpen ? "rotate-45 translate-y-[6.5px]" : "",
            ].join(" ")}
          />
          <span
            className={[
              "w-5 h-[1.5px] bg-white/80 rounded-full transition-all duration-300",
              menuOpen ? "opacity-0 scale-x-0" : "",
            ].join(" ")}
          />
          <span
            className={[
              "w-5 h-[1.5px] bg-white/80 rounded-full transition-all duration-300 origin-center",
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : "",
            ].join(" ")}
          />
        </button>
      </div>

      
      {/* ── Menú Mobile ── */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-400 ease-in-out",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div
          className={[
            "bg-gradient-to-br from-[#024BB1] to-[#06427a]/90 backdrop-blur-xl border border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.25)]",
            "px-5 pt-3 pb-5 flex flex-col gap-1",
          ].join(" ")}
        >
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "") || "hero";
            const isActive = activeSection === id;
            return (
              <button
                key={href}
                onClick={() => {
                  scrollToSection(href);
                  setMenuOpen(false);
                }}
                className={[
                  "w-full text-left px-4 py-3 rounded-lg text-[13px] font-medium tracking-[0.1em] transition-all duration-200 flex items-center gap-3",
                  isActive
                    ? "text-white bg-white/[0.07] border border-white/[0.08]"
                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]",
                ].join(" ")}
              >
                {isActive && (
                  <span className="w-1 h-1 rounded-full bg-[#2f7df6] shadow-[0_0_6px_rgba(47,125,246,1)]" />
                )}
                {label}
              </button>
            );
          })}
        </div>
      </div>

    </header>
  );
}
