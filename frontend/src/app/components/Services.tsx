"use client";
import "../styles/Services.css";
import { FaLaptopCode, FaCogs, FaPaintBrush } from "react-icons/fa";

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
