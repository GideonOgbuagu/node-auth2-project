import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Users from './components/Users';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Signout from './components/Signout';
import PrivateRoute from './components/PrivateRoute'

function App() {
    return (
      <Router>
          <div className="App">
            <header className="App-header">
              <ul>
                <li>
                  <NavLink to="/register">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Sign In</NavLink>
                </li>
                <li>
                  <NavLink to="/users">Users</NavLink>
                </li>
                <li>
                  <NavLink to="/signout">Sign Out</NavLink>
                </li>
              </ul>
            </header>
  
            <Switch>
              <PrivateRoute exact path="/users" component={Users}/>
              <Route path="/register" component={Signup}/>
              <Route path="/login" component={Signin}/>
              <Route path="/signout" component={Signout}/>
              <Route component={Signin}/>
            </Switch>
          </div>
      </Router>
    );
}

export default App;
