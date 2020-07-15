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
            { action: "see_web", title: "See in Web", icon: pData.data.positive_icon },
            { action: "close", title: "Close", icon: pData.data.negative_icon }
        ],
        onClick: function(){
            window.open("https://www.google.com");
        }
    };
    event.waitUntil(self.registration.showNotification(pData.data.title, options));
})

self.addEventListener('notificationclick', function(event) {    
        event.notification.close();  
        console.log(event);
    }, false
);