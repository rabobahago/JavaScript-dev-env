const express = require("express");
const path = require("path");
const open = require("open");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    open("http://localhost:" + port);
  }
});
