const axios = require("axios");

async function getWeatherByCity(city, apiKey) {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const data = response.data;
        const weather = {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
        };
        return weather;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}

module.exports = getWeatherByCity;