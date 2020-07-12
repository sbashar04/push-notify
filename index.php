<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Push Notification</title>
</head>

<body>

    <div class="hidden-data">
        <input type="hidden" name="country" id="campaignId" value="<?php echo $_GET['cid'];?>">
        <input type="hidden" name="ipAddress" id="ipAddress" value="<?php echo $_GET['ip'];?>">
        <input type="hidden" name="country" id="country" value="<?php echo $_GET['country'];?>">
    </div>
    <button onclick="subscribe()" type="button">
        Subscribe
    </button>
    
    <script src="index.js"></script>
</body>

</html>