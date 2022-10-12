const initialValue = 0;
let currentValue = initialValue;
let calcDescription;
let inputFirstValue;
let inputSecondValue;
function addition() {
  let inputFirstValue = parseInt(userFirstInput.value);
  let inputSecondValue = parseInt(userSecondInput.value);
  let calcDescription = `${inputFirstValue} + ${inputSecondValue}`;
  outputDescription(calcDescription);
}

function subtract() {
  let inputFirstValue = parseInt(userFirstInput.value);
  let inputSecondValue = parseInt(userSecondInput.value);
  currentValue = inputFirstValue - inputSecondValue;
  let calcDescription = `${inputFirstValue} - ${inputSecondValue}`;
  outputDescription(calcDescription);
}

function multiply() {
  let inputFirstValue = parseInt(userFirstInput.value);
  let inputSecondValue = parseInt(userSecondInput.value);
  currentValue = inputFirstValue * inputSecondValue;
  let calcDescription = `${inputFirstValue} * ${inputSecondValue}`;
  outputDescription(calcDescription);
}

function divide() {
  let inputFirstValue = parseInt(userFirstInput.value);
  let inputSecondValue = parseInt(userSecondInput.value);
  currentValue = inputFirstValue / inputSecondValue;
  let calcDescription = `${inputFirstValue} / ${inputSecondValue}`;
  outputDescription(calcDescription);
}
function equal() {
  console.log(currentValue);
  outputResult(currentValue);
}
function clear() {
  let calcDescription = 0;
  currentValue = 0;
  userFirstInput.value = '';
  userSecondInput.value = '';
  outputDescription(calcDescription);
  outputResult(currentValue);
}
addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
clearBtn.addEventListener('click', clear);
equalBtn.addEventListener('click', equal);

//Other way - adding an exsiting function with parameter in eventlistener --nnot working
// function calculation(operator) {
//   inputFirstValue = parseInt(userFirstInput.value);
//   inputSecondValue = parseInt(userSecondInput.value);
//   if (operator == plus) {
//     calcDescription = `${inputFirstValue} + ${inputSecondValue}`;
//     currentValue = inputFirstValue + inputSecondValue;
//     outputDescription(calcDescription);
//   } else if (operator == minus) {
//     calcDescription = `${inputFirstValue} - ${inputSecondValue}`;
//     currentValue = inputFirstValue - inputSecondValue;
//     outputDescription(calcDescription);
//   } else if (operator == multi) {
//     calcDescription = `${inputFirstValue} * ${inputSecondValue}`;
//     currentValue = inputFirstValue * inputSecondValue;
//     outputDescription(calcDescription);
//   } else if (operator == div) {
//     calcDescription = `${inputFirstValue} / ${inputSecondValue}`;
//     currentValue = inputFirstValue / inputSecondValue;
//     outputDescription(calcDescription);
//   }
// }
