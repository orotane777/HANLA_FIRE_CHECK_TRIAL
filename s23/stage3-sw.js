const prefix="hanla-stage3-"+self.registration.scope+"-";
const cacheName=prefix+"a1161ac4a82813bdca";
const files=["inspect.html","assets/inspect-B7XOB1Ya.js","assets/stage3-trial-DpiyO875.js","assets/inspect-BNApY0ix.css"].map(f=>new URL(f,self.registration.scope).href);
self.addEventListener("install",e=>e.waitUntil(caches.open(cacheName).then(c=>c.addAll(files)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(prefix)&&k!==cacheName).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);u.search="";if(e.request.method==="GET"&&files.includes(u.href))e.respondWith(caches.open(cacheName).then(c=>c.match(u.href)).then(r=>r||fetch(e.request)));});
