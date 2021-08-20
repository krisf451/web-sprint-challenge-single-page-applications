import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./compenents/Home";
import PizzaForm from "./compenents/PizzaForm";

const App = () => {
  return (
    <div className="container">
      <h1>Lambda Eats</h1>
      <Switch>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;

//test change for codegrade
