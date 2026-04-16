import React from "react";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  const excellenceSections = [
    {
      title: "Excellence in education across disciplines",
      description: `Al Fajr Institute provides students the opportunity to engage with big ideas, 
    to cross conceptual and disciplinary boundaries, and to become global citizens 
    who embrace diversity of thought and experience. We offer broad and deep 
    academic programs across multiple fields, including the arts and humanities, 
    natural and social sciences, engineering, sustainability, medicine, law, 
    education, and business. The university's scholarly excellence and culture of 
    innovation uniquely position it to attract the best faculty in the world, who 
    offer students the knowledge and tools to discover and embrace new ideas, 
    and to prepare for successful careers and lives of service. The need for 
    strong ethical principles to achieve a common good is embedded across our 
    educational offerings.`,
      buttonText: "Learn more about academics",
      buttonLink: "/academic",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Students collaborating at Al Fajr Institute",
    },
    {
      title: "Excellence in education across disciplines",
      description: `Al Fajr Institute provides students the opportunity to engage with big ideas, 
    to cross conceptual and disciplinary boundaries, and to become global citizens 
    who embrace diversity of thought and experience. We offer broad and deep 
    academic programs across multiple fields, including the arts and humanities, 
    natural and social sciences, engineering, sustainability, medicine, law, 
    education, and business. The university's scholarly excellence and culture of 
    innovation uniquely position it to attract the best faculty in the world, who 
    offer students the knowledge and tools to discover and embrace new ideas, 
    and to prepare for successful careers and lives of service. The need for 
    strong ethical principles to achieve a common good is embedded across our 
    educational offerings.`,
      buttonText: "Learn more about academics",
      buttonLink: "/academic",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Students collaborating at Al Fajr Institute",
    },
  ];

  return (
    <section className=" relative z-30 bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto px-4 sm:px-6 max-w-[1500px]">
        <div className=" ">
          {/* Section Header */}
          <header className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Who We Are
            </h2>
          </header>

          {/* Hero Image */}
          <div className="mb-8 sm:mb-12">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
              alt="Al Fajr Institute Campus"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Description Text */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-gray-700 text-base sm:text-3xl leading-relaxed mx-auto">
              From its founding with a vision to illuminate minds through
              knowledge, Al Fajr Institute has been dedicated to excellence in
              education and research. We believe strongly in the mission of
              higher education – to create and share knowledge and to prepare
              students to be curious, to think critically, and to contribute to
              the world. With world-class scholars and diverse programs, Al Fajr
              offers academic excellence across the broadest array of
              disciplines. It is also an engine of innovation, blending theory
              and practice to move ideas and discoveries from labs and
              classrooms out into the world. We strive to foster a culture of
              expansive inquiry, fresh thinking, searching discussion, and
              freedom of thought – preparing students for leadership and engaged
              citizenship in the world.
            </p>
          </div>
        </div>

        {excellenceSections.map((section, index) => {
          const isSwapped = index % 2 === 1;

          return (
            <div
              key={`${section.title}-${index}`}
              className="mx-auto px-4 sm:px-6 mb-16 sm:mb-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch lg:min-h-[600px]">
                <div
                  className={`bg-[#f5f5f5] p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center ${
                    isSwapped ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {section.title}
                  </h3>
                  <p className="text-gray-800 text-2xl sm:text-base leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <div>
                    <Link
                      to={section.buttonLink}
                      className="inline-block bg-[#8C1515] hover:bg-[#6f1111] text-white text-sm sm:text-base font-semibold px-8 py-3 min-w-[280px] text-center transition-colors duration-300"
                    >
                      {section.buttonText}
                    </Link>
                  </div>
                </div>

                <div
                  className={`h-full justify-center ${
                    isSwapped ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-0 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhoWeAre;
