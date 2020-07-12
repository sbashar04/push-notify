var push = require('web-push')

let vapidKeys = {
    publicKey: 'BJsoS02KjUIi17A5VpmSRWleNMZSe979eeiUOXiknrIJpHnQhErDTpIQpQe1sBV3Q3hU3YfQ4QRnm4YK2BU5ZGw',
    privateKey: 'SnPZSfIOIKu2M5L8zdN7ptwNIMmGs3Vwc5GJ960H3pM'
};

push.setVapidDetails('mail:sbashar04@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'New Message from Shafiul Bashar');