const staticPwaADS = "cache_web_app_ads_upf"
const assets = [
 "/",
 "pwateste/index.html",
 "pwateste/pwateste/formulario.html",
 "pwateste/pwateste/outros.html",
 "pwateste/fotos.html",
 "pwateste/manifest.json",
 "pwateste/panda.png",
 "pwateste/sea_turtle.jpg",
 "pwateste/elefante.jpg",
 "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
 "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
 "pwateste/icons/icon-512x512.png",
 "pwateste/icons/icon-384x384.png",
 "pwateste/icons/icon-256x256.png",
 "pwateste/icons/icon-192x192.png",
 "pwateste/icons/icon-152x152.png",
 "pwateste/icons/icon-144x144.png",
 "pwateste/icons/icon-96x96.png",
 "pwateste/icons/icon-72x72.png",
 "pwateste/icons/icon-48x48.png",
]

self.addEventListener("install", installEvent => {
 installEvent.waitUntil(
   caches.open(staticPwaADS).then(cache => {
     cache.addAll(assets)
   })
 )
})

self.addEventListener("fetch", fetchEvent => {
   fetchEvent.respondWith(
     caches.match(fetchEvent.request).then(res => {
       return res || fetch(fetchEvent.request)
     })
   )
 })
