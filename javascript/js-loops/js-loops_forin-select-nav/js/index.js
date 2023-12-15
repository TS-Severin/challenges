console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

/* 
# For...in Loop and Select Navigation

We can use loops for creating HTML elements. In this Codesandbox, the website needs a select input with language options and a navigation bar. Let's do this with the help of `for...in`!

## Task

### Part 1: Creating a Select Input

Looking at the `./js/index.js` , there is a `languages` object with some key-value pairs. Additionally, a `select` element with the name "languages" is created and appended to the main element.

Iterate through the `languages` object using `for...in` and add the `option` elements for this dropdown menu.

The following hints may guide you:

- Create one `option` element for each entry in `languages`.
- For each option, set its `value` and `textContent` to the value of each entry in `languages`. You will need bracket notation, e.g. `languages[myIteratorName]`.
- Don't forget to append each option!
*/

for (const language in languages) {
  // const selectNew = document.createElement("select");
  // selectNew.textContent = `${language}`;
  // select.append(selectNew);
  const option = document.createElement("option");
  option.name = "language";
  select.append(option);
  option.textContent = `${language}`;
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

// --^-- write/change code here --^--
