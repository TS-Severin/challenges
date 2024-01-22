import TabBar from "./TabBar";
import EntryList from "./EntryList";

export default function EntriesSection({ entries }) {
  console.log("entries in entrySection: ", entries);
  return (
    <>
      <div className="tabbarcnt">
        <TabBar />
      </div>
      <EntryList entries={entries} />
    </>
  );
}
