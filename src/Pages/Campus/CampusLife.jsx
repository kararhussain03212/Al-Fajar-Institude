import React from "react";
import { Link } from "react-router-dom";
import { campusSections } from "../../Data";

// DATA
const stats = [
  { value: "600+", label: "Organized student groups" },
  { value: "81", label: "Undergraduate student residences" },
  { value: "14,000+", label: "Students living on campus" },
];

const CampusLife = () => {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="max-w-300 mx-auto my-15">
        <h1 className="flex text-3xl sm:text-4xl font-bold justify-center my-5 text-[var(--theme-primary)]">
          Campus Life
        </h1>
        <p className="flex text-lg sm:text-2xl justify-center max-w-3xl mx-auto text-center mb-10 px-4">
          Our thriving residential campus is home to a community of creative and
          accomplished people from around the world.
        </p>
        {/* HERO */}
        <div className="px-4 pt-6">
          <img
            src="campus-life/campus-4.png"
            className="w-full h-72 md:h-125 object-cover"
          />
        </div>

        {/* STATS */}
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 border-y my-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--theme-primary)]">{stat.value}</h2>
                <p className="text-sm text-[var(--theme-text)]/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT SECTIONS */}
        {campusSections.map((section, sectionIndex) => (
          <div
            key={`${section.heading}-${sectionIndex}`}
            className="px-4 py-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[var(--theme-primary)] mb-8">
              {section.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.cards.map((card, cardIndex) => (
                <div key={`${card.title}-${sectionIndex}-${cardIndex}`}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-56 md:h-64 object-cover mb-3"
                  />

                  <h3 className="font-bold text-2xl mb-1 text-[var(--theme-primary)]">{card.title}</h3>
                  <p className="text-[var(--theme-text)]/70 text-base mb-2">{card.text}</p>

                  {/* {card.link && (
                    <Link
                      to={card.link.url}
                      className="text-[var(--theme-accent)] text-sm hover:underline"
                    >
                      {card.link.text} &rsaquo;
                    </Link>
                  )} */}

                  {/* {card.links && (
                    <ul className="space-y-1 mt-2">
                      {card.links.map((item) => (
                        <li key={item.text}>
                          <Link
                            to={item.url}
                            className="text-[var(--theme-accent)] text-xs hover:underline"
                          >
                            {item.text} &rsaquo;
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* PANORAMA */}
      </div>
      {/* <div className="w-full">
        <img
          src="campus-life/campus-5.png"
          className="w-full h-64 md:h-96 object-cover object-center"
        />
      </div> */}
    </section>
  );
};

export default CampusLife;
