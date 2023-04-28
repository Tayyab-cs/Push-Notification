const express = require("express");
const app = express();
const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require('path');


// Set static path
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

const publicVapidKey = 'BIrFl73VnS2fb2uaKTm5vzeCvsnSD2A-LCpf6v8MUlU2bdqEqxyK2FreAhfbyWSOl20HiwrHRKE2V-Cit26ABWc';
const privateVapidKey = 'UFpMu5tPdoatl-KL5qUjimTDHObp9Dq3yvSM-KDlwTI';

webpush.setVapidDetails('mailto:mughaltayyab693@gmail.com', publicVapidKey, privateVapidKey);

//Subscribe Route
app.post("/subscribe", (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;

    // Send 201 - resource created
    res.status(201).json({});

    // Create payload
    const payload = JSON.stringify({ title: "Push Test" });
    console.log(`payload: ${payload}`)

    // Pass onject into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));

});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));