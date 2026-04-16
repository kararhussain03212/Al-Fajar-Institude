import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const images = {
  undergrad: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop',
  grad: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop',
  lifelong: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop',
};

const Academic = () => {
  const educationalPrograms = [
    {
      title: 'Undergraduate Education',
      description:
        'Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise.',
      linkText: 'Undergraduate Education',
      link: '/academic/english',
      image: images.undergrad,
      imageAlt: 'Undergraduate students working together',
    },
    {
      title: 'Graduate Education',
      description:
        'Unsurpassed opportunities to participate in the advancement of entire fields of knowledge.',
      linkText: 'Graduate Education',
      link: '/academic/hons',
      image: images.grad,
      imageAlt: 'Graduate student working in an engineering lab',
    },
    {
      title: 'Lifelong Learning',
      description:
        'Continuing adult education, executive and professional programs, and programs for K-12 students.',
      linkText: 'Lifelong Learning',
      link: '/academic/shortcourse',
      image: images.lifelong,
      imageAlt: 'A smiling woman in a yellow jacket at a workshop',
    },
  ];

  const schools = [
    { name: 'Medicine', link: '/academic' },
    { name: 'Law', link: '/academic' },
    { name: 'Humanities & Sciences', link: '/academic/mathematics' },
    { name: 'Engineering', link: '/academic/computerscience' },
    { name: 'Education', link: '/academic/faculty' },
    { name: 'Sustainability', link: '/academic' },
    { name: 'Business', link: '/academic' },
  ];

  const cardBorderColor = '#e5e7eb';
  const linkTextColor = '#00718f';
  const buttonBgColor = '#b1040e';
  const buttonBorderColor = '#8c030b';

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <header className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">
            Academics
          </h1>
          <p className="text-xl md:text-2xl font-normal text-black leading-relaxed">
            Preparing students to make meaningful contributions to society as engaged citizens and leaders in a complex world
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 mb-20">
          {educationalPrograms.map((program, index) => (
            <div key={index} className="flex flex-col group">
              <div
                className="aspect-[16/11] w-full overflow-hidden border mb-6"
                style={{ borderColor: cardBorderColor }}
              >
                <img
                  src={program.image}
                  alt={program.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              <div className="flex-grow flex flex-col items-start px-2">
                <h2 className="text-xl font-bold text-black mb-3">{program.title}</h2>
                <p className="text-base text-black font-normal leading-relaxed mb-4 flex-grow">
                  {program.description}
                </p>

                <Link
                  to={program.link}
                  className="text-base font-medium flex items-center group-hover:underline transition-all duration-200"
                  style={{ color: linkTextColor }}
                >
                  {program.linkText}
                  <span className="ml-1.5 font-bold">›</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center border-t border-gray-200 pt-16 mb-20 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-black mb-8">
            Seven schools in which to pursue your passions
          </h3>

          <ul className="flex flex-wrap justify-center items-center text-lg font-medium">
            {schools.map((school, index) => (
              <React.Fragment key={index}>
                <li className="px-2">
                  {school.name === 'Engineering' ? (
                    <Link
                      to={school.link}
                      className="hover:underline transition-all duration-200"
                      style={{ color: linkTextColor }}
                    >
                      {school.name}
                    </Link>
                  ) : (
                    <Link to={school.link} className="text-black hover:text-gray-700 transition-colors">
                      {school.name}
                    </Link>
                  )}
                </li>
                {index < schools.length - 1 && (
                  <li className="hidden md:inline text-gray-400 mx-0.5" aria-hidden="true">
                    |
                  </li>
                )}
                {index < schools.length - 1 && (
                  <li className="w-full md:hidden my-1" aria-hidden="true"></li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button
            to="/academic"
            variant="primary"
            size="lg"
            className="rounded text-lg hover:brightness-110 active:brightness-95 border"
            style={{
              backgroundColor: buttonBgColor,
              borderColor: buttonBorderColor,
            }}
          >
            More about academics
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Academic;

