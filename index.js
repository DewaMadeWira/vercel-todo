const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.get("/", async (req, res) => {
  res.send("App is working !");
});
app.listen(5000);
