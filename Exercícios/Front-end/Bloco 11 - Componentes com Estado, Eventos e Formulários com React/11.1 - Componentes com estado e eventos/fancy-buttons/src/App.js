import React from 'react'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      clickOne: 0,
      clickTwo: 0,
      clickThree: 0,
    };

    this.clickButtonOne = this.clickButtonOne.bind(this)
    this.clickButtonTwo = this.clickButtonTwo.bind(this)
    this.clickButtonThree = this.clickButtonThree.bind(this)
  }

  clickButtonOne() {
    this.setState((previousState, _props) => ({
      clickOne: previousState.clickOne + 1,
    }));
  }
  
  clickButtonTwo() {
    this.setState((previousState, _props) => ({
      clickTwo: previousState.clickTwo + 1,
    }));
  }
  
  clickButtonThree() {
    this.setState((previousState, _props) => ({
      clickThree: previousState.clickThree + 1,
    }));
  }

  getButtonColor(numberClicks) {
    if (numberClicks % 2 === 0) {
      return 'green'
    }
    return 'white'
  }

  render() {
    const { clickOne, clickTwo, clickThree } = this.state;
    return (
      <div>
        <button onClick={ this.clickButtonOne } style={{ backgroundColor: this.getButtonColor(clickOne) }}>
          Button 01 - Count: { clickOne } </button>
        <button onClick={ this.clickButtonTwo } style={{ backgroundColor: this.getButtonColor(clickTwo) }}>
          Button 02 - Count: { clickTwo } </button>
        <button onClick={ this.clickButtonThree } style={{ backgroundColor: this.getButtonColor(clickThree) }}>
          Button 03 - Count: { clickThree } </button>
      </div>
    )
  }
}

export default App;
