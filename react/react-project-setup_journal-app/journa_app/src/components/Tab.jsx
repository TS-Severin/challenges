import Badge from "./Badge";

export default function Tab({
  title,
  number,
  color,
  backgroundcolor,
  badgecolor,
}) {
  return (
    <>
      <span className="tab" style={{ color: color }}>
        {title}{" "}
        <Badge
          backgroundcolor={backgroundcolor}
          badgecolor={badgecolor}
          number={number}
        />
      </span>
    </>
  );
}
