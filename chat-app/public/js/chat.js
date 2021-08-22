const socket = io();

socket.on("message", (message) => {
  console.log(message);
});

const formElement = document.getElementById("message-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputElement = event.target.elements.message;
  const message = inputElement.value;
  if (!message) return;

  socket.emit("sendMessage", message, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log("The message has been delivered!");
  });

  inputElement.value = "";
});

document.getElementById("send-location").addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser.");
  }

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "sendLocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        console.log("Location shared!");
      }
    );
  });
});
