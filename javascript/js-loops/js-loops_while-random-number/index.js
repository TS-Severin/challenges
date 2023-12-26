console.clear();

/* # `while` loop

In contrast to for loops, a `while` loop does not need to know how many times it will run in advance. It will run if a condition is met, and will stop otherwise.

Let's create a couple of random numbers and stop if they grow too big!

## Task

Looking at the `./index.js`, there are two variables:

- `number`: a random number, set in each iteration of the while loop
- `count`: the number of iterations, increased by 1 everytime the while loop runs

Create a `while` loop that

- runs if `number` is less or equal to 0.9,
- increments `count` by 1 in each iteration
- logs `number` to the console
- sets `number` to a random number; you can use `Math.random()` here.

If you're done, test your loop by refreshing the browser several times and watching the console!

Please switch to the `./index.js` file and be random! */

// `while` loop

let number = 0;
let count = 0;

// --v-- write/change code here --v--

while (number <= 0.9) {
  count = count + 1;
  console.log(number);
  number = Math.random();
}

// --^-- write/change code here --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
