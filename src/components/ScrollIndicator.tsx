import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  className?: string;
}

/**
 * Scroll Indicator Animation Component
 * Chevron-down icon at bottom of hero that animates downward
 * Disappears when scrolling past hero section
 * 
 * Features:
 * - Downward animation with fade (2–3 second loop)
 * - Uses Intersection Observer
 * - Responsive at all viewport sizes
 * - Accessible with aria-hidden
 */
export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide indicator when hero section is not in view
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`
        absolute bottom-20 left-1/2 -translate-x-1/2
        ${className}
      `}
      style={{
        animation: isVisible ? 'scrollIndicator 2.5s ease-in-out infinite' : 'none',
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes scrollIndicator {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(12px);
          }
        }
      `}</style>

      <ChevronDown
        size={32}
        className="text-slate-400 dark:text-slate-600"
        strokeWidth={1.5}
      />
    </div>
  );
};

export default ScrollIndicator;
