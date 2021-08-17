const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=e33c64b777c1992ec2099d5455732e88&query=${latitude},${longitude}&units=f`;
  request.get({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!", data);
    } else if (response.body.error) {
      console.log(response.body);
      callback("Unable to find the location!", undefined);
    } else {
      const data = response.body.current;
      callback(
        undefined,
        `${data.weather_descriptions[0]}. It is currently ${data.temperature} degree out, it feels like ${data.feelslike} degree out.`
      );
    }
  });
};

module.exports = forecast;
