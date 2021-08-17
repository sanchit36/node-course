const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlerbars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", { title: "Weather App", name: "Sanchit Bhadgal" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About", name: "Sanchit Bhadgal" });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    message: "Hellppppppppppp",
    name: "Sanchit Bhadgal",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Its 30 degrees",
    location: "Delhi",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Help article not found.",
    name: "Sanchit Bhadgal",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMessage: "Page not found.",
    name: "Sanchit Bhadgal",
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
