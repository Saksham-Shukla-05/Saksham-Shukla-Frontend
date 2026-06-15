import type {
  IExperience,
  IEducation,
  IRoadmapItem,
  IStackItem,
} from "../types";

export const experiences: IExperience[] = [
  {
    id: "oneclarity",
    company: "OneClarity.ai",
    role: "Full Stack Engineer Intern",
    type: "internship",
    location: "Remote",
    startDate: "Sept 2025",
    endDate: "Present",

    logo: "https://res.cloudinary.com/dlycinwrl/image/upload/v1781545340/OneClarity_logo_vntqm6.png",
    highlights: [
      "Built shareable link invitation feature used across the platform",
      "Developed multiple dashboard APIs for employee , manager , admin roles",
      "Built Open Labs, an open source initiative with superadmin and user contribution APIs",
      "Created blog pages, stories, and career page APIs",
      "Built a template preview application",
      "Implemented multilingual support using Google Translate API with country detection and dynamic modals",
      "Integrated multiple AI APIs on Node.js working alongside the AI team",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "TypeScript",
      "Google Translate API",
      "AI APIs",
    ],
  },
];

export const education: IEducation[] = [
  {
    id: "iips",
    institution: "IIPS, DAVV Indore",
    degree: "Integrated Master of Computer Applications (I-MCA)",
    duration: "2021 – 2026",
    location: "Indore, India",
  },
];

export const roadmap: IRoadmapItem[] = [
  {
    id: "python",
    name: "Python",
    description:
      "Just started, building foundations and exploring the ecosystem.",
    status: "now",
    progress: 10,
    color: "#C2613C",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "Actively using in projects: type systems, generics, type-safe APIs.",
    status: "now",
    progress: 50,
    color: "#C2613C",
  },
  {
    id: "aws",
    name: "AWS Cloud",
    description:
      "On the roadmap: EC2, S3, Lambda and cloud deployment pipelines.",
    status: "next",
    progress: 5,
    color: "#756E64",
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    description:
      "Sparked by working with the AI team at OneClarity, exploring autonomous AI workflows.",
    status: "next",
    progress: 5,
    color: "#756E64",
  },
  {
    id: "mern",
    name: "MERN Stack",
    description:
      "My bread and butter: MongoDB, Express, React, Node. Production shipped.",
    status: "done",
    progress: 88,
    color: "#7C8F65",
  },
  {
    id: "dsa",
    name: "DSA",
    description:
      "Consistent: 450+ LeetCode problems solved. Arrays, Trees, DP, Graphs.",
    status: "done",
    progress: 70,
    color: "#7C8F65",
  },
];

export const stack: IStackItem[] = [
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages", learning: 50 },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "shadcn/ui", category: "Frontend" },
  { name: "Node.js", category: "Backend & Data" },
  { name: "Express.js", category: "Backend & Data" },
  { name: "MongoDB", category: "Backend & Data" },
  { name: "MySQL", category: "Backend & Data" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Vercel", category: "Tools" },
  { name: "AWS", category: "Tools", learning: 15 },
];
