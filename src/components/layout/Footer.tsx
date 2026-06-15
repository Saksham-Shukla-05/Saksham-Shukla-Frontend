import { NavLink } from "react-router-dom";
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  GitFork,
  GitPullRequest,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#EDE7DD]/6 px-6 pt-16 pb-10 relative bg-[#1A1816]">
      <div className="max-w-6xl mx-auto">
        {/* Top row — logo + tagline */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-[#EDE7DD]/6 mb-12">
          <div className="flex md:ml-5 ml-1 items-center gap-3">
            {/* Logo mark */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="none"
              className="w-9 h-9"
            >
              <circle cx="50" cy="50" r="45" fill="#C2613C" opacity="0.05" />
              <path
                d="M18 32 L18 18 L32 18"
                stroke="#C2613C"
                strokeWidth="3"
                strokeLinecap="square"
              />
              <path
                d="M82 68 L82 82 L68 82"
                stroke="#C2613C"
                strokeWidth="3"
                strokeLinecap="square"
              />
              <path
                d="M68 28 L32 28 L32 50 L68 50 L68 72 L32 72"
                stroke="#EDE7DD"
                strokeWidth="10"
                strokeLinejoin="miter"
                strokeLinecap="butt"
              />
              <path
                d="M68 28 L32 28 L32 50 L68 50 L68 72 L32 72"
                stroke="#C2613C"
                strokeWidth="3"
                strokeLinejoin="miter"
                strokeLinecap="butt"
                opacity="0.4"
              />
              <rect x="70" y="66" width="9" height="14" rx="1" fill="#C2613C">
                <animate
                  attributeName="opacity"
                  values="1;0;1"
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </rect>
              <circle cx="18" cy="18" r="2" fill="#C2613C" opacity="0.5" />
              <circle cx="82" cy="82" r="2" fill="#C2613C" opacity="0.5" />
            </svg>
            <div className="">
              <div className="font-['Playfair_Display'] text-[17px] font-bold text-[#EDE7DD]">
                Saksham{" "}
                <span className="font-normal text-[#C2613C]">Shukla</span>
              </div>
              <p className="font-['Playfair_Display'] italic text-[12px] text-[#756E64] tracking-[0.5px]">
                Coding with purpose.
              </p>
            </div>
          </div>

          {/* Availability badge */}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-13 p-5 mb-14">
          {/* About col */}
          <div className="md:col-span-1">
            <p className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-5">
              About
            </p>
            <p className="text-[13px] text-[#AFA89D] leading-[1.8]">
              Full Stack Engineer from Indore, India. Building fast, scalable
              web apps with the MERN stack. Open to work.
            </p>

            <a
              href="/Saksham-Shukla-Resume.pdf"
              download="Saksham_Shukla_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 border border-[#EDE7DD]/11 rounded-lg text-[11.5px] font-semibold text-[#AFA89D] hover:border-[#EDE7DD]/20 hover:text-[#EDE7DD] transition-all duration-200"
            >
              Download Resume
            </a>
          </div>

          {/* Let's connect */}
          <div>
            <p className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-5">
              Connect
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <Github size={14} />,
                  label: "GitHub",
                  href: "https://github.com/Saksham-Shukla-05",
                },
                {
                  icon: <Linkedin size={14} />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/sakshamshukla-dev/",
                },

                {
                  icon: <Mail size={14} />,
                  label: "Email",
                  href: "mailto:shuklasaksham729@gmail.com",
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[13px] text-[#AFA89D] hover:text-[#EDE7DD] transition-colors duration-200 group"
                >
                  <span className="text-[#756E64] group-hover:text-[#EDE7DD] transition-colors">
                    {l.icon}
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-5">
              Navigate
            </p>
            <div className="flex flex-col gap-4">
              {[
                { label: "Home", path: "/" },
                { label: "Projects", path: "/projects" },
                { label: "Experience", path: "/experience" },
              ].map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  className={({ isActive }) =>
                    `text-[13px] transition-colors duration-200 ${
                      isActive
                        ? "text-[#EDE7DD]"
                        : "text-[#AFA89D] hover:text-[#EDE7DD]"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Build with me */}
          <div>
            <p className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-5">
              Build with Me
            </p>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <Mail size={14} />,
                  label: "Send Feedback",
                  href: "mailto:shuklasaksham729@gmail.com",
                },
                {
                  icon: <GitFork size={14} />,
                  label: "Fork this Project",
                  href: "https://github.com/Saksham-Shukla-05/Saksham-Shukla-Frontend",
                },
                {
                  icon: <GitPullRequest size={14} />,
                  label: "Contribute",
                  href: "https://github.com/Saksham-Shukla-05/Saksham-Shukla-Frontend/fork",
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[13px] text-[#AFA89D] hover:text-[#EDE7DD] transition-colors duration-200 group"
                >
                  <span className="text-[#756E64] group-hover:text-[#EDE7DD] transition-colors">
                    {l.icon}
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#EDE7DD]/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#756E64] font-mono">
            © {new Date().getFullYear()} Saksham Shukla. All rights reserved.
          </p>
          <p className="text-[11px] text-[#756E64] font-mono">
            Built with React · Hosted on Vercel
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute cursor-pointer right-6 bottom-8 w-9 h-9 bg-[#C2613C] hover:bg-[#CC6E49] text-[#1F1D1B] rounded-full flex items-center justify-center hover:-translate-y-1 transition-all duration-200"
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;
