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
        console.log(JSON.stringify(push));
    } catch (e) {
        console.log("Permission denied" + e);
    }
}