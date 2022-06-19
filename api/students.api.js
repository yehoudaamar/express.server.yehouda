const fs = require("fs");
const path = require("path");
const studentsPath = path.join(__dirname + "/../data/students.json");

function readStudents() {
  const students = JSON.parse(fs.readFileSync(studentsPath));
  console.log(students);
  return students;
}
function storeStudent(username, password) {
  const students = readStudents();
  students.push({ username, password });
  fs.writeFileSync("../data/students.json", JSON.stringify(students));
}


function Login(username, password) {
  const students = readStudents();
  console.log(students);
  for (let i = 0; i < students.length; i++) {
    if (students[i].username.username === username && students[i].username.password === password) {
      console.log("you are logged in");
      return true;
    }else{
      console.log("you are not logged in");
      return false;
    }
}
}




  
  
 







function getStudent(id) {
  const students = readStudents();
  const idToGet = parseInt(id);
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    if (student.id === idToGet) {
      return student;
    }
  }
  return {};
}

module.exports = { readStudents, getStudent, storeStudent, Login };
