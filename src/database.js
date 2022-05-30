const Datastore = require("nedb");

const usersDB = new Datastore({
  filename: "./databases/users.db",
  autoload: true,
  corruptAlertThreshold: 1,
});

const elements = new Datastore({
  filename: "./databases/elements.db",
  autoload: true,
  corruptAlertThreshold: 1,
});

module.exports = { usersDB, elements };
