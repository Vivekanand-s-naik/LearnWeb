//install
const CACHE_NAME = 'V1-cache';
const ASSETS_TO_CACHE = [
    'LeetMetric/index.html',
    'LeetMetric/index.js',
    'LeetMetric/style.css',
    'LeetMetric/offline.html'
];

self.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

//fetch
self.addEventListener('fetch',(event)=>{
    console.log("Request : ", event.request);
    event.respondWith(
        caches.match(event.request)
        .then((response)=>{
            return response || fetch(event.request);
        })
        .catch((error)=>{
            return caches.match('/LeetMetric/offline.html');
        })
    );
});

//activate
self.addEventListener('activate', (event)=>{
    event.waitUntil(
        caches.keys()
        .then((cacheName)=>{
            return Promise.all(
                cacheName.map((cache)=>{
                    if (cache!== CACHE_NAME){
                        console.log("Servicee Workerr Deleting Old Cachee.");
                        caches.delete(cache);
                    }
                })
            );

        })
    )
});