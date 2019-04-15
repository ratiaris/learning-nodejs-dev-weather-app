require('dotenv').config();
const request = require('request');

const googleAPIKey = process.env.GOOGLE_API_KEY;

let geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let encodedAddress = encodeURIComponent(address);
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${googleAPIKey}`,
      json: true
    }, (error, response, body) => {
      if (error) {
        reject(`An unexpected error prevented connection to the geolocation service: ${error}`)
      }
      else if (body.status === 'ZERO_RESULTS') {
        reject(`Unable to find the address: ${address}`);
      }
      else if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

// geocodeAddress('19146').then((location) => {
geocodeAddress('000000').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});