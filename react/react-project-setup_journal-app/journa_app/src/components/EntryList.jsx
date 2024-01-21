import Entry from "./Entry";
import Divider from "./Divider.jsx";

export default function EntryList({ entries }) {
  return (
    <>
      <ul className="entrylist">
        {entries?.map((entry, index) => (
          <>
            <Entry entries={entries} />
            {index !== entries.length - 1 && <Divider />}
          </>
        ))}
      </ul>
    </>
  );
}
