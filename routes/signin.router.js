const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const studentsApi = require("../api/students.api");




const viewsPath = path.join(__dirname + "/../views");
router.use("/", express.static(viewsPath + "/signin"));

router.get("/", (req, res) => {
  res.sendFile(viewsPath + "/signin/signin.html");

});


router.post( "/", (req, res) => {

  const data = req.body
  // console.log(data);
  studentsApi.storeStudent(data);
  res.end(JSON.stringify({msg: " you are signed in"}));

    





}
);



module.exports = router;
