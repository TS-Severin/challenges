import Entry from "./Entry";
import star from "../img/star.svg";
import filledStar from "../img/star-filled.svg";

export default function EntryList() {
  return (
    <>
      <ul className="entrylist">
        <li>
          <Entry date="FEB 27, 2028" favIcon={filledStar} />
        </li>
        <li>
          <Entry date="FEB 26, 2028" favIcon={star} />
        </li>
        <li>
          <Entry date="FEB 25, 2028" favIcon={star} />
        </li>
      </ul>
    </>
  );
}
