const CACHE_NAME = 'praxis-v1';
const STATIC_CACHE = 'praxis-static-v1';
const DYNAMIC_CACHE = 'praxis-dynamic-v1';

// Arquivos para cache estático (CSS, JS, imagens)
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/logo.webp',
  '/dashpraxis.webp'
];

// Estratégias de cache
const cacheStrategies = {
  // Cache First para assets estáticos
  cacheFirst: async (request) => {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    try {
      const networkResponse = await fetch(request);
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    } catch (error) {
      return new Response('Network error', { status: 408 });
    }
  },

  // Network First para API calls
  networkFirst: async (request) => {
    try {
      const networkResponse = await fetch(request);
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    } catch (error) {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }
      return new Response('Network error', { status: 408 });
    }
  },

  // Stale While Revalidate para recursos que mudam pouco
  staleWhileRevalidate: async (request) => {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);
    
    const fetchPromise = fetch(request).then((networkResponse) => {
      cache.put(request, networkResponse.clone());
      return networkResponse;
    });

    return cachedResponse || fetchPromise;
  }
};

// Install event - cache estático
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Activate event - limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - estratégias de cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Cache strategy based on request type
  if (request.destination === 'image') {
    event.respondWith(cacheStrategies.staleWhileRevalidate(request));
  } else if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(cacheStrategies.cacheFirst(request));
  } else if (url.pathname.startsWith('/api/')) {
    event.respondWith(cacheStrategies.networkFirst(request));
  } else {
    event.respondWith(cacheStrategies.staleWhileRevalidate(request));
  }
});

// Background sync para offline
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Implementar sincronização em background
  console.log('Background sync triggered');
}
