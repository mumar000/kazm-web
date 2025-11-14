export const measurePerformance = () => {
  if (typeof window === 'undefined') return;

  // Measure page load performance
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = window.performance.getEntriesByType('navigation')[0];
      
      if (perfData) {
        console.log('Performance Metrics:', {
          'DNS Lookup': `${perfData.domainLookupEnd - perfData.domainLookupStart}ms`,
          'TCP Connection': `${perfData.connectEnd - perfData.connectStart}ms`,
          'Request Time': `${perfData.responseStart - perfData.requestStart}ms`,
          'Response Time': `${perfData.responseEnd - perfData.responseStart}ms`,
          'DOM Processing': `${perfData.domComplete - perfData.domInteractive}ms`,
          'Total Load Time': `${perfData.loadEventEnd - perfData.fetchStart}ms`,
        });
      }

      // Measure Core Web Vitals if available
      if ('PerformanceObserver' in window) {
        try {
          // Largest Contentful Paint (LCP)
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay (FID)
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log('FID:', entry.processingStart - entry.startTime);
            });
          }).observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift (CLS)
          let clsScore = 0;
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsScore += entry.value;
                console.log('CLS:', clsScore);
              }
            });
          }).observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.log('Performance Observer not fully supported');
        }
      }
    }, 0);
  });
};
