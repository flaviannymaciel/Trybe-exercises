import React from 'react';
import data from './data.js';
import './App.css';
import Pokedex from './Pokedex.js';

function App() {
  return (
    <div className='App'>
      <h1 className= 'title'>My Pokedex</h1>
      <Pokedex pokemons={ data } />
    </div>
  );
}

export default App;
