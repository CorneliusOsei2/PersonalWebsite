import React from 'react';
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import OpenSource from '../../components/OpenSource';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function DevPage() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
