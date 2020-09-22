import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
