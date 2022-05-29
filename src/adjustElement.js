const { elements } = require("./database")
const logger = require('tracer').colorConsole();
module.exports = {
    adjustElement: async (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                let id = data.id
                let description = data.description
                let type = data.type
                let timestamp = new Date().toLocaleString();
                let databaseObject = { _id: id, type: type, description: description, timestamp: timestamp }

                elements.update({ _id: id }, { $set: databaseObject }, {}, function (err, numUpdated) {
                    resolve("Element updated!")
                    return
                });

            }
            catch (error) {
                reject(error)
            }
        })
    },
}