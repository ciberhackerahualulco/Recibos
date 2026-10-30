// Service worker del recibo de abono.
// Guarda la app y las librerías de PDF/imagen para usarlas sin internet.
// Estrategia: caché primero; si no está, va a la red y guarda la copia.

const CACHE = 'recibo-abono-v4';
const APP = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(APP)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then(hit => {
      if(hit) return hit;
      return fetch(req).then(res => {
        // Guarda también respuestas "opacas" de los CDN (librerías de terceros).
        const copia = res.clone();
        caches.open(CACHE).then(cache => cache.put(req, copia)).catch(() => {});
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
