import React from "react";

import NavigationView from "./Views/NavigationView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BodyView from "./Views/BodyView";
import AboutView from "./Views/AboutView";


function App() {
  return (
    <Router>
      <div className="container">
        <NavigationView />
        <Switch>
          <Route path="/about" component={AboutView} />
          <Route path="/" component={BodyView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
