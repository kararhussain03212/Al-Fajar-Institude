import React from "react";

const overview = [
  ["Duration", "The duration required to complete this degree is 4 years."],
  [
    "Semester",
    "Students are required to pass 8 semesters for the completion of this degree.",
  ],
  ["Credit Hours", "Students must complete 124 credit hours for this degree."],
  [
    "Eligibility",
    "45% + 50% Intermediate or equivalent with Mathematics (minimum marks in Intermediate and marks in Math)",
  ],
];

const semesterData = [
  {
    title: "Semester 1",
    rows: [
      ["URCE-5101", "Grammar", "3(3+0)"],
      ["URCP-5106", "Pak Studies", "2(2+0)"],
      ["URCI-5109", "Intro to Information and Communication Tech.", "3(3+0)"],
      ["MATH-5101", "Calculus-I", "3(3+0)"],
      ["MATH-5102", "Elements of Set Theory and Mathematical Logic", "3(3+0)"],
      ["PHYS-1", "Physics-I", "4(3+1)"],
      ["", "Total", "18(17+1)"],
    ],
  },
  {
    title: "Semester 2",
    rows: [
      ["MATH-5103", "Calculus-II", "3(3+0)"],
      ["MATH-5104", "Statistics", "3(3+0)"],
      ["PHYS-5162", "Physics-II", "3(3+0)"],
      ["URCE-5102", "Language Comprehension and Presentation Skills", "3(3+0)"],
      ["URCI-5105", "Islamic Studies", "2(2+0)"],
      ["MATH-5105", "Programming Languages for Mathematicians", "3(2+1)"],
      ["", "No-Credit Course", ""],
      ["URCC-5110", "Citizenship Education and Community Engagement", "3(1+2)"],
    ],
  },
  {
    title: "Semester 3",
    rows: [
      ["MATH-5106", "Calculus-III", "3(3+0)"],
      ["MATH-5107", "Algebra-I", "3(3+0)"],
      ["PHYS-5163", "Physics-III", "4(3+1)"],
      ["URCE-5103", "Academic Writing", "3(3+0)"],
      ["MATH-5108", "Probability Theory", "3(3+0)"],
    ],
  },
  {
    title: "Semester 4",
    rows: [
      ["MATH-5109", "Vector Analysis and Mechanics", "3(3+0)"],
      ["MATH-5110", "Linear Algebra", "3(3+0)"],
      ["PHYS-5164", "Physics-IV", "4(3+1)"],
      ["MATH-5111", "Discrete Mathematics", "3(3+0)"],
      [
        "MATH-5112 / MATH-5113 / ECON-5118",
        "Spanish / French / Mathematical Economics",
        "3(3+0)",
      ],
    ],
  },
  {
    title: "Semester 5",
    rows: [
      ["MATH-6112", "Topology", "3(3+0)"],
      ["MATH-6113", "Differential Geometry", "3(3+0)"],
      ["MATH-6114", "Ordinary Differential Equations", "4(3+1)"],
      ["MATH-6115", "Real Analysis-I", "3(3+0)"],
      ["MATH-6116", "Algebra-II", "3(3+0)"],
    ],
  },
  {
    title: "Semester 6",
    rows: [
      ["MATH-6117", "Classical Mechanics", "3(3+0)"],
      ["MATH-6118", "Mathematical Methods", "3(3+0)"],
      ["MATH-6119", "Complex Analysis", "4(3+1)"],
      ["MATH-6120", "Functional Analysis", "3(3+0)"],
      ["MATH-6121", "Real Analysis-II", "3(3+0)"],
    ],
  },
  {
    title: "Semester 7",
    rows: [
      ["MATH-6122", "Numerical Analysis-I", "3(3+0)"],
      ["MATH-6123", "Number Theory", "3(3+0)"],
      ["MATH-6124", "Partial Differential Equations", "4(3+1)"],
      ["MATH-61xx", "Elective-I*", "3(3+0)"],
      ["MATH-61xx", "Elective-II*", "3(3+0)"],
    ],
  },
  {
    title: "Semester 8",
    rows: [
      ["MATH-6125", "Numerical Analysis-II", "3(3+0)"],
      ["MATH-6126", "Integral Equations", "3(3+0)"],
      ["MATH-61xx", "Project / Course**", "4(3+1)"],
      ["MATH-61xx", "Elective-III*", "3(3+0)"],
      ["MATH-61xx", "Elective-IV*", "3(3+0)"],
    ],
  },
];

const electivesA = [
  ["MATH-6127", "Advanced Group Theory-I", "3(3+0)"],
  ["MATH-6128", "Advanced Group Theory-II", "3(3+0)"],
  ["MATH-6129", "Modern Algebra-I", "4(3+1)"],
  ["MATH-6130", "Modern Algebra-II", "3(3+0)"],
  ["MATH-6132", "Algebraic Topology-II", "3(3+0)"],
  ["MATH-6133", "Advanced Functional Analysis", "3(3+0)"],
  ["MATH-6134", "Theory of Modules", "3(3+0)"],
];

