require('dotenv').config();
const request = require('request');

// const mapQuestAPIKey = process.env.MAPQUEST_API_KEY;
// request({ url : 'http://www.mapquestapi.com/geocoding/v1/address?key=' + mapQuestAPIKey + '&location=1301%20lombard%20street%20philadelphia', json: true}, callback = function (error, response, body) {
//   console.log('\n==================== MapQuest #1 ====================');
//   console.log('error:', error);
//   console.log('status code:', response && response.statusCode);
//   console.log('body:', body);
// });
//
// request({ url : 'http://www.mapquestapi.com/geocoding/v1/address?key=' + mapQuestAPIKey + '&location=1301%20lombard%20street%20philadelphia', json: true}, callback = function (error, response, body) {
//   console.log('\n==================== MapQuest #2 ====================');
//   console.log('error:', error);
//   console.log('status code:', response && response.statusCode);
//   console.log('body:', JSON.stringify(body, undefined, 2));
// });
//
// request(uri = 'http://www.mapquestapi.com/geocoding/v1/address?key=' + mapQuestAPIKey + '&location=1301%20lombard%20street%20philadelphia', options = {}, callback = function (error, response, body) {
//   console.log('\n==================== MapQuest #3 ====================');
//   console.log('error:', error);
//   console.log('status code:', response && response.statusCode);
//   console.log('body:', body);
// });

const googleAPIKey = process.env.GOOGLE_API_KEY
// request({ url : 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=' + googleAPIKey, json: true}, callback = function (error, response, body) {
//   console.log('\n==================== Google  Maps #1 ====================');
//   console.log('error:', error);
//   console.log('status code:', response && response.statusCode);
//   console.log('body:', body);
// });

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=' + googleAPIKey,
    json: true
  }
// request({
//   url: 'https://maps.googleapis.com/maps/api/geocode/json?address=0000000000&key=' + googleAPIKey,
//   json: true
// }
  ,
  callback = function (error, response, body) {
    console.log('\n==================== Google Maps #2 ====================');
    console.log('error:', error);
    console.log('status code:', response && response.statusCode);
    console.log('\nresponse:', JSON.stringify(response, undefined, 2));
    // console.log('body:', JSON.stringify(body, undefined, 2))
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`)
  }
);

// request({ url : 'https://mapogleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=' + googleAPIKey, json: true}, callback = function (error, response, body) {
//   console.log('\n==================== Google Maps Error #1 ====================');
//   console.log('error:', error);
//   console.log('status code:', response && response.statusCode);
//   console.log('body:', JSON.stringify(body, undefined, 2));
//   console.log('\nresponse:', JSON.stringify(response, undefined, 2));
// });

// request('https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=' + googleAPIKey,callback = function (error, response, body) {
//   console.log('==================== Google Maps #3 ====================');
//   console.log('error:', error);
//   console.log('status code:', response && response.statusCode);
//   console.log('body:', body);
// });

