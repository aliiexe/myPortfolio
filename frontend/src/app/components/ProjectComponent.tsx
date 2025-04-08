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
    title: "EKS Reparation",
    description: `
      EKS Reparation is a responsive website developed for a phone repair company based in Caen, France. This freelance project showcases the company's repair services, featuring an intuitive user interface built with HTML, CSS, JavaScript, and Bootstrap. The website provides customers with easy access to information about repair services, pricing, and booking options.</br></br>
      The modern design incorporates a clean layout that emphasizes the company's professional approach to phone repairs while ensuring seamless navigation across all devices. Key features include a service catalog, appointment scheduling system, and gallery of previous repair work to build customer trust.</br></br>
      As a featured project in my web development portfolio, this site demonstrates my ability to create functional and visually appealing solutions for local businesses. The project was completed using industry-standard tools including VS Code, Git, Figma for design, and was deployed through Namecheap.  
    `,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://eksreparation.com",
    images: ["/images/projects/eksrep1.png", "/images/projects/eksrep2.png", "/images/projects/eksrep3.png", "/images/projects/eksrep4.png"],
    createdAt: "2023-01-01T00:00:00Z",
    updatedAt: "2023-01-10T00:00:00Z",
    isFeatured: true,
    category: "Web Development",
    projectType: "Freelance",
    clientName: "EKS",
    tools: ["VS Code", "Git", "Figma", "Namecheap"],
  },
  {
    _id: "2",
    title: "OpportunAI",
    description: `
      OpportunAI was a comprehensive branding project developed for a hackathon focused on artificial intelligence and career opportunities, organized by Google Developer Groups On Campus at EMSI Casablanca. As the lead designer for this school club initiative, I created the entire visual identity while adhering strictly to Google's brand guidelines.</br></br>
      The project encompassed a full suite of design deliverables including the distinctive OpportunAI logo, promotional materials such as posters and social media content for Instagram, event badges for participants, various printed collateral, stickers, and branded merchandise. Each element was thoughtfully crafted to communicate the intersection of AI technology and opportunity while maintaining visual consistency with Google's established aesthetic.</br></br>
      Using industry-standard design tools including Figma for UI/UX work and Adobe's creative suite (Illustrator and Photoshop) for graphic elements, I developed a cohesive brand identity that effectively represented the hackathon's mission. Though not featured in my primary portfolio, this project demonstrates my ability to work within established brand parameters while creating engaging visual solutions for technology-focused events.
    `,
    technologies: "null",
    link: "null",
    images: ["/images/projects/opportunai1.png", "/images/projects/opportunai2.png", "/images/projects/opportunai3.png", "/images/projects/opportunai4.png", "/images/projects/opportunai5.png", "/images/projects/opportunai6.png"],
    createdAt: "2023-02-01T00:00:00Z",
    updatedAt: "2023-02-15T00:00:00Z",
    isFeatured: false,
    category: "Design",
    projectType: "School Club",
    clientName: "Google Developer Groups On Campus - EMSI Casablanca",
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    _id: "3", 
    title: "PeakFocus",
    description: `
      PeakFocus is a minimalist yet powerful Pomodoro timer web application that I developed as a personal project using HTML, CSS, JavaScript, Node.js, Express, and MongoDB. This featured portfolio piece demonstrates my full-stack development capabilities while solving a real productivity need.</br></br>
      The application features a sleek, distraction-free interface that allows users to customize their productivity sessions with flexible work periods, break durations, and cycle counts. Users can enable optional audio notifications that signal the transition between focus and rest periods, helping maintain productivity rhythm without requiring constant monitoring of the timer.</br></br>
      The robust dashboard provides users with comprehensive productivity analytics and visualizations, tracking progress over time and offering insights into work patterns. The reward system gamifies the productivity experience, motivating users to maintain consistent focus habits.</br></br>
      The project utilizes a split deployment strategy with the frontend hosted on Namecheap and the backend services deployed on Vercel. This architecture demonstrates my understanding of modern web hosting solutions and API integration. Built with a MongoDB Atlas database, PeakFocus showcases my ability to create end-to-end web solutions that balance functional utility with elegant design while highlighting my skills in user experience design, front-end development, and back-end implementation.
    `,
    technologies: ["HTML", "CSS", "JavaScript", "Node.js","MongoDB","Express"],
    link: "https://alibourak.com/peakfocus/",
    images: ["/images/projects/peakfocus1.png", "/images/projects/peakfocus2.png", "/images/projects/peakfocus3.png", "/images/projects/peakfocus4.png", "/images/projects/peakfocus5.png"],
    createdAt: "2023-03-01T00:00:00Z",
    updatedAt: "2023-03-20T00:00:00Z",
    isFeatured: true,
    category: "Web Development",
    projectType: "Personal",
    clientName: null,
    tools: ["VS Code", "Git", "Figma"," MongoDB Atlas","Vercel","Namecheap"],
  },
  {
    _id: "4",
    title: "EKS Phone",
    description: `
      EKS Phone is an e-commerce website developed as a freelance project for EKS, leveraging the robust Shopify platform to create a specialized online store for technology products. The site offers a curated selection of refurbished and repaired phones, phone accessories such as chargers and cases, and various other tech products.</br></br>
      The website features a user-friendly interface optimized for the customer journey, from product discovery to checkout. Utilizing Shopify's built-in e-commerce capabilities, the site includes product galleries with detailed descriptions, secure payment processing, inventory management, and order fulfillment systems.</br></br>
      Custom-configured to match the EKS brand identity, the online store provides customers with an intuitive shopping experience while giving the business owner powerful backend tools to manage their tech retail operation. Product categories are thoughtfully organized to showcase the company's expertise in refurbished electronics and accessories.</br></br>
      This project demonstrates my ability to implement effective e-commerce solutions for small businesses using established platforms like Shopify, creating professional online retail experiences without the need for custom development. The result is a cost-effective yet fully functional online store that extends the client's brick-and-mortar repair service into the digital retail space.
    `,
    technologies: "null",
    link: "https://eksphone.myshopify.com/",
    images: ["/images/projects/eksphone1.png", "/images/projects/eksphone2.png", "/images/projects/eksphone3.png", "/images/projects/eksphone4.png", "/images/projects/eksphone5.png"],
    createdAt: "2023-04-01T00:00:00Z",
    updatedAt: "2023-04-10T00:00:00Z",
    isFeatured: false,
    category: "E-commerce",
    projectType: "Freelance",
    clientName: "EKS",
    tools: ["Shopify"],
  },
  {
    _id: "5",
    title: "Personal Portfolio",
    description: `
      My personal portfolio website showcases my work and skills as a developer, built using a modern tech stack including TypeScript, Next.js, and Tailwind CSS. This featured project demonstrates my proficiency in both frontend and backend development while serving as a comprehensive digital resume.</br></br>
      The site features a responsive design with smooth animations powered by GSAP, creating an engaging user experience across all devices. The portfolio section dynamically displays my projects with detailed information stored in a MongoDB database, accessed through a custom Express API. This architecture allows for easy content updates without modifying the codebase.</br></br>
      Beyond just showcasing projects, the portfolio includes sections for my technical skills, professional experience, and contact information. The clean, intuitive interface reflects my design sensibilities while demonstrating technical implementation of modern web development practices including server-side rendering and optimized performance.</br></br>
      Developed as a personal project from initial Figma wireframes to deployment, the site is hosted on Vercel with a custom domain through Namecheap. Version control is managed via GitHub, showcasing my complete development workflow. This portfolio not only presents my previous work but also serves as a demonstration of my abilities in creating performant, aesthetically pleasing web applications using current industry-standard tools and frameworks.RetryClaude can make mistakes. Please double-check responses.
    `,
    technologies: ["TypeScript","Next.js","Tailwind CSS","CSS","Node.js","Express","MongoDB"],
    link: "https://alibourak.com/",
    images: ["/images/projects/portfolio1.png", "/images/projects/portfolio2.png", "/images/projects/portfolio3.png", "/images/projects/portfolio4.png", "/images/projects/portfolio5.png"],
    createdAt: "2023-05-01T00:00:00Z",
    updatedAt: "2023-05-15T00:00:00Z",
    isFeatured: true,
    category: "Web Development",
    projectType: "Personal",
    clientName: null,
    tools: ["Figma","Vercel","Namecheap","GitHub","MongoDB Atlas","GSAP"],
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