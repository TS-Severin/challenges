console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const numberA = parseFloat(form.numberA.value);
  const numberB = parseFloat(form.numberB.value);

  if (form.addition.checked) {
    result = add(numberA, numberB);
  }

  if (form.subtraction.checked) {
    result = subtract(numberA, numberB);
  }

  if (form.multiplication.checked) {
    result = multiply(numberA, numberB);
  }

  if (form.division.checked) {
    result = divide(numberA, numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;

  console.log(result);
});
