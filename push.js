var push = require('web-push')

let vapidKeys = {
    publicKey: 'BJsoS02KjUIi17A5VpmSRWleNMZSe979eeiUOXiknrIJpHnQhErDTpIQpQe1sBV3Q3hU3YfQ4QRnm4YK2BU5ZGw',
    privateKey: 'SnPZSfIOIKu2M5L8zdN7ptwNIMmGs3Vwc5GJ960H3pM'
};

push.setVapidDetails('mail:sbashar04@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/fd5buBATVIo:APA91bHhujzhAotNQ5DtmnIuCDmNi7dWS2Qv2f993gnk0kRpxuvaTrB6BbesO0DOoEgDT5BprCLZwcY3kB50ZLL7iECN_K_bU92pp1XZvaC_b5y6gb4HhKLZluwKG-WHt-gB4x4WXIiS", "expirationTime": null, "keys": { "p256dh": "BNmy-icvd1dKIjEZOU1GixfuD8QbDUgAIdF-2GLaDgOAYLsQJbd9RgFeqixXF3FUwEop189XJxjgtfNfcCGJnrw", "auth": "uQF3XDdF58ZUWK3GmwhJCw" } };

push.sendNotification(sub, 'This is notification testing');