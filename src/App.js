import React from "react";
import Navbar from "./components/Navbar";
import CV from "./components/CV";
import Certificates from "./components/Certificates";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

import Footer from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  return (
    <>
      <div className="glow" />
      <Navbar />

      <main>
        <Hero />

        <Section
          id="about"
          title="Profile"
          subtitle="Quick facts and a short intro."
        >
          <About />
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="Live demos + search & filter. Mobileria Nita is shown as a case study (WIP responsive)."
        >
          <Projects />
        </Section>

        <Section
          id="skills"
          title="Skills"
          subtitle="A quick overview of the main technologies and tools I work with."
        >
          <Skills />
        </Section>

        <Section
          id="cv"
          title="Curriculum Vitae"
          subtitle="View or download my CV."
        >
          <CV />
        </Section>

        <Section
          id="certificates"
          title="Certificates"
          subtitle="Verified certificates covering web development, design, and core programming skills."
        >
          <Certificates />
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="Fastest way to reach me is LinkedIn or phone."
        >
          <Contact />
        </Section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
