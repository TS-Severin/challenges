console.clear();

const url = "https://swapi.dev/api/people/";

// async function

async function fetchData() {
  // try-catch-block

  try {
    // get url

    const response = await fetch(url);

    // transform object to json-file

    const data = await response.json();

    // console.log results

    // console.log(data.results);

    console.log(data.results[2].eye_color);

    // catch error and console.log
  } catch (error) {
    console.log("error!!!!!");
  } finally {
    // finally keep on working
    console.log("works anyway");
  }
}

fetchData();

/* ## Task

Have a look at the `./js/index.js` file: There is an `url` variable and an empty `fetchData()` function.

Inside of the `fetchData()` function, use the `url` variable to fetch data from the Star Wars API.

Log the fetched data to the console and play around with it:

- log the entire data object
- log different values of the data object
- Bonus: Can you log the eye color of R2-D2?

The following hints may guide you:

- use a `try...catch` block
- make sure to wait for all asynchronous operations
- make sure to handle bad responses from the API as well
- you can test bad responses via adding a random string of characters to the end of the URL stored in the url variable */
