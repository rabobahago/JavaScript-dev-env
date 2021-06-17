import express from "express";
import path from "path";
import open from "open";
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
