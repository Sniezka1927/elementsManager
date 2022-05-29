const { elements } = require("./database")
const logger = require('tracer').colorConsole();
module.exports = {
    findElement: async (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                let type = data.type
                elements.find({ type: type }, function (err, docs) {
                    resolve(docs)
                });

            }
            catch (error) {
                reject(error)
            }
        })
    },
}