import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { allArticles } from "../../Data";

const categories = [
  "All Topics",
  "Academic Excellence",
  "Events",
  "Sports",
  "Research",
  "Community",
  "Admissions",
  "Leadership",
  "Social Impact",
];

export default function News() {
  // Derived article groups
  const featuredArticle = allArticles[0];
  const sideArticles = allArticles.slice(1, 3);
  const newsGrid = allArticles.slice(3);

  // Category state
  const [activeCategory, setActiveCategory] = useState("All Topics");

  // Filtered grid articles
  const filteredNews = useMemo(() => {
    if (activeCategory === "All Topics") return newsGrid;
    return newsGrid.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#f3f4f6] text-gray-900 min-h-screen py-10 sm:py-12">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--theme-primary)]">News & Stories</h1>
          <p className="text-gray-600 mt-2">Latest updates from Al-Fajr Institute</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 border-b border-gray-300 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                  activeCategory === cat
                    ? "bg-[var(--theme-primary)] text-white"
                    : "bg-white text-gray-700 hover:bg-[var(--theme-surface-soft)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Top Stories */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-5">Top Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Link
              to={`/news/${featuredArticle.id}`}
              className="lg:col-span-2 bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--theme-primary)]">
                  {featuredArticle.category}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{featuredArticle.excerpt}</p>
                <p className="mt-3 text-sm text-gray-500">
                  {featuredArticle.date} | {featuredArticle.readTime}
                </p>
              </div>
            </Link>

            <div className="space-y-5">
              {sideArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/news/${article.id}`}
                  className="block bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--theme-primary)]">
                      {article.category}
                    </p>
                    <h3 className="mt-1 text-lg font-bold leading-tight">{article.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-5">
            {activeCategory === "All Topics" ? "Latest News" : activeCategory}
          </h2>

          {filteredNews.length === 0 ? (
            <div className="bg-white border border-gray-200 p-8 text-center text-gray-600">
              No articles found in this category.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((article) => (
                <Link
                  key={article.id}
                  to={`/news/${article.id}`}
                  className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--theme-primary)]">
                      {article.category}
                    </p>
                    <h3 className="mt-1 text-lg font-bold leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
                    <p className="mt-3 text-xs text-gray-500">
                      {article.date} | {article.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
