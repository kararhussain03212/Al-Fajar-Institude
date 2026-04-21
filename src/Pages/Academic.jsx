import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const cards = [
  {
    title: "Undergraduate Education",
    description:
      "Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise",
    linkText: "Undergraduate Education",
    link: "/academic",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Graduate Education",
    description:
      "Unsurpassed opportunities to participate in the advancement of entire fields of knowledge",
    linkText: "Graduate Education",
    link: "/academic/hons",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=900&auto=format&fit=crop",
    featured: true,
  },
  {
    title: "Lifelong Learning",
    description:
      "Continuing adult education, executive and professional programs, and programs for K-12 students",
    link: "/academic/shortcourse",
    linkText: "Lifelong Learning",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=900&auto=format&fit=crop",
    featured: false,
  },
];

const schools = [
  {
    title: "Mathematics",
    link: "/academic/mathematics",
    featured: true,
  },
  {
    title: "English",
    link: "/academic/english",
    featured: true,
  },
  {
    title: "Computer Science",
    link: "/academic/computer-science",
    featured: true,
  },
  {
    title: "BBA Hons",
    link: "/academic/hons",
    featured: true,
  },
  {
    title: "Short Courses",
    link: "/academic/shortcourse",
    featured: false,
  },
];

const Academic = () => {
  const testimonialRef = useRef(null);
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
  const featuredCards = cards.filter((card) => card.featured);
  const featuredSchools = schools.filter((school) => school.featured);
  const displayedCards = featuredCards.length ? featuredCards : cards;
  const displayedSchools = featuredSchools.length ? featuredSchools : schools;

 useEffect(() => {
  const node = testimonialRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsTestimonialVisible(entry.isIntersecting);
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-40% 0px -40% 0px",
    }
  );

  observer.observe(node);
  return () => observer.disconnect();
}, []);

  return (
    <section className="relative z-30 bg-[#f4f4f4] py-12 sm:py-16 md:py-20">
      <div className=" mx-auto px-4 sm:px-6 max-w-[1600px]">
        <header className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Academics
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Preparing students to make meaningful contributions to society as
            engaged citizens and leaders in a complex world
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {displayedCards.map((card) => (
            <article key={card.title} className="min-w-0">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-3 text-gray-900 text-lg sm:text-xl font-bold leading-tight">
                {card.title}
              </h3>
              <p className="mt-2 text-gray-700 text-base sm:text-lg leading-relaxed">
                {card.description}
              </p>
              <Link
                to={card.link}
                className="inline-block mt-3 text-base sm:text-lg text-[#006CB8] hover:underline"
              >
                {card.linkText} &rsaquo;
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Five schools in which to pursue your passions
          </h3>
          <ul className="mt-4 flex flex-wrap justify-center items-center text-base sm:text-lg leading-tight">
            {displayedSchools.map((school, index) => (
              <li key={school.title} className="text-[#006CB8]">
                <Link to={school.link} className="hover:underline">
                  {school.title}
                </Link>
                {index < displayedSchools.length - 1 && (
                  <span className="text-black mx-2 sm:mx-3">|</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center mt-12 sm:mt-14">
          <Button
            to="/academic"
            variant="primary"
            size="lg"
            className="text-base sm:text-lg"
          >
            More about academics
          </Button>
        </div>
      </div>

      <div
        ref={testimonialRef}
        className="relative mt-12 sm:mt-16 h-[420px] sm:h-[520px] md:h-[620px] overflow-hidden"
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isTestimonialVisible ? "opacity-100" : "opacity-100"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1920&auto=format&fit=crop"
            alt="Student working in lab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop"
              alt="Renee Zhao"
              className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white/20 transition-opacity duration-500 ${
                isTestimonialVisible ? "opacity-100" : "opacity-0"
              }`}
            />
            <p
              className={`text-2xl sm:text-3xl md:text-5xl font-medium leading-tight transition-opacity duration-500 ${
                isTestimonialVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              "The truly impactful technologies are always based on the
              condition that you can freely explore."
            </p>
            <p
              className={`mt-6 text-lg sm:text-2xl font-semibold transition-opacity duration-500 ${
                isTestimonialVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Renee Zhao
            </p>
            <p
              className={`mt-1 text-base sm:text-lg italic transition-opacity duration-500 ${
                isTestimonialVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Assistant Professor of Mechanical Engineering
            </p>
            {/* <a
              href="Academic/academic"
              className={`inline-block mt-2 text-base sm:text-lg font-semibold hover:underline transition-opacity duration-500 ${
                isTestimonialVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Read more &rsaquo;
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
