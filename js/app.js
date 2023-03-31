const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const resultOut = document.querySelector(".result__out");
const inputsBlock = document.querySelector(".inputs");
const addInput = document.querySelector(".add__input");

function getInputs() {
  return Array.from(document.querySelectorAll(".input"));
}
function getDelete() {
  return Array.from(document.querySelectorAll(".delete__input"));
}

addInput.addEventListener("click", () => {
  const newInput = `<div class="wrapper__input">
                        <input class="input" type="number" /><button class="delete__input">Delete</button>
                    </div>`;
  inputsBlock.insertAdjacentHTML("beforeend", newInput);
  deleteInput();
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

// Видалення Input
function deleteInput() {
  getDelete().forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.closest(".wrapper__input").remove();
    });
  });
}
deleteInput();
