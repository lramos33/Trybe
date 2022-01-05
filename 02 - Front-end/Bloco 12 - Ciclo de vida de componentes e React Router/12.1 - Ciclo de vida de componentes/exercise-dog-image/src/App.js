import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlImage: '',
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate() {
    localStorage.setItem('dogUrl', this.state.urlImage);
    if (this.state.urlImage.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const dogBreed = this.state.urlImage.split('/')[4];
    alert(dogBreed);
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(response => this.setState({ 
        urlImage: response.message,
        loading: false,
      }));
  }

  render() {
    const { loading } = this.state;

    const dogSection = (
      <div>
        <h1>Doguinho</h1>
        <img src={ this.state.urlImage } alt="Random dog" width='400px'/>
        <button type="button" onClick={ this.fetchDog }>Próximo</button>
      </div>
    );
    
    return (
      <div>
        { loading && <h1>Loading...</h1>}
        { !loading && dogSection }
      </div>
    )
  }
}

export default App;
