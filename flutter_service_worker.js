'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "37e65b3a992c540c798f3123eeaae2f9",
"assets/AssetManifest.json": "c78f25fdfaa68d16bfce815dcf769093",
"assets/assets/android_icon.png": "e3aec947156074c0b9084d38eb739712",
"assets/assets/android_ios_lottie.json": "6306eeb6b02e7c34eea50cdc6d4a0b39",
"assets/assets/android_studio_icon.png": "8483e2cc2da16128e9ef2f1323d498d7",
"assets/assets/attendance.gif": "10b5907644ef28ab67e53476f09b6283",
"assets/assets/billing.gif": "fd7a5c4ebe058fd470312a74e7209dc5",
"assets/assets/call_lottie.json": "b776a2859949c66a5bb3daa026eca5cd",
"assets/assets/chef.gif": "d0de37b48fb9a500e868bbe724e8f3cd",
"assets/assets/css_icon.png": "c26a73b45b9a801864f13edeb0aa2cfb",
"assets/assets/c_icon.png": "ab9fe4434a9b38826a6a62420e7cc08c",
"assets/assets/developer.png": "dae8cbcd712802b24bca331e5732d615",
"assets/assets/dev_pc.json": "83dcca9bb736e2c3d60c5f4bde727e18",
"assets/assets/dummy.json": "2649eaad9917b6c6787de9877e08e5db",
"assets/assets/firebase_icon.png": "5c0f32341a2a6238f0a90111772f2052",
"assets/assets/flutter_icon.jpg": "67dc5865af6fbe3e060b9ddc23ea262e",
"assets/assets/gmail.gif": "77717561b23592948a4b60b7f259f1f8",
"assets/assets/gps.gif": "668b2eec0b0ea22bca81fefb0b9ce097",
"assets/assets/horizontal_line.json": "4325ddc24d4db40a688a928b6971e346",
"assets/assets/html_icon.png": "664a8c00ef526bf33edf55808601d461",
"assets/assets/insta.gif": "3635d2d57bdd4bd6b4f2e862390c7f3c",
"assets/assets/java_icon.png": "f6cf8a853b650013b40dedb3e6272837",
"assets/assets/js_icon.png": "393623e63f0f3e7bc04632028161ea1e",
"assets/assets/kotlin_icon.png": "2cf9a4b79c73281bfa2bd18d4c590f0b",
"assets/assets/linkedin.gif": "0d965c639dad997285aa1e434c0bc7d5",
"assets/assets/mobile_app.json": "7c461273c4c2ebb553e3be6a953735a3",
"assets/assets/mysql_icon.png": "3a9b43438dfd8f42b096727e82d0d4c7",
"assets/assets/party_paper.json": "5f88eb3a68650e3be24556b7724ba5e3",
"assets/assets/person1.jpg": "d02c41352656c08faa517ad39bb8f668",
"assets/assets/php_icon.png": "d4f731704a039c241ca6c6e6fa02a665",
"assets/assets/prize1.jpg": "0f8319bf18c268e4074a370b996c408e",
"assets/assets/prize2.jpg": "1e5f76c11d899e193f17f981da7dd841",
"assets/assets/project_expo.jpg": "45dba7e2d99ff5a3cde3b4ea49d5f663",
"assets/assets/python_icon.png": "b10eadecfc3e26a9b4ceae882b51c2e5",
"assets/assets/raja.png": "2a51c1958a98e4ad7768370ba9b56ad6",
"assets/assets/raja_profile.jpg": "20ce00827dc169e1e19001b4277b7d17",
"assets/assets/raja_profile2.jpg": "164ead97292390ef7b19c16218a36d35",
"assets/assets/robot.jpg": "dbceba87f65ca9ab434f00b87e2f3e10",
"assets/assets/vs_code_icon.png": "ae14a131d4b43d8d25ce4f6323544cbf",
"assets/assets/web_design.jpg": "7eb1465b751d2b0628b52bdd44dfdb96",
"assets/assets/web_page.jpg": "a094a451472bd7d718da2aa03aafdc2d",
"assets/assets/youtube.json": "3bc60f9363531d9970343eb0d4dc0f8d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "63b06a8ff5fe2c35f3404d5518cffd5d",
"assets/NOTICES": "e4fc09d6d671cae3b8136e680f998f95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99bed77dabab592bb3a016dedd275b8b",
"/": "99bed77dabab592bb3a016dedd275b8b",
"main.dart.js": "de8307b91ee7f1ee91d40fc8eb735969",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
