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
    <footer className="border-t border-white/[0.06] px-6 pt-16 pb-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand col */}
          <div>
            <div className="text-[18px] font-bold text-[#eeebe5] mb-2">
              Saksham{" "}
              <span className=" font-normal text-[#f56038] text-[18px]">
                Shukla
              </span>
            </div>
            <p className="text-[12px] text-[#f56038] font-mono mb-4">
              ~ Coding with purpose.
            </p>
            <p className="text-[13px]  leading-[1.8] max-w-[280px]">
              Full-stack developer passionate about building scalable and
              user-friendly web applications with{" "}
              <span className="text-[#c0bdb8]">MERN</span>{" "}
              <span className="text-[#c0bdb8]"></span>. Always learning,
              improving, and exploring modern tech stacks.
            </p>
          </div>

          {/* Let's connect */}
          <div>
            <p className="text-[11px] font-mono text-[#f56038] tracking-[2px] uppercase mb-5">
              Let's connect
            </p>
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <Github size={16} />,
                  label: "GitHub",
                  href: "https://github.com/Saksham-Shukla-05",
                },
                {
                  icon: <Linkedin size={16} />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/saksham-shukla-9758602a6",
                },
                {
                  icon: <Mail size={16} />,
                  label: "Email",
                  href: "mailto:shuklasaksham729@gmail.com",
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[13px]  hover:text-[#f56038] transition-colors duration-200 group"
                >
                  <span className="group-hover:text-[#f56038] transition-colors">
                    {l.icon}
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Find your way */}
          <div>
            <p className="text-[11px] font-mono text-[#f56038] tracking-[2px] uppercase mb-5">
              Find Your Way
            </p>
            <div className="flex flex-col gap-6">
              {[
                { label: "Home", path: "/" },
                { label: "Projects", path: "/projects" },
                { label: "Experience", path: "/experience" },
              ].map((l) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  className="text-[13px]  hover:text-[#f56038] transition-colors duration-200"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Build with me */}
          <div>
            <p className="text-[11px] font-mono text-[#f56038] tracking-[2px] uppercase mb-5">
              Build with Me
            </p>
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <Mail size={14} />,
                  label: "Send Feedback",
                  href: "mailto:shuklasaksham729@gmail.com",
                },
                {
                  icon: <GitFork size={14} />,
                  label: "Fork this Project",
                  href: "https://github.com/Saksham-Shukla-05/Sakshams-portfolio",
                },
                {
                  icon: <GitPullRequest size={14} />,
                  label: "Contribute on GitHub",
                  href: "https://github.com/Saksham-Shukla-05/Sakshams-portfolio/fork",
                },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[13px]  hover:text-[#f56038] transition-colors duration-200 group"
                >
                  <span className="group-hover:text-[#f56038] transition-colors">
                    {l.icon}
                  </span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06]  pt-6 flex flex-col md:flex-row items-center justify-center ">
          <p className="text-[11px]  font-mono">
            © {new Date().getFullYear()} Saksham Shukla. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="absolute cursor-pointer right-6 bottom-6 w-9 h-9 bg-[#f56038] hover:bg-[#ff8255] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_6px_20px_rgba(245,96,56,0.4)] hover:-translate-y-1 transition-all duration-200"
        aria-label="Back to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;
