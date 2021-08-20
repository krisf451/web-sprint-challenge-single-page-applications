import React from "react";
import { Link } from "react-router-dom";

export default function PizzaForm(props) {
  //destructure props
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = e => {
    e.preventDefault();
    submit();
  };
  const onChange = e => {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div className="form-container">
      <Link to={`/`}>
        <button>Home</button>
      </Link>
      <h1>This is the pizza form</h1>
      <form id="pizza-form" onSubmit={onSubmit}>
        <div className="form-group submit">
          <button id="order-button" disabled={disabled}>
            ORDER PIZZA
          </button>
          <div className="errors">
            <div>{errors.name}</div>
            <div>{errors.size}</div>
            <div>{errors.special}</div>
          </div>
        </div>
        <div className="form-group inputs">
          <h4>Pizza Information:</h4>
          <label>
            Name:
            <input
              id="name-input"
              type="text"
              value={values.name}
              onChange={onChange}
              name="name"
            />
          </label>
          {/*DROPDOWN FOR SIZE OPTIONS*/}
          <label>
            Size:
            <select
              id="size-dropdown"
              onChange={onChange}
              value={values.size}
              name="size"
            >
              <option value="">--Select a Size--</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </label>
          {/*CHECKBOXES FOR TOPPINGS */}
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>

          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={values.sausage}
              onChange={onChange}
            />
          </label>

          <label>
            Mushrooms
            <input
              type="checkbox"
              name="mushrooms"
              checked={values.mushrooms}
              onChange={onChange}
            />
          </label>
          <label>
            Olives
            <input
              type="checkbox"
              name="olives"
              checked={values.olives}
              onChange={onChange}
            />
          </label>
          <label>
            Special Instructions:
            <input
              id="special-text"
              type="text"
              value={values.special}
              onChange={onChange}
              name="special"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
