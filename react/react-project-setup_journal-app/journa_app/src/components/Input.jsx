export default function Input({ label }) {
  return (
    <>
      <label for="name">{label}</label>

      <input
        type="text"
        id="name"
        name="name"
        required
        minlength="4"
        maxlength="8"
        size="10"
      />
    </>
  );
}
