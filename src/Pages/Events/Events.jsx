import React from "react";
import { Link } from "react-router-dom";
import { allEvents } from "../../Data";

// Events listing page
const Events = () => {
  const featuredEvents = allEvents.filter((event) => event.featured);
  const otherEvents = allEvents.filter((event) => !event.featured);
  const displayEvents = [...featuredEvents, ...otherEvents];

  return (
    <section className="min-h-screen bg-[#ececec] text-gray-900">
      {/* Top banner */}
      

      {/* Header */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-[1200px] mx-auto px-4 py-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#8C1515]">
            Al-Fajr | Events Calendar
          </h1>
          <p className="text-gray-600 mt-2">
            Search for events, places, departments, and groups
          </p>
        </div>
      </div>

      

      {/* Featured events list */}
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Featured Events</h2>

        <div className="space-y-4">
          {displayEvents.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="block bg-white border border-gray-300 hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 md:h-full object-cover"
                />
                <div className="p-4 md:p-5">
                  <p className="text-xs font-bold uppercase text-[#8C1515]">
                    {event.type}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {event.date} | {event.time}
                  </p>
                  <p className="text-sm text-[#1f4b8f] mt-1">{event.location}</p>
                  <p className="text-gray-700 mt-3">{event.summary}</p>
                  <span className="inline-block mt-3 text-[#1f4b8f] font-semibold">
                    View event &rsaquo;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

