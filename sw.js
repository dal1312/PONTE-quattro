const CACHE_NAME = 'alponte-v10';
const urlsToCache = [
    './',
    './index.html',
    './menu.html',
    './ordina.html',
    './contatti.html',
    './css/styles.css',
    './js/main.js',
    './manifest.json',
    './favicon.ico',
    './images/favicon.png',
    './images/apple-touch-icon.png',
    './images/icon-192.png',
    './images/icon-512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
    self.skipWaiting();
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;

    const requestUrl = new URL(event.request.url);
    if (requestUrl.origin !== self.location.origin) {
        event.respondWith(fetch(event.request));
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(response => {
                if (response && response.ok) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => cache.put(event.request, responseClone));
                }
                return response;
            })
            .catch(() => caches.match(event.request)
                .then(response => response || caches.match('./index.html')))
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        }).then(() => self.clients.claim())
    );
});
