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

  updatePizzaDisplay(pizza1, PizzaSize1);

  updateOutputColor(PizzaSize1, PizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value; // I needed Javiers solution again to understand ".value"
  const pizzaSize2 = pizzaInput2.value;

  calculatePizzaGain(PizzaSize1, PizzaSize2);

  updatePizzaDisplay(pizza2, PizzaSize2);

  updateOutputColor(PizzaSize2, PizzaSize2);
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

function updatePizzaDisplay(pizzaElement, newSize) {
  const result = (newSize / 24) * 100;
  pizzaElement.style.width = `${result}px`; // I needed the solution for this ${result}px-thing
}

// Task 3
// define the function updateOutputColor here

// Let's update the background of the output display to indicate whether we gain or loose pizza if we choose pizza 2.

// 1. Write a function `updateOutputColor` with two parameters: `size1` and `size2`.
// 2. Set the background color of the `outputSection` to "var(--red)", if we loose pizza. Otherwise, the background color should be set to "var(--green)"
// 3. Use this function in both event listeners with the correct sizes as arguments.

//    > 💡 `var(--<variable-name>)` is how you can use predefined variables in CSS. In this case, both color codes are stored in the variables `--red` and `--green` on the `:root` element of the HTML document (have a look into the CSS file!).

function updateOutputColor(size1, size2) {
  if (size1 > size2) {
    const bgColorLoose = var(--red);
    outputSection.style.backgroundColor = bgColorLoose;
  } else {
    const bgColorGain = var(--green);
    outputSection.style.backgroundColor = bgColorGain;
  }
  }