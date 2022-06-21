const fs = require("fs");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");

const studentsPath = path.join(__dirname + "/../data/users.json");


function readUsers() {
    const students = JSON.parse(fs.readFileSync(studentsPath, "utf8"));
    // console.log(students);
    return students;
}


async function HashPassword(password) {
    const HashPassword = await bcrypt.hash(password, 10);
    return HashPassword;
}





async function ComparePasswordHash(password, HashPassword) {
    const isMatch = await bcrypt.compare(password, HashPassword);
    return isMatch;
}

function comparePassword(password, username) {
    const students = readUsers();
  const user = students.find((student) => student.username === username);
    if (user) {
        return ComparePasswordHash(password, user.password);
    }
    return false;
}
function NewToken(username) {
    const token = jwt.sign( username, 'secret');
    return token;
}

function compareRole (role) {
    const students = readUsers();
    const user = students.find((student) => student.role === role);
    if (user) {
        return true;
    }
    return false;
}




 



module.exports = { readUsers, HashPassword , comparePassword , NewToken , compareRole };