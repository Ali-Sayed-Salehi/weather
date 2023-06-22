const express = require("express");
const app = express();
const https = require("https");
const apiKey = "3a862f8d74edc685a84b7c2b48cbb45f";
let latitude = 44.50;
let longitude = -73.56;

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?
lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

const port = 3000;

app.get("/", (req,res) => {
    https.get(apiUrl, (response) => {
        response.on("data", (data) => {
            console.log(response.statusCode);
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const iconLink = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            console.log(weatherDescription);
            res.write("<h1>The weather in Montreal is: " + weatherDescription + "<h1\>");
            res.write("<h2>The temperature is: " + temp + " degress Celcius<h2\>");
            res.write("<img src=" + iconLink + ">");
            res.send();
        })
    });

});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
});
