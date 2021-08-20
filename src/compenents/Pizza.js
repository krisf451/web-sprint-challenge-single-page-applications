import React from "react";

export default function Pizza({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza details...</h3>;
  }
  return (
    <div className="pizza container">
      <h2>Pizza Name: {details.name}</h2>
      <p>Size: {details.size}</p>
      <p>Special Instructions: {details.special}</p>
      <p>Wants topping1?: {details.topping1}</p>
      <p>Wants topping2?: {details.topping2}</p>
    </div>
  );
}
