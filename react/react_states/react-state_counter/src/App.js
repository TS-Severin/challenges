import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCounter] = useState(0);
  console.log(count);

  function handleClickMinus() {
    setCounter(count - 1);
  }

  function handleClickPlus() {
    setCounter(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={handleClickMinus}>
          -
        </button>
        <button type="button" onClick={handleClickPlus}>
          +
        </button>
      </div>
    </div>
  );
}
