import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">h2</h2>
      <label htmlFor="inputfield">inputfield</label>
      <input name="inputfield" id="inputfield" />
      <a className="article__link" href="https://en.wikipedia.org/wiki/Article">
        Link to Wikipedia article article
      </a>
    </article>
  );
}
