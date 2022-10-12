
const userFirstInput = document.getElementById('input-number-1');
const userSecondInput = document.getElementById('input-number-2');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const clearBtn = document.getElementById('btn-clear');
const equalBtn = document.getElementById('btn-equal');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputDescription(text) {
  currentCalculationOutput.textContent = text;
}
function outputResult(result) {
  currentResultOutput.textContent = result;
}