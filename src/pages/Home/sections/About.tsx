import { FileText, Github, Linkedin } from "lucide-react";
import SectionLabel from "../../../components/shared/SectionLabel";
import { SiLeetcode } from "react-icons/si";

const points = [
  {
    title: "Ships to production",
    body: "Every project is live. Not just localhost.",
  },
  {
    title: "Clean architecture",
    body: "Scalable structure, reusable components.",
  },
  {
    title: "Always leveling up",
    body: "Python & AWS, currently in progress.",
  },
  {
    title: "Thinks before typing",
    body: "450+ LeetCode problems. Algorithms first.",
  },
];

const About = () => {
  return (
    <section className="px-6 py-24 border-b border-[#EDE7DD]/6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[7fr_5fr] gap-16 items-start">
        {/* Left */}
        <div>
          <SectionLabel text="about" index="01" />
          <h2
            className="leading-none mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 46px)" }}
          >
            A dev who ships{" "}
            <span className="italic text-[#C2613C]">real things</span>
          </h2>
          <p className="text-[14.5px] text-[#AFA89D] leading-[1.85] mb-4">
            I started with{" "}
            <span className="text-[#EDE7DD] font-medium">Java</span>, discovered
            web development, and never stopped. I've built and{" "}
            <span className="text-[#EDE7DD] font-medium">
              deployed real projects
            </span>
            , not just tutorials. Currently interning at{" "}
            <span className="text-[#C2613C] font-medium">OneClarity.ai</span> as
            a Full Stack Engineer.
          </p>
          <p className="text-[14.5px] text-[#AFA89D] leading-[1.85] mb-8">
            Final year of{" "}
            <span className="text-[#EDE7DD] font-medium">
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
                href: "https://www.linkedin.com/in/sakshamshukla-dev/",
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
                className="flex items-center gap-2 px-4 py-2 border border-[#EDE7DD]/11 rounded-lg text-[12px] font-semibold text-[#AFA89D] hover:border-[#EDE7DD]/20 hover:text-[#EDE7DD] transition-all duration-200"
              >
                {l.icon}
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — numbered list */}
        <div className="flex flex-col md:pt-2">
          {points.map((c, i) => (
            <div
              key={c.title}
              className={`flex gap-6 py-6 ${
                i !== 0 ? "border-t border-[#EDE7DD]/6" : "pt-0"
              }`}
            >
              <span className="font-['Playfair_Display'] italic text-[32px] text-[#756E64] leading-none w-11 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="text-[14px] font-semibold text-[#EDE7DD] mb-1.5">
                  {c.title}
                </div>
                <div className="text-[12.5px] text-[#AFA89D] leading-[1.6]">
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
