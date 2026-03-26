import Hero from "../components/Hero";
import Intro from "../components/Intro";
import About from "../components/About";
import Services from "../components/Services";
import PersonalizedPortfolio from "../components/PersonalizedPortfolio";
import ClientLogos from "../components/ClientLogos";
import NeedsSection from "../components/NeedsSection";
import Testimonials from "../components/Testimonials";
import SEO from "../components/SEO";

export default function HomePage() {
  return (
    <>
      <SEO 
        title="Boomerang Studios | High-End Video Production & Creative Agency"
        description="Boomerang Studios is a premier video production studio specializing in immersive storytelling, high-end commercials, and creative brand strategy."
      />
      <Hero />
      <Intro />
      <PersonalizedPortfolio />
      <About />
      <Services />
      <Testimonials />
    </>
  );
}
