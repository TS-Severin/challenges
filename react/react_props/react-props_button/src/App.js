import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("you clicked me");
  }
  return (
    <Button
      onClick={handleClick}
      color={"red"}
      text={"text"}
      disabled={false}
    />
  );
}

function Button({ color, text, disabled, onClick }) {
  return (
    <button style={{ color: color }} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

// old solutions:

// import React from "react";
// import "./styles.css";

// export default function App({ onClick }) {
//   function handleClick() {
//     console.log("you clicked me");
//   }
//   return (
//     <Button
//       color={"red"}
//       text={"text"}
//       disabled={false}
//       onClick={handleClick}
//     />
//   );
// }

// function Button({ color, text, disabled, onClick }) {
//   return (
//     <button style={{ color: color }} disabled={disabled} onClick={onClick}>
//       {text}
//     </button>
//   );
// }

// import React from "react";
// import "./styles.css";

// export default function App() {
//   return <Button color={"red"} text={"text"} disabled={false} />;
// }

// function Button({ color, text, disabled }) {
//   function handleClick() {
//     console.log("you clicked me");
//   }
//   return (
//     <button style={{ color: color }} disabled={disabled} onClick={handleClick}>
//       {text}
//     </button>
//   );
// }
