const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=115f4ea439ecc09aadfa034a6893e434&query=37.8267,-122.4233&units=m";

request.get({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weatherstack API!");
  } else if (response.body.error) {
    console.log("Unable to find the location");
  } else {
    const data = response.body.current;
    console.log(
      `${data.weather_descriptions[0]}. It is currently ${data.temperature} degree out, it feels like ${data.feelslike} degree out.`
    );
  }
});

// Geocoding

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/india.json?access_token=pk.eyJ1Ijoic2FuY2hpdGJoYWRnYWwiLCJhIjoiY2tzZnQ4Zzc4MWRpbjJ3bWN6ZXcwdnFmdiJ9.p15xe4n3-TFk2i8T8pEpTw&limit=1";

request.get({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find the location. Try another search.");
  } else {
    const data = response.body.features[0];
    const latitude = data.center[1];
    const longitude = data.center[0];
    console.log(latitude, longitude);
  }
});
