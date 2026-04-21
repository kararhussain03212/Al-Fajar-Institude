import { Link, useParams } from "react-router-dom";
import {
  FiArrowRight,
  FiBell,
  FiCalendar,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";
import { allAnnouncements } from "./announcementsData";

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function AnnouncmentsDetails() {
  const { id } = useParams();

  const announcementId = Number(id);
  const announcement = allAnnouncements.find(
    (item) => item.id === announcementId,
  );

  if (!announcement) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
        <div className="bg-white border border-gray-200 p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900">
            Announcement not found
          </h2>
          <p className="text-gray-600 mt-2">
            The requested notice does not exist.
          </p>
          <Link
            to="/announcements"
            className="inline-block mt-5 bg-[#8C1515] text-white px-5 py-2.5 font-semibold hover:bg-[#6f1111] transition-colors"
          >
            Back to Announcements
          </Link>
        </div>
      </div>
    );
  }

  const relatedAnnouncements = allAnnouncements
    .filter(
      (item) =>
        item.id !== announcement.id && item.category === announcement.category,
    )
    .slice(0, 3);

  const announcementLocation = announcement.location || "Mianwali Campus";

  return (
    <section className="bg-[#f5f5f5] pb-14 ">
      <div className="mx-auto max-w-full bg-white px-4 sm:px-6 lg:px-8 py-10">
        <div className=" max-w-300 m-auto p-5 sm:p-7">
          {/* <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8C1515] hover:text-[#6f1111]"
          >
            <FiArrowLeft />
            Back to announcements
          </button> */}

          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            {announcement.title}
          </h1>
          <p className="mt-3 max-w-3xl text-base text-gray-700 leading-relaxed">
            {announcement.excerpt}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:mt-7 sm:gap-7 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <div className="border border-gray-200 bg-white p-6 sm:p-7">
            <h2 className="text-3xl font-bold text-gray-900">
              Announcement Overview
            </h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              {announcement.excerpt}
            </p>
          </div>

          <div className="border border-gray-200 bg-white p-6 sm:p-7">
            <h3 className="text-2xl font-bold text-gray-900">Notice Details</h3>
            <div className="mt-4 space-y-4">
              {announcement.body?.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h4 key={index} className="text-xl font-bold text-gray-900">
                      {block.text}
                    </h4>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-[#8C1515] bg-red-50/60 px-5 py-4"
                    >
                      <p className="text-lg italic text-gray-800">
                        "{block.text}"
                      </p>
                      {block.attribution ? (
                        <p className="mt-2 text-sm font-semibold text-gray-600">
                          - {block.attribution}
                        </p>
                      ) : null}
                    </blockquote>
                  );
                }

                return (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>

          {relatedAnnouncements.length > 0 && (
            <div className="border border-gray-200 bg-white p-6 sm:p-7">
              <h3 className="text-2xl font-bold text-gray-900">
                Related Announcements
              </h3>
              <div className="mt-4 space-y-3">
                {relatedAnnouncements.map((item) => (
                  <Link
                    key={item.id}
                    to={`/announcements/${item.id}`}
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
            <h3 className="text-xl font-bold text-gray-900">
              Announcement Snapshot
            </h3>
            <div className="mt-4 space-y-3 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <FiBell className="text-[#8C1515]" />
                <span>{announcement.category}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiUsers className="text-[#8C1515]" />
                <span>{announcement.audience}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiMapPin className="text-[#8C1515]" />
                <span>{announcementLocation}</span>
              </p>
              <p className="flex items-center gap-2">
                <FiCalendar className="text-[#8C1515]" />
                <span>Published: {formatDate(announcement.date)}</span>
              </p>
            </div>

            <Link
              to="/announcements"
              className="mt-5 block bg-[#8C1515] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#6f1111]"
            >
              Back to All Announcements
            </Link>
          </div>

        </aside>
      </div>
    </section>
  );
}
