import { useState, useEffect } from 'react';

type SectionId = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'research' | 'contact';

const SECTIONS: SectionId[] = ['hero', 'about', 'skills', 'projects', 'experience', 'research', 'contact'];

/**
 * Custom hook to track which section is currently in viewport
 * Uses Intersection Observer API for efficient scroll tracking
 * 
 * @returns {Object} Current active section and utility functions
 *   - activeSection: currently visible section ID
 *   - isActiveSection(id): check if specific section is active
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    // Create intersection observer to track section visibility
    const observers = SECTIONS.map((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Mark section as active when it's in viewport
          // threshold 0.5 means 50% of section should be visible
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          threshold: 0.5,
          rootMargin: '-100px 0px -100px 0px', // Trigger 100px before/after section
        }
      );

      observer.observe(element);
      return observer;
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const isActiveSection = (sectionId: SectionId): boolean => {
    return activeSection === sectionId;
  };

  return {
    activeSection,
    isActiveSection,
  };
}
