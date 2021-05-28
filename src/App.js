import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToDo from "./containers/todo/todo";
import Title from "./components/title/title";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/todo"
          render={() => (
            <Fragment>
              <Title title="ToDo App" />
              <ToDo />
            </Fragment>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
