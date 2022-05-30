var express = require("express");
var app = express();
const PORT = process.env.port || 3000;
const router = require("./src/router");
require("dotenv/config");
const fs = require("fs");
app.use(express.static("src"));

app.get("/", async function (req, res) {
  fs.readFile("./src/web/index.html", function (error, data) {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>błąd 404 - nie ma pliku!<h1>");
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
});

app.get("/loadElements", async function (req, res) {
  await router(req, res);
});
app.post("/userUI", async function (req, res) {
  await router(req, res);
});

app.post("/addRecord", async function (req, res) {
  await router(req, res);
});
app.post("/removeElement", async function (req, res) {
  await router(req, res);
});
app.post("/adjustElement", async function (req, res) {
  await router(req, res);
});
app.post("/findByType", async function (req, res) {
  await router(req, res);
});
app.post("/reset", async function (req, res) {
  await router(req, res);
});
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
