import "./Tag.css";

export default function Tag({ tag, adminClass }) {
  return <li className={`tag ${adminClass}`}>{tag}</li>;
}
