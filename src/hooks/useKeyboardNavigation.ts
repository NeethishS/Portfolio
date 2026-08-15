/**
 * Hook for keyboard navigation support
 * Enables Tab + Enter navigation, Escape to close drawers
 * Ensures proper focus management for accessibility
 */

import { useEffect, useCallback } from 'react';

export const useKeyboardNavigation = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${sectionId}`);
      
      // Focus on the section for accessibility
      element.setAttribute('tabindex', '-1');
      (element as HTMLElement).focus();
    }
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key support for closing modals/drawers
      if (e.key === 'Escape') {
        // Emit custom event for modals to listen to
        window.dispatchEvent(new CustomEvent('keydown-escape'));
      }

      // Ctrl/Cmd + K for search (if search feature is added)
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('keydown-search'));
      }

      // Tab navigation is handled natively, but we ensure focus styles are visible
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav-active');
      }
    };

    const handleMouseDown = () => {
      // Remove keyboard-nav-active class when mouse is used
      document.body.classList.remove('keyboard-nav-active');
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  // Handle hash navigation with Enter key on focused links
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && e.target instanceof HTMLAnchorElement) {
        const href = (e.target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          scrollToSection(href.slice(1));
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [scrollToSection]);

  return { scrollToSection };
};

export default useKeyboardNavigation;
