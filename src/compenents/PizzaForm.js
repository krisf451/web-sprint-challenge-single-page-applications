import React from "react";
import { Link } from "react-router-dom";

export default function PizzaForm(props) {
  return (
    <div className="form container">
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <h1>This is the pizza form</h1>
    </div>
  );
}
