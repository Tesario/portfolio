const CACHE_NAME = "vojtech-tesar-cache";
//const urlsToCache = ["/wp-content/themes/gynpoint/css/style.min.css"];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

// self.addEventListener("fetch", (e) => {
//   e.respondWith(
//     caches.match(e.request).then((response) => response || fetch(e.request))
//   );
// });
