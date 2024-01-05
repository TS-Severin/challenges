const icon = document.querySelector('[data-js="icon"]');
const button3 = document.querySelector('[data-js="sleep-3-button"]');
const button5 = document.querySelector('[data-js="sleep-5-button"]');
const button10 = document.querySelector('[data-js="sleep-10-button"]');
const body = document.body;

// --v-- code here --v--
/*
# Sleep

In this task we want to handle a sleep function, which can delay certain actions.

## Task

We have 3 buttons which should display a sleep emoji for 3, 5 and 10 seconds. After the time has passed, the emoji should be replaced by the alarm clock. But all buttons display the alarm clock immediately.

### Button 1

- Fix the bug of this first button. It has something todo with the sleep function. It returns a Promise...

### Button 2

- Use the sleep function here to display the sleep emoji for 5 seconds.

### Button 3

- This time we use a named function. Add the same functionality as with button 2, but display the emoji for 10 seconds.

### Extra: Dark Mode

Nobody can sleep with this bright display. Each button should also add the class "dark" to the `body` for the respective amount of time - and remove it afterwards.

> 💡 Hint: You don't need to add any css, the dark class is already written.

*/

button3.addEventListener("click", async () => {
  icon.textContent = "💤";
  await sleep(3);
  icon.textContent = "⏰";
});

button5.addEventListener("click", async () => {
  icon.textContent = "💤";
  await sleep(5);
  icon.textContent = "⏰";
});

async function handleSleepFor10Button() {
  icon.textContent = "💤";
  await sleep(10);
  icon.textContent = "⏰";
}

button10.addEventListener("click", handleSleepFor10Button);

// --^-- code here --^--

// returns a Promise that resolves after x seconds
function sleep(seconds) {
  const sleepPromise = new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
  return sleepPromise;
}
