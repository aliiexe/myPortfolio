import { Hero } from "@/components/home/Hero";
import { FocusAreas } from "@/components/home/FocusAreas";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeAboutPreview } from "@/components/home/HomeAboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FocusAreas />
      <FeaturedProjects />
      <HomeAboutPreview />
      <ServicesPreview />
      <ContactCTA />
    </>
  );
}
