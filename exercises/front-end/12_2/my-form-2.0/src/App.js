import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
    };
    this.changeName = this.changeName.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
  }

  changeName(event) {
    const input = event.target;
    this.setState({
      name: input.value.toUpperCase(),
    });
  }

  handleChangeInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  changeAddress(event) {
    const input = event.target;
    this.setState({
      address: input.value.replace(/[^\w\s]/gi, ''),
    });
  }

  handleCityName = (event) => {
    
  }

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <div>
              Nome:
              <input
                type="text"
                name="name"
                maxLength="40"
                required
                value={this.props.name}
                onChange={this.changeName}
              />
            </div>
            <div>
              Email:
              <input
                type="email"
                name="email"
                maxLength="60"
                required
                value={this.props.email}
                onChange={this.handleChangeInput}
              />
            </div>
            <div>
              CPF:
              <input
                type="text"
                name="cpf"
                maxLength="11"
                required
                value={this.props.cpf}
                onChange={this.handleChangeInput}
              />
            </div>
            <div>
              Endereço:
              <input
                type="text"
                name="address"
                maxLength="200"
                required
                value={this.props.address}
                onChange={this.changeAddress}
              />
            </div>
            <div>
              Cidade:
              <input
                type="text"
                name="city"
                maxLength="28"
                required
                value={this.props.city}
                onChange={this.handleChangeInput}
                onBlur={}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
