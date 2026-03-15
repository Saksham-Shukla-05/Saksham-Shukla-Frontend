import { FileText, Github, Linkedin } from "lucide-react";
import SectionLabel from "../../../components/shared/SectionLabel";
import { SiLeetcode } from "react-icons/si";
const cards = [
  {
    icon: "⚡",
    bg: "rgba(245,96,56,.1)",
    title: "Ships to production",
    body: "Every project is live. Not just localhost.",
  },
  {
    icon: "🧱",
    bg: "rgba(255,255,255,.05)",
    title: "Clean architecture",
    body: "Scalable structure, reusable components.",
  },
  {
    icon: "📈",
    bg: "rgba(74,222,128,.07)",
    title: "Always leveling up",
    body: "Python & AWS — currently in progress.",
  },
  {
    icon: "🎯",
    bg: "rgba(59,130,246,.07)",
    title: "Thinks before typing",
    body: "450+ LeetCode problems. Algorithms first.",
  },
];

const About = () => {
  return (
    <section className="px-6 py-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        {/* Left */}
        <div>
          <SectionLabel text="about" />
          <h2
            className="font-bold text-[#eeebe5] tracking-[-1.5px] leading-[1.02] mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 46px)" }}
          >
            A dev who ships{" "}
            <span
              className="text-[#c0bdb8]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              real things
            </span>
          </h2>
          <p className="text-[14.5px] text-[#999] leading-[1.85] mb-4">
            I started with{" "}
            <span className="text-[#eeebe5] font-medium">Java</span>, discovered
            web development, and never stopped. I've built and{" "}
            <span className="text-[#eeebe5] font-medium">
              deployed real projects
            </span>{" "}
            — not just tutorials. Currently interning at{" "}
            <span className="text-[#f56038] font-medium">OneClarity.ai</span> as
            a Full Stack Developer.
          </p>
          <p className="text-[14.5px] text-[#999] leading-[1.85] mb-8">
            Final year of{" "}
            <span className="text-[#eeebe5] font-medium">
              Integrated MCA at IIPS, DAVV Indore.
            </span>{" "}
            Open to full-time roles, internships, and freelance projects.
          </p>
          <div className="flex gap-3 flex-wrap">
            {[
              {
                label: "GitHub",
                icon: <Github className="w-4 h-4" />,
                href: "https://github.com/Saksham-Shukla-05",
              },
              {
                label: "LinkedIn",
                icon: <Linkedin className="w-4 h-4" />,
                href: "https://www.linkedin.com/in/saksham-shukla-9758602a6",
              },
              {
                label: "LeetCode",
                icon: <SiLeetcode className="w-4 h-4" />,
                href: "https://leetcode.com/u/saksham729/",
              },
              {
                label: "Resume",
                icon: <FileText className="w-4 h-4" />,
                href: "/Saksham-Shukla-Resume.pdf",
              },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/[0.11] rounded-[9px] text-[12px] font-semibold text-[#999] hover:border-[#f56038] hover:text-[#f56038] hover:bg-[#f56038]/10 transition-all duration-200"
              >
                {l.icon}
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — cards */}
        <div className="flex flex-col gap-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="grid grid-cols-[42px_1fr] gap-4 bg-[#111] border border-white/[0.06] rounded-[14px] p-5 hover:border-white/[0.11] hover:translate-x-1 transition-all duration-200"
            >
              <div
                className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: c.bg }}
              >
                {c.icon}
              </div>
              <div>
                <div className="text-[13.5px] font-semibold text-[#eeebe5] mb-1">
                  {c.title}
                </div>
                <div className="text-[12px] text-[#999] leading-[1.55]">
                  {c.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
