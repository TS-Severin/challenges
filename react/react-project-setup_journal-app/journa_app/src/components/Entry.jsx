import { useState } from "react";
import { ReactComponent as StarFilled } from "../img/star-filled.svg";
import { ReactComponent as Star } from "../img/star.svg";

export default function Entry({ entries }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <li key={entries.id}>
      <div className="date">{entries.date}</div>
      <div className="titlecnt">
        <h2 className="title">{entries.motto}</h2>
        <button
          className="button"
          onClick={() => {
            setIsFavorite(!isFavorite);
            console.log("favorite button clicked");
          }}
          aria-label="favorite"
        >
          {isFavorite ? <StarFilled /> : <Star />}
        </button>
      </div>
      <p className="text">{entries.notes}</p>
    </li>
  );
}
