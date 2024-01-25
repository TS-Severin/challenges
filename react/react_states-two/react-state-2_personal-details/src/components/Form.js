// functin receives function onCreateUser as a prop from Apps.js

export default function Form({ onCreateUser }) {
  function handleSubmit(event) {
    event.preventDefault();
    // function creates the data name and email from the form below
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    // calls the prop-function from App.js and passes the created data name and email as arguments (lifts up)
    onCreateUser(name, email);

    event.target.reset();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
