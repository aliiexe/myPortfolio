"use client";
import { useEffect } from "react";
import "../styles/TechStack.css";
import gsap from 'gsap';
import SplitType from 'split-type';

export default function TechStack() {
    useEffect(() => {
        const track = document.querySelector(".carousel-track") as HTMLElement;
        let scrollAmount = 0;

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

        gsap.from(".title", {
            y: 100,
            filter: "blur(10px)",
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".title",
                start: "top 80%",
                end: "top 50%",
                once: true,
            },
        });
        
        gsap.from(".carousel", {
            y: 100,
            filter: "blur(10px)",
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".carousel",
                start: "top 80%",
                end: "top 50%",
                once: true,
            },
        });

        const animate = () => {
            scrollAmount += 0.6; 
            if (track) {
                track.style.transform = `translateX(-${scrollAmount}px)`;
                if (scrollAmount >= track.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    const logos = [
        "ae.png",
        "ai.png",
        "ps.png",
        "angular.png",
        "bitbucket.png",
        "bootstrap.png",
        "css.png",
        "figma.png",
        "git.png",
        "html.png",
        "js.png",
        "laravel.png",
        "mongodb.png",
        "Mysql.png",
        "nodejs.png",
        "php.png",
        "python.png",
        "react.png",
        "springboot.png",
        "tailwind.png"
    ];

    return (
        <section className="tech-stack">
            <h2 className="title" data-animate="true">My Tech Stack</h2>
            <div className="carousel">
                <div className="carousel-track">
                    {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={`/images/logos/${logo}`}
                            alt={`Logo ${index + 1}`}
                            className="carousel-image"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}