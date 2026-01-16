import About from "../sections/About";
import ApiGuardian from "../sections/ApiGuardian";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ApiGuardian />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
