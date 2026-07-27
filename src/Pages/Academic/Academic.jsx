import React from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "2,402", label: "Faculty members" },
  { value: "5:1", label: "Student-to-faculty ratio" },
  { value: "About 150", label: "Graduate fields of study" },
];

const programs = [
  {
    title: "Undergraduate Studies",
    image: "/academics/academics-1.png",
    alt: "Undergraduate students collaborating",
    points: [
      {
        title: "Undergraduate Education",
        text: "Build strong foundations with practical academics and engaging classroom learning.",
        linkLabel: "Undergraduate Education",
        linkTo: "/academic/english",
      },
      {
        title: "Majors",
        text: "Choose from diverse fields of study that match your interests and goals.",
        linkLabel: "Explore Majors",
        linkTo: "/academic/mathematics",
      },
      {
        title: "Facts and Figures",
        text: "See key details about the undergraduate experience and student body.",
      },
    ],
  },
  {
    title: "Short Courses",
    image: "/academics/academics-2.png",
    alt: "Graduate students discussing a project",
    points: [
      {
        title: "Short Courses",
        text: "Gain practical, in-demand skills through our intensive short programs designed to bridge the gap between education and industry.",
        linkLabel: "Graduate Education",
        linkTo: "/academic/hons",
      },
      {
        title: "Facts and Figures",
        text: "Explore short courses programs, specializations, and advanced opportunities.",
      },
    ],
  },
];

const Academics = () => {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Hero */}
      <div className="text-center px-4 pt-14 sm:pt-16 md:pt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            Academics
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-700 leading-relaxed">
            Students create and apply knowledge by thinking and doing, preparing
            for leadership in a rapidly changing world.
          </p>
        </div>

        <div className="mt-10 max-w-6xl mx-auto">
          <img
            src="academics/academics-4.png"
            alt="Students learning together in a classroom"
            className="w-full h-[260px] sm:h-[380px] md:h-[500px] lg:h-[620px] object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-y border-gray-300 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-9 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h2 className="text-3xl font-bold text-black">{stat.value}</h2>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-6xl mx-auto px-4 py-14 sm:py-16 space-y-14 sm:space-y-16">
        {programs.map((program, programIndex) => (
          <div key={program.title}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-black mb-10">
              {program.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#e5e7eb] gap-0">
              <img
                src={program.image}
                alt={program.alt}
                className={`w-full h-[280px] sm:h-[360px] lg:h-full object-cover ${
                  programIndex % 2 === 0 ? "order-1" : "order-1 lg:order-2"
                }`}
              />

              <div
                className={`p-6 sm:p-8 md:p-10 ${
                  programIndex % 2 === 0 ? "order-2" : "order-2 lg:order-1"
                }`}
              >
                {program.points.map((point, pointIndex) => (
                  <div
                    key={point.title}
                    className={pointIndex > 0 ? "mt-7" : ""}
                  >
                    <h3 className="text-xl font-semibold text-black">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      {point.text}
                    </p>
                    {/* {point.linkTo && point.linkLabel ? (
                      <Link
                        to={point.linkTo}
                        className="inline-block mt-2 text-[var(--theme-accent)] font-medium hover:underline"
                      >
                        {point.linkLabel} &rsaquo;
                      </Link>
                    ) : null} */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA + Bottom Image */}
      <div className="bg-[#3b4047] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14 sm:py-16 text-center">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Seven schools on one campus offer students boundless opportunities
            to pursue their passions and collaborate on solving complex global
            problems.
          </p>
          <Link
            to="/admissions/detail"
            className="inline-block mt-6 bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] px-6 py-3 font-semibold transition-colors"
          >
            Learn more about our seven schools
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <img
          src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1800&auto=format&fit=crop"
          alt="Students walking across campus"
          className="w-full h-[260px] sm:h-[360px] md:h-[480px] object-cover"
        />
      </div>
    </div>
  );
};

export default Academics;
