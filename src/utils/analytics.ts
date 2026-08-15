/**
 * Lightweight Analytics Tracking Utility
 * Fulfills Task 5-2: Analytics & monitoring configuration
 */

type AnalyticsEvent = {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: string;
};

class AnalyticsTracker {
  private isDevelopment = typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');
  private storageKey = 'portfolio-analytics-log';

  constructor() {
    if (typeof window !== 'undefined') {
      this.initPageTracking();
      this.initErrorTracking();
    }
  }

  // Initialize pageview tracking based on URL hash changes
  private initPageTracking() {
    this.trackPageView(window.location.hash || '#home');

    window.addEventListener('hashchange', () => {
      this.trackPageView(window.location.hash);
    });
  }

  // Initialize global error tracking
  private initErrorTracking() {
    window.addEventListener('error', (event) => {
      this.trackEvent('Error', 'UnhandledException', event.message);
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackEvent('Error', 'PromiseRejection', String(event.reason));
    });
  }

  // Track page view
  public trackPageView(path: string) {
    const pageName = path ? path.replace('#', '') : 'home';
    this.log('PageView', { page: pageName });
  }

  // Track custom interaction event
  public trackEvent(category: string, action: string, label?: string, value?: number) {
    const event: AnalyticsEvent = {
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
    };
    this.log('Event', event);
  }

  // Log events to storage / console
  private log(type: 'PageView' | 'Event', data: unknown) {
    const logEntry = {
      type,
      data,
      timestamp: new Date().toISOString(),
    };

    if (this.isDevelopment) {
      console.log(`[Analytics] ${type}:`, data);
    }

    // Persist logs in localStorage for demonstration/real-use buffering
    try {
      const existingLogs = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
      existingLogs.push(logEntry);
      // Keep only last 100 entries
      if (existingLogs.length > 100) {
        existingLogs.shift();
      }
      localStorage.setItem(this.storageKey, JSON.stringify(existingLogs));
    } catch (e) {
      // Ignore storage quota issues
    }
  }

  // Retrieve logs for auditing
  public getLogs(): unknown[] {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch (e) {
      return [];
    }
  }

  // Clear logs
  public clearLogs() {
    localStorage.removeItem(this.storageKey);
  }
}

export const analytics = new AnalyticsTracker();
export default analytics;
