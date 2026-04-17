import React from "react";

// DATA
const stats = [
  { value: "600+", label: "Organized student groups" },
  { value: "81", label: "Undergraduate student residences" },
  { value: "14,000+", label: "Students living on campus" },
];

const campusSections = [
  {
    heading: "Student Life",
    cards: [
      {
        title: "Student Affairs",
        image:
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80&auto=format&fit=crop",
        text: "Student Affairs provides leadership, residential programs, and community engagement.",
        link: { text: "Student Affairs", url: "#" },
      },
      {
        title: "Housing & Dining",
        image:
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop",
        text: "Students reside in multiple residences with dining halls and healthy meals.",
        link: { text: "Residential & Dining Enterprises", url: "#" },
      },
      {
        title: "Community Engagement",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop",
        text: "Programs supporting the student community:",
        links: [
          { text: "Public Service", url: "#" },
          { text: "Spiritual Life", url: "#" },
          { text: "Graduate Life", url: "#" },
        ],
      },
    ],
  },
  {
    heading: "Student Life",
    cards: [
      {
        title: "Student Affairs",
        image:
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80&auto=format&fit=crop",
        text: "Student Affairs provides leadership, residential programs, and community engagement.",
        link: { text: "Student Affairs", url: "#" },
      },
      {
        title: "Housing & Dining",
        image:
          "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&auto=format&fit=crop",
        text: "Students reside in multiple residences with dining halls and healthy meals.",
        link: { text: "Residential & Dining Enterprises", url: "#" },
      },
      {
        title: "Community Engagement",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop",
        text: "Programs supporting the student community:",
        links: [
          { text: "Public Service", url: "#" },
          { text: "Spiritual Life", url: "#" },
          { text: "Graduate Life", url: "#" },
        ],
      },
    ],
  },
];

const CampusLife = () => {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="max-w-[1200px] mx-auto my-15">
        <h1 className="flex text-4xl font-bold justify-center my-5">Campus Life</h1>
        <p className="flex text-2xl justify-center max-w-3xl mx-auto text-center mb-10">
          Our thriving residential campus is home to a community of creative and
          accomplished people from around the world.
        </p>
        {/* HERO */}
        <div className="px-4 pt-6">
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80&auto=format&fit=crop"
            className="w-full h-72 md:h-[500px] object-cover"
          />
        </div>

        {/* STATS */}
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 border-y my-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center py-6">
                <h2 className="text-2xl md:text-3xl font-bold">{stat.value}</h2>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT SECTIONS */}
        {campusSections.map((section, sectionIndex) => (
          <div key={`${section.heading}-${sectionIndex}`} className="px-4 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
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

                  <h3 className="font-bold text-2xl mb-1">{card.title}</h3>
                  <p className="text-gray-600 text-l mb-2">{card.text}</p>

                  {card.link && (
                    <a
                      href={card.link.url}
                      className="text-blue-700 text-s hover:underline"
                    >
                      {card.link.text} &rsaquo;
                    </a>
                  )}

                  {card.links && (
                    <ul className="space-y-1 mt-2">
                      {card.links.map((item) => (
                        <li key={item.text}>
                          <a
                            href={item.url}
                            className="text-blue-700 text-xs hover:underline"
                          >
                            {item.text} &rsaquo;
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* PANORAMA */}
      </div>
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80&auto=format&fit=crop"
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>
    </section>
  );
};

export default CampusLife;
