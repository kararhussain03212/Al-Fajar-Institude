import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBell,
  FiCalendar,
  FiMapPin,
  FiSearch,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { allAnnouncements } from "./announcementsData";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function Announcements() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [audience, setAudience] = useState("All Audiences");
  const [location, setLocation] = useState("All Locations");

  const categories = [
    "All Categories",
    ...new Set(allAnnouncements.map((item) => item.category)),
  ];
  const audiences = [
    "All Audiences",
    ...new Set(allAnnouncements.map((item) => item.audience)),
  ];
  const locations = [
    "All Locations",
    ...new Set(
      allAnnouncements.map((item) => item.location || "Mianwali Campus"),
    ),
  ];

  const filteredAnnouncements = useMemo(() => {
    const sorted = [...allAnnouncements].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );

    return sorted.filter((item) => {
      const searchable =
        `${item.title} ${item.category} ${item.excerpt}`.toLowerCase();
      const matchesQuery = searchable.includes(query.trim().toLowerCase());
      const matchesCategory =
        category === "All Categories" || item.category === category;
      const matchesAudience =
        audience === "All Audiences" || item.audience === audience;
      const itemLocation = item.location || "Mianwali Campus";
      const matchesLocation =
        location === "All Locations" || itemLocation === location;

      return (
        matchesQuery && matchesCategory && matchesAudience && matchesLocation
      );
    });
  }, [query, category, audience, location]);

  const hasFilters =
    query.trim() ||
    category !== "All Categories" ||
    audience !== "All Audiences" ||
    location !== "All Locations";

  const resetFilters = () => {
    setQuery("");
    setCategory("All Categories");
    setAudience("All Audiences");
    setLocation("All Locations");
  };

  return (
    <section className="bg-[#f5f5f5] pb-14 pt-8 sm:pt-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border border-gray-200 bg-white p-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <label className="relative block">
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search announcements"
                className="h-11 w-full border border-gray-300 pl-10 pr-3 text-sm text-gray-800 outline-none focus:border-[#8C1515]"
              />
            </label>

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:border-[#8C1515]"
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={audience}
              onChange={(event) => setAudience(event.target.value)}
              className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:border-[#8C1515]"
            >
              {audiences.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:border-[#8C1515]"
            >
              {locations.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {hasFilters && (
            <button
              onClick={resetFilters}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8C1515] hover:text-[#6f1111]"
            >
              <FiX />
              Clear filters
            </button>
          )}
        </div>

        <div className="mt-6 space-y-4 sm:space-y-5">
          {filteredAnnouncements.map((item) => (
            <article
              key={item.id}
              className="border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
            >
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {item.title}
              </h2>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {item.excerpt}
              </p>

              <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
                <p className="inline-flex items-center gap-2">
                  <FiBell className="text-[#8C1515]" />
                  {item.category}
                </p>
                <p className="inline-flex items-center gap-2">
                  <FiMapPin className="text-[#8C1515]" />
                  {item.location || "Mianwali Campus"}
                </p>
                <p className="inline-flex items-center gap-2">
                  <FiCalendar className="text-[#8C1515]" />
                  Date: {formatDate(item.date)}
                </p>
                <p className="inline-flex items-center gap-2">
                  <FiUsers className="text-[#8C1515]" />
                  {item.audience}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to={`/announcements/${item.id}`}
                  className="inline-flex items-center gap-2 bg-[#8C1515] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6f1111]"
                >
                  View Details <FiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredAnnouncements.length === 0 && (
          <div className="mt-7 border border-gray-200 bg-white p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              No announcements matched your filters
            </h3>
            <p className="mt-2 text-gray-600">
              Try changing search terms or clear filters to view all
              announcements.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 bg-[#8C1515] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6f1111]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
