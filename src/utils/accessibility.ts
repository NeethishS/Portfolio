/**
 * Accessibility Utilities
 * Helpers for WCAG 2.1 AA compliance
 */

/**
 * Focus management - Set focus on element with visual feedback
 */
export function setFocus(element: HTMLElement | null): void {
  if (!element) return;
  
  element.focus();
  
  // Ensure focus is visible by scrolling if needed
  if (element.scrollIntoView instanceof Function) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

/**
 * Create and set focus on a skip link
 */
export function createSkipLink(): HTMLAnchorElement {
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = `
    fixed top-0 left-0 z-50 px-4 py-2
    bg-blue-600 text-white font-semibold rounded-br-lg
    transform -translate-y-full focus:translate-y-0
    transition-transform duration-200
    focus:outline-2 focus:outline-offset-2 focus:outline-white
  `;
  skipLink.textContent = 'Skip to main content';
  
  return skipLink;
}

/**
 * Announce text to screen readers
 */
export function announceToScreenReader(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after a delay
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Get next focusable element in a container
 */
export function getNextFocusableElement(
  container: HTMLElement,
  currentElement?: HTMLElement
): HTMLElement | null {
  const focusableElements = Array.from(
    container.querySelectorAll(
      'a, button, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ) as HTMLElement[];

  if (focusableElements.length === 0) return null;

  if (!currentElement) return focusableElements[0];

  const currentIndex = focusableElements.indexOf(currentElement);
  return focusableElements[currentIndex + 1] || focusableElements[0];
}

/**
 * Get previous focusable element in a container
 */
export function getPreviousFocusableElement(
  container: HTMLElement,
  currentElement?: HTMLElement
): HTMLElement | null {
  const focusableElements = Array.from(
    container.querySelectorAll(
      'a, button, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ) as HTMLElement[];

  if (focusableElements.length === 0) return null;

  if (!currentElement) return focusableElements[focusableElements.length - 1];

  const currentIndex = focusableElements.indexOf(currentElement);
  return focusableElements[currentIndex - 1] || focusableElements[focusableElements.length - 1];
}

/**
 * Trap focus within a container (for modals, drawers)
 */
export function setupFocusTrap(
  container: HTMLElement,
  onEscapeKey?: () => void
): () => void {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && onEscapeKey) {
      onEscapeKey();
      return;
    }

    if (event.key !== 'Tab') return;

    const focusableElements = Array.from(
      container.querySelectorAll(
        'a, button, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ) as HTMLElement[];

    if (focusableElements.length === 0) return;

    const activeElement = document.activeElement as HTMLElement;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      // Shift + Tab
      if (activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  };

  container.addEventListener('keydown', handleKeyDown);

  return () => {
    container.removeEventListener('keydown', handleKeyDown);
  };
}

/**
 * Check if element is visible to screen readers
 */
export function isAccessible(element: HTMLElement): boolean {
  // Check for aria-hidden="true"
  if (element.getAttribute('aria-hidden') === 'true') return false;

  // Check for hidden attribute
  if (element.hidden) return false;

  // Check for display: none or visibility: hidden
  const styles = window.getComputedStyle(element);
  if (styles.display === 'none' || styles.visibility === 'hidden') return false;

  // Check if parent is hidden
  const parent = element.parentElement;
  if (parent && parent !== document.body) {
    return isAccessible(parent);
  }

  return true;
}

/**
 * Get accessible name of element (as screen reader would announce)
 */
export function getAccessibleName(element: HTMLElement): string {
  // Check aria-label
  const ariaLabel = element.getAttribute('aria-label');
  if (ariaLabel) return ariaLabel;

  // Check aria-labelledby
  const ariaLabelledBy = element.getAttribute('aria-labelledby');
  if (ariaLabelledBy) {
    const labelElement = document.getElementById(ariaLabelledBy);
    if (labelElement) return labelElement.textContent || '';
  }

  // Check for label element
  if (element.tagName === 'INPUT') {
    const label = document.querySelector(`label[for="${element.id}"]`);
    if (label) return label.textContent || '';
  }

  // Use element's text content
  return element.textContent || '';
}

/**
 * Verify color contrast ratio (simplified WCAG contrast checker)
 */
export function getContrastRatio(rgb1: string, rgb2: string): number {
  const getLuminance = (r: number, g: number, b: number): number => {
    const [rs, gs, bs] = [r, g, b].map(x => {
      x = x / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const parseRgb = (rgb: string): [number, number, number] => {
    const match = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (!match) return [0, 0, 0];
    return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
  };

  const [r1, g1, b1] = parseRgb(rgb1);
  const [r2, g2, b2] = parseRgb(rgb2);

  const lum1 = getLuminance(r1, g1, b1);
  const lum2 = getLuminance(r2, g2, b2);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Test if contrast meets WCAG AA standard
 */
export function meetsWCAGAA(contrastRatio: number, isLargeText: boolean = false): boolean {
  // WCAG AA: 4.5:1 for normal text, 3:1 for large text
  return isLargeText ? contrastRatio >= 3 : contrastRatio >= 4.5;
}

/**
 * SR-only class helper
 */
export const srOnly = `
  sr-only
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
