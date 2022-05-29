const { elements } = require("./database")
const logger = require('tracer').colorConsole();
module.exports = {
    addRecord: async (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                let type = data.type
                let description = data.description
                let timestamp = new Date().toLocaleString();
                let databaseObject = { type: type, description: description, timestamp: timestamp }
                elements.insert(databaseObject, function (err, newDoc) {
                    logger.info('Record added successfully!')
                    resolve('Record added Successfully!')
                    return
                })

            }
            catch (error) {
                reject(error)
            }
        })
    },
}