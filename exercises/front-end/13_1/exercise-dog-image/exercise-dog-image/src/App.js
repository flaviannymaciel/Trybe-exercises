import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    const dadosAPI = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await dadosAPI.json();
    this.setState({ data: json });
  }

  render() {
    const { data } = this.state
    if (data === "") return "Loading..."
    return (

      <div className="App-header">
        <h1>Doguinhos</h1>
        <div>
          <img src={data.message} alt={this.message} />
        </div>
        <div>
          <button onClick={this.fetchDog}>Próximo Doguinho</button>
        </div>
      </div>
    );
  }
}

export default App;
