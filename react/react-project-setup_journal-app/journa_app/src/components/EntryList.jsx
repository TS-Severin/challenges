import Entry from "./Entry";
import Divider from "./Divider.jsx";
import EntryForm from "./EntryForm";

export default function EntryList({ entries }) {
  console.log("entries in EntryList: ", entries);
  return (
    <>
      <ul className="entrylist">
        {entries?.map((entry, index) => (
          <>
            <Entry entry={entry} />
            {index !== EntryForm.length - 1 && <Divider />}
          </>
        ))}
      </ul>
    </>
  );
}
