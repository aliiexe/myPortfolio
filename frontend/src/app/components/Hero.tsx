"use client";
import React, { useEffect, useRef } from "react";
import "../styles/Hero.css";
import { gsap } from "gsap";

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Scope animations to this component to avoid cross-page side effects
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.9 } });

      tl.from(".hero-image-container", { y: 24, opacity: 0, filter: "blur(8px)" }, 0)
        .from(".hero-name", { y: 20, opacity: 0, filter: "blur(8px)" }, 0.05)
        .from(".hero-title", { y: 18, opacity: 0, filter: "blur(8px)" }, 0.1)
        .from(".hero-description", { y: 16, opacity: 0, filter: "blur(8px)" }, 0.15)
        .from(".hero-button", { y: 14, opacity: 0, filter: "blur(8px)", stagger: 0.08 }, 0.2)
        .add(() => {
          // Remove inline styles so nothing persists after the animation
          gsap.set(
            ".hero-image-container, .hero-name, .hero-title, .hero-description, .hero-button",
            { clearProps: "filter,opacity,transform" }
          );
        });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={rootRef}>
      <div className="hero-image-container">
        <img src="/images/me2.png" alt="Profile" className="hero-image" />
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
        <a href="https://www.linkedin.com/in/ali-bourak/" className="hero-button">
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