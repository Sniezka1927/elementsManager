const { elements } = require("./database")
const logger = require('tracer').colorConsole();
module.exports = {
    removeElement: async (data) => {
        return new Promise(async (resolve, reject) => {
            try {
                let elementId = data.id
                elements.remove({ _id: elementId }, {}, function (err, numRemoved) {
                    resolve("Element successfully removed!")
                    return
                });

            }
            catch (error) {
                reject(error)
            }
        })
    },
}