var push = require('web-push')

let vapidKeys = {
    publicKey: 'BJsoS02KjUIi17A5VpmSRWleNMZSe979eeiUOXiknrIJpHnQhErDTpIQpQe1sBV3Q3hU3YfQ4QRnm4YK2BU5ZGw',
    privateKey: 'SnPZSfIOIKu2M5L8zdN7ptwNIMmGs3Vwc5GJ960H3pM'
};

push.setVapidDetails('mail:sbashar04@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/cPpTBMfy2E8:APA91bHRGs9urNe4BhxpEFP8f6cl2o3Tqb70h9kwcqmoEzmsN5eHIwXn1AEibitCJgc5ENFx678XWgE5vlBnxZaKb05dxtzdGKASpdRhv6QAXWRi76WotPbbsvTRaXWetolIYuvC6mYk", "expirationTime": null, "keys": { "p256dh": "BBcSRRAWOLAjergy1PmaDJsFgErhqpVMkLaHrRaBcAAJZ2UfSMFtwezCYdfqy-2u489h4qAOG88JU2BOhr0udFg", "auth": "oeCHszIjsjVWOxIJgu4R5g" } };

push.sendNotification(sub, 'This is notification testing');