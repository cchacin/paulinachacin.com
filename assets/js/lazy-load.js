// Lazy load images for better performance
(function() {
  // Use native lazy loading if available, otherwise use Intersection Observer
  const images = document.querySelectorAll('img[loading="lazy"]');

  // Check if browser supports native lazy loading
  if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported - images will load automatically
    images.forEach(img => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
    });
  } else {
    // Fallback to Intersection Observer for older browsers
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Fade in images when loaded
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
  });
})();
