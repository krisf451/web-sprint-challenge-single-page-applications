import React from "react";

export default function Pizza({ details }) {
  if (!details) {
    return <h3>Working fetching your pizza details...</h3>;
  }
  return (
    <div className="pizza container">
      <h2>{details.name}'s Pizza</h2>
      <p>Size: {details.size}</p>
      {!!details.toppings && !!details.toppings.length && (
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => (
              <li key={idx}>{like}</li>
            ))}
          </ul>
        </div>
      )}
      <p>Special Instructions: {details.special}</p>
    </div>
  );
}
