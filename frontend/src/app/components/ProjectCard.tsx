"use client";
import { useRouter } from "next/navigation";
import "../styles/ProjectCard.css";

interface ProjectCardProps {
    id?: number;
    title?: string;
    category?: string;
    image?: string;
    isBrowseAll?: boolean;
}

export default function ProjectCard({ id, title, category, image, isBrowseAll }: ProjectCardProps) {
    const router = useRouter();

    const handleClick = () => {
        if (id) {
            router.push(`/projects/${id}`);
        }
    };

    if (isBrowseAll) {
        return (
            <div className="project-card browse-all" onClick={() => router.push("/projects")}>
                <div className="browse-all-content">
                    <div className="browse-icon">+</div>
                    <p className="browse-text">Browse all projects</p>
                </div>
            </div>
        );
    }

    return (
        <div className="project-card" onClick={handleClick}>
            <img
                src={`images/${image}`}
                alt={title}
                className="project-image"
            />
            <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-category">{category}</p>
            </div>
        </div>
    );
}
