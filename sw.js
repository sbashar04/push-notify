self.addEventListener('push', function(event) {
    console.log(event);
    const options = {
        body: event.data.body,
        icon: event.data.icon,
        vibrate: [100, 50, 100],
        tag: 'push_notify',
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            { action: "explore", title: "Explore this new world", icon: event.data.positive_icon },
            { action: "close", title: "Close", icon: event.data.negative_icon }
        ]
    };
    event.waitUntil(self.registration.showNotification(event.data.title, options));
})