import SectionLabel from "../../../components/shared/SectionLabel";
import { stack } from "../../../data";

const TechStack = () => {
  return (
    <section className="px-6 py-24 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <SectionLabel text="stack" />
        <h2
          className="font-bold text-[#eeebe5] tracking-[-1.5px] leading-[1] mb-12"
          style={{ fontSize: "clamp(32px, 4vw, 46px)" }}
        >
          Tools I{" "}
          <span
            className="px-1 text-[#c0bdb8]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            work with
          </span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((s) => (
            <div
              key={s.name}
              className="flex items-center gap-2 bg-[#111] border border-white/[0.06] px-4 py-2.5 rounded-[9px] text-[13px] font-medium hover:border-white/[0.11] hover:scale-[1.025] transition-all duration-200 cursor-default"
            >
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: s.color }}
              />
              {s.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
