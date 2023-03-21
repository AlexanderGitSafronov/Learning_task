const firstNumber = document.querySelector(".first__number");
const secondNumber = document.querySelector(".second__number");
const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const resultOut = document.querySelector(".result__out");

const OPERATIONS = {
  ["+"]: (a, b) => a + b,
  ["-"]: (a, b) => a - b,
  ["*"]: (a, b) => a * b,
  ["/"]: (a, b) => a / b,
};

result.addEventListener("click", () => OPERATIONS[operation.value](firstNumber.value, secondNumber.value)
);
