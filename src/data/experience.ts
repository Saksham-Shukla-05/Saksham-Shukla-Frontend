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
    role: "Full Stack Developer Intern",
    type: "internship",
    location: "Remote",
    startDate: "Sept 2025",
    endDate: "Present",
    logo: "https://onecalrity.s3.ap-south-1.amazonaws.com/company-logos/1773140212061-eb28faac-c266-4e0e-a091-9c58da949d2d.png",
    highlights: [
      "Built shareable link invitation feature used across the platform",
      "Developed multiple dashboard APIs for employee and manager roles",
      "Built Open Labs — open source initiative with superadmin and user contribution APIs",
      "Created blog pages, stories, and career page APIs",
      "Built a template preview application",
      "Implemented multilingual support using Google Translate API with country detection and dynamic modals",
      "Integrated multiple AI APIs on Node.js working alongside the AI team",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MySql",
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
      "Just started — building foundations and exploring the ecosystem.",
    status: "now",
    progress: 10,
    color: "#f56038",
  },
  {
    id: "aws",
    name: "AWS Cloud",
    description:
      "On the roadmap — EC2, S3, Lambda and cloud deployment pipelines.",
    status: "next",
    progress: 5,
    color: "#888",
  },
  {
    id: "agentic-ai",
    name: "Agentic AI",
    description:
      "Sparked by working with the AI team at OneClarity — exploring autonomous AI workflows.",
    status: "next",
    progress: 5,
    color: "#888",
  },
  {
    id: "dsa",
    name: "DSA",
    description:
      "Consistent — 350+ LeetCode problems solved. Arrays, Trees, DP, Graphs.",
    status: "done",
    progress: 70,
    color: "#4ade80",
  },
  {
    id: "mern",
    name: "MERN Stack",
    description:
      "My bread and butter — MongoDB, Express, React, Node. Production shipped.",
    status: "done",
    progress: 88,
    color: "#4ade80",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "Actively using in projects — type systems, generics, type-safe APIs.",
    status: "now",
    progress: 50,
    color: "#f56038",
  },
];

export const stack: IStackItem[] = [
  { name: "JavaScript", color: "#f5c518" },
  { name: "TypeScript", color: "#3b82f6" },
  { name: "React", color: "#61dafb" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#84cc16" },
  { name: "Express.js", color: "#888888" },
  { name: "MongoDB", color: "#4ade80" },
  { name: "Tailwind CSS", color: "#06b6d4" },
  { name: "Java", color: "#f97316" },
  { name: "Git & GitHub", color: "#f97316" },
  { name: "Postman", color: "#f56038" },
  { name: "Vercel", color: "#ffffff" },
];
