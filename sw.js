const date = new Date();
const CACHE_NAME = `cache-${date.getFullYear()}-${date.getMonth()}`;
const urlsToCache = [
  "/",
  "/main.css",
  "/scripts/cdn.js",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", e => {
  var cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if(cacheWhitelist.indexOf(cacheName) == -1){
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(event.request).then(res => {
      if (res) {
        return res;
      }

      let fetchRequest = e.request.clone();

      return fetch(fetchRequest).then(res => {
        if (!res || res.status !== 200 || res.type !== "basic") {
          return res;
        }

        let responseToCache = res.clone();

        caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, responseToCache);
        });

        return res;
      });
    })
  );
});
