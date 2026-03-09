import Hero from "../components/Hero";
import Intro from "../components/Intro";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <About />
      <Portfolio />
      <Services />
      <Pricing />
      <FAQ />
    </>
  );
}
