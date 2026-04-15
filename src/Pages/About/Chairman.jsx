import React from "react";

const Chairman = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-8">
      {/* Header with Green Underline */}
      <div className="flex justify-center relative mb-8">
        <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-green-600"></div>
        <h1 className="relative z-10 text-2xl font-bold py-2 px-6 mb-4 bg-green-600 text-white">
          Chairman Message
        </h1>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Left Side - Chairman Image */}
          <div className="md:w-1/3 w-full flex-shrink-0">
            <img
              src="https://placehold.co/600x400?font=roboto/ffffff&text=Syed+Iftikhar+Hussain+Naqvi+-+Chairman"
              alt="Syed Iftikhar Hussain Naqvi - Chairman"
              className="w-full h-auto object-cover rounded shadow-md border-2 border-gray-200"
            />
          </div>

          {/* Right Side - Message Content */}
          <div className="md:w-2/3 w-full text-justify text-gray-700 text-base leading-relaxed">
            <p className="mb-4">
              At Al-Fajr International Institute of Higher Studies, we believe
              that higher education is the cornerstone of societal progress,
              driving innovation, economic growth, and social advancement. Our
              vision is to create a platform where talented youth from all
              backgrounds can access quality education without the burden of
              financial constraints, empowering them to reach their full
              potential.
            </p>

            <p className="mb-4">
              We aim to produce well-educated, responsible, and skilled
              individuals who will lead Pakistan towards a brighter and better
              future. Through a commitment to academic excellence and community
              development, we are determined to shape a generation that is
              sincere, capable, and dedicated to making meaningful contributions
              to society. Together, we will build a prosperous nation with
              citizens who uphold values of integrity, knowledge, and
              responsibility.
            </p>

            <p className="mb-2">
              Thank you for being a part of this journey. Warm regards,
            </p>

            {/* Signature */}
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                Syed Iftikhar Hussain Naqvi
              </p>
              <p className="text-gray-600">
                Chairman, Al-Aeen Educational Foundation, Islamabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairman;
