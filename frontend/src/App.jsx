import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./containers/home/Home";
import React from "react";
function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/">
              <UsersList />
            </Route>
            <Route path="/users/delete/:id">
              <UserDelete />
            </Route>
            <Route path="/user/create" exact>
              <UserCreate />
            </Route>
            <Route path="/user/update/:id" exact>
              <UserUpdate />
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
