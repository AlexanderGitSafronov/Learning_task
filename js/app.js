const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const resultOut = document.querySelector(".result__out");

const inputsBlock = document.querySelector(".inputs");
const addInput = document.querySelector(".add__input");
let inputs = Array.from(document.querySelectorAll(".input"));

addInput.addEventListener("click", () => {
  const newInput = `<input class="input" type="number" />`;
  inputsBlock.insertAdjacentHTML("beforeend", newInput);
  inputs = document.querySelectorAll(".input");
});

result.addEventListener("click", () => {
  calculation(inputs);
});

function calculation(inputs) {
  if (operation.value === "+") {
    let resPlus = 0;
    inputs.forEach((item) => {
      resPlus += +item.value;
    });
    resultOut.innerHTML = resPlus;
  }

  if (operation.value === "-") {
    let resSubtraction = 0;
    inputs.forEach((item, idx) => {
      if (idx === 0) {
        resSubtraction = item.value;
      }
      if (idx > 0) {
        resSubtraction -= item.value;
      }
    });
    resultOut.innerHTML = resSubtraction;
  }

  if (operation.value === "*") {
    let resSubtraction = 0;
    inputs.forEach((item, idx) => {
      if (idx === 0) {
        resSubtraction = item.value;
      }
      if (idx > 0) {
        resSubtraction *= item.value;
      }
    });
    resultOut.innerHTML = resSubtraction;
  }

  if (operation.value === "/") {
    let resSubtraction = 0;
    inputs.forEach((item, idx) => {
      if (idx === 0) {
        resSubtraction = item.value;
      }
      if (idx > 0) {
        resSubtraction /= item.value;
      }
    });
    resultOut.innerHTML = resSubtraction;
  }
}
