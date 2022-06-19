const express = require("express");
const router = express.Router();

const path = require("path");
const viewsPath = path.join(__dirname + "/../views");

router.use("/", express.static(viewsPath + "/home"));
router.get("/", (req, res) => {
  res.sendFile(viewsPath + "/home/home.html");
});

module.exports = router;
