const express = require("express");
const router = express.Router();
const fs = require("fs");
myServise = require("../services/auth.js");

const studentsApi = require("../api/students.api");

const path = require("path");
const viewsPath = path.join(__dirname + "/../views");

router.use("/", express.static(viewsPath + "/login"));

router.get("/", (req, res) => {
  res.sendFile(viewsPath + "/login/login.html");

}
)
router.post("/", async (req, res) => {
  const data = req.body;

  const userLogin = data.username;
  const passwordLogin = data.password;
  const userRole = data.role

  const DataRols = await studentsApi.readStudents();

  for (let key in DataRols) {

    const role = DataRols[key].role;
    const usernameRole = DataRols[key].username;
    const passwordRole = DataRols[key].password;
    // console.log(DataRols[key].role);

    // if (role === "Admin") {
    //   console.log("Admin sheli")
    //   if (role === "Student") {
    //     console.log("Student sheli"); 
    //   }
    // }
  }
    const comperRole = await myServise.compareRole(userRole);

    const ifHash = await myServise.comparePassword( passwordLogin, userLogin,);   

    studentsApi.Login(ifHash);

    const MYCookies = myServise.NewToken({ username: userLogin, role: userRole });
    function createCookie() {
      MYCookies
      return MYCookies;
    }


    if (ifHash && comperRole) {
      res.cookie("My token", createCookie(MYCookies));

      res.end(JSON.stringify({ msg: "you are login in" }));
    }
  
})

module.exports = router;