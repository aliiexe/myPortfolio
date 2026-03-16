export type ProjectCategory = "cybersecurity" | "development" | "design";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string[];
  role?: string;
  technologies: string[];
  tools?: string[];
  link?: string | null;
  repo?: string | null;
  images: string[];
  /** Security considerations, lessons learned, or outcome. */
  securityNotes?: string;
  outcome?: string;
  problem?: string;
  solution?: string;
  isFeatured: boolean;
  projectType: "personal" | "freelance" | "design" | "school";
  clientName?: string | null;
}
