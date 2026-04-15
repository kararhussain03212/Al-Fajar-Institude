import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// Import required modules
import { Navigation, Thumbs } from 'swiper/modules';

const ShortCourse = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const courses = [
    {
      id: 1,
      thumbnail: "https://placehold.co/600x400?font=roboto",
      fullImage: "https://placehold.co/600x400?font=roboto",
      title: "Pre-University Short Course 2025"
    },
    {
      id: 2,
      thumbnail: "https://placehold.co/600x400?font=roboto",
      fullImage: "https://placehold.co/600x400?font=roboto",
      title: "BS Pre-Admission Free Courses"
    },
    {
      id: 3,
      thumbnail: "https://placehold.co/600x400?font=roboto",
      fullImage: "https://placehold.co/600x400?font=roboto",
      title: "BS Pre-Admission Courses 2024"
    },
    {
      id: 4,
      thumbnail: "https://placehold.co/600x400?font=roboto",
      fullImage: "https://placehold.co/600x400?font=roboto",
      title: "Short Courses - Free for Girls"
    }
  ];

  const openLightbox = (index) => {
    setActiveIndex(index);
    setThumbsSwiper(null);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setThumbsSwiper(null);
  };

  return (
    <section className='max-w-[1400px] mx-auto px-10 py-8'>
      
      {/* Header with Green Underline */}
      <div className="flex justify-center relative mb-8">
        <div className="absolute bottom-4 left-0 right-0 h-[2px] bg-green-600"></div>
        <h1 className="relative z-10 text-xl font-bold py-2 px-6 mb-4 bg-green-600 text-white">
          Short Courses
        </h1>
      </div>

      {/* Light Yellow Background Container */}
      <div className="bg-yellow-50 border border-gray-200 rounded-sm p-8">
        
        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              onClick={() => openLightbox(index)}
              className="bg-white p-3 rounded-sm shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-full h-64 object-cover rounded-sm"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Swiper Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4">
          
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-50 w-12 h-12 flex items-center justify-center"
          >
            &times;
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 text-white text-sm z-50">
            {activeIndex + 1} / {courses.length}
          </div>

          {/* Main Swiper */}
          <Swiper
            initialSlide={activeIndex}
            loop={true}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[Navigation, Thumbs]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="w-full max-w-4xl !h-[70vh]"
          >
            {courses.map((course) => (
              <SwiperSlide
                key={course.id}
                className="!flex w-full h-full items-center justify-center bg-transparent"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={course.fullImage}
                    alt={course.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Thumbnail Swiper */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="w-full max-w-4xl h-20 mt-4 px-4"
          >
            {courses.map((course, index) => (
              <SwiperSlide 
                key={course.id}
                className={`cursor-pointer rounded overflow-hidden w-20 h-20 ${
                  index === activeIndex ? 'ring-2 ring-white' : 'opacity-60'
                }`}
              >
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      )}

    </section>
  );
};

export default ShortCourse;

