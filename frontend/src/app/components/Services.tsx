"use client";
import "../styles/Services.css";
import { FaLaptopCode, FaCogs, FaPaintBrush } from "react-icons/fa";
import { useEffect, useRef } from "react";
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

        const rootRef = useRef<HTMLElement | null>(null);
        useEffect(() => {
                gsap.registerPlugin(ScrollTrigger);
                const ctx = gsap.context(() => {
                    gsap.from(".section-heading", {
                        y: 32,
                        filter: "blur(10px)",
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-section",
                            start: "top 70%",
                            once: true,
                        },
                    });

                    gsap.from(".services-container", {
                        y: 28,
                        filter: "blur(10px)",
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".services-section",
                            start: "top 70%",
                            once: true,
                        },
                        delay: 0.2,
                    });

                    gsap.set(".section-heading, .services-container", { clearProps: "filter,opacity,transform" });
                }, rootRef);
                return () => ctx.revert();
            }, []);

    return (
        <section className="services-section" ref={rootRef as any}>
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
