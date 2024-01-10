import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
/*
### Part 1: Filter

- filter all cards which have the category "politics" in their category array
- to do so, use the `includes` method on `card.categories`
- don't forget to remove the return statement because you don't need it.
*/
const filteredNews = news.filter((card) =>
  card.categories.includes("politics")
);

// Part 2 - start here
/*
### Part 2: Sort
Use the sort method to sort all filtered cards by the length of their body text.
*/
const sortedNews = filteredNews.sort((a, b) => a.body.length - b.body.length);

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
