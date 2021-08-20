import React from "react";
import { Link } from "react-router-dom";
import PizzaForm from "./PizzaForm";

export default function Home(props) {
  return (
    <div className="home container">
      <h1>Pizza Ordering App!</h1>
      <p>Click this button to create your own custom pizza!</p>
      <Link to={`/pizza`}>
        <button id="order-pizza">Make Your Own Pizza</button>
      </Link>
    </div>
  );
}
