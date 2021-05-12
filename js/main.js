//Constantes

const buttonSubmit = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-input");
const inputNumberValue = inputNumber.value; //aquí no entiendo por qué no me pilla esta variable
const randomNumber = Math.ceil(Math.random() * 100);

//Funciones

const getRandomNumber = () => {
  console.log(`El número aleatorio es: ${randomNumber}`);
};

getRandomNumber();

const checkNumber = () => {
  //Crear div para añadir el mensaje
  let div = document.createElement("div");
  div.classList.add("message");
  const form = document.querySelector(".form");

  //Añadir el div al formulario
  form.appendChild(div);

  //Validar
  if (inputNumber.value === "") {
    div.innerHTML = "El número debe estar entre 1 y 100";
  } else if (inputNumber.value > randomNumber) {
    div.innerHTML = "Demasiado alto";
  } else if (inputNumber.value < randomNumber) {
    div.innerHTML = "Demasiado bajo";
  } else {
    div.innerHTML = `¡Has acertado!`;
  }
};

let acc = 0;
const addCounter = () => {
  let p = document.createElement("p");
  p.classList.add("counter__message");
  const form = document.querySelector(".form");
  form.appendChild(p);

  acc += 1;
  const arrayNumbers = [];
  arrayNumbers.push(inputNumber.value);

  p.innerHTML = `Número de intentos ${acc}`;
};

const handlerClickButton = () => {
  addCounter();
  checkNumber();
};

//Eventos

buttonSubmit.addEventListener("click", handlerClickButton);
