import React from "react";
import { Link } from "react-router-dom";

const admissionPaths = [
  {
    title: "Undergraduate",
    description: "Pursue your passions through our diverse programs and join a community of scholars and innovators.",
    link: "/admissions/undergraduate",
    linkText: "Undergraduate admissions",
  },
  {
    title: "BBA Hons",
    description: "Advance your expertise with world-class faculty and cutting-edge research opportunities.",
    link: "/admissions/graduate",
    linkText: "BBA Hons admissions",
  },
  {
    title: "Short Courses",
    description: "Enhance your career with specialized certificates and executive programs designed for working professionals.",
    link: "/admissions/professional",
    linkText: "Short Courses admissions",
  },
];

const Admissions = () => {
  return (
    <section className="relative z-30 bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 max-w-[1500px]">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Admissions
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Discover your path to joining Al Fajr Institute. We seek exceptional 
            students from around the world who are ready to make an impact.
          </p>
        </header>

        {/* Admission Paths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {admissionPaths.map((path) => (
            <div
              key={path.title}
              className="border-t-4 border-[#8C1515] bg-[#f4f4f4] p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {path.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {path.description}
              </p>
              <Link
                to={path.link}
                className="inline-block text-[#006CB8] hover:text-[#8C1515] font-semibold text-base hover:underline transition-colors duration-300"
              >
                {path.linkText} &rsaquo;
              </Link>
            </div>
          ))}
        </div>


        {/* CTA Banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Ready to begin your journey at Al Fajr Institute?
          </p>
          <Link
            to="/admissions/detail"
            className="inline-block bg-[#8C1515] hover:bg-[#6f1111] text-white text-base sm:text-lg font-semibold px-10 py-4 min-w-[200px] text-center transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Start Your Application
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Admissions;