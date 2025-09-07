"use client";
import '../styles/HomeAbout.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const rootRef = useRef<HTMLElement | null>(null);
    useEffect(() => {
        const typeSplit = new SplitType("[data-animate]", {
            types: "lines,words,chars",
            tagName: "span",
        });

    const ctx = gsap.context(() => {
    gsap.from("[data-animate] .word", {
            opacity: 0.3,
            duration: 1.5,
            ease: "power1.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: "[data-animate]",
                start: "top 60%",
                scrub: true,
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
                start: "top 60%",
                once: true,
            },
    });

        const imageContainer = document.querySelector(".about-image-container") as HTMLElement;
        const image = document.querySelector(".about-image") as HTMLElement;

        if (imageContainer && image) {
            imageContainer.style.perspective = "1000px";
            image.style.transformStyle = "preserve-3d";
            image.style.transition = "transform 0.3s ease-out";

            const floatingHover = gsap.timeline({ repeat: -1, yoyo: true, ease: "power1.inOut" });
            floatingHover
                .to(image, {
                    rotationY: 10,
                    rotationX: -5, 
                    duration: 2,
                })
                .to(image, {
                    rotationY: -10,
                    rotationX: 5,
                    duration: 2,
                });

            imageContainer.addEventListener("mousemove", (e) => {
                const { width, height, left, top } = imageContainer.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) / 5;
                const y = (e.clientY - top - height / 2) / 5;

                floatingHover.pause();
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
                    onComplete: () => {
                        floatingHover.resume(); 
                    },
                });
            });

            const shimmer = document.createElement("div");
            shimmer.classList.add("shimmer");
            imageContainer.appendChild(shimmer);

            imageContainer.addEventListener("mousemove", (e) => {
                const { width, height, left, top } = imageContainer.getBoundingClientRect();
                const x = e.clientX - left;
                const y = e.clientY - top;

                gsap.to(shimmer, {
                    x: x - width / 2,
                    y: y - height / 2,
                    duration: 0.3,
                    ease: "power2.out",
                });
            });
        }
        gsap.set("[data-animate] .word, .about-image-container, .about-text", { clearProps: "filter,opacity,transform" });
        }, rootRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="about-section" ref={rootRef as any}>
            <div className="about-content">
                <div className="about-text">
                    <h1 className="about-title" data-animate="true">Who am I?</h1>
                    <p className="about-description" data-animate="true">
                        Hi, I&apos;m Ali Bourak, a passionate 19 yo Software Engineering Student and Designer from Morocco 🇲🇦. 
                        I thrive on creating innovative, scalable, and visually stunning web applications. 
                        My expertise lies in blending performance with aesthetics to deliver seamless user experiences. <br/>
                        Let&apos;s turn ideas into impactful digital solutions together!
                    </p>
                </div>
                <div className="about-image-container">
                    <img src="images/me.png" alt="Ali Bourak" className="about-image" />
                </div>
            </div>
        </section>
    );
}