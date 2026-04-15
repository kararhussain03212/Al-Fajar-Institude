import React from "react";

const Vision = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-8">
      {/* Vision Header - Same Green Underline Style */}
      <div className="flex justify-center relative mb-8">
        <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-green-600"></div>
        <h1 className="relative z-10 text-2xl font-bold py-2 px-6 mb-4 bg-green-600 text-white">
          Vision and Mission
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Vision Section */}
        <div className="flex justify-center relative mb-6">
          <div className="absolute bottom-3 left-0 right-0 h-[2px] bg-green-600"></div>
          <h2 className="relative z-10 text-3xl font-bold py-1 px-4 mb-2 bg-white text-green-600">
            Vision
          </h2>
        </div>
        <p className="mb-8 text-justify text-gray-700 text-base leading-relaxed">
          Our vision is to produce responsible, well-educated, and skilled youth
          who will lead the nation toward a brighter and better future. We aim
          to contribute to society by cultivating a generation that is
          effective, sincere, and capable of making a positive and meaningful
          impact on the development of both society and the nation.
        </p>

        {/* Mission Section */}
        <div className="flex justify-center relative mb-6">
          <div className="absolute bottom-3 left-0 right-0 h-[2px] bg-green-600"></div>
          <h2 className="relative z-10 text-3xl font-bold py-1 px-4 mb-2 bg-white text-green-600">
            Mission
          </h2>
        </div>
        <p className="text-justify text-gray-700 text-base leading-relaxed">
          Our mission is to establish an institute that provides high-quality
          education on par with leading institutions worldwide, offering an
          excellent learning environment to cultivate well-educated and skilled
          citizens. These individuals will be able to understand and fulfill
          their social responsibilities, becoming effective and distinguished
          members of society, thereby contributing to the prosperity and
          greatness of our nation.
        </p>
      </div>
    </section>
  );
};

export default Vision;
