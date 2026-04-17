import React, { useEffect, useState } from "react";
import { FiSearch, FiX, FiMenu, FiGlobe } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ transparentOnHero = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchType, setSearchType] = useState("web");
  const [isAtTop, setIsAtTop] = useState(true);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const shouldUseHeroTransparency = transparentOnHero || isHomePage;

  useEffect(() => {
    if (!shouldUseHeroTransparency) return;

    const onScroll = () => {
      const navbarHeight = 112;
      const heroEnd = window.innerHeight - navbarHeight;
      setIsAtTop(window.scrollY < heroEnd);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [shouldUseHeroTransparency]);

  const transparent = shouldUseHeroTransparency ? isAtTop : false;

  const topNavItems = [
    { label: "Students", href: "#" },
    { label: "Faculty & Staff", href: "#" },
    { label: "Families", href: "#" },
    { label: "Visitors", href: "#" },
    { label: "Alumni", href: "#" },
  ];

  const mainNavItems = [
    { label: "Academics", href: "/academic" },
    { label: "Research", href: "#" },
    { label: "Health Care", href: "#" },
    { label: "Campus Life", href: "/campus-life" },
    { label: "Athletics", href: "#" },
    { label: "Admission", href: "#" },
    { label: "About", href: "/about" },
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
  ];

  return (
    <header
      className={`w-full z-50 ${
        shouldUseHeroTransparency
          ? "fixed top-0 left-0 right-0"
          : "relative"
      }`}
    >
      <div
        className={`text-white transition-colors duration-300 ${
          transparent ? "bg-transparent" : "bg-[#8C1515]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-17">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl sm:text-3xl font-serif font-bold tracking-tight hover:opacity-90 transition-opacity">Al Fajr Institute</Link>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <span className="text-l font-semibold">Information for:</span>

              {topNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-l hover:underline transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}

              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`flex items-center justify-center space-x-1.5 text-l px-3 py-1.5 w-[90px] transition-all duration-200 ${
                  isSearchOpen ? "bg-[#6F1111]" : "hover:opacity-80"
                }`}
              >
                {isSearchOpen ? (
                  <>
                    <FiX className="w-4 h-4 flex-shrink-0" />
                    <span>Close</span>
                  </>
                ) : (
                  <>
                    <FiSearch className="w-4 h-4 flex-shrink-0" />
                    <span>Search</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center lg:hidden space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1 hover:opacity-80 transition-opacity"
              >
                {isSearchOpen ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <FiSearch className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 hover:opacity-80 transition-opacity"
              >
                {isMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          transparent
            ? "bg-transparent border-b border-transparent shadow-none"
            : "bg-white border-b  border-gray-200 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-center h-17 space-x-8">
            {mainNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-black text-xl font-medium hover:text-[#8C1515] hover:underline transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-4 bg-white">
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
                  Main Menu
                </p>
                {mainNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-2 py-2 text-gray-800 font-medium hover:bg-gray-100 hover:text-[#8C1515] rounded transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 mb-2">
                  Information for
                </p>
                {topNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-2 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#8C1515] rounded transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center mb-6">
              <span className="text-lg font-bold text-gray-900 mr-6">
                Al Fajr Institute:
              </span>
              <div className="flex items-center space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value="web"
                    checked={searchType === "web"}
                    onChange={() => setSearchType("web")}
                    className="w-4 h-4 text-[#006CB8] border-gray-300 focus:ring-[#006CB8]"
                  />
                  <span className="ml-2 text-gray-700">Web</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value="people"
                    checked={searchType === "people"}
                    onChange={() => setSearchType("people")}
                    className="w-4 h-4 text-[#006CB8] border-gray-300 focus:ring-[#006CB8]"
                  />
                  <span className="ml-2 text-gray-700">People</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-0 max-w-3xl mx-auto">
              <div className="flex-1 relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FiSearch className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="Search Al Fajr websites"
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 border-r-0 focus:outline-none focus:border-[#006CB8] text-gray-700 placeholder-gray-500"
                />
              </div>

              <button className="bg-[#8C1515] hover:bg-[#6F1111] text-white px-8 py-3 flex items-center justify-center space-x-2 transition-colors min-w-[160px]">
                <FiGlobe className="w-4 h-4" />
                <span className="font-medium">Search Web</span>
              </button>
            </div>

            <div className="text-center mt-6">
              <span className="text-gray-700">Other ways to search: </span>
              <a href="#" className="text-[#006CB8] hover:underline ml-1">
                Map
              </a>
              <a href="#" className="text-[#006CB8] hover:underline ml-3">
                Profiles
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

