import React from "react";

const Introduction = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-8">
      <div className="flex justify-center relative">
        {/* Full-width underline */}
        <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-green-600"></div>

        {/* Text on top of the line */}
        <h1 className="relative z-10 text-2xl font-bold py-2 px-4 mb-4 bg-green-600 text-white">
          Introduction
        </h1>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Content with Wrapped Image */}
        <div className="text-justify text-gray-700 text-base leading-relaxed">
          {/* Image floated right */}
          <img
            src="https://placehold.co/600x400?font=roboto/ffffff&text=Al-Fajr+Institute+Building"
            alt="Al-Fajr Institute Building"
            className="float-right ml-6 mb-4 w-100 h-auto object-cover rounded shadow-md"
          />

          <p className="mb-4">
            Higher education is crucial for societal development, driving
            innovation, economic growth, and social progress. Unfortunately,
            many talented students in Pakistan are unable to pursue higher
            education due to financial constraints, hindering their personal
            growth and the country's overall development.
          </p>

          <p className="mb-4">
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

          <p className="mb-4">
            Currently, there are 17 colleges in District Mianwali, including 10
            for boys, 3 for girls, and 3 for commerce. Despite these
            institutions, several factors contribute to the low literacy rate in
            higher education. These include the lack of institutes or
            universities offering 4-year BS programs, limited access to higher
            education institutions for residents of rural areas, insufficient
            capacity of existing institutes to accommodate the entire district's
            population, and the cultural norms prevalent in the rural areas of
            Mianwali including neighboring districts.
          </p>

          <p className="mb-4">
            Establishing a university in Mari Indus, Mianwali, will address
            educational disparities by providing accessible higher education
            opportunities, promoting higher education literacy rates, fostering
            academic growth, and contributing to the overall socio-economic
            development of the region, including the neighboring districts of
            Chakwal, Attock, Kohat, Karak, Lakki Marwat, Dera Ismail Khan,
            Bhakkar, Khushab and across Pakistan.
          </p>

          <p className="mb-4">
            Syed Iftikhar Hussain Naqvi, Chairman of the Al-Aeen Educational
            Foundation, has undertaken a commendable initiative to bring higher
            education to the youth of this region and established Al-Fajr
            International Institute of Higher Studies. The details are as
            follows:
          </p>

          {/* Numbered List - Numbers Outside, Text Indented */}
          <ol className="list-decimal list-outside ml-6 space-y-4 mb-4">
            <li className="pl-2">
              An educational foundation titled "Al-Aeen Educational Foundation"
              was established in 2019 under license of Security Exchange
              Commission of Pakistan 1327.
            </li>

            <li className="pl-2">
              Al-Fajr International Institute of Higher Studies (AFIIHS) was
              established in 2021 under the umbrella of the Al-Aeen Educational
              Foundation. The foundation has secured 13.5 acres of land for the
              institute, which is registered in the name of the Al-Aeen
              Educational Foundation.
            </li>

            <li className="pl-2">
              Al-Fajr Institute is founded on a no-loss, no-profit basis,
              ensuring that all financial resources are directed solely towards
              enhancing the educational experience and infrastructure. This
              unique model emphasizes affordability and accessibility, allowing
              students from diverse economic backgrounds to pursue higher
              education without the burden of excessive tuition fees. The
              university's primary focus is on academic excellence and community
              development, reinvesting any surplus funds into scholarships,
              research, and campus facilities, rather than seeking financial
              gain.
            </li>

            <li className="pl-2">
              The Al-Fajr Institute possesses tangible assets totaling Rs.
              297.05 million in the form of land, buildings, furniture and
              fixtures, libraries, computer labs, office equipment, generators,
              motor vehicles, and electrical equipment. In addition, a sum of
              Rs. 26.3 million has been allocated within the Al-Aeen Educational
              Foundation to fulfill the requirements stipulated by governmental
              bodies.
            </li>

            <li className="pl-2">
              A state-of-the-art building worth Rs.150.0 million has been
              constructed on the land allocated for Al-Fajr Institute at
              Khayban-e-Mustafa Mari Indus, Kalabagh Road Minawali. After
              obtaining necessary approval from the Higher Education Department,
              the institute has launched programs in four departments: BS
              English, BS Computer Science, BS Mathematics, and BBA. These
              programs are affiliated with University of Sargodha, Pakistan. For
              more details, please visit our website at{" "}
              <a
                href="https://alfajr.edu.pk/"
                className="text-blue-600 hover:underline"
              >
                https://alfajr.edu.pk/
              </a>
              .
            </li>

            <li className="pl-2">
              The establishment of Al-Fajr International Institute of Higher
              Studies has received approval from various governmental
              departments including Higher Education Commission Islamabad (HEC),
              and it is soon to be submitted to the Assembly of Pakistan for
              final approval of its own Charter/ACT/Bill.
            </li>

            <li className="pl-2">
              Al-Fajr International Institute of Higher Studies is dedicated to
              expanding its reach by establishing branches in underserved
              regions of Pakistan and outside. Committed to providing accessible
              and quality education, the institute aims to bridge the
              educational gap in areas lacking higher education opportunities.
              By opening new branches, Al-Fajr International Institute will
              empower students from deprived communities, fostering intellectual
              growth and contributing to their socio-economic development.
            </li>
          </ol>

          <p className="mb-4">
            Al-Fajr Institute, a project of the Al-Aeen Education Foundation, is
            an outstanding educational institution located in Mari Indus, near
            the historic city of Kalabagh, and just 5 km from the CPEC route in
            Mianwali District. The institute boasts a state-of-the-art campus
            with modern facilities, including spacious classrooms, a
            well-stocked library, advanced computer labs, a sports ground, a
            cafeteria, and a mosque. Providing a safe and inclusive environment,
            the institute offers equal opportunities for both male and female
            students in line with Pakistani and Eastern cultural values. Al-Fajr
            Institute offers four BS degree programs: BS English, BS Computer
            Science, BS Mathematics, and BBA.
          </p>

          {/* Footer Info */}
          <div className="mt-8 pt-4 border-t border-gray-300">
            <p className="font-bold mb-1">Dr. Qaisar Abbas</p>
            <p className="mb-1">Secretary,</p>
            <p className="mb-1">Al-Aeen Educational Foundation, Islamabad.</p>
            <p className="mb-1 text-blue-600">drqaj@yahoo.com</p>
            <p className="mb-1 text-blue-600">drqaj@alfajr.edu.pk</p>
            <p>+92-333-6700905</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
