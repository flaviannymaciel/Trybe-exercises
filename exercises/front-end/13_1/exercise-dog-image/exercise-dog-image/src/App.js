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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem('URL', this.state.data.message);
    const raca = this.state.data.message.split('/')[4];
    alert(raca);
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
    const { data } = this.state;
    if (data === '') return 'Loading...';
    return (
      <div className="App-header">
        <h1>Doguinhos</h1>
        <div>
          <img src={data.message} alt="dog" />
        </div>
        <div>
          <button onClick={this.fetchDog}>Próximo Doguinho</button>
        </div>
      </div>
    );
  }
}

export default App;
