import { Badge } from "../../../components/ui/badge";

// OneClarity Card
export const OneClarityContent = () => (
  <div className="bg-[#28251F] border border-[#EDE7DD]/6 rounded-2xl p-6">
    <div className="flex items-center gap-3 mb-5">
      <img
        src="https://onecalrity.s3.ap-south-1.amazonaws.com/company-logos/1773140212061-eb28faac-c266-4e0e-a091-9c58da949d2d.png"
        alt="OneClarity"
        className="w-9 h-9 rounded-lg object-contain bg-[#1F1D1B]"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div>
        <h3 className="text-[15px]">
          <a
            href="https://www.linkedin.com/company/oneclarity"
            target="_blank"
            rel="noreferrer"
          >
            OneClarity.ai
          </a>
        </h3>
        <p className="text-[12px] text-[#AFA89D]">Full Stack Engineer Intern</p>
      </div>
    </div>

    <div className="flex gap-2 flex-wrap mb-5">
      <Badge
        variant="outline"
        className="text-[#AFA89D] border-[#EDE7DD]/16 bg-transparent text-[10px]"
      >
        Remote
      </Badge>
      <Badge
        variant="outline"
        className="text-[#7C8F65] border-[#7C8F65]/30 bg-[#7C8F65]/10 text-[10px]"
      >
        Present
      </Badge>
      <Badge
        variant="outline"
        className="text-[#756E64] border-[#EDE7DD]/16 bg-transparent text-[10px]"
      >
        Sept 2025 – Present
      </Badge>
    </div>

    <ul className="space-y-2.5 mb-5">
      {[
        "Built shareable link invitation feature used across the platform",
        "Developed multiple dashboard APIs for employee, manager and admin roles",
        "Built a custom Role-Based Access Control (RBAC) system",
        "Built Open Labs, an open source initiative with superadmin & user contribution APIs",
        "Created blog pages, stories, and career page APIs",
        "Implemented multilingual support using Google Translate API with country detection and dynamic modals",
        "Integrated multiple AI APIs on Node.js working alongside the AI team",
      ].map((h) => (
        <li
          key={h}
          className="flex gap-2.5 text-[12.5px] text-[#AFA89D] leading-[1.6]"
        >
          <span className="text-[#756E64] mt-2 shrink-0 w-1 h-1 rounded-full bg-[#756E64]" />
          {h}
        </li>
      ))}
    </ul>

    <div className="flex gap-2 flex-wrap pt-4 border-t border-[#EDE7DD]/6">
      {[
        "React",
        "Node.js",
        "Express",
        "MySQL",
        "TypeScript",
        "Google Translate API",
        "AI APIs",
      ].map((t) => (
        <span
          key={t}
          className="bg-[#1F1D1B] border border-[#EDE7DD]/6 px-2 py-1 rounded text-[10px] text-[#756E64] font-mono"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

// Education Card
export const EducationContent = () => (
  <div className="bg-[#28251F] border border-[#EDE7DD]/6 rounded-2xl p-6">
    <div className="flex gap-2 flex-wrap mb-4">
      <Badge
        variant="outline"
        className="text-[#756E64] border-[#EDE7DD]/16 bg-transparent text-[10px]"
      >
        2021 – 2026
      </Badge>
      <Badge
        variant="outline"
        className="text-[#756E64] border-[#EDE7DD]/16 bg-transparent text-[10px]"
      >
        Indore, India
      </Badge>
    </div>
    <h3 className="text-[15px] mb-1">IIPS, DAVV Indore</h3>
    <p className="text-[13px] text-[#AFA89D] mb-4">
      Integrated Master of Computer Applications (I-MCA)
    </p>
    <ul className="space-y-2">
      {[
        "5 year integrated program, BCA + MCA combined",
        "Final year, graduating 2026",
        "Focus on full stack development and algorithms",
      ].map((item) => (
        <li
          key={item}
          className="flex gap-2 text-[12px] text-[#AFA89D] leading-[1.6]"
        >
          <span className="text-[#756E64] shrink-0">·</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// DSA Card
export const DSAContent = () => (
  <div className="bg-[#28251F] border border-[#EDE7DD]/6 rounded-2xl p-6">
    <div className="flex gap-8 mb-5">
      <div>
        <div className="text-[42px] tracking-[-2px] text-[#EDE7DD] leading-none">
          450+
        </div>
        <div className="text-[10px] text-[#756E64] font-mono tracking-[1.5px] uppercase mt-1">
          Problems Solved
        </div>
      </div>
      <div></div>
    </div>

    <a
      href="https://leetcode.com/u/saksham729/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#AFA89D] border border-[#EDE7DD]/11 px-3 py-1.5 rounded-lg hover:border-[#EDE7DD]/20 hover:text-[#EDE7DD] transition-all duration-200"
    >
      View LeetCode Profile ↗
    </a>
  </div>
);

// Roadmap Card
export const RoadmapContent = () => {
  const items = [
    {
      status: "now",
      label: "NOW",
      name: "Python",
      desc: "Just started, building foundations.",
      progress: 10,
      color: "#C2613C",
    },
    {
      status: "now",
      label: "NOW",
      name: "TypeScript",
      desc: "Actively using in projects.",
      progress: 50,
      color: "#C2613C",
    },
    {
      status: "next",
      label: "NEXT",
      name: "AWS Cloud",
      desc: "On the roadmap: EC2, S3, Lambda.",
      progress: 5,
      color: "#756E64",
    },
    {
      status: "next",
      label: "NEXT",
      name: "Agentic AI",
      desc: "Curious about multi-step, tool-using AI agents.",
      progress: 5,
      color: "#756E64",
    },
    {
      status: "done",
      label: "SOLID",
      name: "MERN Stack",
      desc: "Production shipped. Bread and butter.",
      progress: 88,
      color: "#7C8F65",
    },
    {
      status: "done",
      label: "SOLID",
      name: "REST APIs",
      desc: "Built and integrated production-grade APIs.",
      progress: 82,
      color: "#7C8F65",
    },
  ];

  const pillStyles: Record<string, string> = {
    now: "bg-[#C2613C]/10 text-[#C2613C] border-[#C2613C]/25",
    next: "bg-[#1F1D1B] text-[#756E64] border-[#EDE7DD]/8",
    done: "bg-[#7C8F65]/10 text-[#7C8F65] border-[#7C8F65]/20",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item.name}
          className="bg-[#28251F] border border-[#EDE7DD]/6 rounded-xl p-4 hover:border-[#EDE7DD]/11 hover:-translate-y-0.5 transition-all duration-200"
        >
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9.5px] font-bold font-mono tracking-[1px] mb-3 ${pillStyles[item.status]}`}
          >
            {item.status === "now" ? "●" : item.status === "done" ? "✓" : "◎"}{" "}
            {item.label}
          </div>
          <div className="text-[14px] font-semibold text-[#EDE7DD] mb-1">
            {item.name}
          </div>
          <div className="text-[11px] text-[#AFA89D] leading-[1.55] mb-3">
            {item.desc}
          </div>
          <div className="h-0.5 bg-[#EDE7DD]/8 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${item.progress}%`, background: item.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
