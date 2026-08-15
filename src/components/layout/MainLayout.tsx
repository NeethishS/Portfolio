import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
  onNavigate?: (section: string) => void;
}

/**
 * Main Layout Component
 * Provides semantic HTML structure with accessibility features:
 * - Skip-to-main-content link
 * - Semantic <header>, <main>, <footer> tags
 * - Proper lang attribute (set in index.html)
 * - WCAG 2.1 AA compliant structure
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children, onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      {/* Skip to Main Content Link - visible on focus */}
      <a
        href="#main-content"
        className="
          sr-only focus:not-sr-only
          fixed top-0 left-0 z-50 px-4 py-2
          bg-blue-600 text-white font-semibold rounded-br-lg
          focus:outline-2 focus:outline-offset-2 focus:outline-white
          transition-all duration-200
        "
      >
        Skip to main content
      </a>

      {/* Header - Sticky Navigation */}
      <Header onNavigate={onNavigate} />

      {/* Main Content */}
      <main
        id="main-content"
        className="flex-grow"
        role="main"
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Add sr-only utility class if not already in Tailwind config
export const srOnlyStyles = `
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .focus\\:not-sr-only:focus {
    position: static;
    width: auto;
    height: auto;
    padding: inherit;
    margin: inherit;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
`;
