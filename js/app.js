const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const resultOut = document.querySelector(".result__out");
const inputsBlock = document.querySelector(".inputs");
const addInput = document.querySelector(".add__input");
const error = document.querySelector(".error");
const errorMessage = document.querySelector(".error__message");
let wrapperInput = document.querySelectorAll(".wrapper__input");

const newInput = `<div class="wrapper__input">
  <input class="input" type="number" /><button class="delete__input">Delete</button>
  </div>`;

// Добаляєм поля Input
addInput.addEventListener("click", () => {
  if (getInputs().length < 5) {
    hideError();
    inputsBlock.insertAdjacentHTML("beforeend", newInput);
  } else {
    showError("Не можна добавити більше 5 інпутів");
  }
});

// Взаємодія з кнопкою видалення
inputsBlock.addEventListener("click", (e) => {
  if (e.target.className === "delete__input") {
    if (getInputs().length <= 2) {
      showError("Не можна видалити 2 останні інпути");
    }
    if (getInputs().length > 2) {
      e.target.closest(".wrapper__input").remove();
      hideError();
    }
  }
});

// Результат операції
result.addEventListener("click", () => {
  resultOut.innerHTML = reduceInputs(getInputs());
});

// Плучаєм елементи
function getInputs() {
  return Array.from(document.querySelectorAll(".input"));
}
function getDelete() {
  return Array.from(document.querySelectorAll(".delete__input"));
}
// Показати помилку
function showError(text) {
  error.style.display = "block";
  errorMessage.textContent = text;
}
// сховати помилку
function hideError() {
  error.style.display = "none";
}

// Функція розрахунку
function reduceInputs(inputs) {
  let result = inputs.slice(1).reduce((acc, item) => {
    operation.value === "+" ? (acc += +item.value) : "";
    operation.value === "-" ? (acc -= +item.value) : "";
    operation.value === "*" ? (acc *= +item.value) : "";
    operation.value === "/" ? (acc /= +item.value) : "";
    return acc;
  }, +inputs[0].value);
  return result;
}
