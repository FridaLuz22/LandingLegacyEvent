"use client";

import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-white mt-24 px-6 mt-20 border-t border-white/10">
      {/* CONTENIDO */}
      <div className="max-w-[80%] mt-10 mx-auto flex flex-col gap-9 md:flex-row justify-between text-center md:text-left">

        {/* CONTACTO */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-widest border-b border-lime-400 text-center">
            INFORMES E INSCRIPCIONES
          </h3>

          <div className="flex justify-center md:justify-start items-center gap-2">
            <FaWhatsapp className="text-green-400 text-xl" />
            <span className="text-base">933 401 503</span>
          </div>

          <p className="text-sm opacity-70 mt-2">
            Secretaria Casa de Dios
          </p>
        </div>


        {/* PAGOS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-widest border-b border-lime-400 text-center">
            MEDIOS DE PAGO
          </h3>

          <div className="space-y-2 text-sm opacity-90">
            <p>Yape / Plin: 933 401 503</p>
            <p>Producciones LEGACY</p>
            <p>BCP Soles: 56014526100072</p>
            <p>CCI: 00256011452610007215</p>
          </div>
        </div>


        {/* ORGANIZA */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-widest border-b border-lime-400 text-center">
            ORGANIZA
          </h3>

          <p className="text-sm">
            Casa de Dios Tingo María
          </p>

          <p className="text-sm opacity-70">
            Las Asambleas de Dios del Perú
          </p>
        </div>

      </div>


      {/* REDES SOCIALES */}
      <div className="flex justify-center gap-6 mt-10 text-2xl">

        <a href="https://www.instagram.com/casadediostingomaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="hover:scale-110 transition">
          <FaInstagram className="text-pink-500" />
        </a>

        <a href="https://www.facebook.com/CASADEDIOSTM" target="_blank" className="hover:scale-110 transition">
          <FaFacebook className="text-blue-500" />
        </a>

        <a href="https://www.tiktok.com/@casadediostingomaria?_r=1&_t=ZS-94SKvjpWwI1" target="_blank" className="hover:scale-110 transition">
          <FaTiktok className="text-white" />
        </a>

        <a href="https://www.youtube.com/@CasadeDiosTingoMaria" target="_blank" className="hover:scale-110 transition">
          <FaYoutube className="text-red-500" />
        </a>

      </div>


      {/* COPYRIGHT */}
      <div className="text-center mt-6 pb-8 text-sm opacity-60">
        © 2026 Conference Legacy · Hecho por Casa de Dios
      </div>

    </footer>
  );
}
