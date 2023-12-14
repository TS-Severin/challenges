console.clear();

const form = document.querySelector('[data-js="form"]');

// Log all form data (in object form) into the console in the submit event handler.

// Make sure the form is reset and the First Name input is focused after submission.

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  console.log(formElements);
  event.target.reset();
  event.target.elements.firstName.focus();
});
