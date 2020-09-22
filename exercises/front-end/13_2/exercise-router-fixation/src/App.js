import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Users from './Users';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/users"> Users </Link>
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/users/:userId"
          render={() => <Users greetingMessage="Good Moorning" />}
        />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
