import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const contactInfo = {
    address:
      "Khayaban e Mustafa, Mari Indus Dist Mianwali Mianwali, Punjab, Pakistan-42350",
    phone: "+92-304-1115554",
  };

  const quickLinks = [
    { label: "Contact Us", path: "/contact-us" },
    { label: "About Us", path: "/about" },
    { label: "Albums", path: "/media" },
  ];

  const getInvolved = [
    { label: "Jobs", path: "/job" },
    { label: "Highlights", path: "/highlight" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Section */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-gray-600 mt-1 shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {contactInfo.address}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-600 shrink-0" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-700 text-sm hover:text-[#2e7d32] transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-700 text-sm hover:text-[#2e7d32] hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Section */}
          <div>
            <h3 className="text-gray-800 font-semibold text-lg mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2">
              {getInvolved.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-700 text-sm hover:text-[#2e7d32] hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-base text-center sm:text-left">
            &copy; {new Date().getFullYear()} Swift Sign IT &amp; Cyber
            Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {policies.map((policy) => (
              <a
                key={`${policy?.name || "policy"}-${policy?.href || ""}`}
                href={policy?.href}
                className="text-gray-600 text-sm hover:text-[#2e7d32] transition-colors duration-300"
              >
                {policy?.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
