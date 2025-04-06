// "use client";
// import { useEffect } from "react";
// import "../styles/TechStack.css";
// import gsap from 'gsap';
// import SplitType from 'split-type';

// export default function TechStack() {
//     useEffect(() => {
//         const track = document.querySelector(".carousel-track") as HTMLElement;
//         let scrollAmount = 0;

//         const typeSplit = new SplitType("[data-animate]", {
//             types: "lines,words,chars",
//             tagName: "span",
//         });

//         gsap.from("[data-animate] .word", {
//             opacity: 0.3,
//             duration: 1.5,
//             ease: "power1.out",
//             stagger: 0.1,
//             scrollTrigger: {
//                 trigger: "[data-animate]",
//                 start: "top 60%",
//                 scrub: true,
//             },
//         });

//         gsap.from(".title", {
//             y: 100,
//             filter: "blur(10px)",
//             opacity: 0,
//             duration: 1.5,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: ".title",
//                 start: "top 80%",
//                 end: "top 50%",
//                 once: true,
//             },
//         });
        
//         gsap.from(".carousel", {
//             y: 100,
//             filter: "blur(10px)",
//             opacity: 0,
//             duration: 1.5,
//             ease: "power3.out",
//             scrollTrigger: {
//                 trigger: ".carousel",
//                 start: "top 80%",
//                 end: "top 50%",
//                 once: true,
//             },
//         });

//         const animate = () => {
//             scrollAmount += 0.6; 
//             if (track) {
//                 track.style.transform = `translateX(-${scrollAmount}px)`;
//                 if (scrollAmount >= track.scrollWidth / 2) {
//                     scrollAmount = 0;
//                 }
//             }
//             requestAnimationFrame(animate);
//         };

//         animate();
//     }, []);

//     const logos = [
//         "ae.png",
//         "ai.png",
//         "ps.png",
//         "angular.png",
//         "bitbucket.png",
//         "bootstrap.png",
//         "css.png",
//         "figma.png",
//         "git.png",
//         "html.png",
//         "js.png",
//         "laravel.png",
//         "mongodb.png",
//         "Mysql.png",
//         "nodejs.png",
//         "php.png",
//         "python.png",
//         "react.png",
//         "springboot.png",
//         "tailwind.png"
//     ];

//     return (
//         <section className="tech-stack">
//             <h2 className="title" data-animate="true">My Tech Stack</h2>
//             <div className="carousel">
//                 <div className="carousel-track">
//                     {logos.concat(logos).map((logo, index) => (
//                         <img
//                             key={index}
//                             src={`/images/logos/${logo}`}
//                             alt={`Logo ${index + 1}`}
//                             className="carousel-image"
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";
import "../styles/TechStack.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TechStack() {
    const technologies = [
        "AFTER EFFECT",
        "ADOBE ILLUSTATOR",
        "ADOBE PHOTOSHOP",
        "FIGMA",
        "ANGULAR",
        "BITBUCKET",
        "BOOTSTRAP",
        "CSS",
        "GITHUB",
        "HTML",
        "JAVASCRIPT",
        "MONGODB",
        "MYSQL",
        "NODEJS",
        "PYTHON",
        "SPRINGBOOT",
        "TAILWIND",
        "REACT",
    ];

    const line1Ref = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {

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
                trigger: ".title",
                start: "top 80%",
                end: "top 50%",
                once: true,
            },
            delay: 0.5,
        });

        const animateLine = (line: HTMLElement, reverse: boolean) => {
            const fullScroll = line.scrollWidth / 2;
            let position = reverse ? 0 : -fullScroll;
            const speed = reverse ? -0.4 : 0.4;
            const animate = () => {
                position += speed;
                line.style.transform = `translateX(${position}px)`;
                if (!reverse && position >= 0) {
                    position = -fullScroll;
                } else if (reverse && position <= -fullScroll) {
                    position = 0;
                }
                requestAnimationFrame(animate);
            };
            animate();
        };

        const startAnimations = () => {
            if (line1Ref.current) animateLine(line1Ref.current, false);
            if (line2Ref.current) animateLine(line2Ref.current, true);
        };

        const timeout = setTimeout(startAnimations, 100);
        return () => clearTimeout(timeout);
    }, []);

    const renderWords = (arr: string[]) =>
        arr.concat(arr).map((tech, index) => (
            <span key={index} className="tech-word">
                {tech}
                <span className="separator">✦</span>
            </span>
        ));

    return (
        <div className="tech-container">
            {/* <h2 className="title" data-animate="true">My Tech Stack</h2> */}
            <div className="carousel">
                <div className="tech-line" ref={line1Ref}>
                    {renderWords([...technologies].reverse())}
                </div>
                <div className="tech-line reverse" ref={line2Ref}>
                    {renderWords(technologies)}
                </div>
            </div>
        </div>
    );
}