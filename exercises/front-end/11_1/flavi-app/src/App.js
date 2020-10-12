import React from 'react';
import './App.css';
import Component from './Component'

const compromisso = ['Yoga', 'Clube Turismo', 'Trybe']
const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Lista de Tarefas:</h1>
      {compromisso.map((e) => task(e)) }
      <footer><Component /></footer>
    </div>
  );
}

export default App;
