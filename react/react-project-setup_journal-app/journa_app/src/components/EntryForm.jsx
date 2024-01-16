import Input from "./Input";
import Textarea from "./Textarea";
import CreateButton from "./CreateButton";

export default function EntryForm() {
  return (
    <form className="form">
      <h2>NEW ENTRY</h2>
      <Input label="Motto" />
      <Textarea label="Notes" />
      <CreateButton />
    </form>
  );
}
