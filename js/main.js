//Constantes

const buttonSubmit = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-inputNumber");
const randomNumber = Math.ceil(Math.random() * 100);

//Funciones

const getRandomNumber = () => {
  console.log(`El número aleatorio es: ${randomNumber}`);
};
getRandomNumber();

const checkNumber = () => {
  //Crear div para añadir el mensaje
  let p = document.createElement("p");
  p.classList.add("message");
  const form = document.querySelector(".form");

  //Añadir el div al formulario
  form.appendChild(p);

  //Validar
  if (!inputNumber.value || inputNumber.value > 100) {
    p.innerHTML = "El número debe estar entre 1 y 100";
  } else if (inputNumber.value > randomNumber) {
    p.innerHTML = "Demasiado alto";
  } else if (inputNumber.value < randomNumber) {
    p.innerHTML = "Demasiado bajo";
  } else {
    p.innerHTML = `¡Has acertado!`;
  }
};

const counterMessage = () => {
  let p = document.createElement("p");
  p.classList.add("counter__message");
  const form = document.querySelector(".form");
  form.appendChild(p);

  p.innerHTML = `Número de intentos ${acc}`;
};

let acc = 0;
const addCounter = () => {
  acc += 1;
  const arrayNumbers = [];
  arrayNumbers.push(inputNumber.value);

  counterMessage();
};

const handlerClickButton = () => {
  addCounter();
  checkNumber();
};

//Eventos

buttonSubmit.addEventListener("click", handlerClickButton);
