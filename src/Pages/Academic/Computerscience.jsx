import React from "react";

const Computerscience = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-8">
      {/* Header with Green Underline */}
      <div className="flex justify-center relative mb-8">
        <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-green-600"></div>
        <h1 className="relative z-10 text-xl font-bold py-2 px-6 mb-4 bg-green-600 text-white">
          Academic Programs details
        </h1>
      </div>

      {/* Program Card Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-gray-300 rounded-sm overflow-hidden">
          {/* Program Image */}
          <div className="w-full">
            <img
              src="https://placehold.co/600x300@3x.png"
              alt="BS Computer Science - Programming and Technology"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Program Title */}
          <div className="py-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              BS Computer Science
            </h2>
          </div>

          {/* Details Table */}
          <div className="px-6 pb-8">
            <table className="w-full border-collapse border border-gray-400">
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="w-1/4 py-3 px-4 border-r border-gray-400 font-bold text-gray-800 bg-gray-50">
                    Duration
                  </td>
                  <td className="w-3/4 py-3 px-4 text-gray-700">
                    The duration required to complete this degree is 4 years.
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-3 px-4 border-r border-gray-400 font-bold text-gray-800 bg-gray-50">
                    Semester
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Students are required to pass 8 semesters for the completion
                    of this degree.
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-3 px-4 border-r border-gray-400 font-bold text-gray-800 bg-gray-50">
                    Credit hours
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Students must complete 138 credit hours for this degree.
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-r border-gray-400 font-bold text-gray-800 bg-gray-50 align-top">
                    Eligibility
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    50% Marks in Intermediate (HSSC) examination with
                    Mathematics or equivalent qualification with Mathematics
                    Marks in Intermediate (HSSC) examination with Mathematics or
                    equivalent qualification with Mathematics
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Computerscience;
