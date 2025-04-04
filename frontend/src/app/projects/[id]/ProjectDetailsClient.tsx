"use client";
import "../../styles/ProjectDetailsClient.css";

const ProjectDetailsClient = ({ project }: { project: any }) => {
  return (
    <div className="project-details">
      {/* Title and Category */}
      <div className="project-header">
        <h1 className="project-title">{project.title}</h1>
        <p className="project-category">
          {project.category} • {project.projectType}
        </p>
      </div>

      {/* Main Media (First Image or Video) */}
      <div className="project-main-media">
        <img
          src={project.images[0]}
          alt={`${project.title} main media`}
          className="main-media"
        />
      </div>

      {/* Remaining Images */}
      <div className="project-images">
        {project.images.slice(1).map((image: string, index: number) => (
          <div key={index} className="project-image-wrapper">
            <img
              src={image}
              alt={`${project.title} image ${index + 2}`}
              className="project-image"
            />
          </div>
        ))}
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
      <div className="project-section">
        <p className="section-content">{project.description}</p>
      </div>

      {/* Technologies */}
      <div className="project-section">
        <h2 className="section-title">Technologies</h2>
        <ul className="section-list">
          {project.technologies.map((tech: string, index: number) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="project-section">
        <h2 className="section-title">Tools</h2>
        <ul className="section-list">
          {project.tools.map((tool: string, index: number) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetailsClient;