const loginForm = document.getElementById("f")

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(loginForm);
    const dataJson = {};
    for (const [key, val] of data.entries()) {
        dataJson[key] = val;
        const dataJsonStr = JSON.stringify(dataJson);
        console.log(dataJsonStr);

    }
    fetch("http://localhost:3434/login", {
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
            if (res.msg === "Admin"){
                
                window.location ="/students"
            }
  


        }
        );



}
);
