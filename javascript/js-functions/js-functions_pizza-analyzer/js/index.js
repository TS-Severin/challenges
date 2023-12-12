console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value; // I needed Javiers solution again to understand ".value"
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(PizzaSize1, PizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value; // I needed Javiers solution again to understand ".value"
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(PizzaSize1, PizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;
  const gain = ((area2 - area1) / area1) * 100;

  output.textContext = Math.round(gain); // I added this with help of Javiers solution
}

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
