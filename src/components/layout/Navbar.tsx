import { useState } from "react";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* DESKTOP + MOBILE TOP BAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#EDE7DD]/6 bg-[#1F1D1B]/85 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="none"
              className="w-9 h-9"
            >
              {/* Subtle background circle */}
              <circle cx="50" cy="50" r="45" fill="#C2613C" opacity="0.05" />

              {/* Corner bracket — top left */}
              <path
                d="M18 32 L18 18 L32 18"
                stroke="#C2613C"
                strokeWidth="3"
                strokeLinecap="square"
              />

              {/* Corner bracket — bottom right */}
              <path
                d="M82 68 L82 82 L68 82"
                stroke="#C2613C"
                strokeWidth="3"
                strokeLinecap="square"
              />

              {/* S shape — thinner, sharper */}
              <path
                d="M68 28 L32 28 L32 50 L68 50 L68 72 L32 72"
                stroke="#EDE7DD"
                strokeWidth="10"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              />

              {/* S shape — accent inner highlight */}
              <path
                d="M68 28 L32 28 L32 50 L68 50 L68 72 L32 72"
                stroke="#C2613C"
                strokeWidth="3"
                strokeLinejoin="miter"
                strokeLinecap="butt"
                opacity="0.4"
              />

              {/* Blinking cursor */}
              <rect x="70" y="66" width="9" height="14" rx="1" fill="#C2613C">
                <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Corner dots — accent */}
              <circle cx="18" cy="18" r="2" fill="#C2613C" opacity="0.5" />
              <circle cx="82" cy="82" r="2" fill="#C2613C" opacity="0.5" />
            </svg>

            <span className="font-['Playfair_Display'] text-[17px] font-bold tracking-tight text-[#EDE7DD]">
              Saksham{" "}
              <span className="font-normal text-[#C2613C]">Shukla</span>
            </span>
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                    isActive
                      ? "text-[#EDE7DD] bg-[#28251F]"
                      : "text-[#AFA89D] hover:text-[#EDE7DD] hover:bg-[#28251F]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="mailto:shuklasaksham729@gmail.com"
              className="ml-3 px-5 py-2 bg-[#C2613C] text-[#1F1D1B] rounded-lg text-[13px] font-semibold transition-all duration-200 hover:bg-[#CC6E49] hover:-translate-y-px"
            >
              Hire me
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-[5px] items-end justify-center w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={22} className="text-[#AFA89D]" />
            ) : (
              <>
                <span className="block h-[2px] w-6 bg-[#EDE7DD] rounded-full" />
                <span className="block h-[2px] w-3 bg-[#C2613C] rounded-full" />
                <span className="block h-[2px] w-6 bg-[#EDE7DD] rounded-full" />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar panel */}
        <div
          className={`fixed top-0 right-0 h-full w-72 z-50 bg-[#28251F] border-l border-[#EDE7DD]/6 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#EDE7DD]/6">
            <span className="font-['Playfair_Display'] text-[16px] font-bold text-[#EDE7DD]">
              Saksham{" "}
              <span className="font-normal text-[#C2613C]">Shukla</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#AFA89D] hover:text-[#EDE7DD] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Sidebar links */}
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-[14px] font-medium transition-all duration-150 ${
                    isActive
                      ? "text-[#EDE7DD] bg-[#322E27]"
                      : "text-[#AFA89D] hover:text-[#EDE7DD] hover:bg-[#322E27]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 pt-4 border-t border-[#EDE7DD]/6">
              <a
                href="mailto:shuklasaksham729@gmail.com"
                className="block w-full text-center px-4 py-3 bg-[#C2613C] text-[#1F1D1B] rounded-lg text-[14px] font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Navbar;
