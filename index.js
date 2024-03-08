#!/usr/bin/env node
const axios = require("axios");
require('dotenv').config();

const BASE_PATH = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.WEATHER_APP_KEY;

const prompt = (message, callback) => {
  const stdin = process.stdin;
  const stdout = process.stdout;

  stdin.resume();
  stdout.write(message);

  stdin.once("data", (data) => {
    callback(data.toString().trim());
  });
};

prompt("Enter a location or a postal code: ", function (location) {
  if (!location) {
    console.log("Please try again");
    process.exit();
  }

  axios
    .get(`${BASE_PATH}?q=${location}&units=imperial&appid=${API_KEY}`)
    .then((response) => {
      const weather = response;
      const message = `\nCurrent date and time: ${weather.headers.date}\nIt's ${weather.data.main.temp} Farhnheit degrees in ${location}\nWith pressure of ${weather.data.main.pressure} hPa and wind speed of ${weather.data.wind.speed} m/s\nCloud cover is ${weather.data.clouds.all}% and visibility is ${weather.data.visibility} metres.`;

      console.log(message);
      process.exit();
    })
    .catch((err) => {
      console.log(`Error: ${err.response.data.message}`);
      process.exit();
    });
});