const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const resultOut = document.querySelector(".result__out");
const inputsBlock = document.querySelector(".inputs");
const addInput = document.querySelector(".add__input");
const error = document.querySelector(".error");

// Добаляєм поля Input
addInput.addEventListener("click", () => {
  const newInput = `<div class="wrapper__input">
                        <input class="input" type="number" /><button class="delete__input">Delete</button>
                    </div>`;
  inputsBlock.insertAdjacentHTML("beforeend", newInput);
  if (getInputs().length > 2) {
    error.style.display = "none";
  }
});

// Результат операції
result.addEventListener("click", () => {
  resultOut.innerHTML = reduceInputs(getInputs());
});

// Взаємодія з кнопкою видалення
inputsBlock.addEventListener("click", (e) => {
  if (e.target.className === "delete__input" && getInputs().length <= 2) {
    error.style.display = "block";
  }
  if (e.target.className === "delete__input" && getInputs().length > 2) {
    e.target.closest(".wrapper__input").remove();
  }
});

function getInputs() {
  return Array.from(document.querySelectorAll(".input"));
}
function getDelete() {
  return Array.from(document.querySelectorAll(".delete__input"));
}

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
