"use client";

type EventItem = {
  time: string;
  title: string;
  description: string;
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
    Conferencia: "bg-cyan-500/30 text-cyan-200 border border-cyan-400/40",
    Panel: "bg-violet-500/30 text-violet-200 border border-violet-400/40",
    Concierto: "bg-amber-500/30 text-amber-200 border border-amber-400/40",
    Foro: "bg-teal-500/30 text-teal-200 border border-teal-400/40",
    Taller: "bg-emerald-500/30 text-emerald-200 border border-emerald-400/40",
    Clausura: "bg-indigo-500/30 text-indigo-200 border border-indigo-400/40",
  };
  return styles[type] ?? "bg-white/20 text-white/90 border border-white/30";
};

export default function ItineraryDay({
  dayNumber,
  dayTitle,
  date,
  events,
}: Props) {
  return (
    <article className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl overflow-hidden">
      {/* Timeline */}
      <div className="flex gap-4 sm:gap-6">
        <div className="flex flex-col items-center shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-white font-bold text-base sm:text-lg shadow-lg ring-2 sm:ring-4 ring-white/10">
            {dayNumber}
          </div>
          <div className="w-0.5 flex-1 mt-3 bg-gradient-to-b from-cyan-400/60 via-cyan-400/30 to-transparent min-h-[24px]" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-4 sm:mb-6">
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white">
              {dayTitle}
            </h3>
            <p className="text-sm md:text-base text-cyan-200/90 font-medium tracking-wide mt-1">
              {date}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {events.map((event) => (
              <div
                key={`${event.time}-${event.title}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ease-out hover:shadow-lg sm:hover:-translate-y-0.5"
              >
                <div className="shrink-0 text-sm font-semibold text-cyan-200/90 sm:w-20 sm:pt-0.5">
                  {event.time}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm sm:text-base md:text-lg">
                    {event.title}
                  </p>
                  {event.description && (
                    <p className="text-xs sm:text-sm text-white/70 mt-0.5 sm:mt-1">
                      {event.description}
                    </p>
                  )}
                </div>

                <span
                  className={`shrink-0 text-xs font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border w-fit sm:w-auto ${getBadgeStyles(
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
