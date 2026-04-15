import React from "react";

const Faculty = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Syed Zulfiqar Zaidi",
      role: "Principal",
      image: "https://placehold.co/600x400?text=Faculty+Image",
    },
    {
      id: 2,
      name: "Tansir Abbas Hashmi",
      role: "Coordinator",
      image: "https://placehold.co/600x400?text=Faculty+Image",
    },
    {
      id: 3,
      name: "Muhammad Irfan",
      role: "Lecturer",
      image: "https://placehold.co/600x400?text=Faculty+Image",
    },
    {
      id: 4,
      name: "Muhammad Burair Hussain",
      role: "Lecturer",
      image: "https://placehold.co/600x400?text=Faculty+Image",
    },
    {
      id: 5,
      name: "Muhammad Burair Hussain",
      role: "Lecturer",
      image: "https://placehold.co/600x400?text=Faculty+Image",
    },
  ];
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-8">
      {/* Header with Green Underline */}
      <div className="flex justify-center relative mb-8">
        <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-green-600"></div>
        <h1 className="relative z-10 text-xl font-bold py-2 px-6 mb-4 bg-green-600 text-white">
          Meet Our Team
        </h1>
      </div>

      {/* Light Green Background Container */}
      <div className="bg-[#d4d4b8] rounded-lg p-6 md:p-8">
        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-sm overflow-hidden shadow-sm"
            >
              {/* Member Image */}
              <div className="w-full h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Member Info */}
              <div className="py-4 px-4 text-center">
                <h3 className="text-yellow-500 font-bold text-lg mb-2">
                  {member.name}
                </h3>

                {/* Decorative Line with Dot */}
                <div className="flex items-center justify-center mb-3">
                  <div className="w-8 h-[1px] bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mx-1"></div>
                  <div className="w-8 h-[1px] bg-yellow-500"></div>
                </div>

                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
