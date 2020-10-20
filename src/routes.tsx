import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Books from "./pages/Books";
import CreateBook from "./pages/CreateBook";

import Landing from './pages/Landing'
import ShowBookDetails from "./pages/ShowBookDetails";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/books" exact component={Books} />
        <Route path="/books/create" component={CreateBook} />
        <Route path="/books/:id" component={ShowBookDetails} />
      </Switch> 
    </BrowserRouter> 
  );
}

export default Routes;
