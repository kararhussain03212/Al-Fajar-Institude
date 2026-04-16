import React from "react";

const Director = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-8">
      {/* Header with Green Underline */}
      <div className="flex justify-center relative mb-8">
        <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-green-600"></div>
        <h1 className="relative z-10 text-2xl font-bold py-2 px-6 mb-4 bg-green-600 text-white">
          Director Message
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
              At Al-Fajr International Institute of Higher Studies, we are
              dedicated to providing high-quality education that meets global
              standards. Our mission is to offer an exceptional learning
              environment that nurtures well-educated and skilled individuals
              who can understand and fulfill their social responsibilities.
            </p>

            <p className="mb-4">
              We believe that education is the key to producing citizens who
              will positively impact society and contribute to the greatness of
              our nation. By fostering intellectual growth and personal
              development, we are preparing the youth of today to become the
              leaders of tomorrow, playing an integral role in the progress and
              prosperity of Pakistan.
            </p>

            <p className="mb-2">
              We are committed to excellence, and we invite you to join us in
              our mission to empower the next generation.
            </p>
            <p className="mb-2">Sincerely,</p>

            {/* Signature */}
            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                Syed Intisar Hussain Naqvi
              </p>
              <p className="text-gray-600">
                Director, Al-Aeen Educational Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
