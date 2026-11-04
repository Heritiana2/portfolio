import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Terminal from './components/Terminal';
import Timeline from './components/Timeline';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ProgressBar from './components/ProgressBar';
import BackToTop from './components/BackToTop';
import Toaster from './components/Toast';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
    root.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Preloader />
      <ProgressBar />
      <CustomCursor />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Terminal />
        <Timeline />
        <Services />
        <Testimonials />
        <Blog />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <Toaster />
    </div>
  );
}

export default App;
