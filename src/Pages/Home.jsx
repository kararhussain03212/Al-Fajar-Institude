import React, { useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import Button from "../components/Button";
import CampusNews from "./CampusNews"; // Import the new component
import Academic from "./Academic";
import CampusLife from "./CampusLife";
import UpcomingEvents from "./UpcomingEvents";
import Admissions from "./Admissions";

const Home = () => {
  const chairmanSectionRef = useRef(null);

  const handleExploreClick = () => {
    const target = chairmanSectionRef.current;
    if (!target) return;

    const fixedHeader = document.querySelector("header.fixed");
    const navbarOffset = fixedHeader ? fixedHeader.offsetHeight : 128;
    const targetTop =
      target.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: Math.max(targetTop, 0), behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-screen w-full">
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              'url("/home/institude.webp")',
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none px-4">
          <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold tracking-tight drop-shadow-2xl text-center">
            Al Fajr Institute
          </h1>
        </div>

        <Button
          onClick={handleExploreClick}
          variant="primary"
          className="absolute bottom-0 left-0 right-0 z-20 w-full py-3 sm:py-2 space-x-2"
        >
          <span className="font-semibold text-base sm:text-sm">
            Explore Al Fajr
          </span>
          <FiChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>

      {/* CHAIRMAN MESSAGE SECTION */}
      <div className="relative z-30 bg-gray-100">
        <div
          ref={chairmanSectionRef}
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Chairman Text */}
            <div className="bg-gray-200 p-6 sm:p-8 md:p-10 rounded-lg">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-700 mb-6 sm:mb-8">
                Chairman Message
              </h2>
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
                <p>
                  At Al-Fajr International Institute of Higher Studies, we
                  believe that higher education is the cornerstone of societal
                  progress, driving innovation, economic growth, and social
                  advancement. Our vision is to create a platform where
                  talented youth from all backgrounds can access quality
                  education without the burden of financial constraints,
                  empowering them to reach their full potential.
                </p>
                <p>
                  We aim to produce well-educated, responsible, and skilled
                  individuals who will lead Pakistan towards a brighter and
                  better future. Through a commitment to academic excellence and
                  community development, we are determined to shape a generation
                  that is sincere, capable, and dedicated to making meaningful
                  contributions to society. Together, we will build a prosperous
                  nation with citizens who uphold values of integrity, knowledge,
                  and responsibility.
                </p>
                <p className="text-gray-700 mt-6 sm:mt-8">
                  Thank you for being a part of this journey.
                </p>
                <p className="text-gray-800 font-semibold">Warm regards,</p>
              </div>
            </div>

            {/* Chairman Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src="/about/about-1.jpeg"
                alt="Chairman"
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* VISION & MISSION SECTION */}
      <div className="relative z-30 bg-white">
        <div
          className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 mb-9">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                A Vision
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
                Our vision is to produce responsible, well-educated, and skilled
                youth who will lead the nation toward a brighter and better
                future. We aim to contribute to society by cultivating a
                generation that is effective, sincere, and capable of making a
                positive and meaningful impact on the development of both
                society and the nation.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                A Mission
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
                Our mission is to establish an institute that provides
                high-quality education on par with leading institutions
                worldwide, offering an excellent learning environment to
                cultivate well-educated and skilled citizens. These individuals
                will be able to understand and fulfill their social
                responsibilities, becoming effective and distinguished members
                of society, thereby contributing to the prosperity and greatness
                of our nation.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <Button to="/about" variant="primary" size="lg">
              More About Al Fajr
            </Button>
          </div>
        </div>
      </div>

      <CampusNews />
      <Academic />
      <CampusLife />
      <UpcomingEvents />
      <Admissions />
    </div>
  );
};

export default Home;

