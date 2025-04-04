import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import ProjectComponent from './components/ProjectComponent';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <ProjectComponent />
    </div>
  );
}