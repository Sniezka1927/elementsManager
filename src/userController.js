const { usersDB } = require("./database")
const logger = require('tracer').colorConsole();

module.exports = {
    addUser: async (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                //fix
                let username = data.username
                let password = data.password
                let userObject = { username: username, password: password, role: "basic" }
                usersDB.find({}, function (err, docs) {
                    for (let i = 0; i < docs.length; i++) {
                        if (username == docs[i].username) {
                            resolve("User already exist!")
                            return
                        }
                        usersDB.insert(userObject, function (err, newDoc) {
                            logger.info('User added successfully!')
                            resolve(userObject)
                            return
                        })
                    }
                });

            }
            catch (error) {
                reject(error)
            }
        })
    },
    login: async (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                let username = data.username
                let password = data.password

                usersDB.findOne({ username: username, password: password }, function (err, doc) {
                    if (doc != null) {
                        resolve(doc)
                        return
                    } else {
                        resolve("User doesnt exist, sign up first!")
                        return
                    }
                });

            }
            catch (error) {
                reject(error)
            }
        })
    },

}

