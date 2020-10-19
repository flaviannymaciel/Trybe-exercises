import React from 'react';
import PropTypes from 'prop-types';

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
        <img src={image} alt="pokemon"/>
      </div>
    );
  };
};

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeightValue: PropTypes.number, 
  averageWeightMeasurementUnit: PropTypes.string, 
  image: PropTypes.string
}

export default Pokemon;
