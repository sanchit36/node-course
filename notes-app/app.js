const validator = require("validator");
const getNotes = require("./notes");

message = getNotes();
console.log(message);

console.log(validator.isEmail("gmail.com"));
console.log(validator.isURL("http://petarmy.in"));
