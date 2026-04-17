import React from "react";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  const excellenceSections = [
    {
      title: "Chairman Message",
      description: `At Al-Fajr International Institute of Higher Studies, we believe that higher education is the cornerstone of societal progress, driving innovation, economic growth, and social advancement. Our vision is to create a platform where talented youth from all backgrounds can access quality education without the burden of financial constraints, empowering them to reach their full potential.\n
We aim to produce well-educated, responsible, and skilled individuals who will lead Pakistan towards a brighter and better future. Through a commitment to academic excellence and community development, we are determined to shape a generation that is sincere, capable, and dedicated to making meaningful contributions to society. Together, we will build a prosperous nation with citizens who uphold values of integrity, knowledge, and responsibility.\n
Thank you for being a part of this journey.\n 
Warm regards,`,
      buttonText: "Learn more",
      buttonLink: "/about/chairman-message",
      image:
        "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdh6yabuea%2Fimage%2Fupload%2Fv1726332539%2Fpic_1a71125a4a.jpg&w=1920&q=75",
      imageAlt: "Students collaborating at Al Fajr Institute",
    },
    {
      title: "Research that changes the world",
      description: `At Al-Fajr International Institute of Higher Studies, we are dedicated to providing high-quality education that meets global standards. Our mission is to offer an exceptional learning environment that nurtures well-educated and skilled individuals who can understand and fulfill their social responsibilities.\n
We believe that education is the key to producing citizens who will positively impact society and contribute to the greatness of our nation. By fostering intellectual growth and personal development, we are preparing the youth of today to become the leaders of tomorrow, playing an integral role in the progress and prosperity of Pakistan.\n
We are committed to excellence, and we invite you to join us in our mission to empower the next generation.\n
Sincerely,`,
      buttonText: "Explore our research",
      buttonLink: "/research",
      image:
        "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdh6yabuea%2Fimage%2Fupload%2Fv1726332616%2Flogo_alfajr_6813e6f4ea.jpg&w=1920&q=75",
      imageAlt: "Research at Al Fajr Institute",
    },
  ];

  return (
    <section className="bg-white pt-[120px] sm:pt-[140px] md:pt-[148px] pb-12 sm:pb-16 md:pb-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 my-10 sm:my-12 md:my-15">
            Who We Are
          </h1>

          {/* Top Image */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <img
              src="https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdh6yabuea%2Fimage%2Fupload%2Fv1727277077%2FWhats_App_Image_2024_09_05_at_9_58_22_AM_28f0728426.jpg&w=640&q=75"
              alt="Al Fajr Institute Campus"
              className="w-full h-auto object-cover object-top rounded-lg"
            />
          </div>

          {/* Paragraph */}
          <p className="text-gray-700 text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto">
            Higher education is crucial for societal development, driving
            innovation, economic growth, and social progress. Unfortunately,
            many talented students in Pakistan are unable to pursue higher
            education due to financial constraints, hindering their personal
            growth and the country’s overall development.
            <br />
            <br />
            The Mianwali district of Pakistan, has a population of approximately
            1.46 million, with 0.74 million males and 0.72 million females. The
            overall literacy rate is 42.8%, significantly lower than other
            cities in Punjab. There's a notable gender disparity: male literacy
            is around 50%, while female literacy is about 29%. The district's
            population is predominantly rural, with 79.18% living in rural areas
            and only 20.82% in urban areas. These statistics highlight the
            urgent need for educational initiatives to address the gaps in
            education for both males and females.
          </p>
        </div>
      </div>

      {/* Sections */}
      {excellenceSections.map((section, index) => {
        const isSwapped = index % 2 === 1;

        return (
          <div
            key={`${section.title}-${index}`}
            className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 last:mb-0 py-10 sm:py-14 md:py-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 items-center">
              {/* Text */}
              <div
                className={`bg-[#f5f5f5] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center ${
                  isSwapped ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>

                <p className="text-gray-800 text-sm sm:text-base md:text-lg mb-6 whitespace-pre-line leading-relaxed">
                  {section.description}
                </p>

                <div className="mt-auto">
                  {/* Optional Button */}
                  {/*
                  <Link
                    to={section.buttonLink}
                    className="inline-block bg-[#8C1515] hover:bg-[#6f1111] text-white text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 w-full sm:w-auto sm:min-w-[280px] text-center transition-colors duration-300"
                  >
                    {section.buttonText}
                  </Link>
                  */}
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative w-full overflow-hidden ${
                  isSwapped ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default WhoWeAre;