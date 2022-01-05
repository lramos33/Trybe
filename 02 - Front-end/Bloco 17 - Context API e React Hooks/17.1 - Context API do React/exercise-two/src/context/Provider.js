import React, { Component } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

class Provider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal(signalColor) {
    this.setState({
      signal: {
        color: signalColor,
      },
    });
  };

  render() {
    const { children } = this.props;

    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }

    return (
      <myContext.Provider value={ contextValue }>
        { children }
      </myContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;