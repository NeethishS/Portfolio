import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

interface NavigationProps {
  className?: string;
}

/**
 * Navigation Component
 * Desktop horizontal navigation bar + Mobile hamburger menu
 * Features:
 * - 7 navigation links with active state tracking
 * - Mobile drawer with smooth animation
 * - Keyboard navigation support (Tab, Enter, Escape)
 * - Smooth scroll-to-section behavior
 * - Prevents background scroll when drawer is open
 * - 44x44px minimum touch targets
 */
const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { activeSection } = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      // Use native smooth scroll with smooth behavior
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash for bookmarking and back button support
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsMenuOpen(!isMenuOpen);
    }
  };

  // Prevent scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300 ${scrolled ? 'shadow-md dark:shadow-slate-900/50' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Navigate to home"
          >
            NS
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className={`
                  text-sm font-medium transition-all duration-200 relative
                  min-h-[44px] min-w-[44px] flex items-center justify-center px-2
                  ${
                    activeSection === item.id
                      ? 'text-slate-900 dark:text-slate-100 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }
                `}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-300 ${
                    activeSection === item.id ? 'w-4 opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={handleMenuKeyDown}
            className={`
              md:hidden p-2 rounded-lg transition-all duration-200
              min-h-[44px] min-w-[44px] flex items-center justify-center
              hover:bg-slate-100 dark:hover:bg-slate-800
              ${isMenuOpen ? 'bg-slate-100 dark:bg-slate-800' : ''}
            `}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top duration-200">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className={`
                  text-left px-4 py-3 rounded-lg font-medium transition-all duration-200
                  min-h-[44px] flex items-center
                  ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                  }
                `}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navigation;