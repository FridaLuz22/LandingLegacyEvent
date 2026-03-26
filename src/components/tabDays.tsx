"use client";

interface TabsDaysProps {
  active: number;
  setActive: (value: number) => void;
}

const tabs = [
  { id: 1, day: "Jueves", title: "Día 1" },
  { id: 2, day: "Viernes", title: "Día 2" },
  { id: 3, day: "Sábado", title: "Día 3" },
];

export default function TabsDays({ active, setActive }: TabsDaysProps) {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <div className="
        flex 
        rounded-full 
        bg-white/70 backdrop-blur-xl 
        md:px-6 md:p-2
        gap-2 md:gap-4 
        border border-[#01204C]/10
        shadow-[0_4px_15px_rgba(0,0,0,0.05)]
      ">
        {tabs.map((tab) => {
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`
                flex flex-col items-center justify-center
                px-8 py-3 rounded-full
                transition-all duration-300 
                font-medium
                ${
                  isActive
                    ? "bg-gradient-to-br from-[#024BB1] to-[#067A34] text-white shadow-lg scale-105"
                    : "text-[#0C0D0D]/70 hover:text-[#01204C] hover:bg-[#01204C]/5"
                }
              `}
            >
              <span
                className={`
                  text-xs tracking-wide
                  ${isActive ? "text-white/80" : "text-[#0C0D0D]/50"}
                `}
              >
                {tab.day}
              </span>

              <span
                className={`
                  text-lg font-semibold
                  ${isActive ? "text-white" : "text-[#01204C]"}
                `}
              >
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
