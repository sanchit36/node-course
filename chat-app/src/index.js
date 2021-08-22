const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

io.on("connection", (socket) => {
  console.log("New webSocket connection");

  socket.emit("message", "Welcome!");

  socket.on("sendMessage", (message) => {
    io.emit("message", message);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
