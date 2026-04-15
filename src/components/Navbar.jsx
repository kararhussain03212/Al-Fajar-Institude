import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ content }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { label: "Home", path: "/", hasDropdown: false },
    {
      label: "About Us",
      path: "/",
      hasDropdown: true,
      dropdownItems: [
        { label: "Introduction", path: "/about/introduction" },
        { label: "Chairman", path: "/about/chairman" },
        { label: "Director", path: "/about/director" },
        { label: "Vision & Mission", path: "/about/vision" },
      ],
    },
    {
      label: "Academic Programs",
      path: "/academic",
      hasDropdown: true,
      dropdownItems: [
        { label: "BS Computer Science", path: "/academic/Computerscience" },
        { label: "BS English", path: "/academic/English" },
        { label: "BS Mathematics", path: "/academic/Mathematics" },
        { label: "BBA (Hons)", path: "/academic/Hons" },
        { label: "Short Courses", path: "/academic/shortcourse" },
        { label: "Faculty", path: "/academic/faculty" },
      ],
    },
    { label: "Highlights", path: "/highlight", hasDropdown: false },
    {
      label: "Media",
      path: "/media",
      hasDropdown: true,
      dropdownItems: [
        { label: "Albums", path: "/media/album" },
        { label: "Videos", path: "/media/videos" },
        { label: "Media Clippings", path: "/media/clipping" },
        { label: "Notification", path: "/media/notification" },
        { label: "Vital Links", path: "/media/vital" },
      ],
    },
    { label: "Jobs", path: "/job", hasDropdown: false },
    { label: "Downloads", path: "/downloads", hasDropdown: false },
    { label: "Contact Us", path: "/contact-us", hasDropdown: false },
    { label: "Conference", path: "/conference", hasDropdown: false },
  ];

  return (
    <header className="w-full shadow-md">
      {/* Top Banner Section */}
      <div className="flex justify-center">
        <img
          className="w-full max-w-[1400px]"
          src="/src/assets/navbar/alfajrbanner1.jpg"
          alt="banner"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-t-[3px] border-[#d4af37] shadow-sm">
        <div className="max-w-[1400px] mx-auto px-10 flex justify-center">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-full py-4 px-4 text-left bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`w-6 h-[3px] bg-[#0d7a5f] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`w-6 h-[3px] bg-[#0d7a5f] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`w-6 h-[3px] bg-[#0d7a5f] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </span>
          </button>

          {/* Navigation Links */}
          <ul
            className={`hidden md:flex list-none m-0 p-0 gap-0 flex-col md:flex-row ${isMobileMenuOpen ? "!flex" : ""}`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(index)
                }
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-1 py-4 px-5 no-underline text-[#333] font-semibold text-sm uppercase tracking-wide transition-all duration-300 border-b-[3px] border-transparent hover:text-[#0d7a5f] hover:bg-gray-50 hover:border-[#0d7a5f]"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span
                      className={`text-[10px] transition-transform duration-300 ${activeDropdown === index ? "rotate-180" : ""}`}
                    >
                      &#9662;
                    </span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === index && (
                  <ul className="absolute top-full left-0 bg-white min-w-[200px] list-none m-0 p-2 shadow-lg rounded-b z-[1000]">
                    {item.dropdownItems.map((dropItem, dropIndex) => {
                      const isObjectItem =
                        dropItem && typeof dropItem === "object";
                      const dropLabel = isObjectItem
                        ? dropItem.label
                        : String(dropItem);
                      const dropPath = isObjectItem ? dropItem.path : item.path;

                      return (
                        <li key={dropIndex}>
                          <Link
                            to={dropPath}
                            className="block py-2.5 px-5 no-underline text-[#333] text-sm normal-case transition-all duration-200 hover:bg-[#0d7a5f] hover:text-white hover:pl-6"
                          >
                            {dropLabel}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
