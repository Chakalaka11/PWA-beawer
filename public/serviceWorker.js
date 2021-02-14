
// SERVICE WORKER

const CACHE = 'roadsync-cache';

self.addEventListener("install", function (e) {
    precache();
})

self.addEventListener("fetch", function (e) {
})

function precache() {
    return caches.open(CACHE).then(function (cache) {
      return cache.addAll([
        './index.html',
      ]);
    });
  }