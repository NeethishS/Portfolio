import React, { useEffect, useRef } from 'react';
import { useParallax, useReduceMotion } from '../hooks/useParallax';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface HeroBackgroundProps {
  particleCount?: number;
  className?: string;
  parallaxRatio?: number; // 0.3-0.5 recommended
}

/**
 * Hero Background Animation Component
 * Creates floating particles with smooth parallax animation
 * 
 * Features:
 * - 15–20 floating particles
 * - 3–8 second cycle per particle
 * - Opacity 0.3–0.8 with fade at edges
 * - Parallax effect at 0.3-0.5 ratio for depth
 * - Theme-aware coloring
 * - 60 FPS performance with CSS transforms
 * - will-change and backface-visibility for mobile optimization
 * - Respects prefers-reduced-motion for accessibility
 * - Canvas-based for optimal performance
 */
export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  particleCount = 15,
  className = '',
  parallaxRatio = 0.4,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number | null>(null);
  const prefersReducedMotion = useReduceMotion();

  // Use parallax hook for background parallax effect
  const parallax = useParallax({ ratio: parallaxRatio, disabled: prefersReducedMotion });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initializeParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3, // 0.3-0.8
        duration: Math.random() * 5 + 3, // 3-8 seconds
        delay: Math.random() * 2,
      }));
    };

    initializeParticles();

    // Animation loop
    const startTime = Date.now();
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get theme-aware color
      const isDark = document.documentElement.classList.contains('dark');
      const particleColor = isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.3)';

      // Draw and update particles
      particlesRef.current.forEach((particle) => {
        if (prefersReducedMotion) {
          // Static particles if reduced motion preference
          ctx.fillStyle = particleColor;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fill();
          return;
        }

        // Calculate position based on elapsed time
        const time = (elapsed - particle.delay) / particle.duration;
        const cycle = time % 1;

        // Smooth wave motion using sine
        const newX = particle.x + Math.sin(cycle * Math.PI * 2) * 30;
        const newY = particle.y + Math.cos(cycle * Math.PI * 2) * 30;

        // Fade at edges with opacity based on y position
        let edgeFade = 1;
        if (newY < 100) edgeFade = newY / 100;
        if (newY > canvas.height - 100) edgeFade = (canvas.height - newY) / 100;

        // Properly parse the color value and adjust opacity
        const opacityValue = particle.opacity * edgeFade;
        const adjustedColor = isDark 
          ? `rgba(59, 130, 246, ${Math.min(opacityValue, 0.4)})`
          : `rgba(59, 130, 246, ${Math.min(opacityValue * 0.75, 0.3)})`;

        ctx.fillStyle = adjustedColor;
        ctx.beginPath();
        ctx.arc(newX, newY, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [particleCount, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{
        transform: parallax.style.transform,
        willChange: parallax.style.willChange,
        backfaceVisibility: parallax.style.backfaceVisibility,
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'transparent',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default HeroBackground;
