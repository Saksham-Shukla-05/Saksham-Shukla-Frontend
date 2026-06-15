import SectionLabel from "../../../components/shared/SectionLabel";
import { stack } from "../../../data";

const categories = [
  {
    name: "Languages",
    description: "Where the logic and problem-solving begin.",
  },
  {
    name: "Frontend",
    description: "Turning designs into interfaces people use.",
  },
  {
    name: "Backend & Data",
    description: "APIs, databases, and everything behind the scenes.",
  },
  {
    name: "Tools",
    description: "The workflow that keeps it all moving.",
  },
];

const TechStack = () => {
  return (
    <section className="px-6 py-24 border-b border-[#EDE7DD]/6 bg-[#1A1816]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="stack" index="02" />
        <h2 className="leading-none mb-12" style={{ fontSize: "clamp(32px, 4vw, 46px)" }}>
          Tools I <span className="italic text-[#AFA89D]">work with</span>
        </h2>

        <div className="flex flex-col border-t border-[#EDE7DD]/6">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 md:gap-10 py-7 border-b border-[#EDE7DD]/6"
            >
              <div>
                <div className="flex items-baseline gap-2.5 mb-2">
                  <span className="font-mono text-[10px] font-medium text-[#C2613C] tracking-normal">
                    2.{i + 1}
                  </span>
                  <span className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase">
                    {cat.name}
                  </span>
                </div>
                <p className="text-[12px] text-[#AFA89D] leading-normal max-w-52">
                  {cat.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 content-center">
                {stack
                  .filter((s) => s.category === cat.name)
                  .map((s) =>
                    s.learning ? (
                      <div
                        key={s.name}
                        title="Currently learning"
                        className="px-4 py-2 border border-dashed border-[#EDE7DD]/16 rounded-lg text-[13px] font-medium text-[#AFA89D] hover:border-[#C2613C]/40 hover:text-[#EDE7DD] transition-all duration-200"
                        style={{
                          background: `linear-gradient(to right, rgba(194,97,60,0.12) ${s.learning}%, transparent ${s.learning}%)`,
                        }}
                      >
                        {s.name}
                      </div>
                    ) : (
                      <div
                        key={s.name}
                        className="px-4 py-2 border border-[#EDE7DD]/8 rounded-lg text-[13px] font-medium text-[#AFA89D] hover:border-[#C2613C]/30 hover:text-[#EDE7DD] transition-all duration-200"
                      >
                        {s.name}
                      </div>
                    ),
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
