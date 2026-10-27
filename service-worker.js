const CACHE = 'noor-pos-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // POS Firebase se live data leta hai, isliye hamesha network use hoga
});
