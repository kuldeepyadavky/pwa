// Define a static cache name for the service worker
const staticPage = 'for-the-cult';

// List of assets to be cached, including images from both assets/icons and assets/images directories
const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js',
  '/assets/icons/icon-36x36.png',
  '/assets/icons/icon-48x48.png',
  '/assets/icons/icon-72x72.png',
  '/assets/icons/icon-96x96.png',
  '/assets/icons/icon-128x128.png',
  '/assets/icons/icon-144x144.png',
  '/assets/icons/icon-152x152.png',
  '/assets/icons/icon-192x192.png',
  '/assets/icons/icon-384x384.png',
  '/assets/icons/icon-512x512.png',
  '/assets/images/bella.jpeg',
  '/assets/images/full-power.jpeg',
  '/assets/images/raftaar.jpg',
  '/assets/images/the-siege.jpeg',
  '/assets/images/young-stunners.jpeg',
  '/assets/images/divine.jpeg',
  '/assets/images/karma.jpeg',
  '/assets/images/seedhe-maut.jpeg',
  '/assets/images/yashraj.jpeg',
];

// Install event: caches specified assets during the service worker's installation
self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticPage).then(cache => {
      // Open the cache and add all assets to it
      return cache.addAll(assets);
    })
  );
});

// Fetch event: serves cached assets or fetches them from the network if not cached
self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(cachedResponse => {
      console.log('is cache presenet', cachedResponse);
      // Check if the request is in the cache
      // Return the cached response if found, otherwise fetch from the network
      return cachedResponse || fetch(fetchEvent.request);
    })
  );
});
