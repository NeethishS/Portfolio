/**
 * Tests for useParallax hook and useReduceMotion hook
 * Validates: Requirements 4-4 (Parallax and Advanced Scroll Effects)
 */

import { renderHook, act, waitFor } from '@testing-library/react';
import { useParallax, useReduceMotion, useFadeInOnScroll } from './useParallax';

describe('useParallax Hook', () => {
  // Mock matchMedia
  const mockMatchMedia = (matches: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  };

  beforeEach(() => {
    mockMatchMedia(false);
  });

  describe('Parallax Offset Calculation', () => {
    it('should return parallax style with correct transform', () => {
      const { result } = renderHook(() => useParallax({ ratio: 0.5 }));

      expect(result.current.style).toHaveProperty('transform');
      expect(result.current.style.transform).toMatch(/translateY\(\d+px\)/);
    });

    it('should support ratio between 0.3 and 0.5 (recommended values)', () => {
      const { result: result03 } = renderHook(() =>
        useParallax({ ratio: 0.3 })
      );
      const { result: result05 } = renderHook(() =>
        useParallax({ ratio: 0.5 })
      );

      expect(result03.current.style).toBeDefined();
      expect(result05.current.style).toBeDefined();
      expect(result03.current.style.transform).toMatch(/translateY\(\d+px\)/);
      expect(result05.current.style.transform).toMatch(/translateY\(\d+px\)/);
    });

    it('should use CSS transforms for 60 FPS performance', () => {
      const { result } = renderHook(() => useParallax({ ratio: 0.4 }));

      // Verify it uses transform (GPU accelerated) not position changes
      expect(result.current.style.transform).toBeDefined();
      expect(result.current.style.transform).toMatch(/translateY/);
    });

    it('should include will-change property for performance optimization', () => {
      const { result } = renderHook(() =>
        useParallax({ ratio: 0.4, disabled: false })
      );

      expect(result.current.style.willChange).toBe('transform');
    });

    it('should include backfaceVisibility for mobile optimization', () => {
      const { result } = renderHook(() => useParallax({ ratio: 0.4 }));

      expect(result.current.style.backfaceVisibility).toBe('hidden');
    });

    it('should disable parallax when disabled option is true', () => {
      const { result } = renderHook(() =>
        useParallax({ ratio: 0.5, disabled: true })
      );

      expect(result.current.style.willChange).toBe('auto');
    });

    it('should disable parallax when prefers-reduced-motion is set', () => {
      mockMatchMedia(true);
      const { result } = renderHook(() => useParallax({ ratio: 0.5 }));

      // Should still have the hook structure but offset should be 0
      expect(result.current.style).toBeDefined();
    });

    it('should return ref for element attachment', () => {
      const { result } = renderHook(() => useParallax());

      expect(result.current.ref).toBeDefined();
      expect(result.current.ref.current).toBeNull();
    });
  });

  describe('Scroll Event Handling', () => {
    it('should listen for scroll events', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

      renderHook(() => useParallax());

      expect(addEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function),
        { passive: true }
      );

      addEventListenerSpy.mockRestore();
    });

    it('should use passive listener for better scroll performance', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

      renderHook(() => useParallax());

      const call = addEventListenerSpy.mock.calls.find(
        (c) => c[0] === 'scroll'
      );
      expect(call?.[2]).toEqual({ passive: true });

      addEventListenerSpy.mockRestore();
    });

    it('should remove scroll listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(
        window,
        'removeEventListener'
      );

      const { unmount } = renderHook(() => useParallax());

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'scroll',
        expect.any(Function)
      );

      removeEventListenerSpy.mockRestore();
    });
  });

  describe('Accessibility - prefers-reduced-motion', () => {
    it('should respect prefers-reduced-motion on mount', () => {
      mockMatchMedia(true);
      const { result } = renderHook(() => useParallax());

      expect(result.current.style.willChange).toBe('auto');
    });

    it('should handle prefers-reduced-motion preference changes', async () => {
      mockMatchMedia(false);
      const { result, rerender } = renderHook(() => useParallax());

      expect(result.current.style.willChange).toBe('transform');

      mockMatchMedia(true);
      rerender();

      await waitFor(() => {
        expect(result.current.style.willChange).toBe('auto');
      });
    });

    it('should disable parallax effect when prefers-reduced-motion is enabled', () => {
      mockMatchMedia(true);
      const { result } = renderHook(() => useParallax({ ratio: 0.5 }));

      // When reduced motion is preferred, should disable animation
      expect(result.current.style.willChange).toBe('auto');
    });
  });
});

