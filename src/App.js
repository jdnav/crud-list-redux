import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./components/Items";
import NewItem from "./components/NewItem";
import EditItem from "./components/EditItem";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/items/new" component={NewItem} />
          <Route exact path="/items/edit/:id" component={EditItem} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
