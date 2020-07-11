import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight : { value, measurementUnit}, image } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <section>
        <p>{name}</p>
        <p>{type}</p>
        <p>Average weight: {value}{measurementUnit}</p>
        </section>
        <img src={image}/>
      </div>
    );
  };
};

export default Pokemon;