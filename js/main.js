//Constantes

const buttonSubmit = document.querySelector(".js-button");
const input = document.querySelector(".js-input");
const inputValue = input.value;

//Funciones

const getRandomNumber = () => {
  let randomNumber = Math.ceil(Math.random() * 100);
  console.log(`El número aleatorio es: ${randomNumber}`);
};

// for (let i = 0; i < array.length; i++) {
//  const element = array[i];
// }

//Declarar funciones

getRandomNumber();

//Eventos

buttonSubmit.addEventListener("click", getRandomNumber);
