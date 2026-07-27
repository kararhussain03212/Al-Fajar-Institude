import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from "react-icons/fa";

const footerLinks = {
  admissions: {
    title: "Admissions",
    links: [
      { name: "Undergraduate", href: "/admissions/detail" },
      { name: "Graduate", href: "/admissions/detail" },
      { name: "Short Courses", href: "/admissions/detail" },
    ],
  },
  academics: {
    title: "Academics",
    links: [
      { name: "Schools & Departments", href: "/academic" },
      { name: "Programs & Courses", href: "/academic" },
      { name: "Research", href: "/academic" },
      { name: "Libraries", href: "/academic" },
      { name: "Online Learning", href: "/academic" },
    ],
  },
  campusLife: {
    title: "Campus Life",
    links: [
      { name: "Housing & Dining", href: "/campus-life" },
      { name: "Student Organizations", href: "/campus-life" },
      { name: "Health & Wellness", href: "/campus-life" },
      { name: "Athletics", href: "/campus-life" },
      { name: "Events Calendar", href: "/campus-life" },
    ],
  },
  about: {
    title: "About",
    links: [
      { name: "Mission & Vision", href: "/about" },
      { name: "Leadership", href: "/faculty" },
      { name: "News & Media", href: "/news" },
      { name: "Careers", href: "/job" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/AlFajarInstitute/",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/alfajrinstitute",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/alfajrinstitute",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/school/alfajrinstitute",
    icon: FaLinkedinIn,
  },
];

const Footer = () => {
  return (
    <footer className="relative z-30 bg-[#2d2d2d] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-white">Al Fajr Institute</h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering minds, illuminating futures through excellence in education and research.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-gray-400 hover:bg-[var(--theme-primary)] hover:text-white transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <span>Khayaban e Mustafa, Mari Indus Dist Mianwali Mianwali, Punjab, Pakistan-42350</span>
              <span className="mx-2 hidden md:inline">|</span>
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                 +92-304-1115554
              </a>
              <span className="mx-2 hidden md:inline">|</span>
              <a href="mailto:info@ssdo.org.pk" className="hover:text-white transition-colors">
                info@ssdo.org.pk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-[var(--theme-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-xs text-white">
            <div className="flex flex-wrap justify-center md:justify-start space-x-4">
              <span>&copy; {new Date().getFullYear()} Al Fajr Institute. All rights reserved SWIFT SIGN IT</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Link to="/downloads" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/downloads" className="hover:text-gray-300 transition-colors">
                Terms of Use
              </Link>
              <Link to="/contact-us" className="hover:text-gray-300 transition-colors">
                Accessibility
              </Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

