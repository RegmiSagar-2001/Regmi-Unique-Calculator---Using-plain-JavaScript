const initialValue = 0;
let currentValue = initialValue;
let calcDescription;
let inputFirstValue;
let inputSecondValue;

function calculation(operator) {
  inputFirstValue = parseInt(userFirstInput.value);
  inputSecondValue = parseInt(userSecondInput.value);
  if (operator == 'plus') {
    calcDescription = `${inputFirstValue} + ${inputSecondValue}`;
    currentValue = inputFirstValue + inputSecondValue;
    outputResult(currentValue, calcDescription);
  } else if (operator == 'minus') {
    calcDescription = `${inputFirstValue} - ${inputSecondValue}`;
    currentValue = inputFirstValue - inputSecondValue;
    outputResult(currentValue, calcDescription);
  } else if (operator == 'multi') {
    calcDescription = `${inputFirstValue} * ${inputSecondValue}`;
    currentValue = inputFirstValue * inputSecondValue;
    outputResult(currentValue, calcDescription);
  } else if (operator == 'div') {
    calcDescription = `${inputFirstValue} / ${inputSecondValue}`;
    currentValue = inputFirstValue / inputSecondValue;
    outputResult(currentValue, calcDescription);
  }
}
let op;
function addition() {
  op = 'plus';
}
function subtract() {
  op = 'minus';
}
function multiply() {
  op = 'multi';
}
function divide() {
  op = 'div';
}
function clear() {
  let calcDescription = 0;
  currentValue = 0;
  userFirstInput.value = '';
  userSecondInput.value = '';
  outputResult(currentValue, calcDescription);
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
equalBtn.addEventListener('click', () => calculation(op));
clearBtn.addEventListener('click', clear);
