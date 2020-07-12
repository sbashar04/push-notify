var campaignId = document.querySelector('#campaignId').value;
var userIp = document.querySelector('#ipAddress').value;
var userCountry = document.querySelector('#country').value;

addEventListener('load', async () => {
    var sw = await navigator.serviceWorker.register('./sw.js');
})

async function subscribe() {
    try {
        var sw = await navigator.serviceWorker.ready;
        var push = await sw.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: 'BJsoS02KjUIi17A5VpmSRWleNMZSe979eeiUOXiknrIJpHnQhErDTpIQpQe1sBV3Q3hU3YfQ4QRnm4YK2BU5ZGw'
        });
        push.campaignId = campaignId;
        push.country = userCountry;
        push.userIp = userIp;
        subscribeNotification(JSON.stringify(push));
    } catch (e) {
        console.log("Permission denied");
    }
}

function subscribeNotification(body) {
    fetch('https://www.taratarids.com/subscribe', {
        method: 'post',
        body: {content: body},
    }).then(response => response.json()).then(function (data) {
        console.log('Subscribed to server successfully. ' + JSON.stringify(data));
    });
}