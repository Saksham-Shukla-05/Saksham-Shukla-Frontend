// Project type
export interface IProject {
  _id: string;
  title: string;
  description: string;
  slug: string;
  techStack: string[];
  liveLink: string;
  gitHub: string;
  coverImage?: string;
}

// Experience type
export interface IExperience {
  id: string;
  company: string;
  role: string;
  type: "internship" | "freelance" | "fulltime";
  location: string;
  startDate: string;
  endDate: string | "Present";
  logo?: string;
  highlights: string[];
  techStack: string[];
}

// Education type
export interface IEducation {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
}

// Roadmap / Learning type
export interface IRoadmapItem {
  id: string;
  name: string;
  description: string;
  status: "now" | "next" | "done";
  progress: number;
  color: string;
}

// Tech Stack item
export interface IStackItem {
  name: string;
  color: string;
}

// Nav link
export interface INavLink {
  label: string;
  path: string;
}
