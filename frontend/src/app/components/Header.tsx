"use client";
import React, { useEffect } from "react";
import "../styles/Header.css";
import { gsap } from "gsap";
import Link from "next/link"; // Import Next.js Link component

export default function Header() {
        useEffect(() => {
                const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power3.out" } });
                tl.from(".header", { opacity: 0, y: 8, filter: "blur(6px)" }, 0)
                    .from(".icon-container", { opacity: 0, y: 8, filter: "blur(6px)", stagger: 0.1 }, 0.05)
                    .add(() => {
                        gsap.set(".header, .icon-container", { clearProps: "filter,opacity,transform" });
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
            {/* <Link href="/experiences" className="icon-container" title="Experiences" aria-label="Experiences">
                <img src="/icons/experienceIcon.svg" alt="Experiences" className="icon" />
                <span className="tooltip">Experiences</span>
            </Link> */}
            <Link href="/contact" className="icon-container" title="Contact" aria-label="Contact">
                <img src="/icons/contactIcon.svg" alt="Contact" className="icon" />
                <span className="tooltip">Contact</span>
            </Link>
        </header>
    );
}