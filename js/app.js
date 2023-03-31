const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const resultOut = document.querySelector(".result__out");

const inputsBlock = document.querySelector(".inputs");
const addInput = document.querySelector(".add__input");

function getInputs(){
  return Array.from(document.querySelectorAll(".input"));
}

addInput.addEventListener("click", () => {
  const newInput = `<input class="input" type="number" />`;
  inputsBlock.insertAdjacentHTML("beforeend", newInput);
});

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

result.addEventListener("click", () => {
  resultOut.innerHTML = reduceInputs(getinputs());
});
