import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const facultyMembers = [
  {
    name: "Jennifer Aarons, PhD",
    designation: "Assistant Professor",
    department: "History",
    image:
      "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbf8vcf8o%2Fimage%2Fupload%2Fv1683464459%2Fzulfiaq_zaidi_19230059eb.jpg&w=256&q=75",
    email: "jennifer.aarons@alfajr.edu",
    phone: "+1 2245 1247 241",
  },
  {
    name: "Barry Palatnik, Ed.D",
    designation: "Associate Professor",
    department: "History",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=900&auto=format&fit=crop",
    email: "barry.palatnik@alfajr.edu",
    phone: "+1 2245 1247 241",
  },
  {
    name: "Marc Robinson, MBA",
    designation: "Teaching Specialist",
    department: "Accounting",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=900&auto=format&fit=crop",
    email: "marc.robinson@alfajr.edu",
    phone: "+1 2245 1247 241",
  },
  {
    name: "Nancy Steppin, DBA",
    designation: "Assistant Professor",
    department: "Finance",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
    email: "nancy.steppin@alfajr.edu",
    phone: "+1 2245 1247 241",
  },
];

const Faculty = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleFaculty = facultyMembers.slice(0, visibleCount);
  const hasMore = visibleCount < facultyMembers.length;

  return (
    <section className="bg-[#f5f5f5]">
      <div className="relative h-72 overflow-hidden sm:h-80">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop"
          alt="Campus view"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#101826]/45" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white sm:px-6">
          <div className="mb-3 text-sm text-white/90">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Faculty</span>
          </div>
          <h1 className="text-3xl font-bold sm:text-5xl">Faculty Directory</h1>
        </div>
      </div>

      <div className="mx-auto max-w-[1300px] px-4 py-12 sm:px-6 sm:py-14">
        <h2 className="text-4xl font-semibold text-gray-900">
          Faculty and Staff Directory
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {visibleFaculty.map((member) => (
            <article
              key={`${member.name}-${member.email}`}
              className="grid grid-cols-1 border border-gray-200 bg-white p-3 md:grid-cols-[200px_1fr] md:gap-4"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-80 w-full object-cover object-center sm:h-96 md:h-full md:min-h-[260px]"
              />

              <div className="mt-4 sm:mt-0">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-700">{member.designation}</p>
                <p className="text-sm text-gray-600">{member.department}</p>

                <div className="mt-3 flex items-center gap-3 text-gray-600">
                  <a
                    href="#"
                    className="hover:text-[#8C1515]"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-xs" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#8C1515]"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-xs" />
                  </a>
                  <a
                    href="#"
                    className="hover:text-[#8C1515]"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xs" />
                  </a>
                </div>

                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  <p className="flex items-center gap-2">
                    <FiMail className="text-[#8C1515]" />
                    <span className="break-all">{member.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <FiPhone className="text-[#8C1515]" />
                    <span>{member.phone}</span>
                  </p>
                </div>

                {/* <button className="mt-4 border border-[#8C1515] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#8C1515] hover:bg-[#8C1515] hover:text-white">
									More Details
								</button> */}
              </div>
            </article>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((previous) => previous + 4)}
              className="bg-[#8C1515] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6f1111]"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Faculty;
