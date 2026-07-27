import React from "react";

const details = [
  ["Duration", "The duration required to complete this degree is 4 years."],
  [
    "Semester",
    "Students are required to pass 8 semesters for the completion of this degree.",
  ],
  ["Credit Hours", "Students must complete 142 credit hours for this degree."],
  ["Eligibility", "45% Marks in Intermediate or equivalent"],
];

const English = () => {
  return (
    <section className="bg-[#f3f4f6] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden border border-gray-300 bg-white">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1800&auto=format&fit=crop"
            alt="BS English"
            className="h-72 w-full object-cover sm:h-80"
          />

          <div className="px-4 py-8 sm:px-8 sm:py-10">
            <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              BS English
            </h1>

            <div className="mt-8 overflow-x-auto border border-gray-300">
              <table className="min-w-full border-collapse bg-white">
                <tbody>
                  {details.map((item) => (
                    <tr key={item[0]}>
                      <td className="border border-gray-300 bg-[var(--theme-surface-soft)] px-3 py-2 text-sm font-semibold text-gray-900 sm:w-72">
                        {item[0]}
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-sm text-gray-800">
                        {item[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default English;


