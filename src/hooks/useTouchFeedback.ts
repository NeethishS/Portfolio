/**
 * Hook for touch interaction feedback
 * Provides visual feedback on touch events
 */

import { useRef, useCallback } from 'react';

interface TouchFeedbackOptions {
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
  duration?: number;
}

export const useTouchFeedback = (options: TouchFeedbackOptions = {}) => {
  const { onTouchStart, onTouchEnd, duration = 200 } = options;
  const elementRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchStart = useCallback(() => {
    if (!elementRef.current) return;

    elementRef.current.style.transform = 'scale(0.98)';
    elementRef.current.style.opacity = '0.8';
    onTouchStart?.();
  }, [onTouchStart]);

  const handleTouchEnd = useCallback(() => {
    if (!elementRef.current) return;

    elementRef.current.style.transform = 'scale(1)';
    elementRef.current.style.opacity = '1';

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      if (elementRef.current) {
        elementRef.current.style.transition = 'none';
      }
    }, duration);

    onTouchEnd?.();
  }, [duration, onTouchEnd]);

  return {
    ref: elementRef,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: handleTouchEnd,
    },
  };
};

export default useTouchFeedback;
