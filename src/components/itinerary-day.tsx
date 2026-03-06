"use client";
type EventItem = {
  time: string;
  title: string;
  description: string;
  type: string;
};

type Props = {
  dayNumber: number;
  dayTitle: string;
  date: string;
  events: EventItem[];
};

export default function ItineraryDay({
  dayNumber,
  dayTitle,
  date,
  events,
}: Props) {
  return (
    <div className="flex gap-6">
      
      {/* Timeline */}
      <div className="flex flex-col items-center ml-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0b92aa] text-white font-semibold">
          {dayNumber}
        </div>
        <div className="w-[2px] bg-gray-200 flex-1 mt-2"></div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-white">{dayTitle}</h3>
        <p className="text-sm text-lime-300 mb-4 font-bold">{date}</p>

        <div className="space-y-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-4 py-2 rounded-xl shadow border border-gray-200 flex items-center gap-4 max-w-[90%]"
            >
              {/* Time */}
              <div className="text-sm font-semibold text-gray-700 w-20">
                {event.time}
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="font-semibold text-black">{event.title}</p>
                <p className="text-sm text-gray-500">
                  {event.description}
                </p>
              </div>

              {/* Badge */}
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full h-fit md:block none">
                {event.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
