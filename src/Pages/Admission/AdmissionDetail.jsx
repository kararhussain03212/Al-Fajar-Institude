import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const requirements = [
  "$90 nonrefundable application fee or fee waiver request",
  "ACT or SAT test scores (test optional)",
  "School report form and counselor letter of recommendation",
  "Official transcript(s) or academic results",
  "Letters of recommendation from two teachers",
  "Personal essay",
  "Optional: Additional information or materials that may support your application",
  "International students must also submit TOEFL or IELTS scores to demonstrate English proficiency",
  
];

const deadlines = [
  {
    event: "Standard Application Deadline",
    early: "November 1",
    regular: "January 10",
  },
  {
    event: "Notification of Missing Documents",
    early: "Mid-November",
    regular: "Mid-February",
  },
  {
    event: "Decision Released By",
    early: "Mid-December",
    regular: "Early April",
  },
  {
    event: "Student Reply Date",
    early: "May 1",
    regular: "May 1",
  },
];

const programCategories = [
  {
    title: "Undergraduate",
    items: [
      {
        label: "BS Computer Science",
        description: "Develop software, problem-solving, and practical computing skills for modern technology careers.",
        to: "/academic/computer-science",
      },
      {
        label: "BS Mathematics",
        description: "Build strong analytical foundations in pure and applied mathematics for research and industry.",
        to: "/academic/mathematics",
      },
      {
        label: "BS English",
        description: "Strengthen communication, literature, and language skills for education, media, and professional roles.",
        to: "/academic/english",
      },
      {
        label: "BS Business Administration",
        description: "Gain leadership, finance, marketing, and management knowledge to lead in business environments.",
        to: "/academic/hons",
      },
    ],
  },
  {
    title: "Short Courses",
    items: [
      {
        label: "Short Courses",
        description: "Learn job-ready, focused skills through flexible short-duration certificate programs.",
        to: "/academic/shortcourse",
      },
    ],
  },
];

const inputClassName =
  "w-full border border-gray-200 rounded-none px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)]/30 focus:border-[var(--theme-primary)]";

