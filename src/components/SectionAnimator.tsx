import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionAnimatorProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fade' | 'slide' | 'scale';
}

/**
 * SectionAnimator Component
 * Wraps sections with smooth entrance animations using Framer Motion
 * Supports fade, slide, and scale transitions on scroll into view
 * 
 * Features:
 * - Animations triggered when section comes into view
 * - Smooth 300-500ms transitions
 * - Respects prefers-reduced-motion
 * - Multiple animation types
 * - Viewport detection with margins
 * - No performance impact (uses only transforms and opacity)
 */
const SectionAnimator: React.FC<SectionAnimatorProps> = ({
  children,
  id,
  className = '',
  delay = 0,
  duration = 0.6,
  animation = 'fade',
}) => {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Define animation variants
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  // Select animation variant
  const variants = {
    fade: fadeVariants,
    slide: slideVariants,
    scale: scaleVariants,
  }[animation];

  // If user prefers reduced motion, just show immediately
  if (prefersReducedMotion) {
    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionAnimator;
