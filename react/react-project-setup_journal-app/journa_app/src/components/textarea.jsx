export default function Textarea({ label }) {
  return (
    <>
      <label for="textarea">{label}</label>

      <textarea id="textarea" name="textarea" rows="5" cols="33"></textarea>
    </>
  );
}
