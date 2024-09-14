/**
 * Registers the service worker if supported by the browser.
 */
 export const registerServiceWorker = () => {
  // Check if the browser supports service workers
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Register the service worker
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(res => {
          console.log('Service worker registered', res);
        }) // Log success message if registration is successful
        .catch(err => console.error('Service worker not registered', err)); // Log error message if registration fails
    });
  }
};

// Call the function to register the service worker
registerServiceWorker();
