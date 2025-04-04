import ProjectDetailsClient from "./ProjectDetailsClient";

export const generateStaticParams = async () => {
  // Define the possible `id` values for the dynamic route
  const projects = [
    { _id: "1" },
    { _id: "2" },
    { _id: "3" },
    { _id: "4" },
    { _id: "5" },
  ];

  return projects.map((project) => ({ id: project._id }));
};

const ProjectDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params; // Resolve the promise
  const projects = [
    {
      _id: "1",
      title: "Portfolio Website",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      link: "https://example.com/portfolio",
      github: "https://github.com/aliiexe/PomodoroTimer.git",
      images: ["/images/portfolio1.png", "/images/ecommerce1.png", "/images/ecommerce1.png", "/images/ecommerce1.png"],
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
      images: ["/images/ecommerce1.png", "/images/ecommerce1.png", "/images/ecommerce1.png", "/images/ecommerce1.png"],
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
      images: ["/images/me.png","/images/ecommerce1.png", "/images/ecommerce1.png", "/images/ecommerce1.png"],
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
      images: ["/images/me.png", "/images/ecommerce1.png", "/images/ecommerce1.png", "/images/ecommerce1.png"],
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
      images: ["/images/portfolio1.png", "/images/ecommerce1.png", "/images/ecommerce1.png", "/images/ecommerce1.png"],
      createdAt: "2023-05-01T00:00:00Z",
      updatedAt: "2023-05-15T00:00:00Z",
      isFeatured: true,
      category: "Data Visualization",
      projectType: "design",
      clientName: null,
      tools: ["Tableau", "Git", "Figma"],
    },
  ];

  const project = projects.find((project) => project._id === resolvedParams.id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return <ProjectDetailsClient project={project} />;
};

export default ProjectDetails;