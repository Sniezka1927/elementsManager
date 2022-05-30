const logger = require("tracer").colorConsole();
const getRequestData = require("./getRequestData.js");
const addUser = require("./userController");
const removeElement = require("./removeElement");
const adjustElement = require("./adjustElement");
const findElement = require("./findElement");
const add = require("./Add");
const { elements } = require("./database");

const router = async (request, response) => {
  logger.info("router loaded!");
  if (request.url == "/loadElements" && request.method == "GET") {
    elements.find({}, function (err, docs) {
      logger.info("elements sent");
      response.end(JSON.stringify(docs));
    });
  } else if (request.url == "/userUI" && request.method == "POST") {
    logger.info("recieved user information");
    let data = await getRequestData(request);
    data = JSON.parse(data);
    let method = data.method;
    switch (method) {
      case "login":
        let userLogged = await addUser.login(data);
        response.end(JSON.stringify(userLogged, null, 5));
        break;
      case "signup":
        let userCreated = await addUser.addUser(data);
        response.end(JSON.stringify(userCreated, null, 5));
        break;
    }
  } else if (request.url == "/addRecord" && request.method == "POST") {
    logger.info("recieved new Record information");
    let data = await getRequestData(request);
    data = JSON.parse(data);
    let addRecord = await add.addRecord(data);
    response.end(JSON.stringify(addRecord, null, 5));
  } else if (request.url == "/removeElement" && request.method == "POST") {
    logger.info("recieved element ID to remove");
    let data = await getRequestData(request);
    data = JSON.parse(data);
    let addRecord = await removeElement.removeElement(data);
    response.end(JSON.stringify(addRecord, null, 5));
  } else if (request.url == "/adjustElement" && request.method == "POST") {
    logger.info("recieved adjust element details");
    let data = await getRequestData(request);
    data = JSON.parse(data);
    let addRecord = await adjustElement.adjustElement(data);
    response.end(JSON.stringify(addRecord, null, 5));
  } else if (request.url == "/findByType" && request.method == "POST") {
    logger.info("finding elements by Type");
    let data = await getRequestData(request);
    data = JSON.parse(data);
    let foundElements = await findElement.findElement(data);
    response.end(JSON.stringify(foundElements, null, 5));
  } else if (request.url == "/reset" && request.method == "POST") {
    logger.info("resetting");
    elements.find({}, function (err, docs) {
      logger.info("elements sent");
      response.end(JSON.stringify(docs));
    });
  }
};

module.exports = router;
