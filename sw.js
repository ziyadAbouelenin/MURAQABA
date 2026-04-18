// Muraqaba Service Worker
// Bump CACHE_VERSION whenever you deploy an update.
const CACHE_VERSION = 'v12';
const CACHE_NAME    = `muraqaba-cache-${CACHE_VERSION}`;

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap',
];

// ── Install: pre-cache core assets ──────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS.filter(u => !u.startsWith('https://fonts'))))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: remove old caches ─────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key.startsWith('muraqaba-cache-') && key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first for app assets ───────────────────────────────────────
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
