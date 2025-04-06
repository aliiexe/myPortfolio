import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import ProjectComponent from './components/ProjectComponent';
import Services from './components/Services';
import ContactPage from './contact/page';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <TechStack />
      <ProjectComponent />
      <Services />
      <ContactPage />
    </div>
  );
}