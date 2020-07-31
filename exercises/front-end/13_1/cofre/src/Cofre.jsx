import React from 'react';
import './Cofre.css'

//props - userPassoword -> 12345
class Cofre extends React.Component {
  render() {
    console.log('componente recebento props', this.props);
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    return (
      <div className="safe">
        <div className="keyboard">
          <p>Empty Passoword</p>
          {digits.map((digit) => (
            <button
              type="button"
              className="keyboard-button"
              key={digit} // precisa usar por gerar dinamicamente, digit por ser único
            >{digit}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Cofre;
