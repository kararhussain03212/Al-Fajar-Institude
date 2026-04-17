import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button"; // Adjust path if necessary

const CampusNews = () => {
  const navigate = useNavigate();

  const handleNavigateTo = (path) => {
    navigate(path);
  };

  const newsData = [
    {
      id: 1,
      category: "IN THE SPOTLIGHT",
      title: "Meeting with Assistant Commiss...",
      image: "/public/news/image.png",
      size: "large",
    },
    {
      id: 2,
      category: "Ist International Conference o...",
      title: "Ist International Conference o...",
      image: "https://res.cloudinary.com/dh6yabuea/image/upload/v1742320590/Whats_App_Image_2025_03_04_at_4_25_31_PM_1_b7cf08d2b2.jpg",
      size: "small",
    },
    {
      id: 3,
      category: "HEALTH & MEDICINE",
      title: 'World Literacy Day, 2024',
      image: "https://res.cloudinary.com/dh6yabuea/image/upload/v1726041756/Literacy_day_0ed7c5fb3a.jpg",
      size: "small",
    },
    {
      id: 4,
      category: "BUSINESS",
      title: "Flood Donations",
      image: "https://res.cloudinary.com/dbf8vcf8o/image/upload/v1682875189/flood_donation_4_627c227f85.jpg",
      size: "small",
    },
    {
      id: 5,
      category: "ACADEMICS",
      title: "In this history class, the final project is a pop song",
      image: "https://res.cloudinary.com/dbf8vcf8o/image/upload/v1682875189/flood_donation_3_754a4a2ed1.jpg",
      size: "small",
    },
  ];

  return (
    <section className="relative z-30 bg-[#f4f4f4] py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 max-w-[1500px]">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Campus News
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Stories about people, research, and innovation across the Farm
          </p>
        </div>

        {/* News Grid - Responsive Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {newsData.map((news) => (
            <div
              key={news.id}
              onClick={() => handleNavigateTo(`/news/${news.id}`)}
              className={`${
                news.size === "large" ? "md:col-span-2" : "md:col-span-1"
              } relative group cursor-pointer overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300`}
            >
              {/* Image Container */}
              <div className={`${news.size === "large" ? "h-64 sm:h-80" : "h-48 sm:h-56"} overflow-hidden`}>
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 object-top"
                />
                {news.size === "large" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                )}
              </div>

              {/* Text Content */}
              <div className={news.size === "large" ? "absolute bottom-0 left-0 right-0 p-4 sm:p-6" : "p-4"}>
                <span className={`text-xs font-semibold uppercase tracking-wider ${news.size === "large" ? "text-gray-300" : "text-[#8C1515]"}`}>
                  {news.category}
                </span>
                <h3 className={`font-bold mt-1 leading-tight ${news.size === "large" ? "text-white text-lg sm:text-xl" : "text-gray-900 text-sm sm:text-base"}`}>
                  {news.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button to="/news" variant="primary" size="lg">
            More Campus News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampusNews;
