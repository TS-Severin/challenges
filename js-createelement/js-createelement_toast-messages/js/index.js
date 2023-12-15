console.clear();

/*
## Task

In the bottom right corner you can find a toast messages container with one entry.

When clicking the "Add toast message" button a new entry should be appended to the toast messages container. Create the HTML element for a new toast message with `document.createElement()`. Have a look at the `index.html` to see the required HTML tag and class name.

When clicking the "Clear all toast messages" button, the list of toast messages should be emptied. Afterwards you should still be able to add new toast messages and clear them again.
*/

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  const newToast = document.createElement("li");
  newToast.classList.add("toast-container__message");
  newToast.textContent = "This is a new toast message";

  toastContainer.append(newToast);
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  // Exercise: Clear the stack of toast messages

  toastContainer.innerHTML = "";
});
