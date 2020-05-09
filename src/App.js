import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Items from "./components/Items";
import NewItem from "./components/NewItem";
import EditItem from "./components/EditItem";
// REDUX
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/items/new" component={NewItem} />
            <Route exact path="/items/edit/:id" component={EditItem} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
