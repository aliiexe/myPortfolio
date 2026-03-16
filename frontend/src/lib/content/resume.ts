import type { ResumeData } from "@/lib/types/resume";

export const resume: ResumeData = {
  experience: [
    {
      title: "Full Stack Developer – MicroTrack Project (Internship)",
      company: "HPS",
      location: "Casablanca, Morocco",
      startDate: "2024",
      endDate: "2025",
      isCurrent: false,
      description:
        "Designed and developed MicroTrack, a microcredit platform for case management, metrics tracking, and financial process automation in a business-critical environment. Contributed to a modular, scalable architecture and strengthened backend design and reliable software engineering skills.",
      technologies: ["Java", "Spring Boot", "Web", "Microservices"],
    },
    {
      title: "Java / Web Developer (Internships & Freelance)",
      company: "Ilem Group",
      location: "Casablanca, Morocco",
      startDate: "2024",
      description:
        "Worked on web and backend applications using Spring Boot, Angular, MySQL and frontend technologies. Contributed to IT asset management, internal ERP, institutional interfaces, and multilingual content, including REST APIs, authentication, Active Directory integration, and Docker-based deployment.",
      technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Docker"],
    },
    {
      title: "Freelance Developer & Designer",
      company: "Independent clients",
      location: "Remote",
      startDate: "2024",
      isCurrent: false,
      description:
        "Freelance work across secure, production-ready web products and digital experiences for agencies, founders, and local businesses.",
      technologies: ["Next.js", "TypeScript", "Node.js", "Figma"],
    },
  ],
  education: [
    {
      degree: "Engineering Student – CIR Track (Cybersecurity, Information Systems and Networks)",
      institution: "Moroccan School of Engineering Sciences (EMSI)",
      location: "Casablanca, Morocco",
      startDate: "2024",
      endDate: "Present",
      isCurrent: true,
      notes: "Engineering training focused on cybersecurity, information systems, and networks.",
    },
    {
      degree: "Specialized Technician Diploma in Full Stack Web Development",
      institution: "Specialized Institute of Management and Computer Science (ISGI)",
      location: "Casablanca, Morocco",
      startDate: "2022",
      endDate: "2024",
      isCurrent: false,
      notes: "Full stack web development with a focus on modern web technologies.",
    },
  ],
  certifications: [
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "March 2026",
    },
    {
      name: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "In progress",
    },
  ],
  competitions: [
    "Ongoing participation in the Moroccan Autonomous Cybersecurity Challenge (MACC) 2026.",
    "Regular CTF player focused on web security (Hack The Box, PicoCTF, and other CTFTime competitions).",
    "2nd Prize – Regional Entrepreneurship Forum 2024.",
    "4th Place – Regional Digital Week Hackathon 2024.",
  ],
  communities: [
    "Organizer, Google Developer Groups (GDG) Casablanca.",
    "Lead, Google Developer Groups (GDG) On Campus EMSI.",
    "Web Dev Lead & Design Lead, GDG On Campus EMSI.",
  ],
};
