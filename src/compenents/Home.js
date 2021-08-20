import React from "react";
import { Link } from "react-router-dom";
import PizzaForm from "./PizzaForm";

export default function Home(props) {
  return (
    <div className="home container">
      <h1>Pizza Ordering App!</h1>
      <img
        id="pizza-img"
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      ></img>
      <p>Click this button to create your own custom pizza!</p>
      <Link to={`/pizza`}>
        <button id="order-pizza">Make Your Own Pizza</button>
      </Link>
    </div>
  );
}
