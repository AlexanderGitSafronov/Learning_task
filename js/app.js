const result = document.querySelector(".result");
const operation = document.querySelector(".operation");
const resultOut = document.querySelector(".result__out");
const addInput = document.querySelector(".add__input");
const inputBlock = document.querySelector(".out-input");
let numbInput = Array.from(document.querySelectorAll(".number__input"));
const division = document.querySelector(".division");
let delInput = document.querySelectorAll(".del");

// Удаление инпутов с проверкой на количесво инпутов
function deleteInputClick() {
  delInput.forEach((item) => {
    if (delInput.length < 3) {
      item.setAttribute("disabled", true);
    } else {
      item.removeAttribute("disabled");
    }
    item.addEventListener("click", () => {
      console.log(delInput.length);
      if (delInput.length < 3) {
        result.setAttribute("disabled", true);
      }

      // Проверка на пустой инпут при удалении поля
      setTimeout(() => {
        disabletResut();
      }, 50);
    });
  });
}
deleteInputClick();

inputBlock.style.display = "flex";
inputBlock.style.columnGap = "20px";

// Нажатие на кнопку результата и выполнение вычисления
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

// Если изменить операцию с числами
function operationChenge() {
  operation.addEventListener("change", () => {
    if (numbInput.length + 1 > 2 && operation.value !== "/") {
      result.removeAttribute("disabled");
    }
    disabletResut();
    numbInput.forEach((item) => {
      if (item.value.length >= 1) {
        result.removeAttribute("disabled");
      } else {
        result.setAttribute("disabled", true);
      }
    });
  });
}
operationChenge();
// Клик по кнопке добавить новый инпут
addInput.addEventListener("click", () => {
  setTimeout(() => {
    numbInput = Array.from(document.querySelectorAll(".number__input"));
  }, 50);

  // Если инпутов больше двух то добавляем дизаблед делению
  if (numbInput.length + 1 > 2) {
    division.setAttribute("disabled", true);
  }
  // Если инпутов больше двух и уже выбрана операция деления  то добавляем дизаблед кнопке результата
  if (numbInput.length + 1 > 2 && operation.value === "/") {
    result.setAttribute("disabled", true);
  }

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
  delInput = document.querySelectorAll(".del");

  // Вызываем проверку на пустоту инпута
  setTimeout(() => {
    disabletResut();
  }, 50);

  // Перебираем кнопки удаления инпутов после нажатия кнопки добавления инпута
  delInput.forEach((items) => {
    // Если инпутов меньше 3 то дизаблить кнопку удаления

    if (delInput.length < 3) {
      console.log(delInput.length);
      items.setAttribute("disabled", true);
    } else {
      items.removeAttribute("disabled");
    }

    // Нажатие на кнопку удаление инпута
    items.addEventListener("click", () => {
      // После клика по кнопке удаления инпута проходим по всем кнопкам удаления и проверяем колво инвутов если меньше равно 3 то добавляем дизаблед кнопкам удаления
      delInput.forEach((item) => {
        if (delInput.length <= 3) {
          item.setAttribute("disabled", true);
        } else {
          item.removeAttribute("disabled");
        }
      });

      // Если кнопок удаления ьольше чем две то можно делать удаление блока инпута с кнопкой
      if (delInput.length > 2) {
        items.closest(".inp").remove();
        console.log(delInput.length);
      }
      // value.closest(".inp").remove();

      // Проверяем если инпутов меньше или равно 2 то мы удаляем дизаблет с деления

      if (numbInput.length <= 3) {
        division.removeAttribute("disabled");
      }

      setTimeout(() => {
        numbInput = Array.from(document.querySelectorAll(".number__input"));
        delInput = document.querySelectorAll(".del");
      }, 50);

      setTimeout(() => {
        let checkingForEmptyInput = false;

        numbInput.forEach((item) => {
          console.log(item);
          if (item.value.length === 0) {
            checkingForEmptyInput = true;
          }
        });
        if (checkingForEmptyInput === true) {
          result.setAttribute("disabled", true);
        } else {
          result.removeAttribute("disabled");
        }

        delInput.forEach((item) => {
          console.log(item);
          if (delInput.length < 3) {
            item.setAttribute("disabled", true);
          } else {
            item.removeAttribute("disabled");
          }
        });
      }, 50);

      // После клика по кнопке удаления инпута проходим по всем инпутам и проверяем на наличие символов в поле если символа нет добавляем дизаблед
      disabletResut();
    });
  });

  operation.addEventListener("change", () => {
    console.log(numbInput.length);
    if (numbInput.length + 1 > 2 && operation.value !== "/") {
      result.removeAttribute("disabled");
    }
    numbInput.forEach((item) => {
      if (item.value.length >= 1) {
        result.removeAttribute("disabled");
      } else {
        result.setAttribute("disabled", true);
      }
    });
  });
});

// Дизаблед инпутов если поля пустые
function disabletResut() {
  numbInput.forEach((item) => {
    if (item.value.length === 0) {
      result.setAttribute("disabled", true);
    } else {
      result.removeAttribute("disabled");
    }

    item.addEventListener("input", () => {
      let someInputIsEmpty = false;
      numbInput.forEach((el) => {
        if (el.value.length === 0) {
          someInputIsEmpty = true;
        }
      });
      if (someInputIsEmpty === true) {
        result.setAttribute("disabled", true);
      } else {
        result.removeAttribute("disabled");
      }

      if (numbInput.length > 2 && operation.value === "/") {
        result.setAttribute("disabled", true);
      }
    });
  });
}
disabletResut();
