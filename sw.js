self.addEventListener('push', function(event) {
    var pData = event.data.json();
    console.log(pData);
    const options = {
        body: pData.body,
        icon: pData.icon,
        vibrate: [100, 50, 100],
        tag: 'push_notify',
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            { action: "explore", title: "Explore this new world", icon: pData.positive_icon },
            { action: "close", title: "Close", icon: pData.negative_icon }
        ]
    };
    event.waitUntil(self.registration.showNotification(pData.title, options));
})