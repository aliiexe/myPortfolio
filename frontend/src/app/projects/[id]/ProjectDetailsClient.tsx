"use client";
import { useState, useEffect, useRef } from "react";
import "../../styles/ProjectDetailsClient.css";

const ProjectDetailsClient = ({ project }: { project: any }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [isRowLayout, setIsRowLayout] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!resetTimer) {
        setFade(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) =>
            (prevIndex + 1) % project.images.length
          );
          setFade(false);
        }, 500);
      } else {
        setResetTimer(false);
      }
    }, 10000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [project.images.length, resetTimer]);

  const handleImageClick = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(false);
    }, 500);
    setResetTimer(true);
  };

  useEffect(() => {
    const img = new Image();
    img.src = project.images[0];
    img.onload = () => {
      if (img.height > img.width) {
        setIsRowLayout(true);
      }
    };
  }, [project.images]);

  return (
    <div className={`project-details ${isRowLayout ? "row-layout" : ""}`}>
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-category">
          {project.category} • {project.projectType}
        </p>
      </div>

      <div className="project-media">
        <div className={`project-main-media ${fade ? "fade" : ""}`}>
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} main media`}
            className="main-media"
          />
        </div>
        <div className="project-images">
          {project.images.map((image: string, index: number) => (
            <div
              key={index}
              className={`project-image-wrapper ${
                index === currentImageIndex ? "active" : ""
              }`}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image}
                alt={`${project.title} image ${index + 1}`}
                className="project-image"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      {(project.link || project.github) && (
        <div className="project-links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              Link
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github"
            >
              <img
                src="/icons/github.svg"
                alt="GitHub"
                className="github-icon"
              />
            </a>
          )}
        </div>
      )}

      {/* Description */}
      {project.description && (
        <div className="project-section">
          <div
            className="section-content"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></div>
        </div>
      )}

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <div className="project-section">
          <h2 className="section-title">Technologies</h2>
          <ul className="section-list">
            {project.technologies.map((tech: string, index: number) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Tools */}
      {project.tools && project.tools.length > 0 && (
        <div className="project-section">
          <h2 className="section-title">Tools</h2>
          <ul className="section-list">
            {project.tools.map((tool: string, index: number) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsClient;