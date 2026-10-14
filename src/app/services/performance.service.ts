import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor() { }

  /**
   * Measure page load time
   */
  measurePageLoadTime(): number {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation.loadEventEnd - navigation.loadEventStart;
  }

  /**
   * Measure time to first contentful paint
   */
  measureFirstContentfulPaint(): number {
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
    return fcp ? fcp.startTime : 0;
  }

  /**
   * Measure time to interactive
   */
  measureTimeToInteractive(): number {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation.domInteractive - navigation.fetchStart;
  }

  /**
   * Get memory usage
   */
  getMemoryUsage(): any {
    if ('memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  }

  /**
   * Log performance metrics
   */
  logPerformanceMetrics(): void {
    const metrics = {
      pageLoadTime: this.measurePageLoadTime(),
      firstContentfulPaint: this.measureFirstContentfulPaint(),
      timeToInteractive: this.measureTimeToInteractive(),
      memoryUsage: this.getMemoryUsage()
    };

    console.log('Performance Metrics:', metrics);
  }
}