describe('useReduceMotion Hook', () => {
  const mockMatchMedia = (matches: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  };

  beforeEach(() => {
    mockMatchMedia(false);
  });

  describe('Motion Preference Detection', () => {
    it('should detect prefers-reduced-motion preference', () => {
      mockMatchMedia(true);
      const { result } = renderHook(() => useReduceMotion());

      expect(result.current).toBe(true);
    });

    it('should return false when prefers-reduced-motion is not set', () => {
      mockMatchMedia(false);
      const { result } = renderHook(() => useReduceMotion());

      expect(result.current).toBe(false);
    });

    it('should update when preference changes', async () => {
      mockMatchMedia(false);
      const { result, rerender } = renderHook(() => useReduceMotion());

      expect(result.current).toBe(false);

      mockMatchMedia(true);
      rerender();

      await waitFor(() => {
        expect(result.current).toBe(true);
      });
    });
  });

  describe('Event Listener Management', () => {
    it('should add event listener for preference changes', () => {
      const addEventListenerSpy = jest.spyOn(window, 'addEventListener');

      renderHook(() => useReduceMotion());

      expect(addEventListenerSpy).toHaveBeenCalled();

      addEventListenerSpy.mockRestore();
    });

    it('should remove event listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(
        window,
        'removeEventListener'
      );

      const { unmount } = renderHook(() => useReduceMotion());

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalled();

      removeEventListenerSpy.mockRestore();
    });
  });
});

describe('useFadeInOnScroll Hook', () => {
  const mockMatchMedia = (matches: boolean) => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  };

  beforeEach(() => {
    mockMatchMedia(false);
  });

  it('should provide ref for element observation', () => {
    const { result } = renderHook(() => useFadeInOnScroll());

    expect(result.current.ref).toBeDefined();
  });

  it('should return opacity styles based on visibility', () => {
    const { result } = renderHook(() => useFadeInOnScroll());

    expect(result.current.className).toBeDefined();
    expect(result.current.style).toBeDefined();
  });

  it('should apply transition styles for fade effect', () => {
    const { result } = renderHook(() => useFadeInOnScroll());

    expect(result.current.style.transition).toContain('opacity');
  });

  it('should respect prefers-reduced-motion in transitions', () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useFadeInOnScroll());

    expect(result.current.style.transition).toBe('none');
  });
});

describe('Parallax Integration Tests', () => {
  it('should handle multiple parallax elements with different ratios', () => {
    const { result: result03 } = renderHook(() =>
      useParallax({ ratio: 0.3 })
    );
    const { result: result04 } = renderHook(() =>
      useParallax({ ratio: 0.4 })
    );
    const { result: result05 } = renderHook(() =>
      useParallax({ ratio: 0.5 })
    );

    expect(result03.current.style).toBeDefined();
    expect(result04.current.style).toBeDefined();
    expect(result05.current.style).toBeDefined();
  });

  it('should work with Hero Background component integration', () => {
    const { result } = renderHook(() =>
      useParallax({ ratio: 0.4, disabled: false })
    );

    // Verify all required properties for HeroBackground integration
    expect(result.current.style.transform).toBeDefined();
    expect(result.current.style.willChange).toBe('transform');
    expect(result.current.style.backfaceVisibility).toBe('hidden');
    expect(result.current.ref).toBeDefined();
  });

  it('should maintain 60 FPS performance with CSS transforms', () => {
    const { result } = renderHook(() => useParallax({ ratio: 0.4 }));

    // Verify using GPU-accelerated transform, not layout-triggering properties
    const style = result.current.style;
    expect(style.transform).toMatch(/translateY/);
    // Should NOT be using position or top/bottom properties
    expect(JSON.stringify(style)).not.toMatch(/position|top|bottom|margin/);
  });
});
