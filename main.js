function generateNumbers() {
    //Aleatorio bolas azules
    let numbers = [];
    while (numbers.length < 5) {
      let randomNum = Math.floor(Math.random() * 50) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    //Aleatorio bolas amarillas
    let luckyStars = [];
    while (luckyStars.length < 2) {
      let randomNum = Math.floor(Math.random() * 12) + 1;
      if (!luckyStars.includes(randomNum)) {
        luckyStars.push(randomNum);
      }
    }
  
    //Mostrar los números aleatorios en las bolas
    let numbersContainer = document.querySelector(".numbers");
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
    }
  
    //Mantener los datos del usuario en localStorage
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
  
  //Función del botón "Mucha suerte"
  function handleClick() {
    //Validar la edad del usuario
    let age = document.getElementById("age").value;
    if (age < 18) {
      alert("Espera a tener 18 años para participar");
      return;
    }
  
    //Generar los números aleatorios y mostrarlos
    generateNumbers();
  }
  
  //Evento que se ejecuta al hacer clic en el botón "Mucha suerte"
  let generateBtn = document.getElementById("generate-btn");
  generateBtn.addEventListener("click", handleClick);