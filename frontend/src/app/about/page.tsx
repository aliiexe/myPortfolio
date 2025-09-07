"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Big_Shoulders_Display } from "next/font/google";
gsap.registerPlugin(ScrollTrigger);

const headingFont = Big_Shoulders_Display({ subsets: ["latin"], weight: ["800"] });

export default function AboutPage() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });
      tl.from(".about-title", { y: 24, opacity: 0, filter: "blur(8px)" }, 0)
        .from(".about-avatar", { scale: 0.95, opacity: 0, filter: "blur(6px)" }, 0.1)
        .from(".about-content", { y: 16, opacity: 0, filter: "blur(6px)" }, 0.15)
        .from(".about-skills", { y: 14, opacity: 0, filter: "blur(6px)" }, 0.2)
        .from(".about-ctas", { y: 12, opacity: 0, filter: "blur(6px)" }, 0.25)
        .add(() => {
          gsap.set(
            ".about-title, .about-avatar, .about-content, .about-skills, .about-ctas",
            { clearProps: "filter,opacity,transform" }
          );
        });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen px-6 md:px-8 mt-24 text-white" ref={rootRef}>
      <div className="max-w-4xl mx-auto py-20">
        <div className="mb-16">
          <h1 className={`about-title text-5xl md:text-6xl font-bold mb-6 ${headingFont.className}`}>About Me</h1>
        </div>
        <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start">
          <div className="about-avatar flex justify-center md:justify-start">
            <div className="relative">
              <Image
                src="/images/me.png"
                alt="Ali Bourak"
                width={240}
                height={240}
                className="rounded-2xl object-cover w-[240px] h-[240px] border border-zinc-800"
                priority
              />
            </div>
          </div>
          <div className="about-content space-y-8">
            <div>
              <p className="text-xl text-zinc-200 leading-relaxed mb-6">
                I'm Ali Bourak, a software engineering student and designer from Morocco. I create digital
                experiences that are fast, clean, and purposeful.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Currently building Cre8.ma and fullflow while exploring the intersection of technology and thoughtful
                design.
              </p>
            </div>
            <div className="about-skills">
              <h3 className="text-lg font-semibold text-zinc-200 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zinc-600 rounded-full" />
                <span className="text-zinc-400">Based in Casablanca</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-zinc-600 rounded-full" />
                <span className="text-zinc-400">Available for projects</span>
              </div>
            </div>
            <div className="about-ctas flex flex-wrap gap-4 pt-4">
              <Link
                href="/docs/AliBourakCVEng.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors"
              >
                View Resume
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-zinc-800 text-zinc-200 rounded-lg hover:bg-zinc-900 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}