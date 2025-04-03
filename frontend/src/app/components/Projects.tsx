"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "../styles/ProjectComponent.css";

interface Project {
  id: string;
  title: string;
  category?: string;
  images?: string[];
}

const ProjectComponent = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/projects");
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        setProjects(data.slice(0, 5)); // Limit to 5 projects
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, []);

        return (
      <section className="projects-section">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link key={project.id || index} href={`/projects/${project.id}`} passHref>
              <div className="project-card">
                <Image
                  src={`images/${project.images?.[0]}`}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="project-image"
                />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category || "Category"}</p>
                </div>
              </div>
            </Link>
          ))}
          <div className="project-card browse-all" key="browse-all">
            <span className="browse-icon">+</span>
            <span className="browse-text">Browse all projects</span>
          </div>
        </div>
      </section>
    );
};

export default ProjectComponent;