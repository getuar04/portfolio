import { LanguageProvider, useLang } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Background from "./components/Background";
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

// Navbar stays outside the fade wrapper so nav controls (including the
// language switcher itself) remain stable and clickable during the transition.
function PageContent() {
  const { fading } = useLang();
  return (
    <div className={`lang-fade ${fading ? "is-fading" : ""}`}>
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
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Background />
        <div className="relative overflow-x-hidden">
          <Navbar />
          <PageContent />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
