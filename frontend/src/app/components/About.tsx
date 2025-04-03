"use client";
import '../styles/HomeAbout.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    useEffect(() => {
        const typeSplit = new SplitType("[data-animate]", {
            types: "lines,words,chars",
            tagName: "span",
        });

        gsap.from("[data-animate] .word", {
            opacity: 0.3,
            duration: 1.5,
            ease: "power1.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "[data-animate]",
                start: "top center",
                once: true,
            },
        });

        gsap.from(".about-image-container", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            filter: "blur(10px)",
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-image-container",
                start: "top 80%",
                end: "top 50%",
                once: true,
            },
        });

        gsap.from(".about-text", {
            y: 100,
            opacity: 0,
            filter: "blur(10px)",
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-text",
                start: "top 80%",
                end: "top 50%",
                once: true,
            },
        });

        const imageContainer = document.querySelector(".about-image-container") as HTMLElement;
        const image = document.querySelector(".about-image") as HTMLElement;

        if (imageContainer && image) {
            imageContainer.style.perspective = "1000px";
            image.style.transformStyle = "preserve-3d";
            image.style.transition = "transform 0.3s ease-out";

            imageContainer.addEventListener("mousemove", (e) => {
                const { width, height, left, top } = imageContainer.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) / 5;
                const y = (e.clientY - top - height / 2) / 5;

                gsap.to(image, {
                    rotationY: x,
                    rotationX: -y,
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });

            imageContainer.addEventListener("mouseleave", () => {
                gsap.to(image, {
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        }

        gsap.from(".about-image", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-image",
                start: "top 80%",
                end: "top 50%",
                once: true,
            },
        });
    }, []);

    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-text">
                    <h1 className="about-title" data-animate="true">Who am I?</h1>
                    <p className="about-description" data-animate="true">
                        I&apos;m Ali Bourak, a 19-year-old Software Engineering Student & Designer from Morocco 🇲🇦. 
                        I specialize in building modern, scalable web applications with a focus on performance, 
                        aesthetics, and seamless user experiences. Passionate about innovation, I turn ideas into 
                        reality through code and design.
                    </p>
                </div>
                <div className="about-image-container">
                    <img src="images/me.png" alt="Ali Bourak" className="about-image" />
                </div>
            </div>
        </section>
    );
}