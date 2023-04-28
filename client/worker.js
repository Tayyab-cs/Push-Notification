// SERVICE WORKER IS USED FOR SHOWING THE NOTIFICATIONS.

console.log('Service Worker Loaded...');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Received...');
    self.registration.showNotification(data.title, {
        body: 'Notification from Muhmmad Tayyab',
        icon: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'
    })
})