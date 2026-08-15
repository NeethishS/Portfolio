/**
 * Hook for back button navigation
 * Ensures back button navigates correctly through sections
 * Maintains browser history for SPA behavior
 */

import { useEffect, useCallback } from 'react';

export const useBackButtonNavigation = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  useEffect(() => {
    // Handle back button navigation
    const handlePopState = (event: PopStateEvent) => {
      const hash = window.location.hash.slice(1);
      
      if (hash) {
        // Scroll to the section specified in the hash
        scrollToSection(hash);
      } else {
        // If no hash, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Preserve state if available
      if (event.state) {
        // Can be used for more complex state management
        console.debug('Navigation state:', event.state);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Initialize on mount - handle hash if present
    if (window.location.hash) {
      const hash = window.location.hash.slice(1);
      // Add small delay to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [scrollToSection]);

  return { scrollToSection };
};

export default useBackButtonNavigation;
