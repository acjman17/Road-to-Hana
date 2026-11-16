const C="hana-v2";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html"])));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{const r=e.request;
 if(r.mode==="navigate"||r.url.endsWith(".html")||r.url.endsWith("/")){
  e.respondWith(fetch(r).then(x=>{const y=x.clone();caches.open(C).then(c=>c.put(r,y));return x}).catch(()=>caches.match(r).then(x=>x||caches.match("./index.html"))));return}
 e.respondWith(caches.match(r).then(x=>x||fetch(r)))});
