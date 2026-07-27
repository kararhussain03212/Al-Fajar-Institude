import React from "react";

const overview = [
  ["Track", "Short Courses"],
  ["Duration", "8 to 16 weeks per course"],
  ["Mode", "On-campus and Weekend (depending on course)"],
  ["Eligibility", "Intermediate or equivalent (varies by course)"],
];

const shortCourses = [
  ["SC-101", "Foundation Mathematics", "8 Weeks", "3(3+0)"],
  ["SC-102", "Academic English and Writing", "8 Weeks", "3(3+0)"],
  ["SC-103", "Introduction to Statistics", "10 Weeks", "3(3+0)"],
  ["SC-104", "Programming Fundamentals", "12 Weeks", "4(3+1)"],
  ["SC-105", "Office Automation and Productivity Tools", "8 Weeks", "2(1+1)"],
  ["SC-106", "Business Communication", "8 Weeks", "2(2+0)"],
  ["SC-107", "Basic Accounting", "10 Weeks", "3(3+0)"],
  ["SC-108", "Digital Marketing Essentials", "8 Weeks", "2(2+0)"],
  ["SC-109", "Web Design Basics", "12 Weeks", "3(2+1)"],
  ["SC-110", "Research and Report Writing", "8 Weeks", "2(2+0)"],
];

const highlights = [
  "Industry-focused short duration courses",
  "Flexible weekend and evening schedule",
  "Certificate upon successful completion",
  "Courses may be offered subject to available resources",
];

const thClass =
  "border border-gray-300 bg-[var(--theme-primary)] px-3 py-2 text-left text-sm font-semibold text-white";
const tdClass = "border border-gray-300 px-3 py-2 text-sm text-gray-800";

const ShortCourse = () => {
  return (
    <section className="bg-[#f3f4f6] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden border border-gray-300 bg-white">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1800&auto=format&fit=crop"
            alt="Short Courses"
            className="h-72 w-full object-cover sm:h-80"
          />

          <div className="px-4 py-8 sm:px-8 sm:py-10">
            <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              Short Courses
            </h1>

            <div className="mt-8 overflow-x-auto border border-gray-300">
              <table className="min-w-full border-collapse bg-white">
                <tbody>
                  {overview.map((item) => (
                    <tr key={item[0]}>
                      <td className="border border-gray-300 bg-[var(--theme-surface-soft)] px-3 py-2 text-sm font-semibold text-gray-900 sm:w-72">
                        {item[0]}
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800">
                        {item[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              Available Courses
            </h2>
            <div className="mt-4 overflow-x-auto border border-gray-300">
              <table className="min-w-full border-collapse bg-white">
                <thead>
                  <tr>
                    <th className={thClass}>Code</th>
                    <th className={thClass}>Course Title</th>
                    <th className={thClass}>Duration</th>
                    <th className={thClass}>C/Hr</th>
                  </tr>
                </thead>
                <tbody>
                  {shortCourses.map((course) => (
                    <tr key={course[0]}>
                      <td className={tdClass}>{course[0]}</td>
                      <td className={tdClass}>{course[1]}</td>
                      <td className={tdClass}>{course[2]}</td>
                      <td className={tdClass}>{course[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              Highlights
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--theme-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortCourse;


