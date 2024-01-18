export default function Input({ label }) {
  return (
    <>
      <label htmlFor="name">{label}</label>

      <input
        type="text"
        id="name"
        name="name"
        required
        minLength="4"
        maxLength="8"
        size="10"
      />
    </>
  );
}
