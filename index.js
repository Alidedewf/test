let number = 0;
const minusButton = document.querySelector(".minus");
const resetButton = document.querySelector(".reset");
const randomButton = document.querySelector(".random");
const plusButton = document.querySelector(".plus");

function updateNumber() {
  const numberElement = document.getElementById("numberJS"); // change to kebab-case ("number-js")
  numberElement.textContent = number;
}

function minus() {
  number--;
  updateNumber();
}

function reset() {
  number = 0;
  updateNumber();
}

function random() {
  number = Math.floor(Math.random() * 2000 - 1000);
  updateNumber();
}

function plus() {
  number++;
  updateNumber();
}

minusButton.addEventListener("click", minus);
resetButton.addEventListener("click", reset);
randomButton.addEventListener("click", random);
plusButton.addEventListener("click", plus);
