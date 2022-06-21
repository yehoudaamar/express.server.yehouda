const fs = require("fs");
const path = require("path");
const studentsPath = path.join(__dirname + "/../data/users.json");
const cookieParser = require("cookie-parser");




function readStudents() {
  const students = JSON.parse(fs.readFileSync(studentsPath , "utf8"));
  // console.log(students);
  return students;
}
function storeStudent(data) {
  const students = readStudents();
  students.push(data);
  // console.log(students);
  fs.writeFileSync(studentsPath , JSON.stringify(students));
}


function Login(username, password) {
  const students = readStudents();

  // console.log(students);
  
  if (students.find((student) => student.username === username && student.password === password)) {

    return true;
    
  }
  return false;
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


 


module.exports = { readStudents, getStudent, storeStudent, Login,  };
