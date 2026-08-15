/**
 * Hook for smooth scrolling to sections
 * Supports smooth scroll navigation with SPA behavior
 */

import { useCallback, useEffect } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use native smooth scroll behavior
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Update URL hash for bookmarking
      window.history.pushState(null, '', `#${sectionId}`);
    }
  }, []);

  // Handle initial hash on load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash);
        }, 0);
      }
    };

    // Check for hash on mount
    if (window.location.hash) {
      handleHashChange();
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [scrollToSection]);

  // Handle back button navigation
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        scrollToSection(hash);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [scrollToSection]);

  return { scrollToSection };
};

export default useSmoothScroll;
