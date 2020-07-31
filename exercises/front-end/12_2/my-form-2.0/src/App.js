import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.setState (
      name = '',
      email = '',
      cpf = '',
      address = '',
    )
  }

  changeName(event) {
    const input = event.target
    this.props.name = input.value
  }


  render() {
    return (
      <div>
        <form>
          <fieldset>
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
                onChange={this.handlechangeInput}
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
                onChange={this.address}
              />
            </div>
          </fieldset>
        </form>
      </div>
    );    
  }
}

export default App;
