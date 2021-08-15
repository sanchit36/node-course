const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  description: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      describe: "Note Title which is to be removed",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  description: "List your notes",
  handler: function () {
    console.log("Listing out all  notes");
  },
});

// Create read command
yargs.command({
  command: "read",
  description: "Read a note",
  handler: function () {
    console.log("Reading a new note");
  },
});

yargs.parse();
