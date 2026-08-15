import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { MainLayout } from './components/layout/MainLayout';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalStack from './components/TechnicalStack';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import SectionAnimator from './components/SectionAnimator';
import { setupMobileOptimization } from './utils/touchAccessibility';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useBackButtonNavigation } from './hooks/useBackButtonNavigation';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';

function App() {
  // Initialize smooth scroll hook for navigation
  useSmoothScroll();

  // Initialize back button navigation
  useBackButtonNavigation();

  // Initialize keyboard navigation
  useKeyboardNavigation();

  // Setup mobile optimization on mount
  useEffect(() => {
    const cleanup = setupMobileOptimization();
    return cleanup;
  }, []);

  return (
    <ThemeProvider>
      <MainLayout>
        <AnimatePresence mode="wait">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <SectionAnimator id="about" animation="slide" duration={0.6} delay={0}>
            <About />
          </SectionAnimator>

          {/* Skills Section */}
          <SectionAnimator id="skills" animation="fade" duration={0.6} delay={0.05}>
            <TechnicalStack />
          </SectionAnimator>

          {/* Projects Section */}
          <SectionAnimator id="projects" animation="slide" duration={0.6} delay={0.1}>
            <Projects />
          </SectionAnimator>

          {/* Experience & Education Section */}
          <SectionAnimator id="experience" animation="fade" duration={0.6} delay={0.05}>
            <Timeline />
          </SectionAnimator>

          {/* Research Section */}
          <SectionAnimator id="research" animation="scale" duration={0.6} delay={0.1}>
            <Achievements />
          </SectionAnimator>

          {/* Contact Section */}
          <SectionAnimator id="contact" animation="slide" duration={0.6} delay={0.05}>
            <Contact />
          </SectionAnimator>
        </AnimatePresence>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;