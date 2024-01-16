import star from "../img/star.svg";

export default function Entry({ date, favIcon }) {
  return (
    <>
      <div className="date">{date}</div>
      <div className="titlecnt">
        <h2 className="title">"That's life in the city"</h2>
        <img className="favicon" src={favIcon} alt="button for favorites" />
      </div>
      <p className="text">
        Si sine causa? quae fuerit causa, mox videro interea hoc tenebo, si
        mihi. Et quidem se repellere, idque instituit docere sic omne animal,
        simul atque.
      </p>
    </>
  );
}
