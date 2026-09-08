import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import CV from "./components/CV";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import { Footer, ScrollToTop } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative overflow-x-hidden">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <CV />
          <Certificates />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
