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

  socket.emit("sendMessage", message);
  inputElement.value = "";
});
