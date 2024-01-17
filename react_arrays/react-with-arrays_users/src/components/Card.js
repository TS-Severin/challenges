import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles &&
          user.roles.map((role, index) => (
            <Tag
              role={(role, index)}
              key={role.index}
              tag={role}
              adminClass={role === "admin" ? "tag--highlight" : ""}
            />
          ))}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
