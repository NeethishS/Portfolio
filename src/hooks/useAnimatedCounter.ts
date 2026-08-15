/**
 * Hook for animated counters
 * Animates from 0 to target value when element is in view
 */

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterOptions {
  start?: number;
  duration?: number; // milliseconds
  disabled?: boolean;
  format?: (value: number) => string;
}

export const useAnimatedCounter = (
  target: number,
  options: AnimatedCounterOptions = {}
) => {
  const {
    start = 0,
    duration = 1500,
    disabled = false,
    format = (val) => Math.round(val).toString(),
  } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(start);
  const animationRef = useRef<number | null>(null);

  // Check for prefers-reduced-motion
  const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  useEffect(() => {
    if (!elementRef.current || disabled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Skip animation if prefers-reduced-motion is set
          if (prefersReducedMotion()) {
            setDisplayValue(target);
            observer.unobserve(entry.target);
            return;
          }

          // Start animation
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-in-out cubic
            const easeProgress =
              progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            const currentValue = start + (target - start) * easeProgress;
            setDisplayValue(currentValue);

            if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate);
            } else {
              setDisplayValue(target);
            }
          };

          animationRef.current = requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [target, start, duration, disabled]);

  return {
    ref: elementRef,
    value: format(displayValue),
    displayValue,
  };
};

export default useAnimatedCounter;
