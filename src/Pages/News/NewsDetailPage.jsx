import { Link, useNavigate, useParams } from "react-router-dom";
import { allArticles } from "../../Data";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NewsDetailPage() {
  // Popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);

  // Route + article lookup
  const { id } = useParams();
  const navigate = useNavigate();
  const articleId = Number(id);
  const article = allArticles.find((item) => item.id === articleId);

  // Lock body scroll while popup is open
  useEffect(() => {
    if (!isPopupOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isPopupOpen]);

  // Fallback when article does not exist
  if (!article) {
    return (
      <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4">
        <div className="bg-white border border-gray-200 p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900">Article not found</h2>
          <p className="text-gray-600 mt-2">The requested story does not exist.</p>
          <Link
            to="/news"
            className="inline-block mt-5 bg-[var(--theme-primary)] text-white px-5 py-2.5 font-semibold hover:bg-[var(--theme-primary-dark)] transition-colors"
          >
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  // Related articles
  const relatedArticles = allArticles
    .filter((item) => item.id !== article.id && item.category === article.category)
    .slice(0, 3);
  const sliderImages = article.sliderImages?.filter(Boolean) || [];

  return (
    <div className="min-h-screen bg-[#f3f4f6] py-10 sm:py-12">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back + Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-[var(--theme-primary)] font-semibold hover:underline"
          >
            Back
          </button>
          <span className="text-gray-400">/</span>
          <Link to="/news" className="text-gray-600 hover:text-[var(--theme-primary)]">
            News
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500 truncate">{article.title}</span>
        </div>

        {/* Main Content */}
        <article className="bg-white border border-gray-200">
          <div className="p-6 sm:p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--theme-primary)]">
              {article.category}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {article.title}
            </h1>

            <div className="mt-4 text-sm text-gray-500 flex flex-wrap gap-3">
              <span>{article.date}</span>
              <span>|</span>
              <span>{article.readTime}</span>
              {article.type ? (
                <>
                  <span>|</span>
                  <span>{article.type}</span>
                </>
              ) : null}
            </div>

            <div className="mt-6 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-72 sm:h-96 object-cover object-top"
              />
            </div>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">{article.excerpt}</p>

            {/* Body Blocks */}
            <div className="mt-8 space-y-5">
              {article.body?.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8">
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={index}
                      className="border-l-4 border-[var(--theme-primary)] bg-[var(--theme-surface-soft)]/70 px-5 py-4"
                    >
                      <p className="text-xl italic text-gray-800">"{block.text}"</p>
                      {block.attribution ? (
                        <p className="mt-2 text-sm font-semibold text-gray-600">
                          - {block.attribution}
                        </p>
                      ) : null}
                    </blockquote>
                  );
                }

                return (
                  <p key={index} className="text-gray-700 text-base leading-relaxed">
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            {article.tags?.length ? (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[var(--theme-surface-soft)] text-gray-700 px-3 py-1.5 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </article>

        {/* Related Stories */}
        {relatedArticles.length ? (
          <section className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-5">Related Stories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--theme-primary)]">
                      {item.category}
                    </p>
                    <h4 className="mt-1 text-base font-bold text-gray-900 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-gray-500">
                      {item.date} | {item.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {/* Slider Gallery (auto-hidden when no images in data) */}
        {sliderImages.length ? (
          <section className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-5">Gallery</h3>
            <div className="bg-white border border-gray-200 p-4 sm:p-6">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={sliderImages.length > 1}
                spaceBetween={16}
                slidesPerView={1}
              >
                {sliderImages.map((image, index) => (
                  <SwiperSlide key={`${article.id}-slide-${index}`}>
                    <button
                      type="button"
                      onClick={() => {
                        setPopupIndex(index);
                        setIsPopupOpen(true);
                      }}
                      className="w-full block"
                    >
                      <img
                        src={image}
                        alt={`${article.title} gallery ${index + 1}`}
                        className="w-full h-64 sm:h-80 md:h-110 object-cover cursor-zoom-in"
                      />
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        ) : null}
      </main>

      {/* Full-screen popup slider */}
      {isPopupOpen ? (
        <div className="fixed inset-0 z-100 bg-black/95 px-3 sm:px-6 py-10">
          <div className="max-w-6xl mx-auto h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <p className="text-white text-sm sm:text-base">
                {popupIndex + 1} / {sliderImages.length}
              </p>
              <button
                type="button"
                onClick={() => setIsPopupOpen(false)}
                className="text-white border border-white/40 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
              >
                Close
              </button>
            </div>

            <div className="flex-1 min-h-0">
              <Swiper
                key={`popup-${popupIndex}`}
                modules={[Navigation, Pagination, Keyboard]}
                initialSlide={popupIndex}
                navigation
                pagination={{ clickable: true }}
                keyboard={{ enabled: true }}
                loop={sliderImages.length > 1}
                className="h-full"
                onSlideChange={(swiper) => setPopupIndex(swiper.realIndex)}
              >
                {sliderImages.map((image, index) => (
                  <SwiperSlide key={`${article.id}-popup-${index}`}>
                    <div className="h-full w-full flex items-center justify-center">
                      <img
                        src={image}
                        alt={`${article.title} full view ${index + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
