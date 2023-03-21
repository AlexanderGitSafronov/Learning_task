const firstNumber = document.querySelector('.first__number');
const secondNumber = document.querySelector('.second__number');
const result = document.querySelector('.result')
const operation = document.querySelector('.operation')
const resultOut = document.querySelector('.result__out')

result.addEventListener('click', ()=>{
    switch (operation.value) {
        case '+':
            resultOut.innerHTML = (+firstNumber.value + +secondNumber.value);
        break;
        case '-':
            resultOut.innerHTML = (+firstNumber.value - +secondNumber.value);
        break;
        case '*':
            resultOut.innerHTML = (+firstNumber.value * +secondNumber.value);
        break;
        case '/':
            resultOut.innerHTML = (+firstNumber.value / +secondNumber.value);
        break;
        default:
            break;
    }
})
