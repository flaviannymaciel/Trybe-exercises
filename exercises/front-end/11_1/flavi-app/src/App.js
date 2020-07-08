import React from 'react';
import logo from './logo.svg';
import './App.css';

const compromisso = ['Yoga', 'Clube Turismo', 'Trybe']
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {compromisso.map((e) => task(e))}
      </header>
    </div>
  );
}

export default App;
