console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  let sum = operand1 + operand2;
  console.log("Sum is: ", sum);
});

subtractButton.addEventListener("click", () => {
  let sub = operand1 - operand2;
  console.log("Sub is: ", sub);
});

multiplyButton.addEventListener("click", () => {
  let mult = operand1 * operand2;
  console.log("Mult is: ", mult);
});

divideButton.addEventListener("click", () => {
  let div = operand1 / operand2;
  console.log("Div is: ", div);
});

exponentButton.addEventListener("click", () => {
  let exp = operand1 ** operand2;
  console.log("Exp is: ", exp);
});

moduloButton.addEventListener("click", () => {
  let remainder = operand1 % operand2;
  console.log("Remainder is: ", remainder);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/

// let operand1 = 2;

const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  let increaseOneByOne = operand1++;
  console.log("Increase operand1 by one: ", increaseOneByOne);
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  let increaseOneByFive = (operand1 += 5);
  console.log("Increase operand1 by five: ", increaseOneByFive);
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  let decreaseOneByOne = (operand1 -= 1);
  console.log("Decrease operand1 by one: ", decreaseOneByOne);
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  let decreaseOneByFive = (operand1 -= 5);
  console.log("Decrease operand1 by five: ", decreaseOneByFive);
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  let multiplyOneByTwo = (operand1 *= 2);
  console.log("Multiply operand1 one by two: ", multiplyOneByTwo);
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  let divideOneByTwo = (operand1 /= 2);
  console.log("Divide operand1 one by five: ", divideOneByTwo);
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
