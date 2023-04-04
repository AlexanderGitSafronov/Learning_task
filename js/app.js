const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const resultOut = document.querySelector(".result__out");
const inputsBlock = document.querySelector(".inputs");
const addInput = document.querySelector(".add__input");
const error = document.querySelector(".error");
let wrapperInput = document.querySelectorAll(".wrapper__input");

// Добаляєм поля Input
addInput.addEventListener("click", () => {
  const newInput = `<div class="wrapper__input">
  <input class="input" type="number" /><button class="delete__input">Delete</button>
  </div>`;
  if (getInputs().length < 5) {
    if (lastChildren().classList.contains("error")) {
      lastChildren().remove();
    }
    inputsBlock.insertAdjacentHTML("beforeend", newInput);
  } else {
    errorCount();
  }
});

// Взаємодія з кнопкою видалення
inputsBlock.addEventListener("click", (e) => {
  if (e.target.className === "delete__input") {
    if (getInputs().length <= 2) {
      errorCount();
    }
    if (getInputs().length > 2) {
      e.target.closest(".wrapper__input").remove();
      if (lastChildren().classList.contains("error")) {
        lastChildren().remove();
      }
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
function lastChildren() {
  return inputsBlock.lastElementChild;
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

// Перевіряєм якщо в останньому дочерньому елементі є клас error то добавляєм помилку.
function errorCount() {
  const errorMessage = `<div class="error">
           <p class="error__message">Не можна видалити 2 останні інпути</p>
  </div>`;
  if (!lastChildren().classList.contains("error")) {
    inputsBlock.insertAdjacentHTML("beforeend", errorMessage);
  }
}
