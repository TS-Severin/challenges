const recipes = [
  {
    title: "Crepes",
    duration: 60,
    ingredients: ["butter", "flour", "eggs", "milk", "salt"],
    servings: 3,
  },
  {
    title: "Scrambled Eggs",
    duration: 20,
    ingredients: ["eggs", "milk", "salt"],
    servings: 2,
  },
  {
    title: "Vegan Salmon",
    duration: 60 * 24 * 3, // 3 days
    ingredients: [
      "carrots",
      "olive oil",
      "nori sheets",
      "liquid smoke",
      "soy sauce",
    ],
    servings: 10,
  },
  {
    title: "Carrot Cake",
    duration: 120,
    ingredients: ["carrots", "flour", "eggs", "salt", "milk", "sugar"],
    servings: 10,
  },
];

const onlyTitles = recipes.map((recipe) => {
  return recipe.title;
}); // ['Crepes', ...]

const titlesWithDuration = recipes.map((recipe) => {
  const title = recipe.title;
  const duration = recipe.duration;
  return `${title} takes ${duration} min`;
});

console.log(titlesWithDuration);

// ['Crepes (60min)', ...]

const timePerServing = recipes.map((recipe) => {
  const time = recipe.duration;
  const servings = recipe.servings;
  return time / servings;
}); // [20, 10, 432, 12]

console.log(timePerServing);

// EXTRA:

// HINT: use first map() and then Array.prototype.join() with "method chaining" like so:
// myArray.map(...).join(', ');

const allTitlesInOneString = null; // 'Crepes, Scrambled Eggs, ...'

// For more information how to join an array,
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join#joining_an_array_four_different_ways

/*
 2: `filter` exercises
*/

const recipesThatOnlyTake60minutesOrLess = recipes.filter((recipe) => {
  const duration = recipe.duration;
  return duration <= 60;
});

const allRecipesWithMoreThan2Servings = recipes.filter((recipe) => {
  const servings = recipe.servings;
  return servings > 2;
});

const allRecipesWithTitlesLongerThan12Characters = recipes.filter((recipe) => {
  const shortTitles = recipe.title.length;
  return shortTitles <= 12;
});

console.log(allRecipesWithTitlesLongerThan12Characters);

export {
  onlyTitles,
  titlesWithDuration,
  timePerServing,
  allTitlesInOneString,
  recipesThatOnlyTake60minutesOrLess,
  allRecipesWithMoreThan2Servings,
  allRecipesWithTitlesLongerThan12Characters,
};
