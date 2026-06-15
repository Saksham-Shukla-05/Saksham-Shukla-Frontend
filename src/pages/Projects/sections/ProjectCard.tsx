import type { IProject } from "../../../types";

interface ProjectCardProps {
  project: IProject;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured }: ProjectCardProps) => {
  return (
    <div
      className={`group relative bg-[#28251F] border border-[#EDE7DD]/6 rounded-2xl p-7 overflow-hidden cursor-pointer hover:border-[#C2613C]/30 hover:-translate-y-1 transition-all duration-300 ${
        featured ? "min-h-[260px] flex flex-col justify-between" : ""
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-9">
        <span className="font-mono text-[10px] font-medium text-[#756E64] tracking-[2.5px]">
          {String(index + 1).padStart(2, "0")} —
        </span>
        <div className="w-[30px] h-[30px] rounded-lg border border-[#EDE7DD]/11 flex items-center justify-center text-[13px] text-[#756E64] group-hover:bg-[#C2613C] group-hover:border-[#C2613C] group-hover:text-[#1F1D1B] transition-all duration-200">
          ↗
        </div>
      </div>

      {/* Content */}
      <div>
        <h3
          className={featured ? "text-[26px] mb-2" : "text-[19px] mb-2"}
        >
          {project.title}
        </h3>
        <p className="text-[12px] text-[#AFA89D] leading-[1.65] mb-5">
          {project.description}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-[#1F1D1B] border border-[#EDE7DD]/6 px-2 py-1 rounded text-[10px] text-[#756E64] font-mono"
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
            className="text-[11px] font-semibold text-[#C2613C] hover:underline"
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
            className="text-[11px] font-semibold text-[#756E64] hover:text-[#EDE7DD] transition-colors"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
