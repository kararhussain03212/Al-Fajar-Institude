import React, { useRef } from "react";
import { FiChevronDown } from "react-icons/fi";
import Button from "../components/Button";
import CampusNews from "./CampusNews"; // Import the new component
import Academic from "./Academic";
import CampusLife from "./CampusLife";
import UpcomingEvents from "./UpcomingEvents";
import Admissions from "./Admissions";

const Home = () => {
  const visionMissionRef = useRef(null);

  const handleExploreClick = () => {
    const target = visionMissionRef.current;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    const centerOffset = Math.max((window.innerHeight - rect.height) / 2, 0);
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const nextTop = Math.min(Math.max(absoluteTop - centerOffset, 0), maxScrollTop);

    window.scrollTo({ top: nextTop, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-screen w-full">
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage:
              'url("https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbf8vcf8o%2Fimage%2Fupload%2Fv1682801737%2FS7480015_248db55796.jpg&w=750&q=75")',
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

      {/* MISSION SECTION */}
      <div className="relative z-30 bg-white">
        <div
          ref={visionMissionRef}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              A Vision
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our vision is to produce responsible, well-educated, and skilled
              youth who will lead the nation toward a brighter and better
              future. We aim to contribute to society by cultivating a
              generation that is effective, sincere, and capable of making a
              positive and meaningful impact on the development of both society
              and the nation.
            </p>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              A Mission
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Our mission is to establish an institute that provides
              high-quality education on par with leading institutions worldwide,
              offering an excellent learning environment to cultivate
              well-educated and skilled citizens. These individuals will be able
              to understand and fulfill their social responsibilities, becoming
              effective and distinguished members of society, thereby
              contributing to the prosperity and greatness of our nation.
            </p>
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
