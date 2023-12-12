const express = require("express");
const app = express();
const port = 3000;

const mainPage = require('./src/pages/main');

app.get("/", (req, res) => {
  res.send(mainPage.content);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
