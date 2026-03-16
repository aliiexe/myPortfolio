import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects, getProjects, getProjectsByCategory, projectCategories } from "@/lib/content";
import { ProjectsPageClient } from "@/components/projects/ProjectsPageClient";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils/cn";

export const metadata = {
  title: "Projects",
  description:
    "Selected work across cybersecurity, software engineering, design, and freelance delivery.",
};

export default function ProjectsPage() {
  return (
    <ProjectsPageClient />
  );
}
