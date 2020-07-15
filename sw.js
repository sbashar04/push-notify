self.addEventListener('push', function(event) {
    var pData = event.data.json(); // Get the data pushed from server.
    console.log(pData);
    const options = {
        body: pData.data.body,
        icon: pData.data.icon,
        vibrate: [100, 50, 100],
        tag: 'push_notify',
        // data: {
        //     dateOfArrival: Date.now(),
        //     primaryKey: '2'
        // },
        actions: [
            { action: "explore", title: "Explore this new world", icon: pData.data.positive_icon },
            { action: "close", title: "Close", icon: pData.data.negative_icon }
        ]
    };
    event.waitUntil(self.registration.showNotification(pData.data.title, options));
})