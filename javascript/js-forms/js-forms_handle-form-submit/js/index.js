console.clear();

const form = document.querySelector('[data-js="form"]');

// Log all form data (in object form) into the console in the submit event handler.

// Make sure the form is reset and the First Name input is focused after submission.

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const age = form.elements.age.value;
  const badness = form.elements.badness.value;

  console.log(data);

  event.target.reset();
  event.target.elements.firstName.focus();

  function calculateAgeBadnessSum() {
    const ageNumeric = parseFloat(age);
    const badnessNumeric = parseFloat(badness);

    return ageNumeric + badnessNumeric;
  }

  const result = calculateAgeBadnessSum();
  console.log("This is the Age-Badness-Sum, whatever it means: ", result);
});
