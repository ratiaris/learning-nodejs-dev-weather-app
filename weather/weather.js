require('dotenv').config();
const request = require('request');

const darkSkyAPIKey = process.env.DARK_SKY_API_KEY

let getWeather = (latitude, longitude, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${darkSkyAPIKey}/${latitude},${longitude}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        callback(`An unexpected error prevented connection to the weather service: ${error}`)
      } else if (response.statusCode === 400) {
        console.log('Unable to fetch information from weather service')
      } else if (response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature

        });
      }
    });
};

module.exports = {
  getWeather: getWeather
};
