import ProjectsGrid from "./sections/ProjectsGrid";
import FadeUp from "../../components/shared/FadeUp";

const Projects = () => {
  return (
    <div>
      <FadeUp>
        <section className="px-6 pt-20 pb-12 border-b border-white/[0.06]">
          <div className="max-w-6xl mx-auto">
            <p className="font-mono text-[10px] text-[#f56038] tracking-[3px] uppercase mb-5">
              work
            </p>
            <h1
              className="font-bold text-[#eeebe5] tracking-[-2px] leading-[1] mb-3"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              Things I've{" "}
              <span
                className="text-[#888]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                built
              </span>
            </h1>
            <p className="text-[14px] text-[#888] max-w-md">
              A collection of projects I've shipped — from full stack apps to UI
              recreations.
            </p>
          </div>
        </section>
      </FadeUp>
      <FadeUp delay={0.15}>
        <ProjectsGrid />
      </FadeUp>
    </div>
  );
};

export default Projects;
