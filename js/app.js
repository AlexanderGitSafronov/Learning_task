const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const resultOut = document.querySelector(".result__out");
const addInput = document.querySelector(".add__input");
const inputBlock = document.querySelector(".out-input");
const numbInput = Array.from(document.querySelectorAll(".number__input"));
const division = document.querySelector(".division");

console.log(numbInput);

inputBlock.style.display = "flex";
inputBlock.style.columnGap = "20px";

result.addEventListener("click", () => {
  const numbInput = Array.from(document.querySelectorAll(".number__input"));

  switch (operation.value) {
    case "+":
      let resPlus = 0;
      for (let j = 0; j < numbInput.length; j++) {
        resPlus += +numbInput[j].value;
      }
      resultOut.innerHTML = resPlus;
      break;
    case "-":
      let resSubtraction = 0;
      for (let j = 0; j < numbInput.length; j++) {
        if (j === 0) {
          resSubtraction = numbInput[j].value;
        }
        if (j > 0) {
          resSubtraction -= numbInput[j].value;
        }
      }
      resultOut.innerHTML = resSubtraction;
      break;
    case "*":
      let resMultiplication = 0;
      for (let j = 0; j < numbInput.length; j++) {
        if (j === 0) {
          resMultiplication = numbInput[j].value;
        }
        if (j > 0) {
          resMultiplication *= numbInput[j].value;
        }
      }
      resultOut.innerHTML = resMultiplication;

      break;
    case "/":
      let resDivision = 0;
      for (let j = 0; j < numbInput.length; j++) {
        if (j === 0) {
          resDivision = numbInput[j].value;
        }
        if (j > 0) {
          resDivision /= numbInput[j].value;
        }
      }
      resultOut.innerHTML = resDivision;
      break;
    default:
      break;
  }
});

const delInput = document.querySelectorAll(".del");
delInput.forEach((value) => {
  value.addEventListener("click", (e) => {
    value.closest(".inp").remove();
  });
});

console.log(numbInput.length);
addInput.addEventListener("click", () => {
  const numbInput = Array.from(document.querySelectorAll(".number__input"));
  if (numbInput.length + 1 > 2) {
    division.setAttribute("disabled", true);
  }
  if (numbInput.length + 1 > 2 && operation.value === "/") {
    result.setAttribute("disabled", true);
  }
  console.log(numbInput.length);
  const wrapperBlock = document.createElement("div");
  wrapperBlock.classList.add("inp");
  const inputAdd = document.createElement("input");
  inputAdd.setAttribute("type", "number");
  inputAdd.classList.add("number__input");
  const delButton = document.createElement("button");
  delButton.textContent = "X";
  delButton.classList.add("del");
  inputBlock.append(wrapperBlock);
  wrapperBlock.append(inputAdd);
  wrapperBlock.append(delButton);
  const delInput = document.querySelectorAll(".del");
  delInput.forEach((value) => {
    value.addEventListener("click", (e) => {
      value.closest(".inp").remove();
      if (numbInput.length <= 2) {
        division.removeAttribute("disabled");
      }
      if (numbInput.length <= 2) {
        result.removeAttribute("disabled");
      }
    });
  });
});
