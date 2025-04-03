"use client";
import React, { useEffect } from "react";
import "../styles/Hero.css";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    // Animate the text with fade-in and blur effect
    gsap.from(".hero-title, .hero-description", {
      opacity: 0,
      filter: "blur(10px)", // Start with a blur
      duration: 1.5, // Animation duration
      ease: "power3.out", // Smooth easing
      stagger: 0.2,
      delay: 1.5 // Stagger between elements
    });

    // Animate the image with a zoom-in effect
    gsap.from(".hero-image-container", {
      y: 100, // Start smaller
      opacity: 0, // Start invisible
      filter: "blur(10px)",
      duration: 1.5,
      ease: "power3.out",
      delay: 0.5, // Delay to sync with text animation
    });

    // Animate the name with a slide-in effect
    gsap.from(".hero-name", {
      y: 100, // Slide in from the left
      opacity: 0,
      filter: "blur(10px)", // Start invisible
      duration: 1.5,
      ease: "power3.out",
      delay: 0.8, // Delay to sync with other animations
    });

    // Animate the button with cursor negative hover effect
    gsap.from(".hero-button", {
      y: 50, // Start smaller
      opacity: 0, // Start invisible
      filter: "blur(10px)", // Start with a blur
      duration: 1.5,
      ease: "power3.out",
      delay: 3, // Delay to sync with other animations
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-image-container">
        <img
          src="images/me2.png"
          alt="Profile"
          className="hero-image"
        />
      </div>
      <h1 className="hero-name">
        Ali Bourak <span className="hand">👋</span>
      </h1>
      <h2 className="hero-title">Software Engineer & Designer</h2>
      <p className="hero-description">
        Crafting Digital Solutions That Blend Innovation &{" "}
        <span className="highlight">Design</span>
      </p>
      <button className="hero-button">Let’s Connect →</button>
    </section>
  );
}