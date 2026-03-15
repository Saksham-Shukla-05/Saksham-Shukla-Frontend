import { Timeline } from "../../components/ui/timeline";
import { OneClarityContent, RoadmapContent } from "./sections/TimelineContent";

const timelineData = [
  {
    title: "2025 · Now",
    content: <OneClarityContent />,
  },

  {
    title: "Next · Goals",
    content: <RoadmapContent />,
  },
];

const Experience = () => {
  return (
    <div>
      {/* Page header */}
      <section className="px-6 pt-20 pb-4 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] text-[#f56038] tracking-[3px] uppercase mb-5">
            experience
          </p>
          <h1
            className="font-bold text-[#eeebe5] tracking-[-2px] leading-[1] mb-3"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            My{" "}
            <span
              className="text-[#c0bdb8]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              journey
            </span>
          </h1>
          <p className="text-[14px] text-[#bebcbc] max-w-md">
            Where I've been, what I've built, and where I'm headed.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <Timeline data={timelineData} />
    </div>
  );
};

export default Experience;
