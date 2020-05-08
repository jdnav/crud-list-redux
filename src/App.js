import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./components/Items";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Items} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
