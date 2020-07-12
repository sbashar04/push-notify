self.addEventListener('push', () => {
    self.registration.sendNotification('This is a test message from push', {});
});

