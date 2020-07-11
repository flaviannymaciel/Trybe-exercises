import React from 'react';
import Pokemon from './Pokemon.js';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='pokemon-list'>
        {pokemons.map(e => <Pokemon key={e.id} pokemon={e}/>)}
      </div>
    );
  };
};

export default Pokedex;