import AnnouncementsSlider from "../components/AnnouncementsSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import programs from "../Data";
import "swiper/css";
import "swiper/css/navigation";

const Home = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      image: "https://placehold.co/600x400",
      alt: "Campus Event 1",
    },
    {
      id: 2,
      image: "https://placehold.co/600x400",
      alt: "Campus Event 2",
    },
    {
      id: 3,
      image: "https://placehold.co/600x400",
      alt: "Campus Event 3",
    },
    {
      id: 4,
      image: "https://placehold.co/600x400",
      alt: "Campus Event 4",
    },
  ];

  const notifications = [
    {
      date: "9th May 2024",
      title: "Faculty Required",
      link: "#",
    },
    {
      date: "20th April 2024",
      title: "Mid Term Paper",
      link: "#",
    },
    {
      date: "4th April 2024",
      title: "BSCS Top Position Holder",
      link: "#",
    },
    {
      date: "4th April 2024",
      title: "BS-Mathematic Top Position Holders",
      link: "#",
    },
    {
      date: "4th April 2024",
      title: "BS English Top Position Holders",
      link: "#",
    },
  ];

  return (
    <div>
      <AnnouncementsSlider />

      {/* Slider + Notifications Section */}
      <div className="max-w-[1400px] mx-auto px-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Image Slider */}
          <div className="w-full">
            <Swiper
              navigation={true}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="rounded-lg shadow-lg"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side - Notifications */}
          <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
            {/* Notifications Header */}
            <div className="bg-[#2e7d32] text-white px-6 py-3">
              <h2 className="text-lg font-bold">Notifications</h2>
            </div>

            {/* Notifications List */}
            <div className="p-6">
              <ul className="space-y-4">
                {notifications.map((notification, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-200 last:border-b-0 pb-3 last:pb-0"
                  >
                    <a
                      href={notification.link}
                      className="text-gray-700 hover:text-[#2e7d32] transition-colors group"
                    >
                      <span className="font-semibold text-gray-900">
                        {notification.date}
                      </span>{" "}
                      —{" "}
                      <span className="group-hover:underline">
                        {notification.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Programs Section */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg max-w-[1400px] mx-auto px-10 py-8 mb-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg font-bold text-gray-800 whitespace-nowrap">
            Academic Programs
          </h2>
          <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => navigate(program.path)}
              className={`${program.color} rounded-lg p-8 flex flex-col items-center justify-center h-[250px]  gap-4 text-white cursor-pointer hover:opacity-90  transition-all shadow-md`}
            >
              <span className="text-5xl">
                {program.icon && <program.icon />}
              </span>
              <h3 className="text-center font-bold text-sm">{program.title}</h3>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-right mt-4">
          <a
            href="/academic"
            className="text-[#6c5ce7] hover:underline font-medium text-sm"
          >
            view all
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
