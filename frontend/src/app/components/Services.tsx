"use client";
import "../styles/Services.css";
import { FaLaptopCode, FaCogs, FaPaintBrush } from "react-icons/fa";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
    const services = [
        {
            icon: <FaLaptopCode />,
            title: "Web Development",
            description: "Building responsive, blazing-fast websites tailored to your business goals.",
        },
        {
            icon: <FaCogs />,
            title: "Software Development",
            description: "Custom software solutions engineered for performance, scalability, and impact.",
        },
        {
            icon: <FaPaintBrush />,
            title: "Graphic Design",
            description: "Creative, on-brand visuals that capture attention and communicate clearly.",
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
          gsap.from(".section-heading", {
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
    
          gsap.from(".services-container", {
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
                stagger: 0.8,
                delay: 0.5,
          });
      }, []);

    return (
        <section className="services-section">
            <h2 className="section-heading">My Services</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
