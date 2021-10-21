import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Student from "./components/Student";

import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Redirect from "./components/Redirect";
import history from "./history";

const NewRoute = () => {
  return (
    <div>
      <p>New Route</p>
    </div>
  );
};
class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />

            <Route
              path="/student/:studentname/:studentno?"
              component={Student}
            />
            <Route path="/redirect" component={Redirect} />
            
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
