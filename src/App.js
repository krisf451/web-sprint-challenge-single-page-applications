import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import * as yup from "yup";
import schema from "./validation/formSchema";
import axios from "axios";

import Home from "./compenents/Home";
import PizzaForm from "./compenents/PizzaForm";
import Pizza from "./compenents/Pizza";

//create initial values for state
const initialFormValues = {
  //   {
  //     name: string,
  //     size: string,
  //     topping1: bool,
  //     topping2: bool,
  //     special: string,
  // }
  //text inputs
  name: "",
  //dropdown for size
  size: "",
  //checkboxes for toppings
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  olives: false,
  //special instructions
  special: ""
};
const initialFormErrors = {
  name: "",
  size: "",
  special: ""
};

const initialPizzas = [];
const initialDisabled = true;

const App = () => {
  //set up state
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  //set up helper functions

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  //change function for form values
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  // update state when a new pizza is created
  const postNewPizza = newPizza => {
    axios
      .post(`https://reqres.in/api/orders`, newPizza)
      .then(res => {
        console.log(res.data);
        setPizzas([newPizza, ...pizzas]);
      })
      .catch(err => console.error(err));

    setFormValues(initialFormValues);
  };

  //submit pizza function
  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      special: formValues.special.trim(),
      toppings: ["pepperoni", "sausage", "mushrooms", "olives"].filter(
        topping => !!formValues[topping]
      )
    };
    postNewPizza(newPizza);
  };

  //side effects
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="container">
      <Switch>
        <Route path="/pizza">
          <PizzaForm
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {pizzas.map((pizza, index) => {
        return <Pizza key={index} details={pizza} />;
      })}
    </div>
  );
};
export default App;

//test change for codegrade
