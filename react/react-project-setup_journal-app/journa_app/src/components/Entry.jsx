import { useState } from "react";
import { ReactComponent as StarFilled } from "../img/star-filled.svg";
import { ReactComponent as Star } from "../img/star.svg";

export default function Entry({ date, title, notes }) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <>
      <div className="date">{date}</div>
      <div className="titlecnt">
        <h2 className="title">{title}</h2>
        <button
          onClick={() => {
            setIsFavorite(!isFavorite);
            console.log("favorite button clicked");
          }}
          aria-label="favorite"
        >
          {isFavorite ? <StarFilled /> : <Star />}
        </button>
      </div>
      <p className="text">{notes}</p>
    </>
  );
}
