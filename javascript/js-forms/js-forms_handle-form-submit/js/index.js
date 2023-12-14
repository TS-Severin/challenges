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

  // ## Bonus: Calculate and log the age-badness-sum 🤷‍♀️

  // The formula is: `age + badness`

  // Log to the console _(replace the values between the quotes)_:

  // > The age-badness-sum of "firstName" is "age-badness-sum"

  console.log(formElements.firstName.value);
  console.log(formElements.badness.value);
  console.log(formElements.age.value);

  function calculateAgeBadnessSum() {
    const age = formElements.age.value;
    const badness = formElements.badness.value;

    const ageNumeric = parseFloat(age); // I was stuck here: chat gpt helped me with parseFloat
    const badnessNumeric = parseFloat(badness); // parseFloat makes the function handle the data as numbers, otherwise it woud be 4 number like: 3556 (age+badness)

    return ageNumeric + badnessNumeric;
  }

  const result = calculateAgeBadnessSum();
  console.log(result);
});
