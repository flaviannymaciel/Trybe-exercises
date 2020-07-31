import React from 'react';
import './Cofre.css'

//props - userPassoword -> 12345
class Cofre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      givenPassword: '', //quando voce precisa do estado atual para retornar um novo o react recomenta passar uma callback para o setStage e não um objeto direto como no exercício de forms.
      correctPassword: false
    }
    this.checkPassword = this.checkPassword.bind(this)
  }

  inputDigits = (digit) => {
    this.setState((currentState) => ({
      givenPassword: `${currentState.givenPassword}${digit}`
    }))
  }

  checkPassword = () => {
    if (this.state.givenPassword === this.props.userPassword)
      this.setState({correctPassord: true})
    else {
      alert("Senha errada");
      this.setState({correctPassord: false, givenPassword: ""})
    }
    
  }
  render() {
    console.log('componente recebento props', this.props);
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    if (this.state.correctPassword) return <div>(this.props.children)</div>
    return (
      <div className="safe">
        <div className="keyboard">
          <p className="keyboard-element current-password">{this.state.givenPassword || 'Empty Password'}</p>
          {digits.map((digit) => (
            <button
              type="button"
              className="keyboard-button"
              onClick={() => this.inputDigits(digit)}
              key={digit} // precisa usar por gerar dinamicamente, digit por ser único
            >{digit}
            </button>
          ))}
          <button
            type="button"
            className="keyboard-element"
            onClick={this.checkPassword}            
          >Inserir senha</button>
        </div>
      </div>
    );
  }
}

export default Cofre;
