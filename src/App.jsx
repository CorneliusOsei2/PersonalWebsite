import React from 'react';
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import OpenSource from './components/OpenSource/OpenSource';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/app.scss';

export default function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
