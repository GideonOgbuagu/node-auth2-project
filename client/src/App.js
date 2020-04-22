import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
                  <Link to="/register">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
                <li>
                  <Link to="/signout">Sign Out</Link>
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
