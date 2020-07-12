var push = require('web-push')

let vapidKeys = {
    publicKey: 'BJsoS02KjUIi17A5VpmSRWleNMZSe979eeiUOXiknrIJpHnQhErDTpIQpQe1sBV3Q3hU3YfQ4QRnm4YK2BU5ZGw',
    privateKey: 'SnPZSfIOIKu2M5L8zdN7ptwNIMmGs3Vwc5GJ960H3pM'
};

push.setVapidDetails('mail:sbashar04@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = { endpoint: "https://fcm.googleapis.com/fcm/send/dYTHY97UeZY:APA91bHxFCRAW_f9lzlzVo4HZZXeEdxs_2d0XPaWF2SEamUsvmR7RQHQIMnlfCotcRTn6leo5s6k5aj_PxLqNd9xiku9Kxd_bUqkMLyKDA-lKRkhbNfARsPKndFeyKPkbBaXltpGh2bK", 
expirationTime: null, 
keys: { p256dh: "BAEKn0Buxo4ipWalg1FMDkFuYO8ezgXe1XEz-a5BzHvH_vQ4e7BxZmIj3_xGMUPufU-Uo2VzSo1oalYosfyRm3Q", auth: "YGk-Pqm8iSiSFtI970Ie1A" } };

push.sendNotification(sub, 'New Message from Shafiul Bashar');