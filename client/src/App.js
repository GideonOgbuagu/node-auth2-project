import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import Signup from './components/Signup';
import Signin from './components/Signin';

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
              </ul>
            </header>
  
            <Switch>
              <Route exact path="/users" component={Users}/>
              <Route path="/register" component={Signup}/>
              <Route path="/login" component={Signin}/>
              <Route component={Signin}/>
            </Switch>
          </div>
      </Router>
    );
}

export default App;
