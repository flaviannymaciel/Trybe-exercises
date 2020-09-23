import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/users"> Users </Link>
        <Link to="/strict-access"> Strict Access </Link>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/users/:userId"
            render={(props) => (
              <Users {...props} greetingMessage="Good Moorning" />
            )}
          />
          <Route
            path="/strict-access"
            render={(props) => (
              <StrictAccess
                {...props}
                user={{ username: 'jo', password: '1234' }}
              />
            )}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
