
const form = document.getElementById("f");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const dataJson = {};

  for (const [key, val] of data.entries()) {

    dataJson[key] = val;
    const dataJsonStr = JSON.stringify(dataJson);

  }
  console.log(dataJson);

  fetch("http://localhost:3434/signin", {
    method: "POST",
    body: JSON.stringify(dataJson),
    headers: {
      "content-type": "application/json",
    },

  })
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
      const messageEl = document.getElementById("msg");
      messageEl.innerHTML = res.msg;


     

    }
    );


});
