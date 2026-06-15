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
      <section className="px-6 pt-20 pb-4 border-b border-[#EDE7DD]/6">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-5">
            experience
          </p>
          <h1
            className="leading-none mb-3"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            My <span className="italic text-[#C2613C]">journey</span>
          </h1>
          <p className="text-[14px] text-[#AFA89D] max-w-md">
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
