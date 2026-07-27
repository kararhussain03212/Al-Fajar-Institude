import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBriefcase,
  FiClock,
  FiMapPin,
  FiSearch,
  FiUsers,
  FiX,
} from "react-icons/fi";
import { jobsData } from "./jobsData";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const Job = () => {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [jobType, setJobType] = useState("All Types");
  const [location, setLocation] = useState("All Locations");

  const departments = useMemo(
    () => ["All Departments", ...new Set(jobsData.map((job) => job.department))],
    []
  );

  const jobTypes = useMemo(
    () => ["All Types", ...new Set(jobsData.map((job) => job.type))],
    []
  );

  const locations = useMemo(
    () => ["All Locations", ...new Set(jobsData.map((job) => job.location))],
    []
  );

  const filteredJobs = useMemo(() => {
    const sorted = [...jobsData].sort(
      (a, b) => new Date(b.postedOn) - new Date(a.postedOn)
    );

    return sorted.filter((job) => {
      const searchable = `${job.title} ${job.department} ${job.summary}`.toLowerCase();
      const matchesQuery = searchable.includes(query.trim().toLowerCase());
      const matchesDepartment =
        department === "All Departments" || job.department === department;
      const matchesType = jobType === "All Types" || job.type === jobType;
      const matchesLocation = location === "All Locations" || job.location === location;

      return matchesQuery && matchesDepartment && matchesType && matchesLocation;
    });
  }, [query, department, jobType, location]);

  const hasFilters =
    query.trim() ||
    department !== "All Departments" ||
    jobType !== "All Types" ||
    location !== "All Locations";

  const resetFilters = () => {
    setQuery("");
    setDepartment("All Departments");
    setJobType("All Types");
    setLocation("All Locations");
  };

  return (
    <section className="bg-[var(--theme-surface)] pb-14">
      <div className="relative h-75 overflow-hidden sm:h-90">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
          alt="Career opportunities at Al Fajr Institute"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0b1324]/80 to-[var(--theme-primary)]/70" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 text-white sm:px-6">
          <p className="text-sm uppercase tracking-widest text-white/85">Careers at Al Fajr Institute</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">
            Build Impactful Careers With Purpose
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/90 sm:text-lg">
            Join our academic and professional teams to shape the next generation through
            innovation, mentorship, and excellence.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        

        <div className="mt-8 border border-gray-200 bg-white p-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <label className="relative block">
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search jobs"
                className="h-11 w-full border border-gray-300 pl-10 pr-3 text-sm text-gray-800 outline-none focus:border-[var(--theme-primary)]"
              />
            </label>

            <select
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:border-[var(--theme-primary)]"
            >
              {departments.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={jobType}
              onChange={(event) => setJobType(event.target.value)}
              className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:border-[var(--theme-primary)]"
            >
              {jobTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none focus:border-[var(--theme-primary)]"
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
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--theme-primary)] hover:text-[var(--theme-primary-dark)]"
            >
              <FiX />
              Clear filters
            </button>
          )}
        </div>

        <div className="mt-7 space-y-5">
          {filteredJobs.map((job) => (
            <article
              key={job.id}
              className="grid grid-cols-1 overflow-hidden border border-gray-200 bg-white shadow-sm transition hover:shadow-md lg:grid-cols-[220px_1fr]"
            >
              <img
                src={job.image}
                alt={job.title}
                className="h-56 w-full object-cover lg:h-full"
              />

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="bg-[var(--theme-primary)]/10 px-2 py-1 font-semibold text-[var(--theme-primary)]">
                    {job.type}
                  </span>
                  <span className="bg-[var(--theme-navy)]/10 px-2 py-1 font-semibold text-[var(--theme-navy)]">
                    {job.workplace}
                  </span>
                </div>

                <h2 className="mt-3 text-3xl font-bold text-gray-900">{job.title}</h2>
                <p className="mt-2 text-gray-700">{job.summary}</p>

                <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2 lg:grid-cols-4">
                  <p className="inline-flex items-center gap-2">
                    <FiBriefcase className="text-[var(--theme-primary)]" />
                    {job.department}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <FiMapPin className="text-[var(--theme-primary)]" />
                    {job.location}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <FiClock className="text-[var(--theme-primary)]" />
                    Deadline: {formatDate(job.deadline)}
                  </p>
                  <p className="inline-flex items-center gap-2">
                    <FiUsers className="text-[var(--theme-primary)]" />
                    {job.openings} Openings
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to={`/job/${job.id}`}
                    className="inline-flex items-center gap-2 bg-[var(--theme-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--theme-primary-dark)]"
                  >
                    View Details <FiArrowRight />
                  </Link>
                  <a
                    href={`mailto:info@ssdo.org.pk?subject=Application for ${encodeURIComponent(
                      job.title
                    )}`}
                    className="inline-flex items-center gap-2 border border-[var(--theme-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--theme-primary)] hover:bg-[var(--theme-primary)] hover:text-white"
                  >
                    Apply by Email
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="mt-7 border border-gray-200 bg-white p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">No jobs matched your filters</h3>
            <p className="mt-2 text-gray-600">
              Try changing search terms or clear filters to view all opportunities.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 bg-[var(--theme-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--theme-primary-dark)]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Job;

