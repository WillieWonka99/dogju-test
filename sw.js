/* 狗聚 service worker — push notifications only (beta 2026-10-27). No 'fetch' handler and no caching: every visit
   loads the newest page (GitHub Pages + version.json keep doing the updating). The database decides who gets a
   notification and what it says (web/supabase.sql docs_push → Edge Function 'push'); here it is only shown, and a tap
   opens 狗聚 at the screen it is about (data.url is a '#/…' route of this app, nothing else). */
'use strict';
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });

self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = {}; }
  var title = typeof d.title === 'string' && d.title ? d.title.slice(0, 80) : '狗聚';
  var body = typeof d.body === 'string' ? d.body.slice(0, 160) : '';
  var url = typeof d.url === 'string' && /^#\/[A-Za-z_]+(\?[^\s]*)?$/.test(d.url) ? d.url : '#/Main';
  var tag = typeof d.tag === 'string' && /^[A-Za-z0-9_-]{1,80}$/.test(d.tag) ? d.tag : undefined;
  e.waitUntil(self.registration.showNotification(title, {
    body: body, tag: tag, renotify: !!tag,
    icon: 'icons/icon-192.png', badge: 'icons/icon-192.png',
    data: { url: url }
  }));
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var route = (e.notification.data && e.notification.data.url) || '#/Main';
  var target = self.registration.scope + route;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      var c = list[i];
      if (c.url.indexOf(self.registration.scope) === 0 && 'focus' in c) {
        return (c.navigate ? c.navigate(target).catch(function () { return c; }) : Promise.resolve(c)).then(function (w) { return (w || c).focus(); });
      }
    }
    return self.clients.openWindow(target);
  }));
});
