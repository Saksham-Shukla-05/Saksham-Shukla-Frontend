import ProjectsGrid from "./sections/ProjectsGrid";
import FadeUp from "../../components/shared/FadeUp";

const Projects = () => {
  return (
    <div>
      <FadeUp>
        <section className="px-6 pt-20 pb-12 border-b border-[#EDE7DD]/6">
          <div className="max-w-6xl mx-auto">
            <p className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px] uppercase mb-5">
              work
            </p>
            <h1
              className="leading-none mb-3"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              Things I've{" "}
              <span className="italic text-[#C2613C]">built</span>
            </h1>
            <p className="text-[14px] text-[#AFA89D] max-w-md">
              A collection of projects I've shipped, from full stack apps to
              UI recreations.
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
