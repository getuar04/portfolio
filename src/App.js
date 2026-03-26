import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CV from "./components/CV";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { Footer, ScrollToTop } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <CV />
        <Certificates />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}
