"use client";

import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#01204C] text-white pt-12 relative">
      {/* BARRA SUPERIOR DE REDES */}
      <div className="flex flex-col md:flex-row">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-2">
          <img
            src="/logos/logocdd.png"
            alt="Casa de Dios"
            className="w-8 h-8 object-contain mix-blend-screen opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
          <span className="font-heading font-black text-[15px] tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 group-hover:to-white transition-all duration-300">
            Casa de Dios
          </span>
        </div>
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 mb-10">
        
        {[
          {
            icon: <FaInstagram />,
            href: "https://www.instagram.com/casadediostingomaria",
            color: "text-pink-400",
          },
          {
            icon: <FaFacebook />,
            href: "https://www.facebook.com/CASADEDIOSTM",
            color: "text-blue-500",
          },
          {
            icon: <FaTiktok />,
            href: "https://www.tiktok.com/@casadediostingomaria",
            color: "text-white",
          },
          {
            icon: <FaYoutube />,
            href: "https://www.youtube.com/@CasadeDiosTingoMaria",
            color: "text-red-500",
          },
        ].map(({ icon, href, color }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            className={`text-3xl ${color} hover:scale-125 transition-transform drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]`}
          >
            {icon}
          </a>
        ))}
      </div>
      </div>

      {/* CUERPO DEL FOOTER */}
      <div className="max-w-6xl mx-auto px-6 pb-10 flex flex-col md:flex-row gap-10 md:gap-14 text-center md:text-left">
        {/* INFORMES */}
        <div>
          <h3 className="text-sm md:text-lg font-bold tracking-widest pb-1 border-b-2 border-[#2f7df6] w-max mx-auto md:mx-0">
            INFORMES E INSCRIPCIONES
          </h3>

          <div className="flex justify-center md:justify-start items-center gap-3 mt-4">
            <FaWhatsapp className="text-green-400 text-2xl" />
            <span className="text-base font-semibold">933 401 503</span>
          </div>

          <p className="text-sm opacity-70 mt-2">Secretaría Casa de Dios</p>
        </div>

        {/* PAGOS */}
        <div>
          <h3 className="text-sm md:text-lg font-bold tracking-widest pb-1 border-b-2 border-[#2f7df6] w-max mx-auto md:mx-0">
            MEDIOS DE PAGO
          </h3>

          <div className="space-y-2 mt-4 text-sm leading-relaxed">
            <p>Yape / Plin: <strong>933 401 503</strong></p>
            <p>Producciones LEGACY</p>
            <p>BCP Soles: <strong>56014526100072</strong></p>
            <p>CCI: 00256011452610007215</p>
          </div>
        </div>

        {/* ORGANIZA */}
        <div>
          <h3 className="text-sm md:text-lg font-bold tracking-widest pb-1 border-b-2 border-[#2f7df6] w-max mx-auto md:mx-0">
            ORGANIZA
          </h3>

          <p className="text-sm mt-4 font-semibold">Casa de Dios Tingo María</p>
          <p className="text-sm opacity-70">Las Asambleas de Dios del Perú</p>
        </div>

      </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 text-center py-4 text-sm opacity-80">
        © 2026 Conference Legacy · Hecho por Casa de Dios
      </div>
    </footer>
  );
}
