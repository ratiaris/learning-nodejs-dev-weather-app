require('dotenv').config();

const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// console.log(argv)
geocode.geocodeAddress(argv.address, (error, geocodedAddress) => {
  if (error) {
    console.log(error);
  }
  else {
    // console.log(JSON.stringify(geocodedAddress, undefined, 2));
    console.log(geocodedAddress.address);
    weather.getWeather(geocodedAddress.latitude, geocodedAddress.longitude, (error, weatherInformation) => {
      if (error) {
        console.log(error);
      }
      else {
        console.log(`It's currently ${weatherInformation.temperature} in ${geocodedAddress.address}.\nIt actually feels like ${weatherInformation.apparentTemperature}.`);
      }
    })
  }
});

