const express = require("express");
const app = express();
const https = require("https")
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99";

const port = 3000;

app.get("/", (req,res) => {

    https.get(apiUrl, (response) => {
        console.log(response)
    })

    res.send("hello world")


});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});
