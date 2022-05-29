const Datastore = require('nedb')

const usersDB = new Datastore({
    filename: './databases/users.db',
    autoload: true
});

const elements = new Datastore({
    filename: './databases/elements.db',
    autoload: true
});

module.exports = { usersDB, elements }