import TabBar from "./TabBar";
import EntryList from "./EntryList";

export default function EntriesSection() {
  return (
    <>
      <div className="tabbarcnt">
        <TabBar />
      </div>
      <EntryList />
    </>
  );
}
