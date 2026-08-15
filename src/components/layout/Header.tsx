import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useActiveSection } from '../../hooks/useActiveSection';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

/**
 * Header Component
 * Sticky navigation with theme toggle
 * Desktop: horizontal nav bar
 * Mobile: hamburger menu with drawer
 * Features:
 * - Active link highlighting
 * - Smooth scroll-to-section
 * - Theme toggle with persistence
 * - Keyboard navigation support
 */
export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection } = useActiveSection();

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Research', id: 'research' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleThemeKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  };

  const handleMenuKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
      // Return focus to menu button
      (e.currentTarget as HTMLButtonElement).focus();
    }
  };

  // Prevent body scroll when menu is open
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
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Navigate to home"
        >
          NS
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`
                text-sm font-medium transition-colors duration-200 relative
                min-h-[44px] flex items-center px-2
                ${
                  activeSection === link.id
                    ? 'text-slate-900 dark:text-slate-100 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }
              `}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            onKeyDown={handleThemeKeyDown}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} className="text-slate-600 dark:text-slate-400" />
            ) : (
              <Sun size={20} className="text-slate-600 dark:text-slate-400" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onKeyDown={handleMenuKeyDown}
            className={`
              md:hidden p-2 rounded-lg transition-colors duration-200
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
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top duration-200">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`
                  text-left px-4 py-3 rounded-lg font-medium transition-all duration-200
                  min-h-[44px] flex items-center
                  ${
                    activeSection === link.id
                      ? 'bg-blue-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                  }
                `}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
