const items = [
  "React",
  "Node.js",
  "MongoDB",
  "TypeScript",
  "Express",
  "Next.js",
  "Tailwind",
  "Vercel",
  "Git",
  "Java",
  "REST APIs",
  "Postman",
];

const Ticker = () => {
  return (
    <div className="border-t border-b border-white/[0.06] bg-[#111] overflow-hidden">
      <div className="flex animate-ticker">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 whitespace-nowrap"
          >
            <span className="font-mono text-[10.5px] font-semibold text-[#555] uppercase tracking-[2.5px]">
              {item}
            </span>
            <div className="w-1 h-1 rounded-full bg-[#f56038] flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
