import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { allArticles } from "../Data";

const CampusNews = () => {
  const featuredArticles = allArticles.filter((article) => article.featured);
  const selectedArticles = (featuredArticles.length ? featuredArticles : allArticles).slice(0, 5);
  const newsData = selectedArticles.map((article, index) => ({
    id: article.id,
    category: article.category,
    title: article.title,
    image: article.image,
    size: index === 0 ? "large" : "small",
  }));

  return (
    <section className="relative z-30 bg-[var(--theme-surface-soft)] py-12 sm:py-16 md:py-20">
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
            <Link
              key={news.id}
              to={`/news/${news.id}`}
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
                <span className={`text-xs font-semibold uppercase tracking-wider ${news.size === "large" ? "text-gray-300" : "text-[var(--theme-primary)]"}`}>
                  {news.category}
                </span>
                <h3 className={`font-bold mt-1 leading-tight ${news.size === "large" ? "text-white text-lg sm:text-xl" : "text-gray-900 text-sm sm:text-base"}`}>
                  {news.title}
                </h3>
              </div>
            </Link>
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


