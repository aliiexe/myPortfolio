import type { ResumeData } from "@/lib/types/resume";

export const resume: ResumeData = {
  experience: [
    {
      title: "Freelance Developer & Designer",
      company: "Cre8.ma / fullflow & clients",
      location: "Remote",
      startDate: "2023",
      endDate: "Present",
      isCurrent: true,
      description:
        "Building secure, scalable web applications and digital products. Focus on clean architecture, performance, and user experience.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Figma"],
    },
  ],
  education: [
    {
      degree: "Software Engineering",
      institution: "EMSI Casablanca",
      location: "Casablanca, Morocco",
      startDate: "2022",
      endDate: "Present",
      isCurrent: true,
      notes: "Cybersecurity, software development, and design.",
    },
  ],
  certifications: [],
  competitions: [],
  communities: ["Google Developer Groups On Campus — EMSI Casablanca"],
};
