import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBriefcase,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiMonitor,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { jobsData } from "./jobsData";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const JobDetails = () => {
  const { id } = useParams();

  const job = jobsData.find((item) => item.id === id);

  if (!job) {
    return (
      <section className="min-h-screen bg-[#f5f5f5] px-4 py-20">
        <div className="mx-auto max-w-xl border border-gray-200 bg-white p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Job not found</h1>
          <p className="mt-2 text-gray-600">
            This job is no longer available or the link is incorrect.
          </p>
          <Link
            to="/job"
            className="mt-5 inline-flex items-center gap-2 bg-[#8C1515] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6f1111]"
          >
            <FiArrowLeft />
            Back to Jobs
          </Link>
        </div>
      </section>
    );
  }

  const relatedJobs = jobsData
    .filter((item) => item.department === job.department && item.id !== job.id)
    .slice(0, 3);

  return (
    <section className="bg-[#f5f5f5] pb-14">
      <div className="relative h-72 overflow-hidden sm:h-96">
        <img
          src={job.image}
          alt={job.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0b1324]/85 to-[#8C1515]/70" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 text-white sm:px-6">
          <Link
            to="/job"
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white"
          >
            <FiArrowLeft />
            Back to all jobs
          </Link>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold sm:text-5xl">{job.title}</h1>
          <p className="mt-3 max-w-2xl text-white/90">{job.summary}</p>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-7 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <div className="border border-gray-200 bg-white p-6 sm:p-7">
            <h2 className="text-3xl font-bold text-gray-900">Role Overview</h2>
            <p className="mt-3 leading-relaxed text-gray-700">{job.summary}</p>
          </div>

          <div className="border border-gray-200 bg-white p-6 sm:p-7">
            <h3 className="text-2xl font-bold text-gray-900">Key Responsibilities</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8C1515]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-200 bg-white p-6 sm:p-7">
            <h3 className="text-2xl font-bold text-gray-900">Requirements</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              {job.requirements.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f4c81]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-gray-200 bg-white p-6 sm:p-7">
            <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              {job.benefits.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#127a45]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {relatedJobs.length > 0 && (
            <div className="border border-gray-200 bg-white p-6 sm:p-7">
              <h3 className="text-2xl font-bold text-gray-900">More Jobs in {job.department}</h3>
              <div className="mt-4 space-y-3">
                {relatedJobs.map((item) => (
                  <Link
                    key={item.id}
                    to={`/job/${item.id}`}
                    className="flex items-center justify-between border border-gray-200 px-4 py-3 text-sm font-semibold text-gray-800 hover:border-[#8C1515] hover:text-[#8C1515]"
                  >
                    <span>{item.title}</span>
                    <FiArrowRight />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="space-y-5">
          <div className="border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-bold text-gray-900">Job Snapshot</h3>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <FiBriefcase className="text-[#8C1515]" />
                <span>{job.department}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiMapPin className="text-[#8C1515]" />
                <span>{job.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiClock className="text-[#8C1515]" />
                <span>{job.type}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiMonitor className="text-[#8C1515]" />
                <span>{job.workplace}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiUser className="text-[#8C1515]" />
                <span>{job.experience}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiUsers className="text-[#8C1515]" />
                <span>{job.openings} openings</span>
              </p>
              <p className="flex items-center gap-2">
                <FiDollarSign className="text-[#8C1515]" />
                <span>{job.salary}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiCalendar className="text-[#8C1515]" />
                <span>Posted: {formatDate(job.postedOn)}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiCalendar className="text-[#8C1515]" />
                <span>Deadline: {formatDate(job.deadline)}</span>
              </p>
            </div>

            <a
              href={`mailto:info@ssdo.org.pk?subject=Application for ${encodeURIComponent(
                job.title
              )}`}
              className="mt-5 block bg-[#8C1515] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#6f1111]"
            >
              Apply Now
            </a>
            <Link
              to="/job"
              className="mt-3 block border border-[#8C1515] px-5 py-3 text-center text-sm font-semibold text-[#8C1515] hover:bg-[#8C1515] hover:text-white"
            >
              Explore More Jobs
            </Link>
          </div>

          <div className="border border-gray-200 bg-white p-6 text-sm text-gray-700">
            <h4 className="text-lg font-bold text-gray-900">Application Note</h4>
            <p className="mt-2 leading-relaxed">
              Please include your updated CV, relevant degree documents, and cover letter in
              your application email. Only shortlisted candidates will be contacted.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default JobDetails;