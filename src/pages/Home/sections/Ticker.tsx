const items = [
  "React",
  "Node.js",
  "MongoDB",
  "TypeScript",
  "Express",
  "",
  "Tailwind",
  "Vercel",
  "Git",
  "Java",
  "REST APIs",
  "Postman",
];

const Ticker = () => {
  return (
    <div className="border-t border-b border-[#EDE7DD]/6 bg-[#28251F] overflow-hidden">
      <div className="flex animate-ticker">
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 whitespace-nowrap"
          >
            <span className="font-mono text-[10px] font-medium text-[#756E64] uppercase tracking-[2.5px]">
              {item}
            </span>
            <div className="w-1 h-1 rounded-full bg-[#EDE7DD]/20 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
