/**
 * Touch and Mobile Accessibility Utilities
 * Ensures 44x44px touch targets and mobile-friendly interactions
 */

/**
 * Ensure minimum touch target size (44x44px)
 */
export const ensureTouchTarget = (element: HTMLElement, size: number = 44): void => {
  const minSize = `${size}px`;

  // Add CSS to ensure minimum size
  element.style.minWidth = minSize;
  element.style.minHeight = minSize;
  element.style.display = 'inline-flex';
  element.style.alignItems = 'center';
  element.style.justifyContent = 'center';
};

/**
 * Get touch target dimensions for responsive design
 */
export const getTouchTargetSize = (): { size: number; padding: string } => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return {
    size: isMobile ? 48 : 44,
    padding: isMobile ? '12px' : '10px',
  };
};

/**
 * Handle viewport orientation changes gracefully
 */
export const handleOrientationChange = (callback?: () => void): () => void => {
  const handleChange = () => {
    // Prevent zoom on orientation change
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute(
        'content',
        'width=device-width, initial-scale=1, maximum-scale=1'
      );
    }

    // Add a small delay for layout recalculation
    setTimeout(() => {
      window.scrollTo(0, 0);
      callback?.();
    }, 100);
  };

  window.addEventListener('orientationchange', handleChange);

  return () => {
    window.removeEventListener('orientationchange', handleChange);
  };
};

/**
 * Prevent unwanted scrolling on touch events
 */
export const preventTouchScroll = (element: HTMLElement): () => void => {
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
  };

  element.addEventListener('touchmove', handleTouchMove, { passive: false });

  return () => {
    element.removeEventListener('touchmove', handleTouchMove);
  };
};

/**
 * Add ripple effect on touch
 */
export const addRippleEffect = (event: TouchEvent | MouseEvent): void => {
  const button = event.currentTarget as HTMLElement;
  if (!button) return;

  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();

  let x, y;
  if (event instanceof TouchEvent) {
    x = event.touches[0].clientX - rect.left;
    y = event.touches[0].clientY - rect.top;
  } else {
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
  }

  ripple.style.position = 'absolute';
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.style.width = '0';
  ripple.style.height = '0';
  ripple.style.borderRadius = '50%';
  ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  ripple.style.transform = 'translate(-50%, -50%)';
  ripple.style.pointerEvents = 'none';

  button.style.position = 'relative';
  button.style.overflow = 'hidden';
  button.appendChild(ripple);

  // Animate ripple
  const animate = () => {
    let size = 0;
    const maxSize = Math.max(rect.width, rect.height) * 2;

    const interval = setInterval(() => {
      size += maxSize / 10;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.opacity = `${1 - size / maxSize}`;

      if (size >= maxSize) {
        clearInterval(interval);
        ripple.remove();
      }
    }, 30);
  };

  animate();
};

/**
 * Handle double-tap zoom on mobile (prevent accidental zoom)
 */
export const disableDoubleTapZoom = (): () => void => {
  let lastTouchEnd = 0;

  const handleTouchEnd = (event: TouchEvent) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  };

  document.addEventListener('touchend', handleTouchEnd, false);

  return () => {
    document.removeEventListener('touchend', handleTouchEnd);
  };
};

/**
 * Setup complete mobile optimization
 */
export const setupMobileOptimization = (): (() => void) => {
  const cleanup: Array<() => void> = [];

  // Setup orientation change handler
  cleanup.push(handleOrientationChange());

  // Setup double-tap zoom prevention
  cleanup.push(disableDoubleTapZoom());

  return () => {
    cleanup.forEach((fn) => fn());
  };
};

export default {
  ensureTouchTarget,
  getTouchTargetSize,
  handleOrientationChange,
  preventTouchScroll,
  addRippleEffect,
  disableDoubleTapZoom,
  setupMobileOptimization,
};
