"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/ProjectComponent.css";
import { useEffect } from "react";

const projects = [
  {
    _id: "1",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    link: "https://example.com/portfolio",
    images: ["/images/portfolio1.png", "/images/portfolio2.png"],
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-10T00:00:00Z",
    isFeatured: true,
    category: "Web Development",
    projectType: "personal",
    clientName: null,
    tools: ["VS Code", "Git", "Figma"],
  },
  {
    _id: "2",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform for electronics and accessories.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://example.com/ecommerce",
    images: ["/images/ecommerce1.png", "/images/ecommerce2.png"],
    createdAt: "2023-02-01T00:00:00Z",
    updatedAt: "2023-02-15T00:00:00Z",
    isFeatured: false,
    category: "E-Commerce",
    projectType: "freelance",
    clientName: "TechStore Inc.",
    tools: ["Postman", "GitHub", "Jira"],
  },
  {
    _id: "3",
    title: "AI Chatbot",
    description: "An AI-powered chatbot for customer support.",
    technologies: ["Python", "TensorFlow", "Flask"],
    link: "https://example.com/chatbot",
    images: ["/images/me.png", "/images/chatbot2.png"],
    createdAt: "2023-03-01T00:00:00Z",
    updatedAt: "2023-03-20T00:00:00Z",
    isFeatured: true,
    category: "AI/ML",
    projectType: "design",
    clientName: null,
    tools: ["Jupyter Notebook", "Docker", "Slack"],
  },
  {
    _id: "4",
    title: "Social Media App",
    description: "A social media platform for connecting people.",
    technologies: ["React Native", "Firebase", "Redux"],
    link: "https://example.com/socialmedia",
    images: ["/images/me.png", "/images/socialmedia2.png"],
    createdAt: "2023-04-01T00:00:00Z",
    updatedAt: "2023-04-10T00:00:00Z",
    isFeatured: false,
    category: "Mobile App",
    projectType: "freelance",
    clientName: "SocialConnect Inc.",
    tools: ["Expo", "GitHub", "Slack"],
  },
  {
    _id: "5",
    title: "Data Visualization Dashboard",
    description: "A dashboard for visualizing business data.",
    technologies: ["D3.js", "React", "Node.js"],
    link: "https://example.com/dataviz",
    images: ["/images/portfolio1.png", "/images/dataviz2.png"],
    createdAt: "2023-05-01T00:00:00Z",
    updatedAt: "2023-05-15T00:00:00Z",
    isFeatured: true,
    category: "Data Visualization",
    projectType: "design",
    clientName: null,
    tools: ["Tableau", "Git", "Figma"],
  },
];

const ProjectsPage = () => {
    useEffect(() => {
        const handlePageReload = () => {
            window.location.reload();
        };
        window.addEventListener("pageshow", handlePageReload);
        return () => {
            window.removeEventListener("pageshow", handlePageReload);
        }
    }, []);
  return (
    <section className="projects-section all-projects-section">
      <h2 className="projects-title text-xl sm:text-2xl md:text-3xl lg:text-4xl">All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="w-full">
            <Link href={`/projects/${project._id}`} passHref>
              <div className="project-card">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="project-image w-full h-auto"
                />
                <div className="project-overlay">
                  <h3 className="project-title text-lg sm:text-xl md:text-2xl">{project.title}</h3>
                  <p className="project-category text-sm sm:text-base">{project.category}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;