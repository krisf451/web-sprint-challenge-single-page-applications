import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import * as yup from "yup";
import schema from "./validation/formSchema";

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
  name: "",
  size: "",
  topping1: false,
  topping2: false,
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
    setPizzas([newPizza, ...pizzas]);
    setFormValues(initialFormValues);
  };

  //submit pizza function
  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      topping1: formValues.topping1.toString(),
      topping2: formValues.topping2.toString(),
      special: formValues.special.trim()
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
