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

let count = 0;

io.on("connection", (socket) => {
  console.log("New webSocket connection");

  socket.emit("countUpdated", count);

  socket.on("increment", () => {
    count++;
    io.emit("countUpdated", count);
  });
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});
