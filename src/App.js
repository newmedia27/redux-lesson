import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToDo from "./containers/todo/todo";
import Title from "./components/title/title";
import Header from "./components/header";
import Auth from "./containers/form/Auth";

const Home = React.lazy(() => import("./containers/home"));
const Categories = React.lazy(() =>
  import("./containers/categories/Categories")
);
const Product = React.lazy(() => import("./containers/product/Product"));

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories/:categoryName" component={Categories} />

        <Route exact path="/product/:categoryName/:id">
          <Product />
        </Route>
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
        <Route to="/auth" component={Auth}/>
        <Route path="*" render={() => <div>No match!!!</div>} />
      </Switch>
    </Router>
  );
}

export default App;
