import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setForms } from './actions';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      email: null,
      preference: null,
    };
  }

  render() {
    const { username, email } = this.state;
    return (
      <div>
        <label>
          Name: <br />
          <input type="text" value={ username } onChange={(e) => this.setState ({ username: e.target.value})} />
        </label>
        <br />
        <label>
          Email: <br />
          <input
            type="email"
            value={ email }
            onChange={(e) => this.setState ({ email: e.target.value})}
          />
        </label>
        <label>
          <br />
          Biscoito:
          <input
            type="radio"
            name="preferencia"
            value="biscoito"
            onChange={(e) => this.setState ({ preference: e.target.value})}
          />
        </label>
        <label>
          <br />
          Bolacha:
          <input
            type="radio"
            name="preferencia"
            value="bolacha"
            onChange={(e) => this.setState ({ preference: e.target.value})}
          />
        </label>
        <br />
        <button onClick={() => this.props.setForms(this.state)}>Enviar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  form: state 
  // objeto com qq nome
})  

const mapDispatchToProps = (dispatch) => ({
  setForms: (data) => dispatch(setForms(data))
  // nome veio da action
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
