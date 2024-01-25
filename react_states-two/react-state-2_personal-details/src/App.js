import React, { useState } from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  // states are set here because here they are needed
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // function sets the state of name and email in order to change the output below
  // this function is passed to the form component below
  const handleCreateUser = (name, email) => {
    setName(name);
    setEmail(email);
  };

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
