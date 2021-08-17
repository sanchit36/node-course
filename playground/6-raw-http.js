const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=e33c64b777c1992ec2099d5455732e88&query=40,-75&units=m`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
