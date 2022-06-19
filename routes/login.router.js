const express = require("express");
const router = express.Router();
const fs = require("fs");

const studentsApi = require("../api/students.api");


const path = require("path");
const viewsPath = path.join(__dirname + "/../views");


router.use("/", express.static(viewsPath + "/login"));

router.get("/", (req, res) => {
  res.sendFile(viewsPath + "/login/login.html");

}
)
router.post("/", (req, res) => {

 studentsApi.Login(req.body.username, req.body.password);
 if(studentsApi.Login(req.body.username, req.body.password)){
   res.end(JSON.stringify({msg: " you are logged in"}));
 }else{
   res.end(JSON.stringify({msg: " you are Not logged in"}));
 }

}
)



  




module.exports = router;