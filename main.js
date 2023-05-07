function generateNumbers() {
    let numbers = [];
    while (numbers.length < 5) {
      let randomNum = Math.floor(Math.random() * 50) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    numbers.sort((a, b) => a - b);

    let luckyStars = [];
    while (luckyStars.length < 2) {
      let randomNum = Math.floor(Math.random() * 12) + 1;
      if (!luckyStars.includes(randomNum)) {
        luckyStars.push(randomNum);
      }
    luckyStars.sort((a, b) => a - b);
    }
  
    let numbersContainer = document.querySelector(".numbers");
    document.querySelector(".loading").style.display = "block";
    numbersContainer.innerHTML = "";
    for (let i = 0; i < numbers.length; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.textContent = numbers[i];
      numbersContainer.appendChild(ball);
    }
  
    let luckyStarsContainer = document.querySelector(".lucky-stars");
    luckyStarsContainer.innerHTML = "";
    for (let i = 0; i < luckyStars.length; i++) {
      let ball = document.createElement("div");
      ball.classList.add("ball");
      ball.textContent = luckyStars[i];
      luckyStarsContainer.appendChild(ball);
      document.querySelector(".loading").style.display = "none";
    }
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let userData = {
      name: name,
      email: email,
      age: age,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  }

  const mostrarFechaSorteo = () => {
    axios.get("https://www.loteriasyapuestas.es/es/euromillones")
    .then(response => {
      const html = response.data;
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const fecha = doc.querySelector("#proximo-sorteo em").textContent;

      Toastify({
        text: `La fecha del próximo sorteo es ${fecha}`,
        duration: 5000,
        newestOnTop: true,
        gravity: "bottom",
        position: "left",
        backgroundColor: "#051a77",
        stopOnFocus: true,
      }).showToast();
    })
    .catch(error => {
      console.error(error);
      Toastify({
        text: "No pudimos obtener la fecha del próximo sorteo",
        duration: 5000,
        newestOnTop: true,
        gravity: "bottom",
        position: "right",
        backgroundColor: "#ff4444",
        stopOnFocus: true,
      }).showToast();
    });
  };
  document.getElementById("mostrar-fecha").addEventListener("click", mostrarFechaSorteo);
  
let toastShow = false;
function handleSubmit() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;

  if (!name || !email || !age) {
    if (!toastShow) {
      toastShow = true;
    Toastify({
      text: "Por favor, complete todos los campos.",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "green",
    }).showToast();
    setTimeout(() => {
      toastShow = false;
    }, 3000);
  }
    return;
  }
  sendFormData(name, email);
}

let toastShow1 = false;
function handleClick() {
  let age = document.getElementById("age").value;
  if (age < 18) {
    if (!toastShow1) {
      Toastify({
        text: "Espera a tener 18 años para participar",
        duration: 3000,
        gravity: "bottom",
        position: "center",
        backgroundColor: "#ff4444"
      }).showToast();
      toastShow1 = true;
      setTimeout(() => {
        toastShow1 = false;
      }, 3000);
    }
    return;
  }
    document.getElementById("load").style.display = "block";
    setTimeout(() => {
      document.getElementById("load").style.display = "none";
    generateNumbers();
    }, 1500);
}
 
  let generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", handleClick);
  generateBtn.addEventListener("click", handleSubmit);

  
