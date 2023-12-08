console.clear();

// # Dark Mode Example

// This Codesandbox offers a website with three buttons, but they don't do anything.
// Let's write some code so that the user can decide between lightness and darkness (maybe depending on their current mood).

// ## Task

// Add some interactivity to this website. You can use the following hints as guideline:

// - if the body has the class "dark", the page is displayed in dark mode
// - query all 3 buttons with the 'data-js' attribute
// - add an event listener to each button:
//   - "switch to dark mode" button always adds the class "dark" to the body
//   - "switch to light mode" button always removes the class "dark" from the body
//   - "toggle mode" button toggles the class "dark" on the body

// Switch to the index.js file and find some light where there seems to be only darkness!

const bodyElement = document.querySelector('[data-js="body"]');

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log("Dark mode on");
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("Light mode on");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("Toggle dark/light mode");
});
