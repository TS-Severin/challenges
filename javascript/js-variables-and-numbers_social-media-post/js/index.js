console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "random post";
const text = "the coffee tastes good today";
let numberOfLikes = 0;
const creator = "tillmann";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log(
  "title:",
  title,
  '"',
  text,
  '"',
  "Number of likes: ",
  numberOfLikes,
  "Posted by: ",
  creator,
  "Reported:",
  isReported
);

numberOfLikes++;

console.log("Likes:", numberOfLikes);

// --^-- write your code here --^--
