import CreateButton from "./CreateButton";

export default function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const dataObject = { motto: data.motto, notes: data.notes };
    onAddEntry(dataObject);
    event.target.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>NEW ENTRY</h2>
      <label htmlFor="name">Title</label>
      <input
        label="Motto"
        type="text"
        id="name"
        name="motto"
        required
        minLength="4"
        maxLength="8"
        size="10"
      />
      <label htmlFor="textarea">Notes</label>
      <textarea id="textarea" name="notes" rows="5" cols="33" />
      <CreateButton />
    </form>
  );
}
