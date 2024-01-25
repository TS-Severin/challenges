import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  // state on closesd level to usage
  const [people, setPeople] = useState(0);
  // function for adding people
  const addPeople = () => {
    setPeople(people + 1);
  };
  // function for decreasing people
  function removePeople() {
    setPeople(people - 1);
  }

  // passing functions as props to the child Counter
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>

      <Counter onAddPeople={addPeople} onRemovePeople={removePeople} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
