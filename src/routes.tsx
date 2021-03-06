import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Books from "./pages/Books";
import CreateBook from "./pages/CreateBook";
import ShowBookDetails from "./pages/ShowBookDetails";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/create" exact component={CreateBook} />
        <Route path="/book/:id" component={ShowBookDetails} />
      </Switch> 
    </BrowserRouter> 
  );
}

export default Routes;
