import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    date: { month: "APR", day: "16" },
    category: "EXHIBITION",
    title: "Art of Science 2026",
    time: "05:00 AM PT",
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?q=80&w=600&auto=format&fit=crop",
    link: "/about/chairman",
  },
  {
    id: 2,
    date: { month: "APR", day: "16" },
    category: "LECTURE/PRESENTATION/TALK",
    title: "Criminal War and Peace",
    time: "03:30 PM PT",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    link: "/events/criminal-war-and-peace",
  },
  {
    id: 3,
    date: { month: "APR", day: "16" },
    category: "LECTURE/PRESENTATION/TALK",
    title: "3 Minute Thesis Competition",
    time: "04:00 PM PT",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
    link: "/events/3-minute-thesis",
  },
  {
    id: 4,
    date: { month: "APR", day: "16" },
    category: "EXHIBITION",
    title: "New Orleans as Method: An End-of-Course Exhibition and Celebration",
    time: "04:00 PM PT",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=600&auto=format&fit=crop",
    link: "/events/new-orleans-exhibition",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="relative z-30 bg-[#f4f4f4] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 max-w-[1500px]">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Upcoming Events
          </h2>
        </header>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 sm:mb-14">
          {events.map((event) => (
            <Link
              key={event.id}
              to={event.link}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group block"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Date Badge */}
                <div className="absolute bottom-0 left-4 bg-[#2d2d2d] text-white px-3 py-2 text-center min-w-[50px]">
                  <div className="text-xs font-medium uppercase tracking-wide">
                    {event.date.month}
                  </div>
                  <div className="text-xl font-bold leading-none">
                    {event.date.day}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                {/* Category */}
                <p className="text-[#8C1515] text-xs font-semibold uppercase tracking-wide mb-2">
                  {event.category}
                </p>
                {/* Title */}
                <h3 className="text-gray-900 text-base sm:text-lg font-semibold leading-snug mb-2 line-clamp-3">
                  {event.title}
                </h3>
                {/* Time */}
                <p className="text-gray-600 text-sm">
                  {event.time}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/events"
            className="inline-block bg-[#8C1515] hover:bg-[#6f1111] text-white text-base sm:text-lg font-semibold px-10 py-3 min-w-[200px] text-center transition-colors duration-300"
          >
            More events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
