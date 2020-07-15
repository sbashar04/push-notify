self.addEventListener('push', function (event) {
    var pData = event.data.json(); // Get the data pushed from server.
    console.log(pData);
    const options = {
        body: pData.data.body,
        icon: pData.data.icon,
        vibrate: [100, 50, 100],
        tag: 'push_notify',
        image: pData.data.image,
        lang: pData.data.lang,
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1,
            seeWebLink: pData.data.web_link
        },
        actions: [
            { action: "see_web", title: "See in Web", icon: pData.data.positive_icon },
            { action: "close", title: "Close", icon: pData.data.negative_icon }
        ]
    };
    event.waitUntil(self.registration.showNotification(pData.data.title, options));
})

self.addEventListener('notificationclick', function (event) {
    console.log(event);
    var notification = event.notification;
    var action = event.action;
    if (action == 'see_web') {
        clients.openWindow(notification.data.seeWebLink);
        notification.close();
    } else {
        notification.close();
    }
});