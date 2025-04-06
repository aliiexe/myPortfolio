import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import ProjectComponent from './components/ProjectComponent';
import Services from './components/Services';
import Contact from './Contact/page.tsx';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <ProjectComponent />
      <Services />
      <Contact />
    </div>
  );
}