'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '../styles/AboutPage.css';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story');
  const [particles, setParticles] = useState<{ top: string; left: string; duration: number; offsetY: number; offsetX: number; }[]>([]);
  
  // Skills with emojis
  const skills = [
    { name: 'Software Engineering', emoji: '🧠', level: 85 },
    { name: 'Frontend (HTML, CSS, JS)', emoji: '💻', level: 90 },
    { name: 'React & Next.js', emoji: '⚛️', level: 88 },
    { name: 'Backend (Node.js, Express)', emoji: '🔧', level: 82 },
    { name: 'Database Management (SQL/MongoDB)', emoji: '🗄️', level: 78 },
    { name: 'Responsive & Mobile-First Design', emoji: '📱', level: 87 },
  ];
  

  // Fun facts
  const funFacts = [
    'I’m a software engineering student from Casablanca 🇲🇦',
    'I love building full-stack apps that solve real problems 💡',
    'I’m 193cm tall and weigh 73kg 🧍‍♂️',
    'I supplement with NutriMuscle (Omega-3, Creatine, etc.) 💊',
    'I listen to lo-fi or Quran while coding 🎧',
    'I’m exploring halal ways to earn online through tech 💼✨',
  ];
  
  
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  
  // Initialize particles only on client-side to avoid hydration errors
  useEffect(() => {
    // Generate stable particle positions only on client-side
    const newParticles = Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 5 + 3,
      offsetY: Math.random() * 20 - 10,
      offsetX: Math.random() * 20 - 10
    }));
    setParticles(newParticles);
    
    // Set up the interval for fun facts
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [funFacts.length]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="about-section min-h-screen py-24 px-4 md:px-8 mt-24">
      {/* HEADER */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          About <span className="text-[#e0f11f]">Me</span>
        </h1>
        
        <p className="text-xl">
            I'm <span className="font-bold">Ali Bourak</span>, a 19-year-old Software Engineering student & Designer based in Morocco <span className="text-sm">🇲🇦</span>.
            I'm passionate about building innovative, scalable, and user-friendly digital experiences that make a real impact 💡✨.
        </p>

      </motion.div>

      {/* PROFILE IMAGE */}
      <motion.div 
        className="flex justify-center mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute -z-10 w-full h-full bg-[#e0f11f]/20 rounded-full blur-3xl"></div>
          <Image 
            src="/images/me.png"
            alt="Ali Bourak Profile"
            width={320}
            height={320}
            className="rounded-3xl shadow-2xl shadow-[#e0f11f]/10 border border-[#e0f11f]/20"
            priority
          />
        </div>
      </motion.div>

      {/* TABS NAVIGATION */}
      <div className="max-w-4xl mx-auto mb-10">
        <motion.div 
          className="flex justify-center gap-2 md:gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {['story', 'skills', 'fun facts', 'cat'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-[#e0f11f] text-black' 
                  : 'bg-zinc-900 hover:bg-zinc-800 text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* TAB CONTENT */}
        <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 min-h-[300px]">
          {/* MY STORY TAB */}
          {activeTab === 'story' && (
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
            <p className="text-lg">
                As a <span className="text-[#e0f11f]">software engineering student</span>, I focus on building clean, responsive, and high-performance web applications. 
                I enjoy working with both <span className="text-[#e0f11f]">frontend technologies</span> and backend tools — blending structure and design to create real-world solutions.
            </p>

            <p className="text-lg">
                I got into tech out of curiosity and a love for problem-solving. Over time, I’ve grown my skills with modern frameworks like 
                React and Next.js, and I’m constantly learning new tools to improve both the look and speed of what I build.
            </p>

            <p className="text-lg">
                Outside of coding, I like exploring UI ideas, reading about the tech world, and learning how to build things that are both impactful and aligned with my values — 
                especially in areas like halal entrepreneurship and ethical tech.
            </p>

              
              <div className="pt-4">
                <Link 
                  href="/projects" 
                  className="inline-flex items-center bg-[#e0f11f] text-black px-6 py-3 rounded-full font-medium hover:bg--[#e0f11f] transition-colors"
                >
                  See my work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          )}

          {/* SKILLS TAB */}
          {activeTab === 'skills' && (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    variants={item}
                    className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700"
                  >
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">{skill.emoji}</span>
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                    </div>
                    
                    <div className="w-full bg-zinc-700 rounded-full h-2.5 mt-3">
                      <motion.div 
                        className="bg-[#e0f11f] h-2.5 rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                className="text-center mt-8 text-zinc-400"
                variants={item}
              >
                Always learning new technologies to stay ahead of the curve!
              </motion.p>
            </motion.div>
          )}

          {/* FUN FACTS TAB - IMPROVED SPACING */}
          {activeTab === 'fun facts' && (
            <motion.div
              className="flex flex-col items-center justify-center h-[320px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center max-w-xl">
                <span className="block text-2xl mb-2">💡</span>
                <h3 className="text-xl font-medium text-[#e0f11f] mb-8">Fun Fact</h3>
                
                <div className="relative h-32 flex items-center justify-center">
                  {funFacts.map((fact, index) => (
                    <motion.div
                      key={fact}
                      className="absolute w-68 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: currentFactIndex === index ? 1 : 0,
                        y: currentFactIndex === index ? 0 : 20,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-xl px-4 md:px-12">{fact}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-12 gap-2">
                  {funFacts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFactIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentFactIndex === index ? 'bg-[#e0f11f]' : 'bg-zinc-700'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CAT TAB */}
          {activeTab === 'cat' && (
            <motion.div
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Meet <span className="text-[#e0f11f]">Lilly</span></h3>
                <p className="text-lg mb-4">
                  When I need a break from code, I spend time with my cat Lilly — my fuzzy little assistant and 
                  constant source of inspiration. She has a peculiar habit of sitting on my keyboard during crucial 
                  debugging sessions.
                </p>
                <p className="text-lg">
                  As my unofficial code reviewer, Lilly ensures I take regular breaks and reminds me that sometimes 
                  the best solutions come when you step away from the screen for a moment.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image 
                    src="/images/lilly.png" 
                    alt="Lilly the Cat" 
                    width={350} 
                    height={350}
                    className="rounded-2xl shadow-lg border border-[#e0f11f]/20"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* INTERACTIVE ELEMENT - CURSOR FOLLOWER */}
      <motion.div
        className="fixed hidden md:block w-6 h-6 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(250,204,21,0.4) 0%, rgba(250,204,21,0) 70%)",
          zIndex: 999,
          mixBlendMode: "screen",
        }}
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2,
        }}
      />

      {/* CONNECT SECTION */}
      <motion.div 
        className="text-center max-w-4xl mx-auto mt-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's <span className="text-[#e0f11f]">Connect!</span>
        </h2>
        
        <p className="text-lg mb-10">
          I'm always open to collaborations, internships, or just chatting tech & design.
        </p>
        
        <div className="flex justify-center gap-5">
          <Link 
            href="https://github.com/aliiexe" 
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
            aria-label="Visit my GitHub profile"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <Link 
            href="https://x.com/a78bk6" 
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
            aria-label="Follow me on Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </Link>
          
          <Link 
            href="https://linkedin.com/in/ali-bourak" 
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
            aria-label="Connect with me on LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          
          {/* <Link 
            href="https://dribbble.com" 
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
            aria-label="See my designs on Dribbble"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438A9.93 9.93 0 0112 2a9.952 9.952 0 014.043.879zM8.328 4.257c1.307 1.763 2.468 3.58 3.486 5.442-2.818.879-6.064 1.481-9.744 1.706.397-3.084 2.305-5.677 5.068-7.034a.5.5 0 01.12-.03 19.15 19.15 0 011.07-.084zm-5.289 9.427a12.44 12.44 0 01.298-2.518c4.022-.282 7.411-.993 10.464-2.078.233.471.448.95.641 1.431-4.423 1.401-7.682 4.052-9.724 7.85a9.875 9.875 0 01-1.679-4.685zm4.44 6.080c1.688-3.63 4.737-6.254 9.048-7.554.45 1.272.818 2.613 1.08 4.031.112.64.187 1.284.21 1.944a9.953 9.953 0 01-10.337 1.58zm11.415-1.28c-.04-.576-.119-1.146-.223-1.72-.267-1.403-.62-2.74-1.047-3.999 1.922-.327 4.039-.284 6.382.214a9.878 9.878 0 01-5.112 5.505z" clipRule="evenodd" />
            </svg>
          </Link> */}
        </div>
      </motion.div>

      {/* Particle Background rendered only client-side */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#e0f11f]"
            style={{
              top: particle.top,
              left: particle.left,
              opacity: 0.3,
            }}
            animate={{
              y: [0, particle.offsetY],
              x: [0, particle.offsetX],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: particle.duration,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}