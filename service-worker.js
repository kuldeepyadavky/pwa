// Cache name for this version of the service worker
const staticPage = 'for-the-cult';

// List of assets to cache, including images from both assets/icons and assets/images directories
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
  '/assets/splash/splash-640x1136.png',
  '/assets/splash/splash-750x1294.png',
  '/assets/splash/splash-1242x2148.png',
  '/assets/splash/splash-1125x2436.png',
  '/assets/splash/splash-1536x2048.png',
  '/assets/splash/splash-1668x2224.png',
  '/assets/splash/splash-2048x2732.png',
];

// Install event: caches all assets listed in the assets array
self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(staticPage).then(cache => {
      return cache.addAll(assets); // Cache all specified assets
    })
  );
});

// Fetch event: serves cached assets or fetches them from the network if not in the cache
self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(cachedResponse => {
      console.log('is cache present', cachedResponse);
      // Check if the request is in the cache
      // Return cached response if found, otherwise fetch from the network
      return cachedResponse || fetch(fetchEvent.request);
    })
  );
});

// Push event
self.addEventListener('push', event => {
  console.log('Push event received:', event);
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Notification';
  const options = {
    body: data.body || 'You have a new notification!',
    icon: '/assets/icons/icon-192x192.png',
    badge: '/assets/icons/icon-72x72.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options).then(() => {
      console.log('Notification displayed:', title);
    }).catch(error => {
      console.error('Failed to display notification:', error);
    })
  );
});
