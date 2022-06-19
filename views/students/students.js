const Form = document.getElementById("getForm");


Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(Form);
  const dataJson = {};
  for (const [key, val] of data.entries()) {
    dataJson[key] = val;
  }
  const studentId = dataJson.studentId;

  fetch(`localhost:3434/students/${studentId}`);
}
);