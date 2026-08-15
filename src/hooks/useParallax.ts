/**
 * Hook for parallax and advanced scroll effects
 * Respects prefers-reduced-motion for accessibility
 * Uses CSS transforms for optimal 60 FPS performance
 */

import { useEffect, useRef, useState, useCallback } from 'react';

interface ParallaxOptions {
  offset?: number;
  ratio?: number; // 0.3-0.5 recommended
  disabled?: boolean;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { ratio = 0.5, disabled = false } = options;

  // Initialize prefers-reduced-motion on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleScroll = useCallback(() => {
    if (!elementRef.current || prefersReducedMotion || disabled) {
      setOffset(0);
      return;
    }

    const rect = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate scroll position relative to viewport
    // Use window.scrollY for more efficient calculation
    if (rect.top < windowHeight && rect.bottom > 0) {
      const scrolled = windowHeight - rect.top;
      setOffset(scrolled * ratio);
    }
  }, [ratio, disabled, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || disabled) {
      setOffset(0);
      return;
    }

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once on mount for initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, disabled, prefersReducedMotion]);

  return {
    ref: elementRef,
    // Use will-change for performance hint and backface-visibility for mobile optimization
    style: {
      transform: `translateY(${offset}px)`,
      willChange: prefersReducedMotion || disabled ? 'auto' : 'transform',
      backfaceVisibility: 'hidden' as const,
    } as const,
  };
};

/**
 * Hook for fade-in on scroll
 */
export const useFadeInOnScroll = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Check for prefers-reduced-motion
  const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIsVisible(true);
      return;
    }

    const currentElement = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentElement) {
            observer.unobserve(currentElement);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return {
    ref: elementRef,
    className: isVisible ? 'opacity-100' : 'opacity-0',
    style: {
      transition: prefersReducedMotion() ? 'none' : 'opacity 0.6s ease-out',
    },
  };
};

/**
 * Hook to detect prefers-reduced-motion preference
 * Returns true if user has enabled "reduce motion" accessibility setting
 */
export const useReduceMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Use addEventListener for better compatibility
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

export default {
  useParallax,
  useFadeInOnScroll,
  useReduceMotion,
};
