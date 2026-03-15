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
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#090909]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="none"
              className="w-9 h-9"
            >
              {/* Subtle background circle */}
              <circle cx="50" cy="50" r="45" fill="#f56038" opacity="0.04" />

              {/* Corner bracket — top left */}
              <path
                d="M18 32 L18 18 L32 18"
                stroke="#f56038"
                strokeWidth="3"
                strokeLinecap="square"
              />

              {/* Corner bracket — bottom right */}
              <path
                d="M82 68 L82 82 L68 82"
                stroke="#f56038"
                strokeWidth="3"
                strokeLinecap="square"
              />

              {/* S shape — thinner, sharper */}
              <path
                d="M68 28 L32 28 L32 50 L68 50 L68 72 L32 72"
                stroke="#f0ede8"
                strokeWidth="10"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              />

              {/* S shape — orange inner highlight */}
              <path
                d="M68 28 L32 28 L32 50 L68 50 L68 72 L32 72"
                stroke="#f56038"
                strokeWidth="3"
                strokeLinejoin="miter"
                strokeLinecap="butt"
                opacity="0.4"
              />

              {/* Blinking cursor */}
              <rect x="70" y="66" width="9" height="14" rx="1" fill="#f56038">
                <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </rect>

              {/* Corner dots — accent */}
              <circle cx="18" cy="18" r="2" fill="#f56038" opacity="0.5" />
              <circle cx="82" cy="82" r="2" fill="#f56038" opacity="0.5" />
            </svg>

            <span className="text-[15px] font-bold tracking-tight text-[#eeebe5]">
              Saksham{" "}
              <span className=" font-normal text-[#f56038] text-[16px]">
                Shukla
              </span>
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
                      ? "text-[#eeebe5] bg-white/5"
                      : "text-[#c0bdb8] hover:text-[#eeebe5] hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="mailto:shuklasaksham729@gmail.com"
              className="ml-3 px-5 py-2 bg-[#f56038] text-white rounded-lg text-[13px] font-semibold transition-all duration-200 hover:brightness-110 hover:shadow-[0_6px_20px_rgba(245,96,56,0.3)] hover:-translate-y-px"
            >
              Hire me
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-[5px] items-end justify-center w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={22} className="text-[#c0bdb8]" />
            ) : (
              <>
                <span className="block h-[2px] w-6 bg-[#f0ede8] rounded-full" />
                <span className="block h-[2px] w-3 bg-[#f56038] rounded-full" />
                <span className="block h-[2px] w-6 bg-[#f0ede8] rounded-full" />
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
          className={`fixed top-0 right-0 h-full w-72 z-50 bg-[#111] border-l border-white/[0.06] transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
            <span className="text-[14px] font-bold text-[#eeebe5]">
              Saksham{" "}
              <span className=" font-normal text-[#f56038]">Shukla</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#c0bdb8] hover:text-[#eeebe5] transition-colors"
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
                      ? "text-[#eeebe5] bg-white/5"
                      : "text-[#c0bdb8] hover:text-[#eeebe5] hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <a
                href="mailto:shuklasaksham729@gmail.com"
                className="block w-full text-center px-4 py-3 bg-[#f56038] text-white rounded-lg text-[14px] font-semibold"
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
