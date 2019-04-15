require('dotenv').config();

const yargs = require('yargs');
const axios = require('axios');

const googleAPIKey = process.env.GOOGLE_API_KEY
const darkSkyAPIKey = process.env.DARK_SKY_API_KEY;

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
let address = argv.address;
let encodedAddress = encodeURIComponent(address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleAPIKey}`;
axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to fund the address: ' + address);
  }
  let result = response.data.results[0];
  let location = result.geometry.location;
  let weatherURL = `https://api.darksky.net/forecast/${darkSkyAPIKey}/${location.lat},${location.lng}`;
  address = result.formatted_address;
  return axios.get(weatherURL);
}).
then((response) => {
  let weatherInformation = response.data.currently;
  console.log(`It's currently ${weatherInformation.temperature} in ${address}.\nIt actually feels like ${weatherInformation.apparentTemperature}.`);
}).catch((error) => {
  if (error.code === 'ENOTFOUND') {
    console.log(`An unexpected error prevented connection to the geolocalisation service: ${error.hostname}`);
  }
  else {
    console.log(error.message);
  }
});