const electivesB = [
  ["MATH-6135", "Astronomy-I", "3(3+0)"],
  ["MATH-6136", "Astronomy-II", "3(3+0)"],
  ["MATH-6137", "Electromagnetism-I", "4(3+1)"],
  ["MATH-6138", "Electromagnetism-II", "3(3+0)"],
  ["MATH-6139", "Fluid Mechanics-I", "3(3+0)"],
  ["MATH-6140", "Fluid Mechanics-II", "3(3+0)"],
  ["MATH-6141", "Operations Research-I", "3(3+0)"],
  ["MATH-6142", "Operations Research-II", "3(3+0)"],
  ["MATH-6143", "Quantum Mechanics-I", "3(3+0)"],
  ["MATH-6144", "Quantum Mechanics-II", "3(3+0)"],
  ["MATH-6145", "Analytical Dynamics", "3(3+0)"],
  ["MATH-6146", "Special Relativity", "3(3+0)"],
];

const electivesC = [
  [
    "MATH-6147",
    "Numerical Solution of Partial Differential Equations",
    "3(3+0)",
  ],
  ["MATH-6148", "Elasticity Theory", "3(3+0)"],
  ["MATH-6149", "History of Mathematics", "4(3+1)"],
  ["MATH-6150", "Heat Transfer", "3(3+0)"],
  ["MATH-6151", "Bio-Mathematics", "3(3+0)"],
  ["MATH-6152", "Theory of Automata", "3(3+0)"],
  ["MATH-6153", "Measure Theory", "3(3+0)"],
  ["MATH-6154", "Special Functions", "3(3+0)"],
  ["MATH-6155", "Theory of Splines-I", "3(3+0)"],
  ["MATH-6156", "Theory of Splines-II", "3(3+0)"],
  ["MATH-6157", "Methods of Optimization-I", "3(3+0)"],
  ["MATH-6158", "Methods of Optimization-II", "3(3+0)"],
  ["MATH-6159", "Control Theory", "3(3+0)"],
  ["MATH-6160", "Applied Matrix Theory", "3(3+0)"],
];

const tableWrapperClass = "overflow-x-auto border border-gray-300 bg-white";
const thClass =
  "border border-gray-300 bg-[var(--theme-primary)] px-3 py-2 text-left text-sm font-semibold text-white";
const tdClass = "border border-gray-300 px-3 py-2 text-sm text-gray-800";

const CourseTable = ({ rows }) => (
  <div className={tableWrapperClass}>
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className={thClass}>Code</th>
          <th className={thClass}>Course Title</th>
          <th className={thClass}>C/Hr</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={`${row[0]}-${row[1]}`}>
            <td className={tdClass}>{row[0] || "-"}</td>
            <td className={tdClass}>{row[1]}</td>
            <td className={tdClass}>{row[2] || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Mathematics = () => {
  return (
    <section className="bg-[#f3f4f6] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden border border-gray-300 bg-white">
          <img
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1800&auto=format&fit=crop"
            alt="BS Mathematics"
            className="h-72 w-full object-cover sm:h-80"
          />

          <div className="px-4 py-8 sm:px-8 sm:py-10">
            <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
              BS Mathematics
            </h1>

            <div className="mt-8 overflow-x-auto border border-gray-300">
              <table className="min-w-full border-collapse bg-white">
                <tbody>
                  {overview.map((item) => (
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

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              Program Structure
            </h2>

            <div className="mt-6 space-y-8">
              {semesterData.map((semester) => (
                <div key={semester.title}>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {semester.title}
                  </h3>
                  <CourseTable rows={semester.rows} />
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3 rounded border border-[var(--theme-primary)]/25 bg-[var(--theme-primary)]/5 p-4 text-sm text-gray-700">
              <p>Total Number of Credit Hours = 128.</p>
              <p>
                * These four courses are optional and can be selected either
                from List A or List B, but cannot be mixed from both. Any two
                courses can be selected from List C.
              </p>
              <p>
                ** In lieu of dissertation, a course can be selected from List
                C.
              </p>
              <p>
                *** Any other language can be added according to availability of
                resources.
              </p>
              <p>
                Note: These courses will be offered by the department from
                concentration elective courses and free elective courses as per
                availability of resources.
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold text-gray-900">
              List of Concentration Elective Courses
            </h2>

            <div className="mt-6 space-y-8">
              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  List A: Concentration Elective Courses in Pure Mathematics
                </h3>
                <CourseTable rows={electivesA} />
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  List B: Concentration Elective Courses in Applied Mathematics
                </h3>
                <CourseTable rows={electivesB} />
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  List C: Free Elective Courses
                </h3>
                <p className="mb-3 text-sm text-gray-700">
                  A student must also satisfactorily complete 06 credits of any
                  one of the following free elective courses in Applied and Pure
                  Mathematics.
                </p>
                <CourseTable rows={electivesC} />
                <p className="mt-3 text-sm text-gray-700">
                  Note: Other elective courses can be offered according to
                  availability of resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mathematics;


