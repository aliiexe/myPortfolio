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
        setProjects(data.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    
    fetchProjects();
  }, []);

  useEffect(() => {
    console.log("Projects fetched:", projects);
  }, [projects]);

  return (
    <section className="projects-section">
        <h2 className="projects-title text-xl sm:text-2xl md:text-3xl lg:text-4xl">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="grid grid-rows-2 md:grid-rows-2 gap-6">
            <div className="row-span-1 md:row-span-4">
              <Link href={`/projects/${projects[0]?._id}`} passHref>
                <div className="project-card">
                  <Image
                    src={`images/${projects[0]?.images?.[0]}`}
                    alt={projects[0]?.title}
                    width={500}
                    height={300}
                    className="project-image w-full h-auto"
                  />
                  <div className="project-overlay">
                    <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[0]?.title}</h3>
                    <p className="project-category text-sm sm:text-base">{projects[0]?.category || "Category"}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="row-span-1 md:row-span-1">
              <Link href={`/projects/${projects[1]?._id}`} passHref>
                <div className="project-card">
                  <Image
                    src={`images/${projects[1]?.images?.[0]}`}
                    alt={projects[1]?.title}
                    width={500}
                    height={300}
                    className="project-image w-full h-auto"
                  />
                  <div className="project-overlay">
                    <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[1]?.title}</h3>
                    <p className="project-category text-sm sm:text-base">{projects[1]?.category || "Category"}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-rows-2 md:grid-rows-2 gap-6">
            <div className="row-span-1">
              <Link href={`/projects/${projects[3]?._id}`} passHref>
                <div className="project-card">
                  <Image
                    src={`images/${projects[3]?.images?.[0]}`}
                    alt={projects[3]?.title}
                    width={500}
                    height={300}
                    className="project-image w-full h-auto"
                  />
                  <div className="project-overlay">
                    <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[3]?.title}</h3>
                    <p className="project-category text-sm sm:text-base">{projects[3]?.category || "Category"}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="row-span-1 md:row-span-5">
              <Link href={`/projects/${projects[4]?._id}`} passHref>
                <div className="project-card">
                  <Image
                    src={`images/${projects[4]?.images?.[0]}`}
                    alt={projects[4]?.title}
                    width={500}
                    height={300}
                    className="project-image w-full h-auto"
                  />
                  <div className="project-overlay">
                    <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[4]?.title}</h3>
                    <p className="project-category text-sm sm:text-base">{projects[4]?.category || "Category"}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-rows-2 md:grid-rows-2 gap-6">
            <div className="row-span-1 md:row-span-2">
              <Link href={`/projects/${projects[2]?._id}`} passHref>
                <div className="project-card">
                  <Image
                    src={`images/${projects[2]?.images?.[0]}`}
                    alt={projects[2]?.title}
                    width={500}
                    height={300}
                    className="project-image w-full h-auto"
                  />
                  <div className="project-overlay">
                    <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[2]?.title}</h3>
                    <p className="project-category text-sm sm:text-base">{projects[2]?.category || "Category"}</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="row-span-1">
              <Link href="/projects" passHref>
                <div className="project-card browse-all">
                  <div className="browse-all-content">
                    <div className="browse-icon text-4xl sm:text-5xl">+</div>
                    <p className="browse-text text-sm sm:text-base">Browse all projects</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ProjectComponent;