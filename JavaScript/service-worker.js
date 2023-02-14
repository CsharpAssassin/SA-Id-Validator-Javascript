self.addEventListener('push', function (event) {
    console.log('Push notification received:', event);

    if (event.data) {
        // Display the push notification message
        self.registration.showNotification('My Push Notification', {
            body: event.data.text()
        });
    }
});
