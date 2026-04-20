import React from "react";
import { FiFileText, FiDownload } from "react-icons/fi";

import schemeComputerScience from "../assets/Files/Schemas_Study_of_Computer_Science_b10e2de46e.pdf";
import schemeEnglish from "../assets/Files/Scheme_Study_of_English_9aa0168dd5.pdf";
import schemeMath from "../assets/Files/Scheme_study_of_Math_cfd9fe01a8.pdf";
import schemeBBA from "../assets/Files/Schemas_Study_of_BBA_5e9b82d1ae.pdf";
import admissionForm from "../assets/Files/AFI_Admission_Form_37026b42a2.pdf";
import libraryStudentForm from "../assets/Files/Library_Membership_Form_for_Students_d58dd8dbc9.pdf";
import libraryFacultyForm from "../assets/Files/Library_Membership_Form_for_Faculty_aac60c594a.pdf";

const downloadItems = [
  {
    title: "Scheme Study of Computer Science",
    file: schemeComputerScience,
    fileName: "Scheme-Study-Computer-Science.pdf",
  },
  {
    title: "Scheme Study of English",
    file: schemeEnglish,
    fileName: "Scheme-Study-English.pdf",
  },
  {
    title: "Scheme Study of Mathematics",
    file: schemeMath,
    fileName: "Scheme-Study-Mathematics.pdf",
  },
  {
    title: "Scheme Study of BBA",
    file: schemeBBA,
    fileName: "Scheme-Study-BBA.pdf",
  },
  {
    title: "Alfajr Institute Admission Form",
    file: admissionForm,
    fileName: "AFI-Admission-Form.pdf",
  },
  {
    title: "Library Membership Form for Students",
    file: libraryStudentForm,
    fileName: "Library-Membership-Students.pdf",
  },
  {
    title: "Library Membership Form for Faculty",
    file: libraryFacultyForm,
    fileName: "Library-Membership-Faculty.pdf",
  },
];

const Downloads = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Downloads</h1>
          <p className="mt-2 text-gray-600">
            Download academic schemes and institute forms.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200 bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-b border-gray-200 px-4 py-3 text-left text-s font-semibold text-gray-900">
                  Title
                </th>
                <th className="border-b border-gray-200 px-4 py-3 text-left text-s font-semibold text-gray-900 sm:w-72">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              {downloadItems.map((item, index) => (
                <tr key={item.title} className={index % 2 === 0 ? "bg-[#f7f7f7]" : "bg-white"}>
                  <td className="border-b border-gray-200 px-4 py-5 text-lg text-gray-800">
                    <div className="flex items-center gap-3">
                      <FiFileText className="text-[#8C1515]" />
                      <span>{item.title}</span>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 px-4 py-5">
                    <a
                      href={item.file}
                      download={item.fileName}
                      className="inline-flex items-center gap-2 rounded bg-[#E5394B] px-4 py-2 text-lg font-semibold text-white transition-colors hover:bg-[#8C1515]"
                    >
                      <span>Download File</span>
                      <FiDownload />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Downloads;