import type { IProject } from "../types";

export const projects: IProject[] = [
  {
    _id: "6893ae02d906ed71bb279001",
    title: "Text Vault",
    description:
      "A full stack anonymous messaging platform built for secure, identity-free communication. Features a unique shareable link system where users receive messages without exposing who they are, ideal for honest feedback, open confessions, and candid conversations. Integrated Nodemailer for email notifications and Zod for robust schema validation on both client and server.",
    slug: "text-vault",
    techStack: [
      "TypeScript",
      "Tailwind",
      "Zod",
      "Shadcn",
      "Nodemailer",
      "Aceternity UI",
    ],
    liveLink: "https://text-vault-5vka.vercel.app/",
    gitHub: "https://github.com/Saksham-Shukla-05/Text-Vault",
  },
  {
    _id: "6893bdc2d906ed71bb27902a",
    title: "DashNexus",
    description:
      "A feature-rich web platform that enables users to upload, share, and discover books in PDF format with support for both free and paid access models. Built with a focus on clean UI patterns, form validation via React Hook Form, and a component-driven architecture using Shadcn UI.",
    slug: "dash-nexus",
    techStack: ["React", "Tailwind", "React Hook Form", "Shadcn"],
    liveLink: "https://github.com/Saksham-Shukla-05/dashnexus",
    gitHub: "https://github.com/Saksham-Shukla-05/dashnexus",
  },
  {
    _id: "6893bd2cd906ed71bb279027",
    title: "Music Wave",
    description:
      "A modern music streaming frontend crafted for a smooth, immersive listening experience. Designed with a dark aesthetic, fluid animations via Aceternity UI, and a fully responsive layout built using Tailwind CSS and Shadcn components. Focused on delivering a polished, production-ready UI.",
    slug: "music-wave",
    techStack: ["Tailwind", "Shadcn", "Aceternity UI"],
    liveLink: "https://next-js-music-app-lac.vercel.app/",
    gitHub: "https://github.com/Saksham-Shukla-05/MusicWave",
  },
  {
    _id: "6893bffed906ed71bb279030",
    title: "Taco Bell UI Recreation",
    description:
      "A pixel-accurate recreation of the Taco Bell official website UI, built to sharpen frontend precision and attention to detail. Replicated the layout structure, visual hierarchy, navigation patterns, and interactive elements as closely as possible. Cloudinary was used for optimized image delivery across the interface.",
    slug: "taco-bell-ui",
    techStack: ["React", "Tailwind", "JavaScript", "Cloudinary"],
    liveLink: "https://tacobell-frontend-clone.vercel.app/",
    gitHub: "https://github.com/Saksham-Shukla-05/tacobell_frontend_clone",
  },
  {
    _id: "6893c2a0d906ed71bb279034",
    title: "Netflix Landing Page",
    description:
      "A responsive, visually accurate clone of the Netflix landing page, built as a frontend exercise in layout precision and responsive design. Replicates Netflix's hero section, feature highlights, FAQ accordion, and footer using semantic HTML, custom CSS, and vanilla JavaScript for interactivity.",
    slug: "netflix-landing-page",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://netflix-landing-page-lovat-eight.vercel.app/",
    gitHub: "https://github.com/Saksham-Shukla-05/Netflix_Landing_Page",
  },
  {
    _id: "6893c49fd906ed71bb27903b",
    title: "Weather App",
    description:
      "A clean, functional weather application that fetches real-time data from the OpenWeatherMap API based on user input. Demonstrates practical knowledge of asynchronous JavaScript, REST API integration, dynamic DOM manipulation, and localStorage for persisting the last searched city across sessions.",
    slug: "weather-app",
    techStack: ["React", "JavaScript", "OpenWeatherMap API"],
    liveLink: "https://weather-application-eosin-ten.vercel.app/",
    gitHub: "https://github.com/Saksham-Shukla-05/Weather-Application",
  },
  {
    _id: "6893c521d906ed71bb27903e",
    title: "Todo App",
    description:
      "A minimal yet fully functional task management app demonstrating core CRUD operations: create, read, update, and delete. Built with vanilla HTML, CSS, and JavaScript, it focuses on clean DOM manipulation, event handling, and persistent state management using localStorage to retain tasks across page reloads.",
    slug: "todo-app",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://saksham-shukla-05.github.io/To-do-list/",
    gitHub: "https://saksham-shukla-05.github.io/To-do-list/",
  },
  {
    _id: "6893c5b8d906ed71bb279041",
    title: "Bubble Game",
    description:
      "An interactive browser-based game built entirely with vanilla HTML, CSS, and JavaScript. Players must click the correct numbered bubble within a countdown timer, testing speed and accuracy. Demonstrates dynamic DOM generation, real-time score tracking, countdown timer logic, and responsive game state management without any external libraries.",
    slug: "bubble-game",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://saksham-shukla-05.github.io/Bubble_Game/",
    gitHub: "https://github.com/Saksham-Shukla-05/Bubble_Game",
  },
];
