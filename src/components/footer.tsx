"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-white mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-8">

        {/* NAV LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm tracking-wide">
          <a href="/" className="hover:text-cyan-300 transition">Inicio</a>
          <a href="#exhibitors" className="hover:text-cyan-300 transition">Expositores</a>
          <a href="#band" className="hover:text-cyan-300 transition">Banda</a>
          <a href="#itinerary" className="hover:text-cyan-300 transition">Itinerario</a>
        </div>

        {/* REDES SOCIALES */}
        <div className="flex gap-6">

          {/* TIKTOK */}
          <a href="https://www.tiktok.com/@casadediostingomaria?_r=1&_t=ZS-94SKvjpWwI1" className="hover:scale-110 transition" target="_blank">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 2c.2 2.1 1.4 3.8 3.5 4.1v3.2c-1.3.1-2.6-.3-3.7-1v7.4c0 3.6-2.9 6.3-6.5 6.3S3.3 19.3 3.3 15.7s2.9-6.3 6.5-6.3c.4 0 .7 0 1 .1v3.3c-.3-.1-.6-.2-1-.2-1.8 0-3.2 1.4-3.2 3.1s1.4 3.1 3.2 3.1 3.2-1.4 3.2-3.1V2h3.5z"/>
            </svg>
          </a>

          {/* FACEBOOK */}
          <a href="https://www.facebook.com/CASADEDIOSTM" target="_blank" className="hover:scale-110 transition">
            <svg className="w-6 h-6 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.018 4.388 11.013 10.125 11.927v-8.437H7.078V12.07h3.047V9.41c0-3.007 1.793-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.493h-2.796V24C19.612 23.086 24 18.09 24 12.073z"/>
            </svg>
          </a>

          {/* INSTAGRAM */}
          <a href="https://www.instagram.com/casadediostingomaria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:scale-110 transition" target="_blank">
            <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.2 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.012 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92C2.174 15.584 2.163 15.204 2.163 12s.013-3.583.07-4.849C2.382 3.924 3.897 2.382 7.152 2.234 8.418 2.175 8.796 2.163 12 2.163zm0 5.838A4 4 0 1012 16a4 4 0 000-8zm5.338-1.406a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
            </svg>
          </a>

          {/* YOUTUBE */}
          <a href="https://www.youtube.com/@CasadeDiosTingoMaria" className="hover:scale-110 transition" target="_blank">
            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.6 2.6 12 2.6 12 2.6h0s-5.6 0-8.6.3c-.4.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 8.3.3 8.3.3s5.6 0 8.6-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3S24 13.9 24 12v-2c0-1.9-.5-3.8-.5-3.8zM9.7 14.6V7.8l6.5 3.4-6.5 3.4z"/>
            </svg>
          </a>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-sm text-gray-400">
          <p>© 2026 Conference Legacy</p>
          <p className="mt-1">
            Hecho por <span className="text-white font-semibold">Casa de Dios</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
