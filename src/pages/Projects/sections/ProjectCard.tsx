import type { IProject } from "../../../types";

interface ProjectCardProps {
  project: IProject;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured }: ProjectCardProps) => {
  return (
    <div
      className={`group relative bg-[#111] border border-white/[0.06] rounded-[18px] p-7 overflow-hidden cursor-pointer hover:border-[#f56038]/30 hover:-translate-y-1 transition-all duration-300 ${
        featured ? "min-h-[260px] flex flex-col justify-between" : ""
      }`}
    >
      {/* Glow on hover */}
      <div className="absolute top-[-70px] right-[-70px] w-[180px] h-[180px] rounded-full bg-[#f56038] blur-[70px] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none" />

      {/* Top row */}
      <div className="flex items-start justify-between mb-9">
        <span className="font-mono text-[10px] text-[#bebcbc] tracking-[2px]">
          {String(index + 1).padStart(2, "0")} —
        </span>
        <div className="w-[30px] h-[30px] rounded-[7px] border border-white/[0.11] flex items-center justify-center text-[13px] text-[#bebcbc] group-hover:bg-[#f56038] group-hover:border-[#f56038] group-hover:text-white transition-all duration-200">
          ↗
        </div>
      </div>

      {/* Content */}
      <div>
        <h3
          className={`font-bold text-[#eeebe5] tracking-[-0.4px] mb-2 ${
            featured ? "text-[26px]" : "text-[19px]"
          }`}
        >
          {project.title}
        </h3>
        <p className="text-[12px] text-[#999] leading-[1.65] mb-5">
          {project.description}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-white/[0.04] border border-white/[0.06] px-2 py-1 rounded-[5px] text-[10px] text-[#bebcbc] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links — show on hover */}
      <div className="flex gap-3 mt-5">
        {project.liveLink && project.liveLink !== "#" && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] font-semibold text-[#f56038] hover:underline"
          >
            Live ↗
          </a>
        )}
        {project.gitHub && project.gitHub !== "#" && (
          <a
            href={project.gitHub}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] font-semibold text-[#999] hover:text-[#eeebe5] transition-colors"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
