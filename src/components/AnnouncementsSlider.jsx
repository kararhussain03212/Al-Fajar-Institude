import { useState, useEffect, useRef } from "react";

const AnnouncementsSlider = () => {
  const scrollRef = useRef(null);

  const announcements = [
    {
      id: 1,
      text: "Faculty is required for the department of computer science, management science and english.",
      link: "#",
    },
    {
      id: 2,
      text: "Mid term exams for semester five will be start from 20th April 2026.",
      link: "#",
    },
    {
      id: 3,
      text: "Admissions are open for Fall 2026 session. Apply now!",
      link: "#",
    },
    {
      id: 4,
      text: "Annual sports day will be held on 25th April 2026.",
      link: "#",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  // Duplicate announcements for seamless loop
  const duplicatedAnnouncements = [...announcements, ...announcements];

  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-[1400px] mx-auto flex items-center">
        {/* Announcements Label */}
        <div className="bg-[#2e7d32] text-white px-6 py-3 flex items-center gap-2 shrink-0">
          <span className="text-xl">⚡</span>
          <span className="font-bold text-sm uppercase tracking-wide">
            Announcements
          </span>
        </div>

        {/* Scrolling Content */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-hidden whitespace-nowrap py-3"
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          <div className="inline-flex gap-12">
            {duplicatedAnnouncements.map((announcement, index) => (
              <a
                key={`${announcement.id}-${index}`}
                href={announcement.link}
                className="text-[#1976d2] hover:text-[#0d47a1] hover:underline font-medium text-sm whitespace-nowrap flex items-center gap-2"
              >
                
                {announcement.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsSlider;
