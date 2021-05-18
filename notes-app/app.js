const chalk = require("chalk");
const getNotes = require("./notes");

message = getNotes();
console.log(message);

console.log(chalk.red.inverse.bold.underline("Error!"));
