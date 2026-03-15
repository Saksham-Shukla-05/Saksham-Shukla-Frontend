import { Badge } from "../../../components/ui/badge";

// OneClarity Card
export const OneClarityContent = () => (
  <div className="bg-[#111] border border-white/[0.06] rounded-[18px] p-6">
    <div className="flex items-center gap-3 mb-5">
      <img
        src="https://onecalrity.s3.ap-south-1.amazonaws.com/company-logos/1773140212061-eb28faac-c266-4e0e-a091-9c58da949d2d.png"
        alt="OneClarity"
        className="w-9 h-9 rounded-[9px] object-contain bg-white/5"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div>
        <h3 className="text-[15px] font-bold text-[#eeebe5]">
          <a
            href="https://www.linkedin.com/company/oneclarity"
            target="_blank"
            rel="noreferrer"
          >
            OneClarity.ai
          </a>
        </h3>
        <p className="text-[12px] text-[#bebcbc]">
          Full Stack Developer Intern
        </p>
      </div>
    </div>

    <div className="flex gap-2 flex-wrap mb-5">
      <Badge
        variant="outline"
        className="text-[#f56038] border-[#f56038]/30 bg-[#f56038]/10 text-[10px]"
      >
        Remote
      </Badge>
      <Badge
        variant="outline"
        className="text-[#4ade80] border-[#4ade80]/30 bg-[#4ade80]/10 text-[10px]"
      >
        Present
      </Badge>
      <Badge
        variant="outline"
        className="text-[#999] border-white/10 text-[10px]"
      >
        Sept 2025 – Present
      </Badge>
    </div>

    <ul className="space-y-2.5 mb-5">
      {[
        "Built shareable link invitation feature used across the platform",
        "Developed multiple dashboard APIs for employee and manager roles",
        "Built Open Labs — open source initiative with superadmin & user contribution APIs",
        "Created blog pages, stories, and career page APIs",
        "Implemented multilingual support using Google Translate API with country detection and dynamic modals",
        "Integrated multiple AI APIs on Node.js working alongside the AI team",
        "Built a template preview application",
      ].map((h) => (
        <li
          key={h}
          className="flex gap-2.5 text-[12.5px] text-[#999] leading-[1.6]"
        >
          <span className="text-[#f56038] mt-1 flex-shrink-0">→</span>
          {h}
        </li>
      ))}
    </ul>

    <div className="flex gap-2 flex-wrap pt-4 border-t border-white/[0.06]">
      {[
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "TypeScript",
        "Google Translate API",
        "AI APIs",
      ].map((t) => (
        <span
          key={t}
          className="bg-white/[0.04] border border-white/[0.06] px-2 py-1 rounded-[5px] text-[10px] text-[#bebcbc] font-mono"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

// Education Card
export const EducationContent = () => (
  <div className="bg-[#111] border border-white/[0.06] rounded-[18px] p-6">
    <div className="flex gap-2 flex-wrap mb-4">
      <Badge
        variant="outline"
        className="text-[#999] border-white/10 text-[10px]"
      >
        2021 – 2026
      </Badge>
      <Badge
        variant="outline"
        className="text-[#999] border-white/10 text-[10px]"
      >
        Indore, India
      </Badge>
    </div>
    <h3 className="text-[15px] font-bold text-[#eeebe5] mb-1">
      IIPS, DAVV Indore
    </h3>
    <p className="text-[13px] text-[#999] mb-4">
      Integrated Master of Computer Applications (I-MCA)
    </p>
    <ul className="space-y-2">
      {[
        "5 year integrated program — BCA + MCA combined",
        "Final year — graduating 2026",
        "Focus on full stack development and algorithms",
      ].map((item) => (
        <li
          key={item}
          className="flex gap-2 text-[12px] text-[#bebcbc] leading-[1.6]"
        >
          <span className="text-[#c0bdb8] flex-shrink-0">·</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

// DSA Card
export const DSAContent = () => (
  <div className="bg-[#111] border border-white/[0.06] rounded-[18px] p-6">
    <div className="flex gap-8 mb-5">
      <div>
        <div className="text-[42px] font-bold tracking-[-2px] text-[#f56038] leading-none">
          450+
        </div>
        <div className="text-[10px] text-[#bebcbc] font-mono tracking-[1.5px] uppercase mt-1">
          Problems Solved
        </div>
      </div>
      <div></div>
    </div>

    <a
      href="https://leetcode.com/u/saksham729/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#999] border border-white/[0.11] px-3 py-1.5 rounded-[8px] hover:border-[#f56038] hover:text-[#f56038] transition-all duration-200"
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
      desc: "Just started — building foundations.",
      progress: 10,
      color: "#f56038",
    },
    {
      status: "now",
      label: "NOW",
      name: "TypeScript",
      desc: "Actively using in projects.",
      progress: 50,
      color: "#f56038",
    },
    {
      status: "next",
      label: "NEXT",
      name: "AWS Cloud",
      desc: "EC2, S3, Lambda — on the roadmap.",
      progress: 5,
      color: "#555",
    },
    {
      status: "next",
      label: "NEXT",
      name: "Agentic AI",
      desc: "Sparked by working with AI team at OneClarity.",
      progress: 5,
      color: "#555",
    },
    {
      status: "done",
      label: "SOLID",
      name: "MERN Stack",
      desc: "Production shipped. Bread and butter.",
      progress: 88,
      color: "#4ade80",
    },
    {
      status: "done",
      label: "SOLID",
      name: "REST APIs",
      desc: "Built and consumed multiple production APIs dashboards, auth, integrations.",
      progress: 82,
      color: "#4ade80",
    },
  ];

  const pillStyles: Record<string, string> = {
    now: "bg-[#f56038]/10 text-[#f56038] border-[#f56038]/25",
    next: "bg-white/[0.04] text-[#bebcbc] border-white/10",
    done: "bg-[#4ade80]/10 text-[#4ade80] border-[#4ade80]/20",
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((item) => (
        <div
          key={item.name}
          className="bg-[#111] border border-white/[0.06] rounded-[14px] p-4 hover:border-white/[0.11] hover:-translate-y-0.5 transition-all duration-200"
        >
          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[9.5px] font-bold font-mono tracking-[1px] mb-3 ${pillStyles[item.status]}`}
          >
            {item.status === "now" ? "●" : item.status === "done" ? "✓" : "◎"}{" "}
            {item.label}
          </div>
          <div className="text-[14px] font-bold text-[#eeebe5] mb-1">
            {item.name}
          </div>
          <div className="text-[11px] text-[#bebcbc] leading-[1.55] mb-3">
            {item.desc}
          </div>
          <div className="h-[2px] bg-white/[0.05] rounded-full overflow-hidden">
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
