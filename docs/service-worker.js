const CACHE_NAME = "python-curso-v1";

const ARCHIVOS_INICIALES = [
  "/python_1/",
  "/python_1/clase1/01_variables_y_nomenclatura/",
  "/python_1/manifest.webmanifest",
  "/python_1/assets/icons/icon-192.png",
  "/python_1/assets/icons/icon-512.png",
  "/python_1/assets/icons/apple-touch-icon.png"
];

self.addEventListener("install", function (evento) {
  evento.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(ARCHIVOS_INICIALES);
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", function (evento) {
  evento.waitUntil(
    caches.keys().then(function (nombres) {
      return Promise.all(
        nombres
          .filter(function (nombre) {
            return nombre !== CACHE_NAME;
          })
          .map(function (nombre) {
            return caches.delete(nombre);
          })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", function (evento) {
  if (evento.request.method !== "GET") {
    return;
  }

  evento.respondWith(
    fetch(evento.request)
      .then(function (respuesta) {
        const copia = respuesta.clone();

        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(evento.request, copia);
        });

        return respuesta;
      })
      .catch(function () {
        return caches.match(evento.request);
      })
  );
});