const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const studentsApi = require("../api/students.api");
const myServise = require("../services/auth.js");




const viewsPath = path.join(__dirname + "/../views");
router.use("/", express.static(viewsPath + "/signin"));

router.get("/", (req, res) => {
  res.sendFile(viewsPath + "/signin/signin.html");0

});




 router.post( "/", async(req, res) => {

  const data  = req.body;
  const user = data.username;
  const pass = data.password;
  const role = data.role;
  // console.log(role);
 const myhash = await myServise.HashPassword(pass)
//  console.log(myhash);
  // console.log(user);
 
 data.password = myhash;
studentsApi.storeStudent(data);



  res.end(JSON.stringify({msg: " you are signed in"}));

}
);
 


module.exports = router;
