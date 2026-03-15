import { useState } from "react";
import { projects } from "../../../data";
import ProjectCard from "./ProjectCard";
import SectionLabel from "../../../components/shared/SectionLabel";

const ProjectsGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.slice(0, 2);
  const rest = showAll ? projects.slice(2) : projects.slice(2, 5);

  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <SectionLabel text="work" />
            <h2
              className="font-bold text-[#eeebe5] tracking-[-1.5px] leading-[1]"
              style={{ fontSize: "clamp(32px, 4vw, 46px)" }}
            >
              Selected{" "}
              <span
                className="text-[#c0bdb8]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                projects
              </span>
            </h2>
          </div>
          <a
            href="https://github.com/Saksham-Shukla-05"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[11.5px] text-[#bebcbc] tracking-[1px] hover:text-[#f56038] transition-colors"
          >
            ALL ON GITHUB ↗
          </a>
        </div>

        {/* Featured — 2 col */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-3 mb-3">
          {featured.map((p, i) => (
            <ProjectCard key={p._id} project={p} index={i} featured={i === 0} />
          ))}
        </div>

        {/* Rest — 3 col */}
        <div className="grid md:grid-cols-3 gap-3">
          {rest.map((p, i) => (
            <ProjectCard key={p._id} project={p} index={i + 2} />
          ))}
        </div>

        {/* Show more */}
        {!showAll && projects.length > 5 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 border border-white/[0.11] rounded-[9px] text-[12.5px] font-semibold text-[#999] hover:border-[#f56038] hover:text-[#f56038] transition-all duration-200"
            >
              Show all {projects.length} projects ↓
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
