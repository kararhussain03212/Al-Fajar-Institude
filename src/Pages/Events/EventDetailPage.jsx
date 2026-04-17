import React from "react";
import { Link, useParams } from "react-router-dom";
import { allEvents } from "../../Data";

// Event detail page
const EventDetailPage = () => {
  const { id } = useParams();
  const event = allEvents.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <section className="min-h-screen bg-[#ececec] flex items-center justify-center px-4">
        <div className="bg-white border border-gray-300 p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900">Event not found</h2>
          <p className="text-gray-600 mt-2">
            This event is not available in the calendar.
          </p>
          <Link
            to="/events"
            className="inline-block mt-5 bg-[#8C1515] text-white px-5 py-2.5 font-semibold hover:bg-[#6f1111] transition-colors"
          >
            Back to Events
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#ececec]">
      {/* Detail layout */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start">
          {/* Left event card */}
          <div className="bg-white border border-gray-300 self-start">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-5">
              <p className="text-xs font-bold uppercase text-[#8C1515]">
                {event.type}
              </p>
              <h2 className="text-3xl font-bold mt-2">{event.title}</h2>
              <p className="mt-4 text-sm text-gray-700 font-semibold">
                {event.date}
              </p>
              <p className="text-sm text-gray-600">{event.time}</p>
              <p className="mt-2 text-sm text-[#1f4b8f]">{event.location}</p>
              <div className="mt-5">
                <a
                  href={event.website}
                  className="text-[#1f4b8f] font-semibold hover:underline"
                >
                  Visit the event website &rsaquo;
                </a>
              </div>
            </div>
          </div>

          {/* Right detail panel */}
          <div className="bg-white border border-gray-300">
            <div className="bg-[#2b1f20] text-white p-6">
              <p className="text-xs font-bold uppercase">{event.type}</p>
              <h1 className="text-4xl font-bold mt-2">{event.title}</h1>
            </div>
            <div className="p-6">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Event Details
              </h3>
              {event.description.map((line, index) => (
                <p
                  key={`${event.id}-desc-${index}`}
                  className="text-gray-700 mb-4 leading-relaxed"
                >
                  {line}
                </p>
              ))}

              <div className="pt-5 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 mb-5">
                  {event.tags.map((tag) => (
                    <span
                      key={`${event.id}-tag-${tag}`}
                      className="text-xs font-semibold uppercase bg-gray-100 px-3 py-1 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl font-bold mb-3">
                  This event is open to:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {event.audience.map((group) => (
                    <span
                      key={`${event.id}-aud-${group}`}
                      className="text-xs font-semibold uppercase bg-[#0f6d62] text-white px-3 py-1"
                    >
                      {group}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
