"use strict";var precacheConfig=[["/my-profile/index.html","d575b8b959011526e1cc7f61ad4cbc0c"],["/my-profile/static/css/main.1cfec9c3.css","37e50ce2761b58d204a9b61f10585a34"],["/my-profile/static/js/main.7f7c914d.js","6daa5fe51dfcfbcb64c7e7a9d181fe5e"],["/my-profile/static/media/Cash-Receipt.5de7dc95.png","5de7dc95b9a8bc73d7611cda497e33dd"],["/my-profile/static/media/CoverPage.35468f62.jpg","35468f629ce921c683206fae15d23eec"],["/my-profile/static/media/DutySlip.d12774b3.png","d12774b3eb8640c5152baec5bacef6f4"],["/my-profile/static/media/Inspirations.09b2cbeb.jpg","09b2cbeb09445ec9e0b8ea3aab652ed4"],["/my-profile/static/media/Invite.7f805aa5.jpg","7f805aa57e1f3f10a1f97ba309e8c9dd"],["/my-profile/static/media/J_K.27fb6247.jpg","27fb62470999530fd21f149136fa07dd"],["/my-profile/static/media/Kerela.54cc4125.jpg","54cc4125955f0b42c6133ad720fe22b2"],["/my-profile/static/media/MP.116b00e6.jpg","116b00e6de36b5754f6ba86cc958cd68"],["/my-profile/static/media/Rajsthan.2d378291.jpg","2d3782918203c69187f2845ec78096c3"],["/my-profile/static/media/VisitingCard.6fae7b08.jpg","6fae7b0845aaa514a08fbc87beb9f4e0"],["/my-profile/static/media/VisitingCard_Back.fafec396.jpg","fafec396da57786256db5b8defb6f077"],["/my-profile/static/media/WestBengal.f9c90cd0.jpg","f9c90cd097ddcfe7ebfe7929a5b5809b"],["/my-profile/static/media/educare.b9c20159.jpg","b9c20159f2e4f94bb9f0456dd3c17e77"],["/my-profile/static/media/foodfest.f3e344e7.jpg","f3e344e7b2a61e7b9987baa00746cb45"],["/my-profile/static/media/foodfestback.003a75bd.jpg","003a75bd0a809e8884b81fb3bb2f3966"],["/my-profile/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/my-profile/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/my-profile/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/my-profile/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/my-profile/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/my-profile/static/media/letterhead_new.ae550e7e.png","ae550e7e289f7fc81c9996971cb5ea54"],["/my-profile/static/media/magicpin-partner.e9e83553.png","e9e835539581c5e873fa1fb62cdeace0"],["/my-profile/static/media/magicpin.ca443164.png","ca443164ef4cd78940bbbf0cce287258"],["/my-profile/static/media/me.40a619f1.png","40a619f1b382a344ea28820693baa04c"],["/my-profile/static/media/resume.4d780611.pdf","4d780611c5b84be7aa4c3bc42ade87b0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,r){var c=new URL(e);return r&&c.pathname.match(r)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],r=new URL(a,self.location),c=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),e=urlsToCacheKeys.has(t));var c="/my-profile/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});