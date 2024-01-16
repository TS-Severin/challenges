export default function Badge({ number, backgroundcolor, badgecolor }) {
  return (
    <span
      style={{ backgroundColor: backgroundcolor, color: badgecolor }}
      className="badge"
    >
      {number}
    </span>
  );
}
