const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT || 3000;
const getWeatherByCity = require("./utils/getWatherByCity");
const path = require('path');
require("dotenv").config();

app.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
    const cities = ["Lviv", "Ternopil", "Odesa", "Kyiv", "Cherkasy", "Obukhiv"];
    res.render("index", { cities });
});

app.get("/weather/:city", async (req, res) => {
    const city = req.params.city;
    try {
        const weather = await getWeatherByCity(city, process.env.WEATHER_API_KEY);
        res.render("weather", { weather });
    } catch (e) {
        console.error("Error fetching data:", e);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
