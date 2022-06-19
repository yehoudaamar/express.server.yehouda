const express = require("express");
const router = express.Router();
const studentsApi = require("../api/students.api");
const path = require("path");
const viewsPath = path.join(__dirname + "/../views");

router.use("/", express.static(viewsPath + "/students"));


router.get("/:id", (req, res) => {
  const id = req.params.id;
  const student = studentsApi.getStudent(id);
  res.json(student);
});


router.get( "/",   (req, res) => {
  res.sendFile(viewsPath + "/students/students.html");
});

// localhost:3434/students/1

module.exports = router;
