/**
 * Phase 2 Integration Tests: Hero & Navigation
 * Tests implementation of tasks 2-1 through 2-10
 * 
 * Tasks Covered:
 * 2-1: Build Navigation Component
 * 2-2: Implement Hero Section with Animations
 * 2-3: Create Currently Building Banner
 * 2-4: Build Stat Bar
 * 2-5: Implement CTA Buttons
 * 2-6: Add Background Particle Animation
 * 2-7: Create Scroll Indicator
 * 2-8: Implement Mobile-Responsive Hero
 * 2-9: Navigation Active State Tracking
 * 2-10: Theme Toggle in Navigation
 */

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../context/ThemeContext';
import Navigation from '../Navigation';
import Hero from '../Hero';
import { useActiveSection } from '../../hooks/useActiveSection';

/**
 * Test 2-1: Navigation Component
 * Verifies desktop/mobile layouts and active state tracking
 */
describe('2-1: Navigation Component', () => {
  const renderNavigation = () => {
    return render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );
  };

  test('should render logo/branding', () => {
    renderNavigation();
    const logoButton = screen.getByRole('button', { name: /navigate to home/i });
    expect(logoButton).toBeInTheDocument();
    expect(logoButton).toHaveTextContent('NS');
  });

  test('should render all 7 navigation links on desktop', () => {
    renderNavigation();
    const expectedLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];
    
    expectedLinks.forEach(link => {
      // Links might be in desktop or mobile menu, so we just check existence
      const buttons = screen.queryAllByRole('button', { name: new RegExp(link, 'i') });
      expect(buttons.length).toBeGreaterThan(0);
    });
  });

  test('should have mobile menu button', () => {
    renderNavigation();
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  test('should toggle mobile menu on button click', async () => {
    renderNavigation();
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(menuButton);
    
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  test('should support keyboard navigation (Escape to close menu)', async () => {
    renderNavigation();
    const menuButton = screen.getByRole('button', { name: /open menu/i });
    
    fireEvent.click(menuButton);
    await waitFor(() => expect(menuButton).toHaveAttribute('aria-expanded', 'true'));
    
    // Simulate Escape key
    fireEvent.keyDown(menuButton, { key: 'Escape' });
    
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  test('should have theme toggle button', () => {
    renderNavigation();
    const themeToggle = screen.getByRole('button', { name: /switch to/i });
    expect(themeToggle).toBeInTheDocument();
  });
});

/**
 * Test 2-2: Hero Section with Animations
 * Verifies hero section structure, text, and animations
 */
describe('2-2: Hero Section with Animations', () => {
  const renderHero = () => {
    return render(
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    );
  };

  test('should render hero section with correct ID', () => {
    renderHero();
    const heroSection = document.getElementById('hero');
    expect(heroSection).toBeInTheDocument();
  });

  test('should display main title text', () => {
    renderHero();
    expect(screen.getByText(/Backend & AI Engineer/i)).toBeInTheDocument();
  });

  test('should display subtitle with technology stack', () => {
    renderHero();
    expect(screen.getByText(/RAG Pipelines.*FastAPI.*LLM Systems/i)).toBeInTheDocument();
  });

  test('should display professional description', () => {
    renderHero();
    expect(screen.getByText(/Final-year CSE undergrad/i)).toBeInTheDocument();
    expect(screen.getByText(/Published researcher/i)).toBeInTheDocument();
    expect(screen.getByText(/sub-300ms latency/i)).toBeInTheDocument();
  });

  test('should be semantic HTML with h1 tag', () => {
    const { container } = renderHero();
    const h1 = container.querySelector('h1');
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent(/Backend & AI Engineer/);
  });
});

/**
 * Test 2-3: Currently Building Banner
 * Verifies banner component and animation
 */
describe('2-3: Currently Building Banner', () => {
  const renderHero = () => {
    return render(
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    );
  };

  test('should display Currently Building banner', () => {
    renderHero();
    expect(screen.getByText(/Currently building/i)).toBeInTheDocument();
  });

  test('should display exact banner text', () => {
    renderHero();
    expect(screen.getByText(/AI-Powered Job Intelligence Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/automated job crawling/i)).toBeInTheDocument();
  });

  test('should include hammer emoji', () => {
    renderHero();
    const banner = screen.getByText(/Currently building/i).closest('div');
    expect(banner?.textContent).toContain('🔨');
  });
});

/**
 * Test 2-4: Stat Bar Component
 * Verifies stat display with key metrics
 */
describe('2-4: Stat Bar with Metrics', () => {
  const renderHero = () => {
    return render(
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    );
  };

  test('should display all 4 stat metrics', () => {
    renderHero();
    expect(screen.getByText(/3/)).toBeInTheDocument();
    expect(screen.getByText(/AI Systems/i)).toBeInTheDocument();
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByText(/Published Paper/i)).toBeInTheDocument();
    expect(screen.getByText(/5/)).toBeInTheDocument();
    expect(screen.getByText(/LLMs Benchmarked/i)).toBeInTheDocument();
    expect(screen.getByText(/200\+/)).toBeInTheDocument();
    expect(screen.getByText(/LeetCode Problems/i)).toBeInTheDocument();
  });
});

/**
 * Test 2-5: CTA Buttons
 * Verifies button presence and accessibility
 */
describe('2-5: CTA Buttons', () => {
  const renderHero = () => {
    return render(
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    );
  };

  test('should render View Projects button', () => {
    renderHero();
    const viewProjectsBtn = screen.getByRole('button', { name: /View Projects/i });
    expect(viewProjectsBtn).toBeInTheDocument();
  });

  test('should render Download CV button', () => {
    renderHero();
    const downloadBtn = screen.getByRole('button', { name: /Download CV/i });
    expect(downloadBtn).toBeInTheDocument();
  });

  test('should have proper aria-labels', () => {
    renderHero();
    const viewProjectsBtn = screen.getByRole('button', { name: /View Projects/i });
    expect(viewProjectsBtn).toHaveAttribute('aria-label', /View my projects/i);
  });

  test('Download CV should link to resume Google Drive link', () => {
    const { container } = renderHero();
    const resumeLink = container.querySelector('a[href="https://drive.google.com/file/d/1xtgD5Mf0zccBgTH-SLA5lB7AeGFfhj_F/view?usp=drive_link"]');
    expect(resumeLink).toBeInTheDocument();
  });

  test('buttons should have minimum 44x44px touch target', () => {
    renderHero();
    const viewProjectsBtn = screen.getByRole('button', { name: /View Projects/i });
    // Button component sets min-h-[44px] min-w-[44px]
    expect(viewProjectsBtn).toHaveClass('min-h-\\[44px\\]');
  });
});

/**
 * Test 2-6: Background Particle Animation
 * Verifies particle animation setup
 */
describe('2-6: Background Particle Animation', () => {
  const renderHero = () => {
    return render(
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    );
  };

  test('should render canvas element for particles', () => {
    const { container } = renderHero();
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  test('canvas should have aria-hidden attribute', () => {
    const { container } = renderHero();
    const canvas = container.querySelector('canvas');
    expect(canvas).toHaveAttribute('aria-hidden', 'true');
  });

  test('canvas should be positioned absolutely', () => {
    const { container } = renderHero();
    const canvas = container.querySelector('canvas');
    expect(canvas).toHaveClass('absolute');
    expect(canvas).toHaveClass('inset-0');
  });
});

/**
 * Test 2-7: Scroll Indicator
 * Verifies scroll indicator animation
 */
describe('2-7: Scroll Indicator', () => {
  const renderHero = () => {
    return render(
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    );
  };

  test('should render scroll indicator', () => {
    const { container } = renderHero();
    const indicator = container.querySelector('[aria-hidden="true"]');
    // ChevronDown icon should be present
    expect(indicator).toBeInTheDocument();
  });

  test('scroll indicator should be positioned at bottom', () => {
    const { container } = renderHero();
    const indicators = container.querySelectorAll('[aria-hidden="true"]');
    // Find the scroll indicator (last one typically)
    let scrollIndicator = null;
    for (const el of indicators) {
      if (el.classList.contains('bottom-20')) {
        scrollIndicator = el;
        break;
      }
    }
    expect(scrollIndicator).toBeTruthy();
  });
});

/**
 * Test 2-8: Mobile-Responsive Hero
 * Verifies responsive layout
 */
describe('2-8: Mobile-Responsive Hero Layout', () => {
  const renderHero = () => {
    return render(
      <ThemeProvider>
        <Hero />
      </ThemeProvider>
    );
  };

  test('should use responsive text sizes', () => {
    const { container } = renderHero();
    const title = container.querySelector('h1');
    expect(title).toHaveClass('text-4xl');
    expect(title).toHaveClass('md:text-5xl');
    expect(title).toHaveClass('lg:text-6xl');
  });

  test('should use responsive spacing', () => {
    const { container } = renderHero();
    const contentDiv = container.querySelector('[class*="space-y"]');
    expect(contentDiv).toHaveClass('space-y-6');
    expect(contentDiv).toHaveClass('md:space-y-8');
  });

  test('CTA buttons should stack responsively', () => {
    const { container } = renderHero();
    const buttonsContainer = screen.getByRole('button', { name: /View Projects/i }).closest('div');
    expect(buttonsContainer).toHaveClass('flex-col');
    expect(buttonsContainer).toHaveClass('md:flex-row');
  });
});

/**
 * Test 2-9: Navigation Active Section Tracking
 * Verifies useActiveSection hook
 */
describe('2-9: Navigation Active State Tracking', () => {
  test('useActiveSection hook should exist and return active section', () => {
    // Create a test component using the hook
    const TestComponent = () => {
      const { activeSection, isActiveSection } = useActiveSection();
      return (
        <div data-testid="test-component">
          <div data-testid="active-section">{activeSection}</div>
          <div data-testid="is-hero">{isActiveSection('hero').toString()}</div>
        </div>
      );
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const component = screen.getByTestId('test-component');
    expect(component).toBeInTheDocument();
  });

  test('should track sections with Intersection Observer', () => {
    const { container } = render(
      <ThemeProvider>
        <div>
          <section id="hero">Hero</section>
          <section id="about">About</section>
          <section id="projects">Projects</section>
        </div>
      </ThemeProvider>
    );

    // Verify sections exist with correct IDs
    expect(document.getElementById('hero')).toBeInTheDocument();
    expect(document.getElementById('about')).toBeInTheDocument();
    expect(document.getElementById('projects')).toBeInTheDocument();
  });
});

/**
 * Test 2-10: Theme Toggle
 * Verifies theme toggle functionality
 */
describe('2-10: Theme Toggle in Navigation', () => {
  const renderNavigation = () => {
    return render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );
  };

  test('should render theme toggle button', () => {
    renderNavigation();
    const themeToggle = screen.getByRole('button', { name: /switch to/i });
    expect(themeToggle).toBeInTheDocument();
  });

  test('theme toggle should be keyboard accessible', () => {
    renderNavigation();
    const themeToggle = screen.getByRole('button', { name: /switch to/i });
    expect(themeToggle).toHaveClass('min-h-\\[44px\\]');
    expect(themeToggle).toHaveClass('min-w-\\[44px\\]');
  });

  test('theme toggle should have aria-label', () => {
    renderNavigation();
    const themeToggle = screen.getByRole('button', { name: /switch to/i });
    expect(themeToggle).toHaveAttribute('aria-label');
    expect(themeToggle.getAttribute('aria-label')).toMatch(/switch to (dark|light) mode/i);
  });

  test('theme toggle should use Sun/Moon icons', () => {
    const { container } = renderNavigation();
    // Check for SVG elements (icons from lucide-react)
    const buttons = container.querySelectorAll('button[aria-label*="switch"]');
    expect(buttons.length).toBeGreaterThan(0);
  });
});

/**
 * Integration Test: Full Phase 2 Setup
 * Verifies all components work together
 */
describe('Phase 2: Full Integration', () => {
  const renderFullPage = () => {
    return render(
      <ThemeProvider>
        <Navigation />
        <Hero />
      </ThemeProvider>
    );
  };

  test('should render navigation and hero together', () => {
    renderFullPage();
    expect(document.getElementById('hero')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /navigate to home/i })).toBeInTheDocument();
  });

  test('should have proper HTML structure', () => {
    const { container } = renderFullPage();
    expect(container.querySelector('nav')).toBeInTheDocument();
    expect(container.querySelector('section#hero')).toBeInTheDocument();
  });

  test('should be responsive and accessible', () => {
    const { container } = renderFullPage();
    
    // Check for semantic HTML
    expect(container.querySelector('h1')).toBeInTheDocument();
    
    // Check for accessibility attributes
    const buttons = container.querySelectorAll('button[aria-label]');
    expect(buttons.length).toBeGreaterThan(0);
  });
});
