//Constantes

const buttonSubmit = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-input");
const inputNumberValue = inputNumber.value; //aquí no entiendo por qué no me pilla esta variable
const randomNumber = Math.ceil(Math.random() * 100);

//Funciones

const getRandomNumber = () => {
  console.log(`El número aleatorio es: ${randomNumber}`);
};

const checkNumber = () => {
  //Crear div
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

const handlerClickButton = () => {
  const arrayNumbers = [];
  arrayNumbers.push(inputNumber.value);

  console.log(arrayNumbers);

  checkNumber();
};

//Declarar funciones

getRandomNumber();

//Eventos

buttonSubmit.addEventListener("click", handlerClickButton);
