import React from "react";

const Mathematics = () => {
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
              alt="BS Mathematics"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Program Title */}
          <div className="py-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800">BS Mathematics</h2>
          </div>

          {/* Basic Details Table */}
          <div className="px-6 pb-4">
            <table className="w-full border-collapse border border-gray-400 mb-6">
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
                    Credit Hours
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Students must complete 124 credit hours for this degree.
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-3 px-4 border-r border-gray-400 font-bold text-gray-800 bg-gray-50 align-top">
                    Eligibility
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    45% + 50% Intermediate or equivalent with Mathematics (min.
                    marks in Intermediate and marks in Math)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-r border-gray-400 font-bold text-gray-800 bg-gray-50 align-top">
                    Program Structure
                  </td>
                  <td className="py-3 px-4 text-gray-700"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Semester 1 */}
          <div className="px-6 pb-6">
            <h3 className="text-center font-bold text-gray-800 mb-4 border-t border-b border-gray-400 py-2">
              Semester 1
            </h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    URCE-5101
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Grammar
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    URCP-5106
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Pak Studies
                  </td>
                  <td className="py-2 px-4">2(2+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    URCI-5109
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Intro to Information & Communication Tech.
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5101
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Calculus-1
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH 5102
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Elements of Set Theory & Mathematical Logic
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">PHYS-1</td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Physic-1
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 px-4 border-r border-gray-400"></td>
                  <td className="py-2 px-4 border-r border-gray-400 text-right">
                    Total
                  </td>
                  <td className="py-2 px-4">18(17+1)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Semester 2 */}
          <div className="px-6 pb-6">
            <h3 className="text-center font-bold text-gray-800 mb-4 border-t border-b border-gray-400 py-2">
              Semester 2
            </h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5103
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Calculus-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5104
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Statistics
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    PHYS-5162
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Physics-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    URCE-5102
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Language Comprehension & Presentation Skills
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    URCI-5105
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Islamic Studies
                  </td>
                  <td className="py-2 px-4">2(2+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5105
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Programming Languages for Mathematicians
                  </td>
                  <td className="py-2 px-4">3(2+1)</td>
                </tr>
                <tr className="bg-gray-100 border-b border-gray-400">
                  <td
                    className="py-2 px-4 border-r border-gray-400 font-bold"
                    colSpan="3"
                  >
                    No-Credit Course
                  </td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    URCC-5110
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Citizenship Education and Community Engagement
                  </td>
                  <td className="py-2 px-4">3(1+2)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Semester 3 */}
          <div className="px-6 pb-6">
            <h3 className="text-center font-bold text-gray-800 mb-4 border-t border-b border-gray-400 py-2">
              Semester 3
            </h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5106
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Calculus-III
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5107
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Algebra-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    PHYS-5163
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Physics-III
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    URCE-5103
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Academic Writing
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5108
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Probability Theory
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Semester 4 */}
          <div className="px-6 pb-6">
            <h3 className="text-center font-bold text-gray-800 mb-4 border-t border-b border-gray-400 py-2">
              Semester 4
            </h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5109
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Vector Analysis & Mechanics
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5110
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Linear Algebra
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    PHYS-5164
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Physics-IV
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5111
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Discrete Mathematics
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-5112/ MATH-5113/ ECON-5118
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Spanish/French/Mathematical Economics
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Semester 5 */}
          <div className="px-6 pb-6">
            <h3 className="text-center font-bold text-gray-800 mb-4 border-t border-b border-gray-400 py-2">
              Semester 5
            </h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6112
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Topology
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6113
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Differential Geometry
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6114
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Ordinary Differential Equations
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6115
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Real Analysis-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6116
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Algebra-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Semester 6 */}
          <div className="px-6 pb-6">
            <h3 className="text-center font-bold text-gray-800 mb-4 border-t border-b border-gray-400 py-2">
              Semester 6
            </h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6117
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Classical Mechanics
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6118
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Mathematical Methods
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6119
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Complex Analysis
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6120
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Functional Analysis
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6121
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Real Analysis-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Semester 7 */}
          <div className="px-6 pb-6">
            <h3 className="text-center font-bold text-gray-800 mb-4 border-t border-b border-gray-400 py-2">
              Semester 7
            </h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6122
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Numerical Analysis-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6123
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Number Theory
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6124
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Partial Differential Equations
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-61xx
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Elective-I*
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-61xx
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Elective-II*
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Semester 8 */}
          <div className="px-6 pb-6">
            <h3 className="text-center font-bold text-gray-800 mb-4 border-t border-b border-gray-400 py-2">
              Semester 8
            </h3>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6125
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Numerical Analysis-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6126
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Integral Equations
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-61xx
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Project / Course**
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-61xx
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Elective-III*
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-61xx
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Elective-IV*
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="px-6 pb-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Total Numbers of Credit Hours=128 * These four courses are
              optional & can be selected either from list A or B but cannot be
              mixed from both or any two courses can be selected from list C. **
              In lieu of dissertation a course can be selected from list C. ***
              Any other language can be added according to availability of
              resources. Note: These courses will be offered by the department
              from the lists of concentration elective courses & free elective
              courses as per availability of the resources.
            </p>
          </div>

          {/* List A: Pure Mathematics Electives */}
          <div className="px-6 pb-6">
            <h3 className="text-center font-bold text-gray-800 mb-4 border-t border-b border-gray-400 py-2">
              List of Concentration Elective Courses
            </h3>
            <h4 className="font-bold text-gray-800 mb-2">
              List A: Concentration Elective Courses in Pure Mathematics
            </h4>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6127
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Advanced Group Theory-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6128
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Advanced Group Theory-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6129
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Modern Algebra-I
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6130
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Modern Algebra-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6132
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Algebraic Topology-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6133
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Advanced Functional Analysis
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6134
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Theory of Modules
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* List B: Applied Mathematics Electives */}
          <div className="px-6 pb-6">
            <h4 className="font-bold text-gray-800 mb-2">
              List B: Concentration Elective Courses in Applied Mathematics
            </h4>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6135
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Astronomy-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6136
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Astronomy-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6137
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Electromagnetism-I
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6138
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Electromagnetism-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6139
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Fluid Mechanics-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6140
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Fluid Mechanics-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6141
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Operations Research-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6142
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Operations Research-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6143
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Quantum Mechanics-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6144
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Quantum Mechanics-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6145
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Analytical Dynamics
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6146
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Special Relativity
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* List C: Free Electives */}
          <div className="px-6 pb-8">
            <h4 className="font-bold text-gray-800 mb-2">
              List C: List of Free Elective Courses
            </h4>
            <p className="text-sm text-gray-700 mb-2 italic">
              A student must also satisfactorily complete 06 credits of any one
              of the following free Elective courses in Applied & Pure
              Mathematics.
            </p>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-1/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Code
                  </th>
                  <th className="w-4/6 py-2 px-4 border-r border-b border-gray-400 text-left font-bold text-gray-800">
                    Course Title
                  </th>
                  <th className="w-1/6 py-2 px-4 border-b border-gray-400 text-left font-bold text-gray-800">
                    C/Hr
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6147
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Numerical Solution of Partial differential equations
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6148
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Elasticity Theory
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6149
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    History of Mathematics
                  </td>
                  <td className="py-2 px-4">4(3+1)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6150
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Heat Transfer
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6151
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Bio-Mathematics
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6152
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Theory of Automata
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6153
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Measure Theory
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6154
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Special Functions
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6155
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Theory of Splines-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6156
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Theory of Splines-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6157
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Methods of Optimization-I
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6158
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Methods of Optimization-II
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr className="border-b border-gray-400">
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6159
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Control Theory
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-r border-gray-400">
                    MATH-6160
                  </td>
                  <td className="py-2 px-4 border-r border-gray-400">
                    Applied Matrix Theory
                  </td>
                  <td className="py-2 px-4">3(3+0)</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-700 mt-2 italic">
              Note: Other elective courses can be offered according to
              availability of resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mathematics;
