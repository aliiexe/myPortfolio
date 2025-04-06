"use client";
import Image from "next/image";
import Link from "next/link";
import "../styles/ProjectComponent.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


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

const ProjectComponent = () => {
    useEffect(() => {

      gsap.from(".project-image", {
          x: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
              trigger: ".projects-section",
              start: "top 60%",
              end: "bottom 20%",
              once: true,
          },
          delay: 0.7,
      });

      gsap.from(".project-overlay", {
          x: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
              trigger: ".projects-section",
              start: "top 60%",
              end: "bottom 20%",
              once: true,
          },
          delay: 0.5,
      });

      gsap.from(".browse-all", {
          blur: ("10px"),
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
              trigger: ".projects-section",
              start: "top 60%",
              end: "bottom 20%",
              once: true,
          },
          delay: 1.5,
      });
  
      gsap.utils.toArray(".project-image").forEach((image) => {
        const element = image as HTMLElement;
        gsap.to(element, {
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top 50%",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      gsap.from(".projects-title", {
          y: 100,
          filter: "blur(10px)",
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
              trigger: ".carousel",
              start: "top 60%",
              end: "top 50%",
              once: true,
          },
      });
  }, []);

  return (
    <section className="projects-section">
      <h2 className="projects-title text-xl sm:text-2xl md:text-3xl lg:text-4xl" data-animate="true">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid grid-rows-2 md:grid-rows-2 gap-6">
          <div className="row-span-1 md:row-span-4">
            <Link href={`/projects/${projects[0]._id}`} passHref>
              <div className="project-card">
                <Image
                  src={projects[0].images[0]}
                  alt={projects[0].title}
                  width={500}
                  height={300}
                  className="project-image w-full h-auto"
                />
                <div className="project-overlay">
                  <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[0].title}</h3>
                  <p className="project-category text-sm sm:text-base">{projects[0].category}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="row-span-1 md:row-span-1">
            <Link href={`/projects/${projects[1]._id}`} passHref>
              <div className="project-card">
                <Image
                  src={projects[1].images[0]}
                  alt={projects[1].title}
                  width={500}
                  height={300}
                  className="project-image w-full h-auto"
                />
                <div className="project-overlay">
                  <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[1].title}</h3>
                  <p className="project-category text-sm sm:text-base">{projects[1].category}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 md:grid-rows-2 gap-6">
          <div className="row-span-1">
            <Link href={`/projects/${projects[3]._id}`} passHref>
              <div className="project-card">
                <Image
                  src={projects[3].images[0]}
                  alt={projects[3].title}
                  width={500}
                  height={300}
                  className="project-image w-full h-auto"
                />
                <div className="project-overlay">
                  <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[3].title}</h3>
                  <p className="project-category text-sm sm:text-base">{projects[3].category}</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="row-span-1 md:row-span-5">
            <Link href={`/projects/${projects[4]._id}`} passHref>
              <div className="project-card">
                <Image
                  src={projects[4].images[0]}
                  alt={projects[4].title}
                  width={500}
                  height={300}
                  className="project-image w-full h-auto"
                />
                <div className="project-overlay">
                  <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[4].title}</h3>
                  <p className="project-category text-sm sm:text-base">{projects[4].category}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-2 md:grid-rows-2 gap-6">
          <div className="row-span-1 md:row-span-2">
            <Link href={`/projects/${projects[2]._id}`} passHref>
              <div className="project-card">
                <Image
                  src={projects[2].images[0]}
                  alt={projects[2].title}
                  width={500}
                  height={300}
                  className="project-image w-full h-auto"
                />
                <div className="project-overlay">
                  <h3 className="project-title text-lg sm:text-xl md:text-2xl">{projects[2].title}</h3>
                  <p className="project-category text-sm sm:text-base">{projects[2].category}</p>
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