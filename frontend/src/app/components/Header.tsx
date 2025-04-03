"use client";
import React, { useEffect } from "react";
import "../styles/Header.css";
import { gsap } from "gsap";
import Link from "next/link"; // Import Next.js Link component

export default function Header() {
    useEffect(() => {
        // Animate the header icons with fade-up and blur effect
        gsap.from(".icon-container", {
            opacity: 0,
            y: 10, // Slide up from below
            filter: "blur(10px)", // Start with a blur
            duration: 1, // Animation duration
            ease: "power3.out", // Smooth easing
            stagger: 0.2, // Delay between each icon
            delay: 0.5, // Delay to sync with other animations
        });
        gsap.from(".header", {
            opacity: 0,
            y: 10, // Slide up from below
            filter: "blur(10px)", // Start with a blur
            duration: 1, // Animation duration
            ease: "power3.out", // Smooth easing
            stagger: 0.2, // Delay between each icon
            delay: 0.3, // Delay to sync with other animations
        });
    }, []);

    return (
        <header className="header">
            <Link href="/" className="icon-container" title="Home" aria-label="Home">
                <img src="/icons/homeIcon.svg" alt="Home" className="icon" />
                <span className="tooltip">Home</span>
            </Link>
            <Link href="/about" className="icon-container" title="About" aria-label="About">
                <img src="/icons/aboutIcon.svg" alt="About" className="icon" />
                <span className="tooltip">About</span>
            </Link>
            <Link href="/projects" className="icon-container" title="Projects" aria-label="Projects">
                <img src="/icons/projectsIcon.svg" alt="Projects" className="icon" />
                <span className="tooltip">Projects</span>
            </Link>
            <Link href="/experiences" className="icon-container" title="Experiences" aria-label="Experiences">
                <img src="/icons/experienceIcon.svg" alt="Experiences" className="icon" />
                <span className="tooltip">Experiences</span>
            </Link>
            <Link href="/contact" className="icon-container" title="Contact" aria-label="Contact">
                <img src="/icons/contactIcon.svg" alt="Contact" className="icon" />
                <span className="tooltip">Contact</span>
            </Link>
        </header>
    );
}