const AdmissionDetail = () => {
  const uniqueRequirements = requirements.reduce(
    (accumulator, item) => {
      const normalized = item.trim().toLowerCase();

      if (!normalized || accumulator.seen.has(normalized)) {
        return accumulator;
      }

      accumulator.seen.add(normalized);
      accumulator.list.push(item.trim());
      return accumulator;
    },
    { seen: new Set(), list: [] }
  ).list;

  const requirementRows = uniqueRequirements.reduce(
    (rows, item, index) => {
      if (index % 2 === 0) {
        rows.push([item, null]);
      } else {
        rows[rows.length - 1][1] = item;
      }

      return rows;
    },
    []
  );

  return (
    <div className="bg-[var(--theme-surface)] text-gray-900 ">
      <section className="relative h-75 sm:h-90 overflow-hidden">
        <img
          src="/home/institude.webp"
          alt="Campus lawn and academic buildings"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#101826]/45" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center text-white sm:px-6">
          {/* <div className="mb-4 text-sm text-white/90">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/admissions" className="hover:text-white">
              Admissions
            </Link>
            <span className="mx-2">/</span>
            <span>Apply Admission</span>
          </div> */}
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Apply to Al Fajr Institute
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-325 px-4 py-12 sm:px-6 sm:py-14">
        <h2 className="mb-5 text-3xl font-semibold text-gray-900">First-Year Applicants</h2>
        <img
          src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1800&auto=format&fit=crop"
          alt="Students collaborating"
          className="h-48 w-full object-cover sm:h-64"
        />

        <h3 className="mt-8 text-4xl font-semibold text-gray-900">Requirements and Deadlines</h3>
        <div className="mt-6 space-y-2">
          {requirementRows.map((row, rowIndex) => (
            <div key={`requirement-row-${rowIndex}`} className="grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
              {row.map((item, columnIndex) =>
                item ? (
                  <div key={`req-${rowIndex}-${columnIndex}`} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheck className="mt-0.5 shrink-0 text-[#1f8f4e]" />
                    <span>{item}</span>
                  </div>
                ) : (
                  <div key={`req-empty-${rowIndex}-${columnIndex}`} />
                )
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {programCategories.map((category) => (
            <section key={category.title}>
              <h4 className="text-2xl gap-2  text-white bg-[var(--theme-primary)] py-1 text-center">
                {category.title}
              </h4>

              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {category.items.map((item) => (
                  <article
                    key={`${category.title}-${item.label}`}
                    className="border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <h5 className="text-2xl font-semibold text-gray-900">{item.label}</h5>
                    <p className="mt-3 text-base leading-relaxed text-gray-700">
                      {item.description}
                    </p>
                    <Link
                      to={item.to}
                      className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-[var(--theme-accent)] hover:text-[var(--theme-primary)] hover:underline"
                    >
                      View Program <FiArrowRight className="text-sm" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <h3 className="mt-10 text-4xl font-semibold text-gray-900">Application Deadlines</h3>
        <div className="mt-6 overflow-x-auto border border-gray-200 bg-white">
          <table className="min-w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[var(--theme-primary)] text-white">
                <th className="px-4 py-3 text-left font-semibold">Event</th>
                <th className="px-4 py-3 text-left font-semibold">Restrictive Early Action</th>
                <th className="px-4 py-3 text-left font-semibold">Regular Decision</th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((row) => (
                <tr key={row.event} className="border-t border-gray-200">
                  <td className="px-4 py-3 text-gray-800">{row.event}</td>
                  <td className="px-4 py-3 text-gray-700">{row.early}</td>
                  <td className="px-4 py-3 text-gray-700">{row.regular}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          Applicants are limited to a total of three applications for undergraduate admission,
          whether for first-year admission, transfer admission, or a combination of both.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="bg-white p-6 sm:p-8 border border-gray-200">
            <h3 className="text-4xl font-semibold text-gray-900">Application Details</h3>

            <form className="mt-8 space-y-8" onSubmit={(event) => event.preventDefault()}>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Personal Information</h4>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="First Name" className={inputClassName} />
                  <input type="text" placeholder="Last Name" className={inputClassName} />
                  <input type="email" placeholder="Enter your mail" className={inputClassName} />
                  <input type="tel" placeholder="Enter Phone Number" className={inputClassName} />
                  <input type="text" placeholder="dd/mm/yy" className={inputClassName} />
                  <select className={inputClassName} defaultValue="">
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mt-4">
                  <input type="text" placeholder="Country" className={inputClassName} />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Academic Information</h4>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input type="text" placeholder="College Name" className={inputClassName} />
                  <input type="text" placeholder="Enter your GPA" className={inputClassName} />
                  <input type="text" placeholder="Current College" className={inputClassName} />
                  <input type="text" placeholder="Current GPA" className={inputClassName} />
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Financial Information</h4>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <select className={inputClassName} defaultValue="">
                    <option value="" disabled>
                      Household Income
                    </option>
                    <option>Less than $1k</option>
                    <option>$1k - $5k</option>
                    <option>$5k - $10k</option>
                    <option>More than $10k</option>
                  </select>

                  <select className={inputClassName} defaultValue="">
                    <option value="" disabled>
                      Applying For Need-Based Financial Aid
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800">Agreement and Submission</h4>
                <p className="mt-2 text-sm text-gray-600">
                  By submitting this application, I confirm that all information provided is
                  accurate and complete. I understand that any false information may result in
                  disqualification of my application.
                </p>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <label className="text-sm text-gray-700">Application Submission:</label>
                  <input
                    type="file"
                    className="block w-full text-sm text-gray-600 file:mr-4 file:border-0 file:bg-[var(--theme-primary)] file:px-4 file:py-2 file:text-white hover:file:bg-[var(--theme-primary-dark)] sm:w-auto"
                  />
                </div>

                <label className="mt-4 flex items-start gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    By submitting this form, you agree to the Al Fajr Institute Privacy Notice.
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-6 inline-flex items-center gap-2 bg-[var(--theme-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--theme-primary-dark)]"
                >
                  Submit Application <FiArrowRight />
                </button>
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="border border-gray-200 bg-white">
              <h4 className="bg-[#222] px-5 py-4 text-lg font-semibold text-white">
                Undergraduate in Al fajr Institute
              </h4>
              <div className="divide-y divide-gray-200">
                {programCategories.map((category) => (
                  <div key={category.title}>
                    
                    <ul>
                      {category.items.map((item) => (
                        <li key={item.label} className="border-t border-gray-200">
                          <Link
                            to={item.to}
                            className="flex items-center justify-between px-5 py-3 text-sm text-gray-700 hover:bg-[var(--theme-surface-soft)] hover:text-[var(--theme-primary)]"
                          >
                            <span>{item.label}</span>
                            <FiArrowRight className="text-gray-400" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--theme-primary)] p-5 text-white">
              <h4 className="text-xl font-semibold">Department Contact Info</h4>
              <p className="mt-5 text-sm text-white/90">Contact:</p>
              <p className="text-sm">info@ssdo.org.pk</p>
              <p className="text-sm">+92 300 0000000</p>
            </div>

            
          </aside>
        </div>
      </section>
    </div>
  );
};

export default AdmissionDetail;


