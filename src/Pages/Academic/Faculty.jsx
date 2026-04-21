import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

const facultyMembers = [
  {
    name: "Dr. Syed Zulfiqar Zaidi",
    designation: "Principal",
    department: "Mathematics",
    image:
      "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbf8vcf8o%2Fimage%2Fupload%2Fv1683464459%2Fzulfiaq_zaidi_19230059eb.jpg&w=256&q=75",
    email: "jennifer.aarons@alfajr.edu",
    phone: "+1 2245 1247 241",
    social: {
      facebook: "https://www.facebook.com/AlFajarInstitute/",
      linkedin: "https://linkedin.com/school/alfajrinstitute",
      instagram: "https://instagram.com/alfajrinstitute",
    },
  },
  {
    name: "Tansir Abbas Hashmi",
    designation: "Coordinator",
    department: "Mathematics",
    image:
      "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbf8vcf8o%2Fimage%2Fupload%2Fv1683473327%2Ftansir_abbas_608906cb94.png&w=256&q=75",
    email: "nancy.steppin@alfajr.edu",
    phone: "+1 2245 1247 241",
    social: {
      facebook: "https://www.facebook.com/AlFajarInstitute/",
      linkedin: "https://linkedin.com/school/alfajrinstitute",
      instagram: "https://instagram.com/alfajrinstitute",
    },
  },
  {
    name: "Muhammad Irfan",
    designation: "Lecturer",
    department: "Business Administration",
    image:
      "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbf8vcf8o%2Fimage%2Fupload%2Fv1683457818%2Fmuhammad_irfan_2ac5883159.png&w=256&q=75",
    email: "barry.palatnik@alfajr.edu",
    phone: "+1 2245 1247 241",
    social: {
      facebook: "https://www.facebook.com/AlFajarInstitute/",
      linkedin: "https://linkedin.com/school/alfajrinstitute",
      instagram: "https://instagram.com/alfajrinstitute",
    },
  },
  {
    name: "Muhammad Burair Hussain",
    designation: "Lecturer",
    department: "physics",
    image:
      "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbf8vcf8o%2Fimage%2Fupload%2Fv1683401816%2Fburair_hussain_990d409d1e.png&w=256&q=75",
    email: "marc.robinson@alfajr.edu",
    phone: "+1 2245 1247 241",
    social: {
      facebook: "https://www.facebook.com/AlFajarInstitute/",
      linkedin: "https://linkedin.com/school/alfajrinstitute",
      instagram: "https://instagram.com/alfajrinstitute",
    },
  },
  {
    name: "Noor hassan",
    designation: "Lecturer",
    department: "Mathematics",
    image:
      "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbf8vcf8o%2Fimage%2Fupload%2Fv1707801171%2FWhats_App_Image_2024_02_01_at_09_56_03_58d30d34d1.jpg&w=256&q=75",
    email: "nancy.steppin@alfajr.edu",
    phone: "+1 2245 1247 241",
    social: {
      facebook: "https://www.facebook.com/AlFajarInstitute/",
      linkedin: "https://linkedin.com/school/alfajrinstitute",
      instagram: "https://instagram.com/alfajrinstitute",
    },
  },
  {
    name: "Ammara Gul",
    designation: "Lecturer",
    department: "English",
    image:
      "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbf8vcf8o%2Fimage%2Fupload%2Fv1683464755%2FAmmara_Gul_30d1103522.png&w=256&q=75",
    email: "nancy.steppin@alfajr.edu",
    phone: "+1 2245 1247 241",
    social: {
      facebook: "https://www.facebook.com/AlFajarInstitute/",
      linkedin: "https://linkedin.com/school/alfajrinstitute",
      instagram: "https://instagram.com/alfajrinstitute",
    },
  },
  {
    name: "Obed Ullah Khan",
    designation: "Lecturer",
    department: "English",
    image:
      "https://www.alfajr.edu.pk/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdbf8vcf8o%2Fimage%2Fupload%2Fv1707800365%2FWhats_App_Image_2024_01_30_at_14_36_48_1_49612e9ac5.jpg&w=256&q=75",
    email: "nancy.steppin@alfajr.edu",
    phone: "+1 2245 1247 241",
    social: {
      facebook: "https://www.facebook.com/AlFajarInstitute/",
      linkedin: "https://linkedin.com/school/alfajrinstitute",
      instagram: "https://instagram.com/alfajrinstitute",
    },
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

      <div className="mx-auto max-w-325 px-4 py-12 sm:px-6 sm:py-14">
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
                className="h-80 w-full object-cover object-center sm:h-96 md:h-full md:min-h-65"
              />

              <div className="mt-4 sm:mt-0">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-700">{member.designation}</p>
                <p className="text-sm text-gray-600">{member.department}</p>

                <div className="mt-3 flex items-center gap-3 text-gray-600">
                  <a
                    href={member.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8C1515]"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="text-xs" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8C1515]"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="text-xs" />
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#8C1515]"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xs" />
                  </a>
                </div>

                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  <p className="flex items-center gap-2">
                    <FiMail className="text-[#8C1515]" />
                    <a href={`mailto:${member.email}`} className="break-all hover:text-[#8C1515]">
                      {member.email}
                    </a>
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
