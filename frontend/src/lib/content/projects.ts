import type { Project } from "@/lib/types/project";

export const projectCategories = ["cybersecurity", "development", "design"] as const;

const projects: Project[] = [
  {
    slug: "cre8-ma",
    title: "Cre8.ma",
    category: "development",
    summary:
      "Creative and marketing agency site — digital brand identities and online presence. Next.js, Tailwind, GSAP.",
    description: [
      "Cre8.ma is my personal creative and marketing agency based in Morocco, serving clients worldwide. We specialize in building digital brand identities, visual systems, and online presence that help people and businesses stand out.",
      "The website is built with Next.js, Tailwind CSS, and GSAP for smooth, modern interactions, and is deployed on Vercel for performance and reliability.",
    ],
    role: "Founder & Developer",
    technologies: ["Next.js", "Tailwind CSS", "GSAP"],
    tools: ["VS Code", "Git", "Figma", "Vercel"],
    link: "https://cre8-ma.vercel.app/",
    repo: null,
    images: [
      "/images/projects/cre8ma1.png",
      "/images/projects/cre8ma2.png",
      "/images/projects/cre8ma3.png",
      "/images/projects/cre8ma4.png",
      "/images/projects/cre8ma5.png",
      "/images/projects/cre8ma6.png",
    ],
    isFeatured: true,
    projectType: "personal",
    clientName: "Cre8.ma",
  },
  {
    slug: "fullflow",
    title: "fullflow",
    category: "development",
    summary:
      "AI-powered workflows and digital products. Next.js, Tailwind, GSAP, PayPal, SendGrid.",
    description: [
      "fullflow delivers AI-powered solutions for modern workflows along with services across Digital Products & Web, Growth & Support, and Creative & Branding.",
      "The platform is built using Next.js, Tailwind CSS, and GSAP, with integrated PayPal payments and SendGrid for transactional and marketing emails.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "GSAP", "PayPal", "SendGrid"],
    tools: ["Vercel", "GSAP", "PayPal", "SendGrid"],
    link: "https://www.fullflow.solutions/",
    repo: null,
    images: [
      "/images/projects/fullflow1.png",
      "/images/projects/fullflow2.png",
      "/images/projects/fullflow3.png",
      "/images/projects/fullflow4.png",
      "/images/projects/fullflow5.png",
      "/images/projects/fullflow6.png",
    ],
    isFeatured: true,
    projectType: "freelance",
    clientName: "fullflow",
  },
  {
    slug: "eks-reparation",
    title: "EKS Reparation",
    category: "development",
    summary:
      "Responsive website for a phone repair company in Caen, France. Services, pricing, booking.",
    description: [
      "EKS Reparation is a responsive website developed for a phone repair company based in Caen, France. It showcases repair services with an intuitive UI built with HTML, CSS, JavaScript, and Bootstrap.",
      "Key features include a service catalog, appointment scheduling, and a gallery of previous repair work.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    tools: ["VS Code", "Git", "Figma", "Namecheap"],
    link: "https://eksreparation.com",
    repo: null,
    images: [
      "/images/projects/eksrep1.png",
      "/images/projects/eksrep2.png",
      "/images/projects/eksrep3.png",
      "/images/projects/eksrep4.png",
    ],
    isFeatured: true,
    projectType: "freelance",
    clientName: "EKS",
  },
  {
    slug: "opportunai",
    title: "OpportunAI",
    category: "design",
    summary:
      "Full branding for a hackathon on AI and career opportunities. GDG On Campus EMSI Casablanca.",
    description: [
      "OpportunAI was a comprehensive branding project for a hackathon focused on AI and career opportunities, organized by Google Developer Groups On Campus at EMSI Casablanca.",
      "I created the visual identity within Google's brand guidelines: logo, posters, social content, event badges, and merchandise.",
    ],
    role: "Lead Designer",
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    link: null,
    repo: null,
    images: [
      "/images/projects/opportunai1.png",
      "/images/projects/opportunai2.png",
      "/images/projects/opportunai3.png",
      "/images/projects/opportunai4.png",
      "/images/projects/opportunai5.png",
      "/images/projects/opportunai6.png",
    ],
    isFeatured: false,
    projectType: "design",
    clientName: "Google Developer Groups On Campus — EMSI Casablanca",
  },
  {
    slug: "peakfocus",
    title: "PeakFocus",
    category: "development",
    summary:
      "Pomodoro timer web app with analytics and rewards. Full-stack: Node, Express, MongoDB.",
    description: [
      "PeakFocus is a minimalist Pomodoro timer with customizable sessions, optional audio notifications, and a dashboard with productivity analytics and visualizations.",
      "Built with HTML, CSS, JavaScript, Node.js, Express, and MongoDB; frontend on Namecheap, backend on Vercel.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "Express"],
    tools: ["VS Code", "Git", "Figma", "MongoDB Atlas", "Vercel", "Namecheap"],
    link: "https://alibourak.com/peakfocus/",
    repo: null,
    images: [
      "/images/projects/peakfocus1.png",
      "/images/projects/peakfocus2.png",
      "/images/projects/peakfocus3.png",
      "/images/projects/peakfocus4.png",
      "/images/projects/peakfocus5.png",
    ],
    isFeatured: true,
    projectType: "personal",
    clientName: null,
  },
  {
    slug: "eks-phone",
    title: "EKS Phone",
    category: "development",
    summary:
      "E-commerce store for refurbished phones and tech. Shopify-based for EKS.",
    description: [
      "EKS Phone is an e-commerce site for EKS, built on Shopify: refurbished and repaired phones, accessories, and tech products.",
      "Custom-configured to match the EKS brand with product galleries, secure checkout, and inventory management.",
    ],
    technologies: ["Shopify"],
    tools: ["Shopify"],
    link: "https://eksphone.myshopify.com/",
    repo: null,
    images: [
      "/images/projects/eksphone1.png",
      "/images/projects/eksphone2.png",
      "/images/projects/eksphone3.png",
      "/images/projects/eksphone4.png",
      "/images/projects/eksphone5.png",
    ],
    isFeatured: false,
    projectType: "freelance",
    clientName: "EKS",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    category: "development",
    summary:
      "This portfolio: TypeScript, Next.js, Tailwind — secure, minimal, and fast.",
    description: [
      "A cybersecurity-first portfolio built with TypeScript, Next.js, and Tailwind. Focus on clarity, performance, and secure-by-default architecture.",
    ],
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    tools: ["Figma", "Vercel", "GitHub"],
    link: "https://alibourak.com/",
    repo: null,
    images: [
      "/images/projects/portfolio1.png",
      "/images/projects/portfolio2.png",
      "/images/projects/portfolio3.png",
      "/images/projects/portfolio4.png",
      "/images/projects/portfolio5.png",
    ],
    isFeatured: false,
    projectType: "personal",
    clientName: null,
  },
];

export function getProjects(): Project[] {
  return projects;
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.isFeatured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
