"use client";
import React, { useEffect } from "react";
import "../styles/Hero.css";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero-title, .hero-description", {
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2,
      delay: 1.5,
    });

    gsap.from(".hero-image-container", {
      y: 100,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5,
    });

    gsap.from(".hero-name", {
      y: 100,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power3.out",
      delay: 0.8,
    });

    gsap.from(".hero-button", {
      y: 50,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.3,
      delay: 3,
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-image-container">
        <img src="images/me2.png" alt="Profile" className="hero-image" />
      </div>
      <h1 className="hero-name">
        Ali Bourak <span className="hand">👋</span>
      </h1>
      <h2 className="hero-title">Software Engineer & Designer</h2>
      <p className="hero-description">
        Crafting Digital Solutions That Blend Innovation &{" "}
        <span className="highlight">Design</span>
      </p>
      <div className="hero-buttons">
        <a href="https://www.linkedin.com/in/ali-bourak/" location="" className="hero-button">
          Let’s Connect →
        </a>
        <a
          href="/docs/AliBourakCVEng.pdf"
          className="hero-button"
          download="Ali_Bourak_CV.pdf"
        >
          CV
        </a>
      </div>
    </section>
  );
}