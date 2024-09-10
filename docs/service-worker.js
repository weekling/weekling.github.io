importScripts('./ngsw-worker.js');

self.addEventListener('push', event => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    icon: 'assets/icons/android/logo-notif.png',
    badge: 'assets/icons/android/badge.png',
    body: data.content,
    data: data,
    tag: data.tag,
    vibrate: [200]
  });
});

// self.addEventListener('notificationclick', event => {
//   console.log('Notification click event');
//
//   event.notification.close(); // Close the notification
//
//   event.waitUntil(
//     clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
//       for (const client of clientList) {
//         // If the PWA is already open, focus it
//         if (client.url === event.notification.data.url && 'focus' in client) {
//           return client.focus();
//         }
//       }
//       // If the PWA is not open, open a new window
//       if (clients.openWindow) {
//         return clients.openWindow(event.notification.data.url);
//       }
//     })
//   );
// });

