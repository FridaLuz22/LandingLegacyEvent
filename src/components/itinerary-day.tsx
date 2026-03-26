"use client";

type EventItem = {
  time: string;
  title: string;
  description?: string;
  type: string;
};

type Props = Readonly<{
  dayNumber: number;
  dayTitle: string;
  date: string;
  events: EventItem[];
}>;

const getBadgeStyles = (type: string) => {
  const styles: Record<string, string> = {
    Conferencia: "bg-[#01204C]/10 text-[#01204C] font-bold border-2 border-[#01204C]/30",
    Panel: "bg-[#067A34]/10 text-[#067A34] font-bold border-2 border-[#067A34]/35",
    Concierto: "bg-[#0C0D0D]/10 text-[#0C0D0D] font-bold border-2 border-[#0C0D0D]/30",
    Foro: "bg-[#01204C]/10 text-[#01204C] font-bold border-2 border-[#01204C]/30",
    Taller: "bg-[#067A34]/10 text-[#067A34] font-bold border-2 border-[#067A34]/35",
    Clausura: "bg-[#0C0D0D]/10 text-[#0C0D0D] font-bold border-2 border-[#0C0D0D]/30",
  };
  return styles[type] ?? "bg-black/10 text-black border border-black/15";
};

export default function ItineraryDay({
  dayNumber,
  dayTitle,
  date,
  events,
}: Props) {
  return (
    <article className="relative backdrop-blur-xl bg-white/70 border border-[#01204C]/10 rounded-2xl p-6 md:p-8 shadow-[0_8px_20px_rgba(0,0,0,0.05)]">
      
      <div className="flex gap-6">
        <div className="flex flex-col items-center shrink-0">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#024BB1] to-[#067A34] text-white font-bold shadow-lg">
            {dayNumber}
          </div>

          <div className="w-1 flex-1 mt-3 bg-gradient-to-b from-[#024BB1]/60 via-[#067A34]/40 to-transparent rounded-full" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-6">
            <h3 className="font-heading text-2xl font-bold text-[#01204C] tracking-wide">
              {dayTitle}
            </h3>

            <p className="text-sm md:text-base text-[#0C0D0D]/70 font-medium mt-1">
              {date}
            </p>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={`${event.time}-${event.title}`}
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-xl 
                bg-white/60 backdrop-blur-md border border-[#01204C]/10 
                shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-300"
              >
                {/* TIME */}
                <div className="shrink-0 text-sm font-semibold text-[#067A34] sm:w-24">
                  {event.time}
                </div>

                {/* TITLE + DESC */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#01204C] text-base">
                    {event.title}
                  </p>

                  {event.description && (
                    <p className="text-sm text-[#0C0D0D]/70 mt-1">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* BADGE */}
                <span
                  className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border w-fit ${getBadgeStyles(
                    event.type
                  )}`}
                >
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
